/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1Condition } from './v1Condition';
import type { v1InternalTimeTrigger } from './v1InternalTimeTrigger';

/**
 * Internal data source used for emitting timestamps automatically using predefined intervals and conditions.
 */
export type vegaDataSourceSpecConfigurationTimeTrigger = {
    /**
     * Conditions that the timestamps need to meet in order to be considered.
     */
    conditions?: Array<v1Condition>;
    triggers?: Array<v1InternalTimeTrigger>;
};

