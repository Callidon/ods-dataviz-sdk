import type { ComponentParameters } from '../types';

export enum ColorConfigurationTypes {
    /** Cycle through a list of colors, defined in the `colors` property */
    RoundRobin = 'roundrobin',
}

interface ColorConfiguration {
    type: string,
    colors: string[],
}

export interface BarChartParameters extends ComponentParameters {
    /** Field name to use as the X axis */
    xAxis: string;
    /** Field name to use as the Y axis */
    yAxis: string;
    /** Configuration of colors used for the bars */
    colorConfiguration: ColorConfiguration;
}