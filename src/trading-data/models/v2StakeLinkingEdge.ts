/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1StakeLinking } from './v1StakeLinking';

/**
 * Stake linking data with the corresponding cursor.
 */
export type v2StakeLinkingEdge = {
    /**
     * Cursor that can be used to fetch further pages.
     */
    cursor?: string;
    /**
     * Stake linking representing the intent from a party to deposit.
     */
    node?: v1StakeLinking;
};

