/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaDiscountFactors } from './vegaDiscountFactors';
import type { vegaRewardFactors } from './vegaRewardFactors';

export type vegaBenefitTier = {
    /**
     * Required number of epochs a party must have been in a referral set to
     * access this tier.
     */
    minimumEpochs?: string;
    /**
     * Required running notional taker volume in quantum units for parties
     * to access this tier.
     */
    minimumRunningNotionalTakerVolume?: string;
    referralDiscountFactor?: string;
    /**
     * Referral discount factors for the various fees.
     */
    referralDiscountFactors?: vegaDiscountFactors;
    referralRewardFactor?: string;
    /**
     * Proportion of the referee's fees to be rewarded to the referrer.
     */
    referralRewardFactors?: vegaRewardFactors;
    /**
     * The tier number. It's set by the core, and used in the party fee stats API.
     */
    tierNumber?: string;
};

