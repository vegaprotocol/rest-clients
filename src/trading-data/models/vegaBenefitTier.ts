/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

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
    /**
     * Proportion of the referee's taker fees to be discounted.
     */
    referralDiscountFactor?: string;
    /**
     * Proportion of the referee's taker fees to be rewarded to the referrer.
     */
    referralRewardFactor?: string;
};

