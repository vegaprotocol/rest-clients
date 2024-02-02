/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * - ORDER_ERROR_UNSPECIFIED: Default value, no error reported
 * - ORDER_ERROR_INVALID_MARKET_ID: Order was submitted for a market that does not exist
 * - ORDER_ERROR_INVALID_ORDER_ID: Order was submitted with an invalid ID
 * - ORDER_ERROR_OUT_OF_SEQUENCE: Order was amended with a sequence number that was not previous version + 1
 * - ORDER_ERROR_INVALID_REMAINING_SIZE: Order was amended with an invalid remaining size (e.g. remaining greater than total size)
 * - ORDER_ERROR_TIME_FAILURE: Node was unable to get Vega (blockchain) time
 * - ORDER_ERROR_REMOVAL_FAILURE: Failed to remove an order from the book
 * - ORDER_ERROR_INVALID_EXPIRATION_DATETIME: Order with `TimeInForce.TIME_IN_FORCE_GTT` was submitted or amended
 * with an expiration that was badly formatted or otherwise invalid
 * - ORDER_ERROR_INVALID_ORDER_REFERENCE: Order was submitted or amended with an invalid reference field
 * - ORDER_ERROR_EDIT_NOT_ALLOWED: Order amend was submitted for an order field that cannot not be amended (e.g. order ID)
 * - ORDER_ERROR_AMEND_FAILURE: Amend failure because amend details do not match original order
 * - ORDER_ERROR_NOT_FOUND: Order not found in an order book or store
 * - ORDER_ERROR_INVALID_PARTY_ID: Order was submitted with an invalid or missing party ID
 * - ORDER_ERROR_MARKET_CLOSED: Order was submitted for a market that has closed
 * - ORDER_ERROR_MARGIN_CHECK_FAILED: Order was submitted, but the party did not have enough collateral to cover the order
 * - ORDER_ERROR_MISSING_GENERAL_ACCOUNT: Order was submitted, but the party did not have an account for this asset
 * - ORDER_ERROR_INTERNAL_ERROR: Unspecified internal error
 * - ORDER_ERROR_INVALID_SIZE: Order was submitted with an invalid or missing size (e.g. 0)
 * - ORDER_ERROR_INVALID_PERSISTENCE: Order was submitted with an invalid persistence for its type
 * - ORDER_ERROR_INVALID_TYPE: Order was submitted with an invalid type field
 * - ORDER_ERROR_SELF_TRADING: Order was stopped as it would have traded with another order submitted from the same party
 * - ORDER_ERROR_INSUFFICIENT_FUNDS_TO_PAY_FEES: Order was submitted, but the party did not have enough collateral to cover the fees for the order
 * - ORDER_ERROR_INCORRECT_MARKET_TYPE: Order was submitted with an incorrect or invalid market type
 * - ORDER_ERROR_INVALID_TIME_IN_FORCE: Order was submitted with invalid time in force
 * - ORDER_ERROR_CANNOT_SEND_GFN_ORDER_DURING_AN_AUCTION: Good For Normal order has reached the market when it is in auction mode
 * - ORDER_ERROR_CANNOT_SEND_GFA_ORDER_DURING_CONTINUOUS_TRADING: Good For Auction order has reached the market when it is in continuous trading mode
 * - ORDER_ERROR_CANNOT_AMEND_TO_GTT_WITHOUT_EXPIRYAT: Attempt to amend order to GTT without ExpiryAt
 * - ORDER_ERROR_EXPIRYAT_BEFORE_CREATEDAT: Attempt to amend ExpiryAt to a value before CreatedAt
 * - ORDER_ERROR_CANNOT_HAVE_GTC_AND_EXPIRYAT: Attempt to amend to GTC without an ExpiryAt value
 * - ORDER_ERROR_CANNOT_AMEND_TO_FOK_OR_IOC: Amending to FOK or IOC is invalid
 * - ORDER_ERROR_CANNOT_AMEND_TO_GFA_OR_GFN: Amending to GFA or GFN is invalid
 * - ORDER_ERROR_CANNOT_AMEND_FROM_GFA_OR_GFN: Amending from GFA or GFN is invalid
 * - ORDER_ERROR_CANNOT_SEND_IOC_ORDER_DURING_AUCTION: IOC orders are not allowed during auction
 * - ORDER_ERROR_CANNOT_SEND_FOK_ORDER_DURING_AUCTION: FOK orders are not allowed during auction
 * - ORDER_ERROR_MUST_BE_LIMIT_ORDER: Pegged orders must be LIMIT orders
 * - ORDER_ERROR_MUST_BE_GTT_OR_GTC: Pegged orders can only have TIF GTC or GTT
 * - ORDER_ERROR_WITHOUT_REFERENCE_PRICE: Pegged order must have a reference price
 * - ORDER_ERROR_BUY_CANNOT_REFERENCE_BEST_ASK_PRICE: Buy pegged order cannot reference best ask price
 * - ORDER_ERROR_OFFSET_MUST_BE_GREATER_OR_EQUAL_TO_ZERO: Pegged order offset must be >= 0
 * - ORDER_ERROR_SELL_CANNOT_REFERENCE_BEST_BID_PRICE: Sell pegged order cannot reference best bid price
 * - ORDER_ERROR_OFFSET_MUST_BE_GREATER_THAN_ZERO: Pegged order offset must be > zero
 * - ORDER_ERROR_INSUFFICIENT_ASSET_BALANCE: Party has an insufficient balance, or does not have
 * a general account to submit the order (no deposits made
 * for the required asset)
 * - ORDER_ERROR_CANNOT_AMEND_PEGGED_ORDER_DETAILS_ON_NON_PEGGED_ORDER: Cannot amend details of a non pegged details
 * - ORDER_ERROR_UNABLE_TO_REPRICE_PEGGED_ORDER: Could not re-price a pegged order because a market price is unavailable
 * - ORDER_ERROR_UNABLE_TO_AMEND_PRICE_ON_PEGGED_ORDER: It is not possible to amend the price of an existing pegged order
 * - ORDER_ERROR_NON_PERSISTENT_ORDER_OUT_OF_PRICE_BOUNDS: FOK, IOC, or GFN order was rejected because it resulted in trades outside the price bounds
 * - ORDER_ERROR_TOO_MANY_PEGGED_ORDERS: Unable to submit pegged order, temporarily too many pegged orders across all markets
 * - ORDER_ERROR_POST_ONLY_ORDER_WOULD_TRADE: Post order would trade
 * - ORDER_ERROR_REDUCE_ONLY_ORDER_WOULD_NOT_REDUCE_POSITION: Post order would trade
 * - ORDER_ERROR_ISOLATED_MARGIN_CHECK_FAILED: Isolated margin check failed
 * - ORDER_ERROR_PEGGED_ORDERS_NOT_ALLOWED_IN_ISOLATED_MARGIN_MODE: In isolated margin pegged orders are rejected
 */
