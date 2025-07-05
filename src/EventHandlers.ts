/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  LPBattleVault,
  LPBattleVault_BattleCreated,
  LPBattleVault_BattleJoined,
  LPBattleVault_BattleResolved,
  LPBattleVault_BattleStatusChanged,
  LPBattleVault_ContractPausedByOwner,
  LPBattleVault_ContractUnpausedByOwner,
  LPBattleVault_EmergencyWithdrawal,
  LPBattleVault_OwnershipTransferred,
  LPBattleVault_Paused,
  LPBattleVault_PlayerOutOfRange,
  LPBattleVault_PriceFeedSet,
  LPBattleVault_StablecoinSet,
  LPBattleVault_Unpaused,
  LPFeeBattle,
  LPFeeBattle_BattleCreated,
  LPFeeBattle_BattleJoined,
  LPFeeBattle_BattleResolved,
  LPFeeBattle_BattleStatusChanged,
  LPFeeBattle_FeePerformanceUpdate,
  LPFeeBattle_OwnershipTransferred,
  LPFeeBattle_Paused,
  LPFeeBattle_PriceFeedSet,
  LPFeeBattle_StablecoinSet,
  LPFeeBattle_Unpaused,
} from "generated";

LPBattleVault.BattleCreated.handler(async ({ event, context }) => {
  const entity: LPBattleVault_BattleCreated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    battleId: event.params.battleId,
    creator: event.params.creator,
    creatorTokenId: event.params.creatorTokenId,
    duration: event.params.duration,
    totalValueUSD: event.params.totalValueUSD,
  };

  context.LPBattleVault_BattleCreated.set(entity);
});

LPBattleVault.BattleJoined.handler(async ({ event, context }) => {
  const entity: LPBattleVault_BattleJoined = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    battleId: event.params.battleId,
    opponent: event.params.opponent,
    opponentTokenId: event.params.opponentTokenId,
    startTime: event.params.startTime,
  };

  context.LPBattleVault_BattleJoined.set(entity);
});

LPBattleVault.BattleResolved.handler(async ({ event, context }) => {
  const entity: LPBattleVault_BattleResolved = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    battleId: event.params.battleId,
    winner: event.params.winner,
    resolver: event.params.resolver,
    resolverReward: event.params.resolverReward,
  };

  context.LPBattleVault_BattleResolved.set(entity);
});

LPBattleVault.BattleStatusChanged.handler(async ({ event, context }) => {
  const entity: LPBattleVault_BattleStatusChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    battleId: event.params.battleId,
    previousStatus: event.params.previousStatus,
    newStatus: event.params.newStatus,
    timestamp: event.params.timestamp,
  };

  context.LPBattleVault_BattleStatusChanged.set(entity);
});

LPBattleVault.ContractPausedByOwner.handler(async ({ event, context }) => {
  const entity: LPBattleVault_ContractPausedByOwner = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    by: event.params.by,
  };

  context.LPBattleVault_ContractPausedByOwner.set(entity);
});

LPBattleVault.ContractUnpausedByOwner.handler(async ({ event, context }) => {
  const entity: LPBattleVault_ContractUnpausedByOwner = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    by: event.params.by,
  };

  context.LPBattleVault_ContractUnpausedByOwner.set(entity);
});

LPBattleVault.EmergencyWithdrawal.handler(async ({ event, context }) => {
  const entity: LPBattleVault_EmergencyWithdrawal = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    battleId: event.params.battleId,
    to: event.params.to,
    tokenId: event.params.tokenId,
  };

  context.LPBattleVault_EmergencyWithdrawal.set(entity);
});

LPBattleVault.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: LPBattleVault_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.LPBattleVault_OwnershipTransferred.set(entity);
});

LPBattleVault.Paused.handler(async ({ event, context }) => {
  const entity: LPBattleVault_Paused = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    account: event.params.account,
  };

  context.LPBattleVault_Paused.set(entity);
});

