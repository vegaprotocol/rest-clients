/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1ProtocolUpgradeProposalStatus } from './v1ProtocolUpgradeProposalStatus';

export type v1ProtocolUpgradeEvent = {
    approvers?: Array<string>;
    status?: v1ProtocolUpgradeProposalStatus;
    upgradeBlockHeight?: string;
    vegaReleaseTag?: string;
};

