/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 *  - COMPOSITE_PRICE_TYPE_WEIGHTED: Composite price is calculated as a weighted average of the underlying mark prices.
 * - COMPOSITE_PRICE_TYPE_MEDIAN: Composite price is calculated as a median of the underlying mark prices.
 * - COMPOSITE_PRICE_TYPE_LAST_TRADE: Composite price is calculated as the last trade price.
 */
export enum vegaCompositePriceType {
    COMPOSITE_PRICE_TYPE_UNSPECIFIED = 'COMPOSITE_PRICE_TYPE_UNSPECIFIED',
    COMPOSITE_PRICE_TYPE_WEIGHTED = 'COMPOSITE_PRICE_TYPE_WEIGHTED',
    COMPOSITE_PRICE_TYPE_MEDIAN = 'COMPOSITE_PRICE_TYPE_MEDIAN',
    COMPOSITE_PRICE_TYPE_LAST_TRADE = 'COMPOSITE_PRICE_TYPE_LAST_TRADE',
}
