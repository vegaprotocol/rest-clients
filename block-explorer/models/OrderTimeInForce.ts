/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * - TIME_IN_FORCE_UNSPECIFIED: Default value for TimeInForce, can be valid for an amend
 * - TIME_IN_FORCE_GTC: Good until cancelled, the order trades any amount and as much as possible
 * and remains on the book until it either trades completely or is cancelled
 * - TIME_IN_FORCE_GTT: Good until specified time, this order type trades any amount and as much as possible
 * and remains on the book until it either trades completely, is cancelled, or expires at a set time
 * NOTE: this may in future be multiple types or have sub types for orders that provide different ways of specifying expiry
 * - TIME_IN_FORCE_IOC: Immediate or cancel, the order trades any amount and as much as possible
 * but does not remain on the book (whether it trades or not)
 * - TIME_IN_FORCE_FOK: Fill or kill, the order either trades completely i.e. remainingSize == 0 after adding,
 * or not at all, and does not remain on the book if it doesn't trade
 * - TIME_IN_FORCE_GFA: Good for auction, this order is only accepted during an auction period
 * - TIME_IN_FORCE_GFN: Good for normal, this order is only accepted during normal trading (that can be continuous trading or frequent batched auctions)
 */
export enum OrderTimeInForce {
    TIME_IN_FORCE_UNSPECIFIED = 'TIME_IN_FORCE_UNSPECIFIED',
    TIME_IN_FORCE_GTC = 'TIME_IN_FORCE_GTC',
    TIME_IN_FORCE_GTT = 'TIME_IN_FORCE_GTT',
    TIME_IN_FORCE_IOC = 'TIME_IN_FORCE_IOC',
    TIME_IN_FORCE_FOK = 'TIME_IN_FORCE_FOK',
    TIME_IN_FORCE_GFA = 'TIME_IN_FORCE_GFA',
    TIME_IN_FORCE_GFN = 'TIME_IN_FORCE_GFN',
}
