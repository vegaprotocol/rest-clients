/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type vegaERC20Update = {
    /**
     * Lifetime limits deposit per address.
     * This will be interpreted against the asset decimals.
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

