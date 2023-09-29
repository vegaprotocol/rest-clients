/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type vegaIcebergOrder = {
    /**
     * If the visible size of the order falls below this value, it will be replenished back to the peak size using the reserved amount.
     */
    minimumVisibleSize?: string;
    /**
     * Size of the order that will be made visible if the iceberg order is replenished after trading.
     */
    peakSize?: string;
    /**
     * Size of the order that is reserved and used to restore the iceberg's peak when it is refreshed.
     */
    reservedRemaining?: string;
};

