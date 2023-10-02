/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaAccountType } from './vegaAccountType';
import type { vegaGovernanceTransferType } from './vegaGovernanceTransferType';
import type { vegaOneOffTransfer } from './vegaOneOffTransfer';
import type { vegaRecurringTransfer } from './vegaRecurringTransfer';

export type vegaNewTransferConfiguration = {
    amount?: string;
    asset?: string;
    destination?: string;
    destinationType?: vegaAccountType;
    fractionOfBalance?: string;
    oneOff?: vegaOneOffTransfer;
    recurring?: vegaRecurringTransfer;
    source?: string;
    sourceType?: vegaAccountType;
    transferType?: vegaGovernanceTransferType;
};

