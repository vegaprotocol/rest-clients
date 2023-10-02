/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaGovernanceData } from './vegaGovernanceData';
import type { vegaMarket } from './vegaMarket';

/**
 * Successor market information includes the market that is a member of the succession line
 * and any governance data that is associated with proposals for child markets
 * whether enacted or not.
 */
export type v2SuccessorMarket = {
    /**
     * The market that is a member of the succession line.
     */
    market?: vegaMarket;
    /**
     * All proposals for child markets that have the market as a parent.
     */
    proposals?: Array<vegaGovernanceData>;
};

