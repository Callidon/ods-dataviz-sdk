import type { ChartDataset } from 'chart.js';
import type { Options as DataLabelsOptions } from 'chartjs-plugin-datalabels/types/options';
import type { ChartSeries, DataFrame, DataLabelsConfiguration, FillConfiguration } from '../types';
import { compactStringOrNumber } from '../../utils';
import { defaultValue, singleChartJsColor, multipleChartJsColors } from './utils';

function chartJsFill(fill: FillConfiguration | undefined) {
    if (fill === undefined) return false;
    return {
        target: fill.mode,
        above: singleChartJsColor(fill.above),
        below: singleChartJsColor(fill.below),
    };
}

function chartJsDataLabels(
    dataFrame: DataFrame,
    dataLabels: DataLabelsConfiguration | undefined
): DataLabelsOptions {
    if (dataLabels === undefined) return { display: false };
    const { formatter, align, anchor } = dataLabels;

    return {
        align: align ? (context) => align(context.dataIndex, { dataFrame }) : 'end',
        anchor: anchor ? (context) => anchor(context.dataIndex, { dataFrame }) : 'end',
        display: defaultValue(dataLabels.display, false),
        color: defaultValue(dataLabels.color, 'rgb(0,0,0)'),
        backgroundColor: defaultValue(dataLabels.backgroundColor, 'rgb(255,255,255)'),
        offset: defaultValue(dataLabels.offset, 4),
        borderRadius: defaultValue(dataLabels.borderRadius, 3),
        formatter: formatter
            ? (_, context) => formatter(context.dataIndex, { dataFrame })
            : (value) => compactStringOrNumber(value),
        padding: defaultValue(dataLabels.padding, 4),
    };
}

export default function toDataset(df: DataFrame, s: ChartSeries): ChartDataset {
    if (s.type === 'bar') {
        return {
            type: 'bar',
            data: df.map((entry) => entry[s.valueColumn]),
            backgroundColor: multipleChartJsColors(s.backgroundColor),
            borderColor: multipleChartJsColors(s.borderColor),
            borderWidth: defaultValue(s.borderWidth, 1),
            borderRadius: defaultValue(s.borderRadius, 5),
            label: defaultValue(s.label, ''),
            indexAxis: defaultValue(s.indexAxis, 'x'),
            barPercentage: defaultValue(s.barPercentage, 0.9),
            categoryPercentage: defaultValue(s.categoryPercentage, 0.8),
            datalabels: chartJsDataLabels(df, s.dataLabels),
        };
    }

    if (s.type === 'line') {
        return {
            type: 'line',
            data: df.map((entry) => entry[s.valueColumn]),
            backgroundColor: singleChartJsColor(s.backgroundColor),
            borderColor: singleChartJsColor(s.borderColor),
            label: defaultValue(s.label, ''),
            fill: chartJsFill(s.fill),
            datalabels: chartJsDataLabels(df, s.dataLabels),
            tension: defaultValue(s.tension, 0),
            pointRadius: defaultValue(s.pointRadius, 3),
            pointBackgroundColor: defaultValue(s.pointBackgroundColor, 'rgb(255,255,255)'),
            borderDash: defaultValue(s.borderDash, []),
            borderWidth: defaultValue(s.borderWidth, 2),
            spanGaps: defaultValue(s.spanGaps, true),
        };
    }

    if (s.type === 'pie') {
        return {
            type: 'pie',
            label: defaultValue(s.label, ''),
            data: df.map((entry) => entry[s.valueColumn]),
            backgroundColor: multipleChartJsColors(s.backgroundColor),
            datalabels: chartJsDataLabels(df, s.dataLabels),
        };
    }

    if (s.type === 'radar') {
        return {
            type: 'radar',
            data: df.map((entry) => entry[s.valueColumn]),
            backgroundColor: singleChartJsColor(s.backgroundColor),
            borderColor: singleChartJsColor(s.borderColor),
            label: defaultValue(s.label, ''),
            datalabels: chartJsDataLabels(df, s.dataLabels),
            pointRadius: defaultValue(s.pointRadius, 3),
            pointBackgroundColor: defaultValue(s.pointBackgroundColor, 'rgb(255,255,255)'),
            borderWidth: defaultValue(s.borderWidth, 2),
        };
    }

    throw new Error('Unknown chart type');
}