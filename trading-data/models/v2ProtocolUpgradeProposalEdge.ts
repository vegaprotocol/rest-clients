/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1ProtocolUpgradeEvent } from './v1ProtocolUpgradeEvent';

/**
 * Protocol upgrade proposal data with the corresponding cursor.
 */
export type v2ProtocolUpgradeProposalEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * Protocol upgrade proposal data.
     */
    node?: v1ProtocolUpgradeEvent;
};

