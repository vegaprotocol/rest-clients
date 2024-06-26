/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * - PROPOSAL_ERROR_UNSPECIFIED: Default value
 * - PROPOSAL_ERROR_CLOSE_TIME_TOO_SOON: Specified close time is too early based on network parameters
 * - PROPOSAL_ERROR_CLOSE_TIME_TOO_LATE: Specified close time is too late based on network parameters
 * - PROPOSAL_ERROR_ENACT_TIME_TOO_SOON: Specified enactment time is too early based on network parameters
 * - PROPOSAL_ERROR_ENACT_TIME_TOO_LATE: Specified enactment time is too late based on network parameters
 * - PROPOSAL_ERROR_INSUFFICIENT_TOKENS: Proposer for this proposal has insufficient tokens
 * - PROPOSAL_ERROR_INVALID_INSTRUMENT_SECURITY: Instrument quote name and base name were the same
 * - PROPOSAL_ERROR_NO_PRODUCT: Proposal has no product
 * - PROPOSAL_ERROR_UNSUPPORTED_PRODUCT: Specified product is not supported
 * - PROPOSAL_ERROR_NO_TRADING_MODE: Proposal has no trading mode
 * - PROPOSAL_ERROR_UNSUPPORTED_TRADING_MODE: Proposal has an unsupported trading mode
 * - PROPOSAL_ERROR_NODE_VALIDATION_FAILED: Proposal failed node validation
 * - PROPOSAL_ERROR_MISSING_BUILTIN_ASSET_FIELD: Field is missing in a builtin asset source
 * - PROPOSAL_ERROR_MISSING_ERC20_CONTRACT_ADDRESS: Contract address is missing in the ERC20 asset source
 * - PROPOSAL_ERROR_INVALID_ASSET: Asset ID is invalid or does not exist on the Vega network
 * - PROPOSAL_ERROR_INCOMPATIBLE_TIMESTAMPS: Proposal terms timestamps are not compatible (Validation < Closing < Enactment)
 * - PROPOSAL_ERROR_NO_RISK_PARAMETERS: No risk parameters were specified
 * - PROPOSAL_ERROR_NETWORK_PARAMETER_INVALID_KEY: Invalid key in update network parameter proposal
 * - PROPOSAL_ERROR_NETWORK_PARAMETER_INVALID_VALUE: Invalid value in update network parameter proposal
 * - PROPOSAL_ERROR_NETWORK_PARAMETER_VALIDATION_FAILED: Validation failed for network parameter proposal
 * - PROPOSAL_ERROR_OPENING_AUCTION_DURATION_TOO_SMALL: Opening auction duration is less than the network minimum opening auction time
 * - PROPOSAL_ERROR_OPENING_AUCTION_DURATION_TOO_LARGE: Opening auction duration is more than the network minimum opening auction time
 * - PROPOSAL_ERROR_COULD_NOT_INSTANTIATE_MARKET: Market proposal market could not be instantiated in execution
 * - PROPOSAL_ERROR_INVALID_FUTURE_PRODUCT: Market proposal market contained invalid product definition
 * - PROPOSAL_ERROR_INVALID_RISK_PARAMETER: Market proposal has invalid risk parameter
 * - PROPOSAL_ERROR_MAJORITY_THRESHOLD_NOT_REACHED: Proposal was declined because vote didn't reach the majority threshold required
 * - PROPOSAL_ERROR_PARTICIPATION_THRESHOLD_NOT_REACHED: Proposal declined because the participation threshold was not reached
 * - PROPOSAL_ERROR_INVALID_ASSET_DETAILS: Asset proposal has invalid asset details
 * - PROPOSAL_ERROR_UNKNOWN_TYPE: Proposal is an unknown type
 * - PROPOSAL_ERROR_UNKNOWN_RISK_PARAMETER_TYPE: Proposal has an unknown risk parameter type
 * - PROPOSAL_ERROR_INVALID_FREEFORM: Validation failed for freeform proposal
 * - PROPOSAL_ERROR_INSUFFICIENT_EQUITY_LIKE_SHARE: Party doesn't have enough equity-like share to propose an update on the market
 * targeted by the proposal
 * - PROPOSAL_ERROR_INVALID_MARKET: Market targeted by the proposal does not exist or is not eligible for modification
 * - PROPOSAL_ERROR_TOO_MANY_MARKET_DECIMAL_PLACES: Market proposal decimal place is higher than the market settlement asset decimal places
 * - PROPOSAL_ERROR_TOO_MANY_PRICE_MONITORING_TRIGGERS: Market proposal contains too many price monitoring triggers
 * - PROPOSAL_ERROR_ERC20_ADDRESS_ALREADY_IN_USE: Market proposal contains too many price monitoring triggers
 * - PROPOSAL_ERROR_LP_PRICE_RANGE_NONPOSITIVE: LP price range must be larger than 0
 * - PROPOSAL_ERROR_LP_PRICE_RANGE_TOO_LARGE: LP price range must not be larger than 100
 * - PROPOSAL_ERROR_LINEAR_SLIPPAGE_FACTOR_OUT_OF_RANGE: Linear slippage factor is out of range, either negative or too large
 * - PROPOSAL_ERROR_QUADRATIC_SLIPPAGE_FACTOR_OUT_OF_RANGE: Quadratic slippage factor is out of range, either negative or too large
 * - PROPOSAL_ERROR_INVALID_SPOT: Validation failed for spot proposal
 * - PROPOSAL_ERROR_SPOT_PRODUCT_DISABLED: Spot trading not enabled
 * - PROPOSAL_ERROR_INVALID_SUCCESSOR_MARKET: Market proposal is invalid, either invalid insurance pool fraction, or it specifies a parent market that it can't succeed.
 * - PROPOSAL_ERROR_GOVERNANCE_TRANSFER_PROPOSAL_FAILED: Governance transfer proposal is invalid
 * - PROPOSAL_ERROR_GOVERNANCE_TRANSFER_PROPOSAL_INVALID: Governance transfer proposal failed
 * - PROPOSAL_ERROR_GOVERNANCE_CANCEL_TRANSFER_PROPOSAL_INVALID: Proposal for cancelling transfer is invalid, check proposal ID
 * - PROPOSAL_ERROR_INVALID_MARKET_STATE_UPDATE: Proposal for updating market state is invalid
 * - PROPOSAL_ERROR_INVALID_SLA_PARAMS: Liquidity provision SLA parameters are invalid
 * - PROPOSAL_ERROR_MISSING_SLA_PARAMS: Mandatory liquidity provision SLA parameters are missing
 * - PROPOSAL_ERROR_INVALID_PERPETUAL_PRODUCT: Perpetual market proposal contained invalid product definition
 * - PROPOSAL_ERROR_INVALID_REFERRAL_PROGRAM: Referral program proposal is invalid
 * - PROPOSAL_ERROR_INVALID_VOLUME_DISCOUNT_PROGRAM: Volume discount program proposal is invalid
 * - PROPOSAL_ERROR_PROPOSAL_IN_BATCH_REJECTED: One or more proposals in a batch has been rejected
 * - PROPOSAL_ERROR_PROPOSAL_IN_BATCH_DECLINED: One or more proposals in a batch has been declined
 * - PROPOSAL_ERROR_INVALID_SIZE_DECIMAL_PLACES: Spot market decimal places cannot be greater than the base asset’s decimal places
 */
