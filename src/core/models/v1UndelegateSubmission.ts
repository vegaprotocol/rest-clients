/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1UndelegateSubmissionMethod } from './v1UndelegateSubmissionMethod';

/**
 * Command to allow a token holder to instruct the network to remove their delegated stake from a given validator node.
 */
export type v1UndelegateSubmission = {
    /**
     * Amount to undelegate, as an unsigned integer scaled to the governance asset's decimal places.
     * If not set, then all delegations to the given validator node will be removed.
     */
    amount?: string;
    /**
     * Method of delegation.
     */
    method?: v1UndelegateSubmissionMethod;
    /**
     * Node ID to undelegate stake from.
     */
    nodeId?: string;
};

