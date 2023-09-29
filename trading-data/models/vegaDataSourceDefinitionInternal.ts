/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaDataSourceSpecConfigurationTime } from './vegaDataSourceSpecConfigurationTime';
import type { vegaDataSourceSpecConfigurationTimeTrigger } from './vegaDataSourceSpecConfigurationTimeTrigger';

/**
 * Top level object used for all internal data sources.
 * It contains one of any of the defined source type variants.
 */
export type vegaDataSourceDefinitionInternal = {
    time?: vegaDataSourceSpecConfigurationTime;
    timeTrigger?: vegaDataSourceSpecConfigurationTimeTrigger;
};

