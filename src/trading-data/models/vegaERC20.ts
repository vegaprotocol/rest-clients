/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type vegaERC20 = {
    /**
     * Address of the contract for the token, on the ethereum network.
     */
    contractAddress?: string;
    /**
     * Lifetime limits deposit per address
     * note: this is a temporary measure that can be changed by governance.
     */
    lifetimeLimit?: string;
    /**
     * Maximum you can withdraw instantly. All withdrawals over the threshold will be delayed by the withdrawal delay.
     * There’s no limit on the size of a withdrawal
     * note: this is a temporary measure that can be changed by governance.
     */
    withdrawThreshold?: string;
};

