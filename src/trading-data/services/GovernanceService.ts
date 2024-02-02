/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { googlerpcStatus } from '../models/googlerpcStatus';
import type { v2GetGovernanceDataResponse } from '../models/v2GetGovernanceDataResponse';
import type { v2ListGovernanceDataResponse } from '../models/v2ListGovernanceDataResponse';
import type { v2ListVotesResponse } from '../models/v2ListVotesResponse';
import type { v2ObserveGovernanceResponse } from '../models/v2ObserveGovernanceResponse';
import type { v2ObserveVotesResponse } from '../models/v2ObserveVotesResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class GovernanceService {

    /**
     * Get governance data
     * Get a single proposal's details either by proposal ID or by reference
     * @param proposalId Proposal ID to get governance data for, if provided.
     * @param reference Reference to get proposal data for, if provided.
     * @returns v2GetGovernanceDataResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceGetGovernanceData(
        proposalId?: string,
        reference?: string,
    ): CancelablePromise<v2GetGovernanceDataResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/governance',
            query: {
                'proposalId': proposalId,
                'reference': reference,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * List governance data
     * Get a list of proposals
     * @param proposalState Restrict proposals to those with the given state.
     *
     * - STATE_UNSPECIFIED: Default value, always invalid
     * - STATE_FAILED: Proposal enactment has failed - even though proposal has passed, its execution could not be performed
     * - STATE_OPEN: Proposal is open for voting
     * - STATE_PASSED: Proposal has gained enough support to be executed
     * - STATE_REJECTED: Proposal wasn't accepted i.e. proposal terms failed validation due to wrong configuration or failed to meet network requirements.
     * - STATE_DECLINED: Proposal didn't get enough votes, e.g. either failed to gain required participation or majority level.
     * - STATE_ENACTED: Proposal enacted.
     * - STATE_WAITING_FOR_NODE_VOTE: Waiting for node validation of the proposal
     * @param proposalType Restrict proposals to those with the given type.
     *
     * - TYPE_ALL: List all proposals
     * - TYPE_NEW_MARKET: List new market proposals
     * - TYPE_UPDATE_MARKET: List update market proposals
     * - TYPE_NETWORK_PARAMETERS: List change Vega network parameter proposals
     * - TYPE_NEW_ASSET: New asset proposals
     * - TYPE_NEW_FREE_FORM: Proposals for creating a new free form proposal
     * - TYPE_UPDATE_ASSET: Update asset proposals
     * - TYPE_NEW_SPOT_MARKET: Propose a new spot market
     * - TYPE_UPDATE_SPOT_MARKET: Update an existing spot market
     * - TYPE_NEW_TRANSFER: Propose a new transfer
     * - TYPE_CANCEL_TRANSFER: Proposal to cancel a transfer
     * - TYPE_UPDATE_MARKET_STATE: Proposal for updating the state of a market
     * - TYPE_UPDATE_REFERRAL_PROGRAM: Proposal to update the referral program
     * - TYPE_UPDATE_VOLUME_DISCOUNT_PROGRAM: Proposal to update the volume discount program
     * @param proposerPartyId Restrict proposals to those proposed by the given party ID.
     * @param proposalReference Restrict proposals to those with the given reference.
     * @param paginationFirst Number of records to be returned that sort greater than row identified by cursor supplied in 'after'.
     * @param paginationAfter If paging forwards, the cursor string for the last row of the previous page.
     * @param paginationLast Number of records to be returned that sort less than row identified by cursor supplied in 'before'.
     * @param paginationBefore If paging forwards, the cursor string for the first row of the previous page.
     * @param paginationNewestFirst Whether to order the results with the newest records first. If not set, the default value is true.
     * @returns v2ListGovernanceDataResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceListGovernanceData(
        proposalState: 'STATE_UNSPECIFIED' | 'STATE_FAILED' | 'STATE_OPEN' | 'STATE_PASSED' | 'STATE_REJECTED' | 'STATE_DECLINED' | 'STATE_ENACTED' | 'STATE_WAITING_FOR_NODE_VOTE' = 'STATE_UNSPECIFIED',
        proposalType: 'TYPE_UNSPECIFIED' | 'TYPE_ALL' | 'TYPE_NEW_MARKET' | 'TYPE_UPDATE_MARKET' | 'TYPE_NETWORK_PARAMETERS' | 'TYPE_NEW_ASSET' | 'TYPE_NEW_FREE_FORM' | 'TYPE_UPDATE_ASSET' | 'TYPE_NEW_SPOT_MARKET' | 'TYPE_UPDATE_SPOT_MARKET' | 'TYPE_NEW_TRANSFER' | 'TYPE_CANCEL_TRANSFER' | 'TYPE_UPDATE_MARKET_STATE' | 'TYPE_UPDATE_REFERRAL_PROGRAM' | 'TYPE_UPDATE_VOLUME_DISCOUNT_PROGRAM' = 'TYPE_UNSPECIFIED',
        proposerPartyId?: string,
        proposalReference?: string,
        paginationFirst?: number,
        paginationAfter?: string,
        paginationLast?: number,
        paginationBefore?: string,
        paginationNewestFirst?: boolean,
    ): CancelablePromise<v2ListGovernanceDataResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/governances',
            query: {
                'proposalState': proposalState,
                'proposalType': proposalType,
                'proposerPartyId': proposerPartyId,
                'proposalReference': proposalReference,
                'pagination.first': paginationFirst,
                'pagination.after': paginationAfter,
                'pagination.last': paginationLast,
                'pagination.before': paginationBefore,
                'pagination.newestFirst': paginationNewestFirst,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * Observe governance
     * Subscribe to a stream of updates to governance proposals
     * @param partyId Restrict proposal updates to those proposed by the given party ID.
     * @returns any A successful response.(streaming responses)
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceObserveGovernance(
        partyId?: string,
    ): CancelablePromise<{
        error?: googlerpcStatus;
        result?: v2ObserveGovernanceResponse;
    } | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/stream/governance',
            query: {
                'partyId': partyId,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * Observe votes
     * Subscribe to a stream of votes cast on a given proposal, or by all votes made by a given party
     * @param partyId Restrict vote updates to those made by the given party.
     * @param proposalId Restrict vote updates to those made on the given proposal.
     * @returns any A successful response.(streaming responses)
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceObserveVotes(
        partyId?: string,
        proposalId?: string,
    ): CancelablePromise<{
        error?: googlerpcStatus;
        result?: v2ObserveVotesResponse;
    } | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/stream/votes',
            query: {
                'partyId': partyId,
                'proposalId': proposalId,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

    /**
     * List votes
     * Get a list of votes. A party ID or a proposal ID must be provided.
     * @param partyId Party for which the votes are requested.
     * @param proposalId Proposal ID to list votes for.
     * @param paginationFirst Number of records to be returned that sort greater than row identified by cursor supplied in 'after'.
     * @param paginationAfter If paging forwards, the cursor string for the last row of the previous page.
     * @param paginationLast Number of records to be returned that sort less than row identified by cursor supplied in 'before'.
     * @param paginationBefore If paging forwards, the cursor string for the first row of the previous page.
     * @param paginationNewestFirst Whether to order the results with the newest records first. If not set, the default value is true.
     * @returns v2ListVotesResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static tradingDataServiceListVotes(
        partyId?: string,
        proposalId?: string,
        paginationFirst?: number,
        paginationAfter?: string,
        paginationLast?: number,
        paginationBefore?: string,
        paginationNewestFirst?: boolean,
    ): CancelablePromise<v2ListVotesResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/votes',
            query: {
                'partyId': partyId,
                'proposalId': proposalId,
                'pagination.first': paginationFirst,
                'pagination.after': paginationAfter,
                'pagination.last': paginationLast,
                'pagination.before': paginationBefore,
                'pagination.newestFirst': paginationNewestFirst,
            },
            errors: {
                500: `An internal server error`,
            },
        });
    }

}
