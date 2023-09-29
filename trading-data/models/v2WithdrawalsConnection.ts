/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2PageInfo } from './v2PageInfo';
import type { v2WithdrawalEdge } from './v2WithdrawalEdge';

export type v2WithdrawalsConnection = {
    /**
     * Page of withdrawals data and their corresponding cursors.
     */
    edges?: Array<v2WithdrawalEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};

