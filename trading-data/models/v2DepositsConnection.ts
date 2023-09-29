/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2DepositEdge } from './v2DepositEdge';
import type { v2PageInfo } from './v2PageInfo';

export type v2DepositsConnection = {
    /**
     * Page of deposits data and their corresponding cursors.
     */
    edges?: Array<v2DepositEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};

