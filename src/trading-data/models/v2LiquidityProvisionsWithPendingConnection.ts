/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2LiquidityProvisionWithPendingEdge } from './v2LiquidityProvisionWithPendingEdge';
import type { v2PageInfo } from './v2PageInfo';

export type v2LiquidityProvisionsWithPendingConnection = {
    /**
     * Page of liquidity provisions data and their corresponding cursors.
     */
    edges?: Array<v2LiquidityProvisionWithPendingEdge>;
    /**
     * Page information that is used to fetch further pages.
     */
    pageInfo?: v2PageInfo;
};