export enum vegaOrderError {
    ORDER_ERROR_UNSPECIFIED = 'ORDER_ERROR_UNSPECIFIED',
    ORDER_ERROR_INVALID_MARKET_ID = 'ORDER_ERROR_INVALID_MARKET_ID',
    ORDER_ERROR_INVALID_ORDER_ID = 'ORDER_ERROR_INVALID_ORDER_ID',
    ORDER_ERROR_OUT_OF_SEQUENCE = 'ORDER_ERROR_OUT_OF_SEQUENCE',
    ORDER_ERROR_INVALID_REMAINING_SIZE = 'ORDER_ERROR_INVALID_REMAINING_SIZE',
    ORDER_ERROR_TIME_FAILURE = 'ORDER_ERROR_TIME_FAILURE',
    ORDER_ERROR_REMOVAL_FAILURE = 'ORDER_ERROR_REMOVAL_FAILURE',
    ORDER_ERROR_INVALID_EXPIRATION_DATETIME = 'ORDER_ERROR_INVALID_EXPIRATION_DATETIME',
    ORDER_ERROR_INVALID_ORDER_REFERENCE = 'ORDER_ERROR_INVALID_ORDER_REFERENCE',
    ORDER_ERROR_EDIT_NOT_ALLOWED = 'ORDER_ERROR_EDIT_NOT_ALLOWED',
    ORDER_ERROR_AMEND_FAILURE = 'ORDER_ERROR_AMEND_FAILURE',
    ORDER_ERROR_NOT_FOUND = 'ORDER_ERROR_NOT_FOUND',
    ORDER_ERROR_INVALID_PARTY_ID = 'ORDER_ERROR_INVALID_PARTY_ID',
    ORDER_ERROR_MARKET_CLOSED = 'ORDER_ERROR_MARKET_CLOSED',
    ORDER_ERROR_MARGIN_CHECK_FAILED = 'ORDER_ERROR_MARGIN_CHECK_FAILED',
    ORDER_ERROR_MISSING_GENERAL_ACCOUNT = 'ORDER_ERROR_MISSING_GENERAL_ACCOUNT',
    ORDER_ERROR_INTERNAL_ERROR = 'ORDER_ERROR_INTERNAL_ERROR',
    ORDER_ERROR_INVALID_SIZE = 'ORDER_ERROR_INVALID_SIZE',
    ORDER_ERROR_INVALID_PERSISTENCE = 'ORDER_ERROR_INVALID_PERSISTENCE',
    ORDER_ERROR_INVALID_TYPE = 'ORDER_ERROR_INVALID_TYPE',
    ORDER_ERROR_SELF_TRADING = 'ORDER_ERROR_SELF_TRADING',
    ORDER_ERROR_INSUFFICIENT_FUNDS_TO_PAY_FEES = 'ORDER_ERROR_INSUFFICIENT_FUNDS_TO_PAY_FEES',
    ORDER_ERROR_INCORRECT_MARKET_TYPE = 'ORDER_ERROR_INCORRECT_MARKET_TYPE',
    ORDER_ERROR_INVALID_TIME_IN_FORCE = 'ORDER_ERROR_INVALID_TIME_IN_FORCE',
    ORDER_ERROR_CANNOT_SEND_GFN_ORDER_DURING_AN_AUCTION = 'ORDER_ERROR_CANNOT_SEND_GFN_ORDER_DURING_AN_AUCTION',
    ORDER_ERROR_CANNOT_SEND_GFA_ORDER_DURING_CONTINUOUS_TRADING = 'ORDER_ERROR_CANNOT_SEND_GFA_ORDER_DURING_CONTINUOUS_TRADING',
    ORDER_ERROR_CANNOT_AMEND_TO_GTT_WITHOUT_EXPIRYAT = 'ORDER_ERROR_CANNOT_AMEND_TO_GTT_WITHOUT_EXPIRYAT',
    ORDER_ERROR_EXPIRYAT_BEFORE_CREATEDAT = 'ORDER_ERROR_EXPIRYAT_BEFORE_CREATEDAT',
    ORDER_ERROR_CANNOT_HAVE_GTC_AND_EXPIRYAT = 'ORDER_ERROR_CANNOT_HAVE_GTC_AND_EXPIRYAT',
    ORDER_ERROR_CANNOT_AMEND_TO_FOK_OR_IOC = 'ORDER_ERROR_CANNOT_AMEND_TO_FOK_OR_IOC',
    ORDER_ERROR_CANNOT_AMEND_TO_GFA_OR_GFN = 'ORDER_ERROR_CANNOT_AMEND_TO_GFA_OR_GFN',
    ORDER_ERROR_CANNOT_AMEND_FROM_GFA_OR_GFN = 'ORDER_ERROR_CANNOT_AMEND_FROM_GFA_OR_GFN',
    ORDER_ERROR_CANNOT_SEND_IOC_ORDER_DURING_AUCTION = 'ORDER_ERROR_CANNOT_SEND_IOC_ORDER_DURING_AUCTION',
    ORDER_ERROR_CANNOT_SEND_FOK_ORDER_DURING_AUCTION = 'ORDER_ERROR_CANNOT_SEND_FOK_ORDER_DURING_AUCTION',
    ORDER_ERROR_MUST_BE_LIMIT_ORDER = 'ORDER_ERROR_MUST_BE_LIMIT_ORDER',
    ORDER_ERROR_MUST_BE_GTT_OR_GTC = 'ORDER_ERROR_MUST_BE_GTT_OR_GTC',
    ORDER_ERROR_WITHOUT_REFERENCE_PRICE = 'ORDER_ERROR_WITHOUT_REFERENCE_PRICE',
    ORDER_ERROR_BUY_CANNOT_REFERENCE_BEST_ASK_PRICE = 'ORDER_ERROR_BUY_CANNOT_REFERENCE_BEST_ASK_PRICE',
    ORDER_ERROR_OFFSET_MUST_BE_GREATER_OR_EQUAL_TO_ZERO = 'ORDER_ERROR_OFFSET_MUST_BE_GREATER_OR_EQUAL_TO_ZERO',
    ORDER_ERROR_SELL_CANNOT_REFERENCE_BEST_BID_PRICE = 'ORDER_ERROR_SELL_CANNOT_REFERENCE_BEST_BID_PRICE',
    ORDER_ERROR_OFFSET_MUST_BE_GREATER_THAN_ZERO = 'ORDER_ERROR_OFFSET_MUST_BE_GREATER_THAN_ZERO',
    ORDER_ERROR_INSUFFICIENT_ASSET_BALANCE = 'ORDER_ERROR_INSUFFICIENT_ASSET_BALANCE',
    ORDER_ERROR_CANNOT_AMEND_PEGGED_ORDER_DETAILS_ON_NON_PEGGED_ORDER = 'ORDER_ERROR_CANNOT_AMEND_PEGGED_ORDER_DETAILS_ON_NON_PEGGED_ORDER',
    ORDER_ERROR_UNABLE_TO_REPRICE_PEGGED_ORDER = 'ORDER_ERROR_UNABLE_TO_REPRICE_PEGGED_ORDER',
    ORDER_ERROR_UNABLE_TO_AMEND_PRICE_ON_PEGGED_ORDER = 'ORDER_ERROR_UNABLE_TO_AMEND_PRICE_ON_PEGGED_ORDER',
    ORDER_ERROR_NON_PERSISTENT_ORDER_OUT_OF_PRICE_BOUNDS = 'ORDER_ERROR_NON_PERSISTENT_ORDER_OUT_OF_PRICE_BOUNDS',
    ORDER_ERROR_TOO_MANY_PEGGED_ORDERS = 'ORDER_ERROR_TOO_MANY_PEGGED_ORDERS',
    ORDER_ERROR_POST_ONLY_ORDER_WOULD_TRADE = 'ORDER_ERROR_POST_ONLY_ORDER_WOULD_TRADE',
    ORDER_ERROR_REDUCE_ONLY_ORDER_WOULD_NOT_REDUCE_POSITION = 'ORDER_ERROR_REDUCE_ONLY_ORDER_WOULD_NOT_REDUCE_POSITION',
    ORDER_ERROR_ISOLATED_MARGIN_CHECK_FAILED = 'ORDER_ERROR_ISOLATED_MARGIN_CHECK_FAILED',
    ORDER_ERROR_PEGGED_ORDERS_NOT_ALLOWED_IN_ISOLATED_MARGIN_MODE = 'ORDER_ERROR_PEGGED_ORDERS_NOT_ALLOWED_IN_ISOLATED_MARGIN_MODE',
}
