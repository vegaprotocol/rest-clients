/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaDispatchStrategy } from './vegaDispatchStrategy';

export type vegaRecurringTransfer = {
    /**
     * Optional parameter defining how a transfer is dispatched.
     */
    dispatchStrategy?: vegaDispatchStrategy;
    /**
     * Last epoch at which this transfer shall be paid.
     */
    endEpoch?: string;
    /**
     * Factor that the initial transfer amount is multiplied by for each epoch that it is executed.
     * For example if the initial transfer amount is 1000 and the factor is 0.5, then the amounts transferred per epoch will be 1000, 500, 250, 125, etc.
     */
    factor?: string;
    startEpoch?: string;
};

