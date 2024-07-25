/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1CancelAMMMethod } from './v1CancelAMMMethod';

/**
 * Command to cancel an automated market maker for a given market.
 */
export type v1CancelAMM = {
    /**
     * Market ID to cancel an AMM for.
     */
    marketId?: string;
    /**
     * Method to use to cancel the AMM.
     */
    method?: v1CancelAMMMethod;
};

