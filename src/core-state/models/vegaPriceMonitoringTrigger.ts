/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type vegaPriceMonitoringTrigger = {
    /**
     * Price monitoring auction extension duration in seconds should the price
     * breach its theoretical level over the specified horizon at the specified
     * probability level.
     */
    auctionExtension?: string;
    /**
     * Price monitoring projection horizon τ in seconds.
     */
    horizon?: string;
    /**
     * Price monitoring probability level p.
     */
    probability?: string;
};

