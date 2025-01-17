import { ChartOptions, DataFrame } from '@opendatasoft/visualizations';
import { Meta } from '@storybook/react';
import { Props } from '../../../src';
import { defaultSource } from '../../utils';
import { Sample } from '../Chart.stories';
import { storyWithArgs } from '../../utils';

const meta: Meta = {
    title: 'Chart/StudioLayouts/AreaChart',
};

export default meta;

const df = [
    { x: 0, y: 2400, z: 1021 },
    { x: 1, y: -140, z: 2424 },
    { x: 2, y: 2000, z: 3222 },
    { x: 3, y: 3, z: 1255 },
    { x: 4, y: 180.47, z: 1424 },
    { x: 5, y: 778, z: 12 },
];

export const AreaTitleAxisGridDots = storyWithArgs<Props<DataFrame, ChartOptions>>(Sample, {
    data: {
        loading: false,
        value: df,
    },
    options: {
        labelColumn: 'x',
        source: defaultSource,
        ariaLabel: 'Area chart with title, axis, grid and dots',
        series: [
            {
                type: 'line',
                valueColumn: 'y',
                tension: 0.3,
                borderColor: 'rgb(22, 161, 145)',
                fill: {
                    mode: 'origin',
                    above: 'rgb(22, 161, 145, 0.26)',
                    below: 'rgb(22, 161, 145, 0.26)',
                },
            },
            {
                type: 'line',
                valueColumn: 'z',
                tension: 0.3,
                borderColor: 'rgb(119, 73, 54)',
                fill: {
                    mode: 'origin',
                    above: 'rgb(119, 73, 54, 0.26)',
                    below: 'rgb(119, 73, 54, 0.26)',
                },
            },
        ],
        xAxis: {
            display: true,
            type: 'linear',
            title: {
                display: true,
                text: 'x',
                align: 'center',
            },
            gridLines: {
                display: false,
            },
        },
        yAxis: {
            display: true,
            title: {
                display: true,
                text: 'hello',
            },
            gridLines: {
                display: true,
            },
        },
        title: {
            text: 'Area chart with title, axis, grid and dots',
        },
    },
});

export const AreaAxisGridDots = storyWithArgs<Props<DataFrame, ChartOptions>>(Sample, {
    data: {
        loading: false,
        value: df,
    },
    options: {
        labelColumn: 'x',
        source: defaultSource,
        ariaLabel: 'Area chart with axis, grid and dots',
        series: [
            {
                type: 'line',
                valueColumn: 'y',
                tension: 0.3,
                borderColor: 'rgb(22, 161, 145)',
                fill: {
                    mode: 'origin',
                    above: 'rgb(22, 161, 145, 0.26)',
                    below: 'rgb(22, 161, 145, 0.26)',
                },
            },
        ],
        xAxis: {
            display: true,
            type: 'linear',
            title: {
                display: true,
                text: 'x',
                align: 'center',
            },
            gridLines: {
                display: false,
            },
        },
        yAxis: {
            display: true,
            title: {
                display: true,
                text: 'y',
                align: 'center',
            },
            gridLines: {
                display: true,
            },
        },
    },
});

export const AreaTitleAxisGrid = storyWithArgs<Props<DataFrame, ChartOptions>>(Sample, {
    data: {
        loading: false,
        value: df,
    },
    options: {
        labelColumn: 'x',
        source: defaultSource,
        ariaLabel: 'Area chart with title, axis and grid',
        series: [
            {
                type: 'line',
                valueColumn: 'y',
                tension: 0.3,
                pointRadius: 0,
                borderColor: 'rgb(22, 161, 145)',
                fill: {
                    mode: 'origin',
                    above: 'rgb(22, 161, 145, 0.26)',
                    below: 'rgb(22, 161, 145, 0.26)',
                },
            },
        ],
        xAxis: {
            display: true,
            type: 'linear',
            title: {
                display: true,
                text: 'x',
                align: 'center',
            },
            gridLines: {
                display: false,
            },
        },
        yAxis: {
            display: true,
            title: {
                display: true,
                text: 'y',
                align: 'center',
            },
            gridLines: {
                display: true,
            },
        },
        title: {
            text: 'Area chart with title, axis and grid',
        },
    },
});

