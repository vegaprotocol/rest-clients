/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type vegaFee = {
    /**
     * Fee amount paid for maintaining the Vega infrastructure. This field is an unsigned integer scaled using the asset's decimal places.
     */
    infrastructureFee?: string;
    /**
     * Discount on infrastructure fee for eligible referrer.
     */
    infrastructureFeeReferrerDiscount?: string;
    /**
     * Discount on infrastructure fee based on the taker volume.
     */
    infrastructureFeeVolumeDiscount?: string;
    /**
     * Fee amount paid to market makers. This field is an unsigned integer scaled to the asset's decimal places.
     */
    liquidityFee?: string;
    /**
     * Discount on liquidity fee for eligible referrer.
     */
    liquidityFeeReferrerDiscount?: string;
    /**
     * Discount on liquidity fee basedo on taker volume.
     */
    liquidityFeeVolumeDiscount?: string;
    /**
     * Fee amount paid to the non-aggressive party of the trade. This field is an unsigned integer scaled to the asset's decimal places.
     */
    makerFee?: string;
    /**
     * Referrer discounts.
     * Discount on maker fee for eligible referrer.
     */
    makerFeeReferrerDiscount?: string;
    /**
     * Volume discounts.
     * Discount on maker fee based on the taker volume.
     */
    makerFeeVolumeDiscount?: string;
};

