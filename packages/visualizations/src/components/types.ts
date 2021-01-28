export interface ChartOptions {
    /** Specify label column in DataFrame */
    labelColumn: string;
    /** Series to display */
    series: ChartSeries[];
    /** Chart aspect ratio */
    aspectRatio?: number;
    /** Configure xAxis */
    xAxis?: CartesianAxisConfiguration;
    /** Configure default yAxis */
    yAxis?: CartesianAxisConfiguration;
}

interface CartesianAxisConfiguration {
    type?: 'linear' | 'logarithmic' | 'category';
    display?: boolean;
    label?: AxisLabelConfiguration;
}

interface AxisLabelConfiguration {
    display?: boolean;
    align?: 'start' | 'center' | 'end';
    value?: string;
}

export type ChartSeries = Line | Bar;

export interface Line {
    type: 'line';
    valueColumn: string;
    label?: string;
    backgroundColor?: ColorConfiguration;
}

export interface Bar {
    type: 'bar';
    valueColumn: string;
    label?: string;
    backgroundColor?: ColorConfiguration;
}

export type ColorConfigurationTypes = 'roundrobin';

export interface ColorConfiguration {
    type: ColorConfigurationTypes;
    colors: string[];
}

export type DataFrame = Record<string, any>[];