LPBattleVault.PlayerOutOfRange.handler(async ({ event, context }) => {
  const entity: LPBattleVault_PlayerOutOfRange = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    battleId: event.params.battleId,
    player: event.params.player,
    isCreator: event.params.isCreator,
    timestamp: event.params.timestamp,
  };

  context.LPBattleVault_PlayerOutOfRange.set(entity);
});

LPBattleVault.PriceFeedSet.handler(async ({ event, context }) => {
  const entity: LPBattleVault_PriceFeedSet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
    priceFeed: event.params.priceFeed,
  };

  context.LPBattleVault_PriceFeedSet.set(entity);
});

LPBattleVault.StablecoinSet.handler(async ({ event, context }) => {
  const entity: LPBattleVault_StablecoinSet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
    isStablecoin: event.params.isStablecoin,
  };

  context.LPBattleVault_StablecoinSet.set(entity);
});

LPBattleVault.Unpaused.handler(async ({ event, context }) => {
  const entity: LPBattleVault_Unpaused = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    account: event.params.account,
  };

  context.LPBattleVault_Unpaused.set(entity);
});

LPFeeBattle.BattleCreated.handler(async ({ event, context }) => {
  const entity: LPFeeBattle_BattleCreated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    battleId: event.params.battleId,
    creator: event.params.creator,
    creatorTokenId: event.params.creatorTokenId,
  };

  context.LPFeeBattle_BattleCreated.set(entity);
});

LPFeeBattle.BattleJoined.handler(async ({ event, context }) => {
  const entity: LPFeeBattle_BattleJoined = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    battleId: event.params.battleId,
    opponent: event.params.opponent,
    opponentTokenId: event.params.opponentTokenId,
  };

  context.LPFeeBattle_BattleJoined.set(entity);
});

LPFeeBattle.BattleResolved.handler(async ({ event, context }) => {
  const entity: LPFeeBattle_BattleResolved = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    battleId: event.params.battleId,
    winner: event.params.winner,
  };

  context.LPFeeBattle_BattleResolved.set(entity);
});

LPFeeBattle.BattleStatusChanged.handler(async ({ event, context }) => {
  const entity: LPFeeBattle_BattleStatusChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    battleId: event.params.battleId,
    previousStatus: event.params.previousStatus,
    newStatus: event.params.newStatus,
    timestamp: event.params.timestamp,
  };

  context.LPFeeBattle_BattleStatusChanged.set(entity);
});

LPFeeBattle.FeePerformanceUpdate.handler(async ({ event, context }) => {
  const entity: LPFeeBattle_FeePerformanceUpdate = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    battleId: event.params.battleId,
    player: event.params.player,
    feeGrowthUSD: event.params.feeGrowthUSD,
    feeRate: event.params.feeRate,
    isCreator: event.params.isCreator,
  };

  context.LPFeeBattle_FeePerformanceUpdate.set(entity);
});

LPFeeBattle.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: LPFeeBattle_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.LPFeeBattle_OwnershipTransferred.set(entity);
});

LPFeeBattle.Paused.handler(async ({ event, context }) => {
  const entity: LPFeeBattle_Paused = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    account: event.params.account,
  };

  context.LPFeeBattle_Paused.set(entity);
});

LPFeeBattle.PriceFeedSet.handler(async ({ event, context }) => {
  const entity: LPFeeBattle_PriceFeedSet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
    priceFeed: event.params.priceFeed,
  };

  context.LPFeeBattle_PriceFeedSet.set(entity);
});

LPFeeBattle.StablecoinSet.handler(async ({ event, context }) => {
  const entity: LPFeeBattle_StablecoinSet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
    isStablecoin: event.params.isStablecoin,
  };

  context.LPFeeBattle_StablecoinSet.set(entity);
});

LPFeeBattle.Unpaused.handler(async ({ event, context }) => {
  const entity: LPFeeBattle_Unpaused = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    account: event.params.account,
  };

  context.LPFeeBattle_Unpaused.set(entity);
});
