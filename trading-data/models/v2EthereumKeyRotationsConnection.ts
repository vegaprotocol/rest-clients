/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2EthereumKeyRotationEdge } from './v2EthereumKeyRotationEdge';
import type { v2PageInfo } from './v2PageInfo';

export type v2EthereumKeyRotationsConnection = {
    /**
     * Page of Ethereum key rotations data and their corresponding cursors.
     */
    edges?: Array<v2EthereumKeyRotationEdge>;
    /**
     * Page information that is used for fetching further pages.
     */
    pageInfo?: v2PageInfo;
};

