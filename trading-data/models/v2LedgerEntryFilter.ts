/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v2AccountFilter } from './v2AccountFilter';
import type { vegaTransferType } from './vegaTransferType';

/**
 * Ledger entry filter sets filters on returned set of ledger entries.
 */
export type v2LedgerEntryFilter = {
    /**
     * Determines whether an entry must have accounts matching both the account_from_filter
     * and the account_to_filter. If set to 'true', entries must have matches in both filters.
     * If set to `false`, entries matching only the account_from_filter or the account_to_filter will also be included.
     */
    closeOnAccountFilters?: boolean;
    /**
     * Used to set values for filtering sender accounts.
     */
    fromAccountFilter?: v2AccountFilter;
    /**
     * Used to set values for filtering receiver accounts.
     */
    toAccountFilter?: v2AccountFilter;
    /**
     * List of transfer types that is used for filtering sender and receiver accounts.
     */
    transferTypes?: Array<vegaTransferType>;
};

