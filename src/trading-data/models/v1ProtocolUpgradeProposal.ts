/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A validator command sent manually by a node operator to propose a protocol upgrade.
 */
export type v1ProtocolUpgradeProposal = {
    /**
     * Block height at which to perform the upgrade.
     */
    upgradeBlockHeight?: string;
    /**
     * Release tag for the Vega binary.
     */
    vegaReleaseTag?: string;
};

