/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 *  - TYPE_UNSPECIFIED: Represents an unspecified or missing value from the input
 * - TYPE_STAKE_DEPOSITED: Node vote for a new stake deposit
 * - TYPE_STAKE_REMOVED: Node vote for a new stake removed event
 * - TYPE_FUNDS_DEPOSITED: Node vote for a new collateral deposit
 * - TYPE_SIGNER_ADDED: Node vote for a new signer added to the erc20 bridge
 * - TYPE_SIGNER_REMOVED: Node vote for a signer removed from the erc20 bridge
 * - TYPE_BRIDGE_STOPPED: Node vote for a bridge stopped event
 * - TYPE_BRIDGE_RESUMED: Node vote for a bridge resumed event
 * - TYPE_ASSET_LISTED: Node vote for a newly listed asset
 * - TYPE_LIMITS_UPDATED: Node vote for an asset limits update
 * - TYPE_STAKE_TOTAL_SUPPLY: Node vote to share the total supply of the staking token
 * - TYPE_SIGNER_THRESHOLD_SET: Node vote to update the threshold of the signer set for the multisig contract
 * - TYPE_GOVERNANCE_VALIDATE_ASSET: Node vote to validate a new assert governance proposal
 * - TYPE_ETHEREUM_CONTRACT_CALL_RESULT: Node vote for an Ethereum contract call result
 * - TYPE_ETHEREUM_HEARTBEAT: Node vote for an Ethereum chain event heartbeat.
 */
export enum v1NodeVoteType {
    TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED',
    TYPE_STAKE_DEPOSITED = 'TYPE_STAKE_DEPOSITED',
    TYPE_STAKE_REMOVED = 'TYPE_STAKE_REMOVED',
    TYPE_FUNDS_DEPOSITED = 'TYPE_FUNDS_DEPOSITED',
    TYPE_SIGNER_ADDED = 'TYPE_SIGNER_ADDED',
    TYPE_SIGNER_REMOVED = 'TYPE_SIGNER_REMOVED',
    TYPE_BRIDGE_STOPPED = 'TYPE_BRIDGE_STOPPED',
    TYPE_BRIDGE_RESUMED = 'TYPE_BRIDGE_RESUMED',
    TYPE_ASSET_LISTED = 'TYPE_ASSET_LISTED',
    TYPE_LIMITS_UPDATED = 'TYPE_LIMITS_UPDATED',
    TYPE_STAKE_TOTAL_SUPPLY = 'TYPE_STAKE_TOTAL_SUPPLY',
    TYPE_SIGNER_THRESHOLD_SET = 'TYPE_SIGNER_THRESHOLD_SET',
    TYPE_GOVERNANCE_VALIDATE_ASSET = 'TYPE_GOVERNANCE_VALIDATE_ASSET',
    TYPE_ETHEREUM_CONTRACT_CALL_RESULT = 'TYPE_ETHEREUM_CONTRACT_CALL_RESULT',
    TYPE_ETHEREUM_HEARTBEAT = 'TYPE_ETHEREUM_HEARTBEAT',
}
