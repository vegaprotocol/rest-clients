/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaDispatchStrategy } from './vegaDispatchStrategy';

export type vegacommandsv1RecurringTransfer = {
    /**
     * Optional parameter defining how a transfer is dispatched.
     */
    dispatchStrategy?: vegaDispatchStrategy;
    /**
     * Last epoch at which this transfer shall be paid.
     */
    endEpoch?: string;
    /**
     * Factor needs to be > 0.
     */
    factor?: string;
    /**
     * First epoch from which this transfer shall be paid.
     */
    startEpoch?: string;
};

