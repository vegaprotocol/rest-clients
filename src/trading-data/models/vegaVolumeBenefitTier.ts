/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaDiscountFactors } from './vegaDiscountFactors';

export type vegaVolumeBenefitTier = {
    /**
     * Required running notional taker volume in quantum units for parties
     * to access this tier.
     */
    minimumRunningNotionalTakerVolume?: string;
    /**
     * The tier number. It's set by the core, and used in the party fee stats API.
     */
    tierNumber?: string;
    volumeDiscountFactor?: string;
    /**
     * Proportion of the taker fees to be discounted.
     */
    volumeDiscountFactors?: vegaDiscountFactors;
};

