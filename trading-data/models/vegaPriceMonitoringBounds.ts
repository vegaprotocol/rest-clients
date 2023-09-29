/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaPriceMonitoringTrigger } from './vegaPriceMonitoringTrigger';

export type vegaPriceMonitoringBounds = {
    /**
     * Maximum price that isn't currently breaching the specified price monitoring trigger.
     * This field is an unsigned integer scaled to the market's decimal places.
     */
    maxValidPrice?: string;
    /**
     * Minimum price that isn't currently breaching the specified price monitoring trigger.
     * This field is an unsigned integer scaled to the market's decimal places.
     */
    minValidPrice?: string;
    /**
     * Reference price used to calculate the valid price range. This field is an unsigned integer scaled to the market's decimal places.
     */
    referencePrice?: string;
    /**
     * Price monitoring trigger associated with the bounds.
     */
    trigger?: vegaPriceMonitoringTrigger;
};

