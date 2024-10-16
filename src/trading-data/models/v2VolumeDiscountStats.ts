/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaDiscountFactors } from './vegaDiscountFactors';

/**
 * Volume discount statistics for a given epoch for all parties.
 */
export type v2VolumeDiscountStats = {
    /**
     * Epoch at which the statistics apply.
     */
    atEpoch?: string;
    discountFactor?: string;
    /**
     * Discount factor applied given the party's running volume.
     */
    discountFactors?: vegaDiscountFactors;
    /**
     * Party ID for which the statistics apply.
     */
    partyId?: string;
    /**
     * The party's running volume.
     */
    runningVolume?: string;
};

