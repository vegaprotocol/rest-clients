/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaDiscountFactors } from './vegaDiscountFactors';

/**
 * Volume discount stats for a given party.
 */
export type v1PartyVolumeDiscountStats = {
    /**
     * deprecated.
     */
    discountFactor?: string;
    /**
     * Discount factors applied to fees.
     */
    discountFactors?: vegaDiscountFactors;
    /**
     * Party ID.
     */
    partyId?: string;
    /**
     * The party's running volume.
     */
    runningVolume?: string;
};

