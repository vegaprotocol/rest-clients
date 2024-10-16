/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Describes which properties of the data source data are to be
 * used for automated purchase.
 */
export type vegaDataSourceSpecToAutomatedPurchaseBinding = {
    /**
     * Name of the property in the source data that should be used to determine the automated purchase schedule.
     */
    auctionScheduleProperty?: string;
    /**
     * Name of the property in the source data that should be used to determine the schedule of the automated purchase auction.
     */
    auctionVolumeSnapshotScheduleProperty?: string;
};

