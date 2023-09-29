/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * - TYPE_UNSPECIFIED: Default value, always invalid
 * - TYPE_DEFAULT: Normal trading between two parties
 * - TYPE_NETWORK_CLOSE_OUT_GOOD: Trading initiated by the network with another party on the book,
 * which helps to zero-out the positions of one or more distressed parties
 * - TYPE_NETWORK_CLOSE_OUT_BAD: Trading initiated by the network with another party off the book,
 * with a distressed party in order to zero-out the position of the party
 */
export enum vegaTradeType {
    TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED',
    TYPE_DEFAULT = 'TYPE_DEFAULT',
    TYPE_NETWORK_CLOSE_OUT_GOOD = 'TYPE_NETWORK_CLOSE_OUT_GOOD',
    TYPE_NETWORK_CLOSE_OUT_BAD = 'TYPE_NETWORK_CLOSE_OUT_BAD',
}
