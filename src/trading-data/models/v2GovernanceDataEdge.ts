/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaGovernanceData } from './vegaGovernanceData';

/**
 * Governance data with the corresponding cursor.
 */
export type v2GovernanceDataEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * Governance data content, i.e. proposal and votes for and against.
     */
    node?: vegaGovernanceData;
};

