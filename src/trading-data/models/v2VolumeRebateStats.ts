/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Volume discount statistics for a given epoch for all parties.
 */
export type v2VolumeRebateStats = {
    /**
     * Rebate factor applied given the party's running volume fracation.
     */
    additionalMakerRebate?: string;
    /**
     * Epoch at which the statistics apply.
     */
    atEpoch?: string;
    /**
     * The party's total maker fees received over the relevant window.
     */
    makerFeesReceived?: string;
    /**
     * The party's volume fraction.
     */
    makerVolumeFraction?: string;
    /**
     * Party ID for which the statistics apply.
     */
    partyId?: string;
};

