/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2PageInfo } from './v2PageInfo';
import type { v2ProtocolUpgradeProposalEdge } from './v2ProtocolUpgradeProposalEdge';

export type v2ProtocolUpgradeProposalConnection = {
    /**
     * Page of protocol upgrade proposals data and their corresponding cursors.
     */
    edges?: Array<v2ProtocolUpgradeProposalEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};

