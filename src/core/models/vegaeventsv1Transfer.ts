/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1OneOffGovernanceTransfer } from './v1OneOffGovernanceTransfer';
import type { v1RecurringGovernanceTransfer } from './v1RecurringGovernanceTransfer';
import type { v1TransferStatus } from './v1TransferStatus';
import type { vegaAccountType } from './vegaAccountType';
import type { vegaeventsv1OneOffTransfer } from './vegaeventsv1OneOffTransfer';
import type { vegaeventsv1RecurringTransfer } from './vegaeventsv1RecurringTransfer';

export type vegaeventsv1Transfer = {
    amount?: string;
    asset?: string;
    from?: string;
    fromAccountType?: vegaAccountType;
    id?: string;
    oneOff?: vegaeventsv1OneOffTransfer;
    oneOffGovernance?: v1OneOffGovernanceTransfer;
    reason?: string;
    recurring?: vegaeventsv1RecurringTransfer;
    recurringGovernance?: v1RecurringGovernanceTransfer;
    reference?: string;
    status?: v1TransferStatus;
    timestamp?: string;
    to?: string;
    toAccountType?: vegaAccountType;
};

