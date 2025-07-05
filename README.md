## Envio Indexer

*Please refer to the [documentation website](https://docs.envio.dev) for a thorough guide on all [Envio](https://envio.dev) indexer features*

### Run

```bash
pnpm dev
```

Visit http://localhost:8080 to see the GraphQL Playground, local password is `testing`.

### Generate files from `config.yaml` or `schema.graphql`

```bash
pnpm codegen
```

### Pre-requisites

- [Node.js (use v18 or newer)](https://nodejs.org/en/download/current)
- [pnpm (use v8 or newer)](https://pnpm.io/installation)
- [Docker desktop](https://www.docker.com/products/docker-desktop/)

# Liquid Arena GraphQL Queries

This repository contains comprehensive GraphQL queries for the Liquid Arena indexer, covering both LPBattleVault and LPFeeBattle smart contracts.

## Overview

The queries are organized into several categories:

1. **LPBattleVault Queries** - For the main battle vault contract
2. **LPFeeBattle Queries** - For the fee-based battle contract  
3. **Combined Queries** - Cross-contract queries
4. **Analytics Queries** - Statistical and analytical queries

## Contract Events

### LPBattleVault Events
- `BattleCreated` - When a new battle is created
- `BattleJoined` - When an opponent joins a battle
- `BattleResolved` - When a battle is resolved with a winner
- `BattleStatusChanged` - When battle status changes
- `PlayerOutOfRange` - When a player goes out of range
- `EmergencyWithdrawal` - Emergency token withdrawals
- `OwnershipTransferred` - Contract ownership changes
- `ContractPausedByOwner` / `ContractUnpausedByOwner` - Contract pause state
- `Paused` / `Unpaused` - Account pause events
- `PriceFeedSet` - Price feed configuration
- `StablecoinSet` - Stablecoin configuration

### LPFeeBattle Events
- `BattleCreated` - Fee battle creation
- `BattleJoined` - Fee battle joining
- `BattleResolved` - Fee battle resolution
- `BattleStatusChanged` - Fee battle status changes
- `FeePerformanceUpdate` - Fee performance tracking
- `OwnershipTransferred` - Contract ownership changes
- `Paused` / `Unpaused` - Account pause events
- `PriceFeedSet` - Price feed configuration
- `StablecoinSet` - Stablecoin configuration

## Usage Examples

### 1. Get All Events for a Specific Battle

```graphql
query GetBattleEvents($battleId: BigInt!) {
  # Battle creation
  battleCreated: lPBattleVault_BattleCreateds(
    where: { battleId: $battleId }
    orderBy: id
    orderDirection: desc
  ) {
    id
    battleId
    creator
    creatorTokenId
    duration
    totalValueUSD
  }
  
  # Battle joined
  battleJoined: lPBattleVault_BattleJoineds(
    where: { battleId: $battleId }
    orderBy: id
    orderDirection: desc
  ) {
    id
    battleId
    opponent
    opponentTokenId
    startTime
  }
  
  # Battle resolved
  battleResolved: lPBattleVault_BattleResolveds(
    where: { battleId: $battleId }
    orderBy: id
    orderDirection: desc
  ) {
    id
    battleId
    winner
    resolver
    resolverReward
  }
}
```

Variables:
```json
{
  "battleId": "123"
}
```

### 2. Get All Battles for a Player Address

```graphql
query GetAllBattlesForAddress($address: String!, $first: Int = 20, $skip: Int = 0) {
  # LPBattleVault battles created
  lpBattleVaultCreated: lPBattleVault_BattleCreateds(
    where: { creator: $address }
    first: $first
    skip: $skip
    orderBy: id
    orderDirection: desc
  ) {
    id
    battleId
    creator
    creatorTokenId
    duration
    totalValueUSD
  }
  
  # LPBattleVault battles joined
  lpBattleVaultJoined: lPBattleVault_BattleJoineds(
    where: { opponent: $address }
    first: $first
    skip: $skip
    orderBy: id
    orderDirection: desc
  ) {
    id
    battleId
    opponent
    opponentTokenId
    startTime
  }
  
  # LPFeeBattle battles created
  lPFeeBattleCreated: lPFeeBattle_BattleCreateds(
    where: { creator: $address }
    first: $first
    skip: $skip
    orderBy: id
    orderDirection: desc
  ) {
    id
    battleId
    creator
    creatorTokenId
  }
  
  # LPFeeBattle battles joined
  lPFeeBattleJoined: lPFeeBattle_BattleJoineds(
    where: { opponent: $address }
    first: $first
    skip: $skip
    orderBy: id
    orderDirection: desc
  ) {
    id
    battleId
    opponent
    opponentTokenId
  }
}
```

Variables:
```json
{
  "address": "0x1234567890123456789012345678901234567890",
  "first": 10,
  "skip": 0
}
```

### 3. Get Recent Activity

```graphql
query GetRecentActivity($first: Int = 10, $skip: Int = 0) {
  # Recent LPBattleVault battles
  recentLpBattleVault: lPBattleVault_BattleCreateds(
    first: $first
    skip: $skip
    orderBy: id
    orderDirection: desc
  ) {
    id
    battleId
    creator
    creatorTokenId
    duration
    totalValueUSD
  }
  
  # Recent LPFeeBattle battles
  recentLpFeeBattle: lPFeeBattle_BattleCreateds(
    first: $first
    skip: $skip
    orderBy: id
    orderDirection: desc
  ) {
    id
    battleId
    creator
    creatorTokenId
  }
  
  # Recent battle resolutions
  recentResolutions: lPBattleVault_BattleResolveds(
    first: $first
    skip: $skip
    orderBy: id
    orderDirection: desc
  ) {
    id
    battleId
    winner
    resolver
    resolverReward
  }
}
```

### 4. Get Fee Performance Updates

```graphql
query GetFeePerformanceUpdates($player: String!, $first: Int = 50, $skip: Int = 0) {
  lPFeeBattle_FeePerformanceUpdates(
    where: { player: $player }
    first: $first
    skip: $skip
    orderBy: id
    orderDirection: desc
  ) {
    id
    battleId
    player
    feeGrowthUSD
    feeRate
    isCreator
  }
}
```

### 5. Get Battle Statistics

```graphql
query GetBattleStats($startTime: BigInt!, $endTime: BigInt!) {
  # LPBattleVault stats
  lpBattleVaultStats: lPBattleVault_BattleCreateds(
    where: { 
      id_gte: $startTime
      id_lte: $endTime
    }
    orderBy: id
    orderDirection: desc
  ) {
    id
    battleId
    creator
    totalValueUSD
  }
  
  # Battle resolutions
  battleResolutions: lPBattleVault_BattleResolveds(
    where: { 
      id_gte: $startTime
      id_lte: $endTime
    }
    orderBy: id
    orderDirection: desc
  ) {
    id
    battleId
    winner
    resolverReward
  }
}
```

## Data Types

- `ID!` - Unique identifier
- `BigInt!` - Large integer (for battle IDs, timestamps, amounts)
- `String!` - Address strings and status strings
- `Boolean!` - True/false values
- `Int` - Optional integer (for pagination)

## Pagination

Most queries support pagination using:
- `first` - Number of records to return
- `skip` - Number of records to skip
- `orderBy` - Field to sort by
- `orderDirection` - `asc` or `desc`

## Filtering

Queries support filtering using `where` clauses:
- `battleId: BigInt!` - Filter by specific battle
- `creator: String!` - Filter by battle creator
- `opponent: String!` - Filter by battle opponent
- `winner: String!` - Filter by battle winner
- `player: String!` - Filter by player address
- `id_gte` / `id_lte` - Filter by ID range (for time-based queries)

## Common Use Cases

1. **Battle Tracking** - Monitor specific battles from creation to resolution
2. **Player Profiles** - Get all battles for a specific player
3. **Leaderboards** - Find top creators and winners
4. **Analytics** - Generate statistics and reports
5. **Admin Monitoring** - Track ownership changes and configuration updates
6. **Fee Performance** - Monitor fee-based battle performance

## Integration

These queries can be used with any GraphQL client or directly with the subgraph endpoint. Make sure to:

1. Replace the endpoint URL with your actual subgraph endpoint
2. Handle pagination for large result sets
3. Implement error handling for failed queries
4. Consider caching frequently accessed data
5. Use appropriate loading states for better UX
