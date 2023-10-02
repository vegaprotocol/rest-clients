/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { vegaDelegation } from './vegaDelegation';
import type { vegaEpochData } from './vegaEpochData';
import type { vegaNodeStatus } from './vegaNodeStatus';
import type { vegaRankingScore } from './vegaRankingScore';
import type { vegaRewardScore } from './vegaRewardScore';

export type vegaNode = {
    /**
     * Avatar url.
     */
    avatarUrl?: string;
    /**
     * Node's delegations.
     */
    delegations?: Array<vegaDelegation>;
    /**
     * Information about epoch.
     */
    epochData?: vegaEpochData;
    /**
     * Ethereum public key of the node.
     */
    ethereumAddress?: string;
    /**
     * Node ID i.e. the node's wallet ID.
     */
    id?: string;
    /**
     * URL where users can find out more information on the node.
     */
    infoUrl?: string;
    /**
     * Country code for the location of the node.
     */
    location?: string;
    /**
     * Max amount of (wanted) stake. This field is an unsigned integer scaled to the asset's decimal places.
     */
    maxIntendedStake?: string;
    /**
     * Node name.
     */
    name?: string;
    /**
     * Amount of stake on the next epoch. This field is an unsigned integer scaled to the asset's decimal places.
     */
    pendingStake?: string;
    /**
     * Public key of the node operator.
     */
    pubKey?: string;
    /**
     * Node ranking information.
     */
    rankingScore?: vegaRankingScore;
    /**
     * Node reward score.
     */
    rewardScore?: vegaRewardScore;
    /**
     * Amount of stake that has been delegated by token holders. This field is an unsigned integer scaled to the asset's decimal places.
     */
    stakedByDelegates?: string;
    /**
     * Amount the node operator has put up themselves. This field is an unsigned integer scaled to the asset's decimal places.
     */
    stakedByOperator?: string;
    /**
     * Total amount staked on node. This field is an unsigned integer scaled to the asset's decimal places.
     */
    stakedTotal?: string;
    /**
     * Node status.
     */
    status?: vegaNodeStatus;
    /**
     * Public key of Tendermint.
     */
    tmPubKey?: string;
};

