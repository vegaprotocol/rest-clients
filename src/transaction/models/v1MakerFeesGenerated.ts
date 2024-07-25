/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { v1PartyAmount } from './v1PartyAmount';

export type v1MakerFeesGenerated = {
    /**
     * Amount of maker fees paid by the taker to the maker.
     */
    makerFeesPaid?: Array<v1PartyAmount>;
    /**
     * Party that paid the fees.
     */
    taker?: string;
};

