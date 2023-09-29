/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1NodeVoteType } from './v1NodeVoteType';

/**
 * Used when a node votes for validating that a given resource exists or is valid,
 * for example, an ERC20 deposit is valid and exists on ethereum.
 */
export type v1NodeVote = {
    /**
     * Reference identifying the resource making the vote, required field.
     */
    reference?: string;
    /**
     * Type of NodeVote, also required.
     */
    type?: v1NodeVoteType;
};