export enum vegaProposalError {
    PROPOSAL_ERROR_UNSPECIFIED = 'PROPOSAL_ERROR_UNSPECIFIED',
    PROPOSAL_ERROR_CLOSE_TIME_TOO_SOON = 'PROPOSAL_ERROR_CLOSE_TIME_TOO_SOON',
    PROPOSAL_ERROR_CLOSE_TIME_TOO_LATE = 'PROPOSAL_ERROR_CLOSE_TIME_TOO_LATE',
    PROPOSAL_ERROR_ENACT_TIME_TOO_SOON = 'PROPOSAL_ERROR_ENACT_TIME_TOO_SOON',
    PROPOSAL_ERROR_ENACT_TIME_TOO_LATE = 'PROPOSAL_ERROR_ENACT_TIME_TOO_LATE',
    PROPOSAL_ERROR_INSUFFICIENT_TOKENS = 'PROPOSAL_ERROR_INSUFFICIENT_TOKENS',
    PROPOSAL_ERROR_INVALID_INSTRUMENT_SECURITY = 'PROPOSAL_ERROR_INVALID_INSTRUMENT_SECURITY',
    PROPOSAL_ERROR_NO_PRODUCT = 'PROPOSAL_ERROR_NO_PRODUCT',
    PROPOSAL_ERROR_UNSUPPORTED_PRODUCT = 'PROPOSAL_ERROR_UNSUPPORTED_PRODUCT',
    PROPOSAL_ERROR_NO_TRADING_MODE = 'PROPOSAL_ERROR_NO_TRADING_MODE',
    PROPOSAL_ERROR_UNSUPPORTED_TRADING_MODE = 'PROPOSAL_ERROR_UNSUPPORTED_TRADING_MODE',
    PROPOSAL_ERROR_NODE_VALIDATION_FAILED = 'PROPOSAL_ERROR_NODE_VALIDATION_FAILED',
    PROPOSAL_ERROR_MISSING_BUILTIN_ASSET_FIELD = 'PROPOSAL_ERROR_MISSING_BUILTIN_ASSET_FIELD',
    PROPOSAL_ERROR_MISSING_ERC20_CONTRACT_ADDRESS = 'PROPOSAL_ERROR_MISSING_ERC20_CONTRACT_ADDRESS',
    PROPOSAL_ERROR_INVALID_ASSET = 'PROPOSAL_ERROR_INVALID_ASSET',
    PROPOSAL_ERROR_INCOMPATIBLE_TIMESTAMPS = 'PROPOSAL_ERROR_INCOMPATIBLE_TIMESTAMPS',
    PROPOSAL_ERROR_NO_RISK_PARAMETERS = 'PROPOSAL_ERROR_NO_RISK_PARAMETERS',
    PROPOSAL_ERROR_NETWORK_PARAMETER_INVALID_KEY = 'PROPOSAL_ERROR_NETWORK_PARAMETER_INVALID_KEY',
    PROPOSAL_ERROR_NETWORK_PARAMETER_INVALID_VALUE = 'PROPOSAL_ERROR_NETWORK_PARAMETER_INVALID_VALUE',
    PROPOSAL_ERROR_NETWORK_PARAMETER_VALIDATION_FAILED = 'PROPOSAL_ERROR_NETWORK_PARAMETER_VALIDATION_FAILED',
    PROPOSAL_ERROR_OPENING_AUCTION_DURATION_TOO_SMALL = 'PROPOSAL_ERROR_OPENING_AUCTION_DURATION_TOO_SMALL',
    PROPOSAL_ERROR_OPENING_AUCTION_DURATION_TOO_LARGE = 'PROPOSAL_ERROR_OPENING_AUCTION_DURATION_TOO_LARGE',
    PROPOSAL_ERROR_COULD_NOT_INSTANTIATE_MARKET = 'PROPOSAL_ERROR_COULD_NOT_INSTANTIATE_MARKET',
    PROPOSAL_ERROR_INVALID_FUTURE_PRODUCT = 'PROPOSAL_ERROR_INVALID_FUTURE_PRODUCT',
    PROPOSAL_ERROR_INVALID_RISK_PARAMETER = 'PROPOSAL_ERROR_INVALID_RISK_PARAMETER',
    PROPOSAL_ERROR_MAJORITY_THRESHOLD_NOT_REACHED = 'PROPOSAL_ERROR_MAJORITY_THRESHOLD_NOT_REACHED',
    PROPOSAL_ERROR_PARTICIPATION_THRESHOLD_NOT_REACHED = 'PROPOSAL_ERROR_PARTICIPATION_THRESHOLD_NOT_REACHED',
    PROPOSAL_ERROR_INVALID_ASSET_DETAILS = 'PROPOSAL_ERROR_INVALID_ASSET_DETAILS',
    PROPOSAL_ERROR_UNKNOWN_TYPE = 'PROPOSAL_ERROR_UNKNOWN_TYPE',
    PROPOSAL_ERROR_UNKNOWN_RISK_PARAMETER_TYPE = 'PROPOSAL_ERROR_UNKNOWN_RISK_PARAMETER_TYPE',
    PROPOSAL_ERROR_INVALID_FREEFORM = 'PROPOSAL_ERROR_INVALID_FREEFORM',
    PROPOSAL_ERROR_INSUFFICIENT_EQUITY_LIKE_SHARE = 'PROPOSAL_ERROR_INSUFFICIENT_EQUITY_LIKE_SHARE',
    PROPOSAL_ERROR_INVALID_MARKET = 'PROPOSAL_ERROR_INVALID_MARKET',
    PROPOSAL_ERROR_TOO_MANY_MARKET_DECIMAL_PLACES = 'PROPOSAL_ERROR_TOO_MANY_MARKET_DECIMAL_PLACES',
    PROPOSAL_ERROR_TOO_MANY_PRICE_MONITORING_TRIGGERS = 'PROPOSAL_ERROR_TOO_MANY_PRICE_MONITORING_TRIGGERS',
    PROPOSAL_ERROR_ERC20_ADDRESS_ALREADY_IN_USE = 'PROPOSAL_ERROR_ERC20_ADDRESS_ALREADY_IN_USE',
    PROPOSAL_ERROR_LP_PRICE_RANGE_NONPOSITIVE = 'PROPOSAL_ERROR_LP_PRICE_RANGE_NONPOSITIVE',
    PROPOSAL_ERROR_LP_PRICE_RANGE_TOO_LARGE = 'PROPOSAL_ERROR_LP_PRICE_RANGE_TOO_LARGE',
    PROPOSAL_ERROR_LINEAR_SLIPPAGE_FACTOR_OUT_OF_RANGE = 'PROPOSAL_ERROR_LINEAR_SLIPPAGE_FACTOR_OUT_OF_RANGE',
    PROPOSAL_ERROR_QUADRATIC_SLIPPAGE_FACTOR_OUT_OF_RANGE = 'PROPOSAL_ERROR_QUADRATIC_SLIPPAGE_FACTOR_OUT_OF_RANGE',
    PROPOSAL_ERROR_INVALID_SPOT = 'PROPOSAL_ERROR_INVALID_SPOT',
    PROPOSAL_ERROR_SPOT_PRODUCT_DISABLED = 'PROPOSAL_ERROR_SPOT_PRODUCT_DISABLED',
    PROPOSAL_ERROR_INVALID_SUCCESSOR_MARKET = 'PROPOSAL_ERROR_INVALID_SUCCESSOR_MARKET',
    PROPOSAL_ERROR_GOVERNANCE_TRANSFER_PROPOSAL_FAILED = 'PROPOSAL_ERROR_GOVERNANCE_TRANSFER_PROPOSAL_FAILED',
    PROPOSAL_ERROR_GOVERNANCE_TRANSFER_PROPOSAL_INVALID = 'PROPOSAL_ERROR_GOVERNANCE_TRANSFER_PROPOSAL_INVALID',
    PROPOSAL_ERROR_GOVERNANCE_CANCEL_TRANSFER_PROPOSAL_INVALID = 'PROPOSAL_ERROR_GOVERNANCE_CANCEL_TRANSFER_PROPOSAL_INVALID',
    PROPOSAL_ERROR_INVALID_MARKET_STATE_UPDATE = 'PROPOSAL_ERROR_INVALID_MARKET_STATE_UPDATE',
    PROPOSAL_ERROR_INVALID_SLA_PARAMS = 'PROPOSAL_ERROR_INVALID_SLA_PARAMS',
    PROPOSAL_ERROR_MISSING_SLA_PARAMS = 'PROPOSAL_ERROR_MISSING_SLA_PARAMS',
    PROPOSAL_ERROR_INVALID_PERPETUAL_PRODUCT = 'PROPOSAL_ERROR_INVALID_PERPETUAL_PRODUCT',
    PROPOSAL_ERROR_INVALID_REFERRAL_PROGRAM = 'PROPOSAL_ERROR_INVALID_REFERRAL_PROGRAM',
    PROPOSAL_ERROR_INVALID_VOLUME_DISCOUNT_PROGRAM = 'PROPOSAL_ERROR_INVALID_VOLUME_DISCOUNT_PROGRAM',
    PROPOSAL_ERROR_PROPOSAL_IN_BATCH_REJECTED = 'PROPOSAL_ERROR_PROPOSAL_IN_BATCH_REJECTED',
    PROPOSAL_ERROR_PROPOSAL_IN_BATCH_DECLINED = 'PROPOSAL_ERROR_PROPOSAL_IN_BATCH_DECLINED',
    PROPOSAL_ERROR_INVALID_SIZE_DECIMAL_PLACES = 'PROPOSAL_ERROR_INVALID_SIZE_DECIMAL_PLACES',
}
