export interface ChartOptions {
    /** Specify label column in DataFrame */
    labelColumn: string;
    /** Series to display */
    series: ChartSeries[];
    /** Chart aspect ratio */
    aspectRatio?: number;
    /** Maintain aspect ratio when the canvas is resized */
    maintainAspectRatio?: boolean;
    /** Chart padding */
    padding?: number;
    /** Configure xAxis */
    xAxis?: CartesianAxisConfiguration;
    /** Configure default yAxis */
    yAxis?: CartesianAxisConfiguration;
    /** Configure default radial axis */
    rAxis?: RadialAxisConfiguration;
    /** Configure legend */
    legend?: LegendConfiguration;
    /** Configure title */
    title?: TitleConfiguration;
    /** Configure subtitle */
    subtitle?: TitleConfiguration;
    /* Configure tooltips */
    tooltips?: TooltipsConfiguration;
    /** Accessibility */
    ariaLabel: string;
}

export interface CartesianAxisConfiguration {
    type?: 'linear' | 'logarithmic' | 'category';
    display?: boolean;
    offset?: boolean;
    title?: AxisTitleConfiguration;
    gridLines?: GridLinesConfiguration;
    ticks?: TicksConfiguration;
}

export interface AxisTitleConfiguration {
    display?: boolean;
    align?: 'start' | 'center' | 'end';
    text?: string;
}

export interface RadialAxisConfiguration {
    beginAtZero?: boolean;
    ticks?: TicksConfiguration;
}

export interface GridLinesConfiguration {
    display?: boolean;
    drawBorder?: boolean;
    borderColor?: string;
    offset?: boolean;
    color?: (context:number) => string | string[];
}

export interface LegendConfiguration {
    display?: boolean;
    position?: 'top' | 'left' | 'bottom' | 'right';
    align?: 'start' | 'center' | 'end';
}

export interface FontConfiguration {
    size?: number;
}

export interface FontConfiguration {
    size?: number;
    padding?: {
        top : number;
        bottom : number;
    }
}

export interface PaddingConfiguration {
    top? : number;
    bottom? : number;
}

export interface TicksConfiguration {
    display?: boolean;
}

export interface TitleConfiguration {
    display?: boolean;
    position?: 'top' | 'left' | 'bottom' | 'right';
    align?: 'start' | 'center' | 'end';
    text?: string | string[];
    fullSize?: boolean;
    font? : FontConfiguration;
    padding? : PaddingConfiguration;
}

export interface TooltipsConfiguration {
    display?: boolean;
}

export interface DataLabelsConfiguration {
    display?: boolean | 'auto';
    align?: ((index:number, context:{ dataFrame:DataFrame }) => string);
    anchor?: ((index:number, context:{ dataFrame:DataFrame }) => string);
    backgroundColor?: Color;
    color?: Color;
    borderRadius?: number;
    offset?: number;
    formatter?: (index:number, context:{ dataFrame:DataFrame }) => string | string[];
    padding?: number;
}

export type ChartSeries = Line | Bar | Pie | Radar;

export interface Line {
    type: 'line';
    valueColumn: string;
    label?: string;
    backgroundColor?: Color;
    borderColor?: Color;
    fill?: FillConfiguration;
    dataLabels?: DataLabelsConfiguration;
    tension?: number;
    pointRadius?: number;
}

export interface Bar {
    type: 'bar';
    valueColumn: string;
    label?: string;
    backgroundColor?: Color;
    indexAxis?: 'x' | 'y';
    categoryPercentage?: number;
    barPercentage?: number;
    dataLabels?: DataLabelsConfiguration;
}

export interface Pie {
    type: 'pie';
    valueColumn: string;
    label?: string;
    backgroundColor?: Color;
    dataLabels?: DataLabelsConfiguration;
    indexAxis?: 'x' | 'y';
}

export interface Radar {
    type: 'radar';
    valueColumn: string;
    label?: string;
    backgroundColor?: Color;
    borderColor?: Color;
    dataLabels?: DataLabelsConfiguration;
}

export type FillMode = false | number | string | { value: number };

export interface FillConfiguration {
    mode?: FillMode;
    above?: Color;
    below?: Color;
}

export type Color = string | string[];

export type DataFrame = Record<string, any>[];

export interface MarkdownTextOptions {
    align?: 'left' | 'right' | 'center';
}