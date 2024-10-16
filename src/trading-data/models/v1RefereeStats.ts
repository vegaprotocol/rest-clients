/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaDiscountFactors } from './vegaDiscountFactors';

export type v1RefereeStats = {
    /**
     * deprecated.
     */
    discountFactor?: string;
    /**
     * Discount factors applied to the party.
     */
    discountFactors?: vegaDiscountFactors;
    epochNotionalTakerVolume?: string;
    /**
     * Unique ID of the party.
     */
    partyId?: string;
};