export const AreaTitleSubtitleGrid = storyWithArgs<Props<DataFrame, ChartOptions>>(Sample, {
    data: {
        loading: false,
        value: df,
    },
    options: {
        labelColumn: 'x',
        source: defaultSource,
        ariaLabel: 'Area chart with title, subtitle and grid',
        series: [
            {
                type: 'line',
                valueColumn: 'y',
                tension: 0.3,
                pointRadius: 0,
                borderColor: 'rgb(22, 161, 145)',
                fill: {
                    mode: 'origin',
                    above: 'rgb(22, 161, 145, 0.26)',
                    below: 'rgb(22, 161, 145, 0.26)',
                },
            },
        ],
        xAxis: {
            display: true,
            type: 'linear',
            title: {
                display: false,
                text: 'x',
                align: 'center',
            },
            gridLines: {
                display: false,
            },
        },
        yAxis: {
            display: true,
            title: {
                display: false,
                text: 'y',
                align: 'center',
            },
            gridLines: {
                display: true,
            },
        },
        title: {
            text: 'Area chart with title, subtitle and grid',
        },
        subtitle: {
            text: 'Custom Chart Subtitle',
        },
    },
});

export const AreaTitleDataValues = storyWithArgs<Props<DataFrame, ChartOptions>>(Sample, {
    data: {
        loading: false,
        value: df,
    },
    options: {
        labelColumn: 'x',
        source: defaultSource,
        ariaLabel: 'Area chart with title and data values on axis',
        series: [
            {
                type: 'line',
                valueColumn: 'y',
                tension: 0.3,
                borderColor: 'rgb(22, 161, 145)',
                pointRadius: 0,
                dataLabels: {
                    display: true,
                    align: function (index) {
                        if (df[index].y >= 0) {
                            return 'end';
                        } else {
                            return 'start';
                        }
                    },
                    anchor: function (index) {
                        if (df[index].y >= 0) {
                            return 'end';
                        } else {
                            return 'start';
                        }
                    },
                    color: 'rgb(22, 161, 145)',
                },
                fill: {
                    mode: 'origin',
                    above: 'rgb(22, 161, 145, 0.26)',
                    below: 'rgb(22, 161, 145, 0.26)',
                },
            },
        ],
        xAxis: {
            display: true,
            type: 'linear',
            title: {
                display: true,
                text: 'x',
                align: 'center',
            },
            gridLines: {
                display: false,
            },
        },
        yAxis: {
            display: true,
            gridLines: {
                display: 'single',
            },
            ticks: {
                display: 'single',
            },
        },
        title: {
            text: 'Area chart with title and data values on axis',
        },
    },
});

export const AreaDataValuesOnly = storyWithArgs<Props<DataFrame, ChartOptions>>(Sample, {
    data: {
        loading: false,
        value: df,
    },
    options: {
        labelColumn: 'x',
        source: defaultSource,
        ariaLabel: 'Area chart with data values on axis',
        series: [
            {
                type: 'line',
                valueColumn: 'y',
                tension: 0.3,
                borderColor: 'rgb(22, 161, 145)',
                fill: {
                    mode: 'origin',
                    above: 'rgb(22, 161, 145, 0.26)',
                    below: 'rgb(22, 161, 145, 0.26)',
                },
                pointRadius: 0,
                dataLabels: {
                    display: true,
                    align: function (index) {
                        if (df[index].y >= 0) {
                            return 'end';
                        } else {
                            return 'start';
                        }
                    },
                    anchor: function (index) {
                        if (df[index].y >= 0) {
                            return 'end';
                        } else {
                            return 'start';
                        }
                    },
                    color: 'rgb(22, 161, 145)',
                },
            },
        ],
        xAxis: {
            display: true,
            type: 'linear',
            title: {
                display: true,
                text: 'x',
                align: 'center',
            },
            gridLines: {
                display: false,
            },
        },
        yAxis: {
            display: true,
            gridLines: {
                display: 'single',
            },
            ticks: {
                display: 'single',
            },
        },
    },
});
