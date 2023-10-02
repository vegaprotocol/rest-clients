/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2PositionSnapshotPage } from './v2PositionSnapshotPage';
import type { v2PositionUpdates } from './v2PositionUpdates';

export type v2ObservePositionsResponse = {
    /**
     * An 'initial image' snapshot containing current positions.
     */
    snapshot?: v2PositionSnapshotPage;
    /**
     * List of position updates in the last block.
     */
    updates?: v2PositionUpdates;
};

