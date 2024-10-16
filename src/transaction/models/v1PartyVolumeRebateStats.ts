/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Volume rebate stats for a given party.
 */
export type v1PartyVolumeRebateStats = {
    /**
     * Rebate factor applied to fees.
     */
    additionalRebate?: string;
    /**
     * The party's maker fee received over the window across all markets and assets, expressed in quantum.
     */
    makerFeesReceived?: string;
    /**
     * The party's maker volume fraction.
     */
    makerVolumeFraction?: string;
    /**
     * Party ID.
     */
    partyId?: string;
};

