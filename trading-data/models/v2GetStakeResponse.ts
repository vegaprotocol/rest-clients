/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2StakesConnection } from './v2StakesConnection';

export type v2GetStakeResponse = {
    /**
     * Current stake available information.
     */
    currentStakeAvailable?: string;
    /**
     * Paged list of stake data with corresponding page information.
     */
    stakeLinkings?: v2StakesConnection;
};

