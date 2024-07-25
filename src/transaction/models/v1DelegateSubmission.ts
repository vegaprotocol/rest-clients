/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Command to allow a token holder to delegate their tokens to a validator to help secure the network.
 * A token holder delegating to a validator will earn rewards based on the amount they have delegated, and the performance of the chosen validator.
 */
export type v1DelegateSubmission = {
    /**
     * Amount of stake to delegate, as an unsigned integer scaled to the governance asset's decimal places.
     */
    amount?: string;
    /**
     * Node ID to delegate stake to.
     */
    nodeId?: string;
};

