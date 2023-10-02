/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { googlerpcStatus } from '../models/googlerpcStatus';
import type { v1ListAccountsResponse } from '../models/v1ListAccountsResponse';
import type { v1ListAssetsResponse } from '../models/v1ListAssetsResponse';
import type { v1ListDelegationsResponse } from '../models/v1ListDelegationsResponse';
import type { v1ListMarketsDataResponse } from '../models/v1ListMarketsDataResponse';
import type { v1ListMarketsResponse } from '../models/v1ListMarketsResponse';
import type { v1ListNetworkLimitsResponse } from '../models/v1ListNetworkLimitsResponse';
import type { v1ListNetworkParametersResponse } from '../models/v1ListNetworkParametersResponse';
import type { v1ListPartiesResponse } from '../models/v1ListPartiesResponse';
import type { v1ListPartiesStakeResponse } from '../models/v1ListPartiesStakeResponse';
import type { v1ListProposalsResponse } from '../models/v1ListProposalsResponse';
import type { v1ListValidatorsResponse } from '../models/v1ListValidatorsResponse';
import type { v1ListVotesResponse } from '../models/v1ListVotesResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CoreStateServiceService {

    /**
     * Accounts list
     * Get a list of accounts
     * @param party
     * @param market
     * @returns v1ListAccountsResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static coreStateServiceListAccounts(
        party?: string,
        market?: string,
    ): CancelablePromise<v1ListAccountsResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts',
            query: {
                'party': party,
                'market': market,
            },
        });
    }

    /**
     * Assets list
     * Get a list of assets
     * @param asset
     * @returns v1ListAssetsResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static coreStateServiceListAssets(
        asset?: string,
    ): CancelablePromise<v1ListAssetsResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/assets',
            query: {
                'asset': asset,
            },
        });
    }

    /**
     * Delegations list
     * Get a list of delegations
     * @param party
     * @param node
     * @param epochSeq
     * @returns v1ListDelegationsResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static coreStateServiceListDelegations(
        party?: string,
        node?: string,
        epochSeq?: string,
    ): CancelablePromise<v1ListDelegationsResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/delegations',
            query: {
                'party': party,
                'node': node,
                'epochSeq': epochSeq,
            },
        });
    }

    /**
     * Markets list
     * Get a list of markets
     * @param market
     * @returns v1ListMarketsResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static coreStateServiceListMarkets(
        market?: string,
    ): CancelablePromise<v1ListMarketsResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/markets',
            query: {
                'market': market,
            },
        });
    }

    /**
     * Markets data list
     * Get a list of markets data
     * @param market
     * @returns v1ListMarketsDataResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static coreStateServiceListMarketsData(
        market?: string,
    ): CancelablePromise<v1ListMarketsDataResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/markets/data',
            query: {
                'market': market,
            },
        });
    }

    /**
     * Network limits list
     * Get a list of network limits
     * @returns v1ListNetworkLimitsResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static coreStateServiceListNetworkLimits(): CancelablePromise<v1ListNetworkLimitsResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/network/limits',
        });
    }

    /**
     * Network parameters list
     * Get a list of network parameters
     * @param networkParameterKey
     * @returns v1ListNetworkParametersResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static coreStateServiceListNetworkParameters(
        networkParameterKey?: string,
    ): CancelablePromise<v1ListNetworkParametersResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/network/parameters',
            query: {
                'networkParameterKey': networkParameterKey,
            },
        });
    }

    /**
     * Parties list
     * Get a list of parties
     * @returns v1ListPartiesResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static coreStateServiceListParties(): CancelablePromise<v1ListPartiesResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/parties',
        });
    }

    /**
     * Parties stake list
     * Get a list of parties stake
     * @param party
     * @returns v1ListPartiesStakeResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static coreStateServiceListPartiesStake(
        party?: string,
    ): CancelablePromise<v1ListPartiesStakeResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/parties/stake',
            query: {
                'party': party,
            },
        });
    }

    /**
     * Proposals list
     * Get a list of proposals
     * @param proposal
     * @param proposer
     * @returns v1ListProposalsResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static coreStateServiceListProposals(
        proposal?: string,
        proposer?: string,
    ): CancelablePromise<v1ListProposalsResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/proposals',
            query: {
                'proposal': proposal,
                'proposer': proposer,
            },
        });
    }

    /**
     * Validators list
     * Get a list of validators
     * @returns v1ListValidatorsResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static coreStateServiceListValidators(): CancelablePromise<v1ListValidatorsResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/validators',
        });
    }

    /**
     * Votes list
     * Get a list of votes
     * @param proposal
     * @param party
     * @returns v1ListVotesResponse A successful response.
     * @returns googlerpcStatus An unexpected error response.
     * @throws ApiError
     */
    public static coreStateServiceListVotes(
        proposal?: string,
        party?: string,
    ): CancelablePromise<v1ListVotesResponse | googlerpcStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/votes',
            query: {
                'proposal': proposal,
                'party': party,
            },
        });
    }

}
