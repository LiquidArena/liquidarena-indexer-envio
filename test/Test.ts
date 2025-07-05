import assert from "assert";
import { 
  TestHelpers,
  LPBattleVault_BattleCreated
} from "generated";
const { MockDb, LPBattleVault } = TestHelpers;

describe("LPBattleVault contract BattleCreated event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for LPBattleVault contract BattleCreated event
  const event = LPBattleVault.BattleCreated.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("LPBattleVault_BattleCreated is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await LPBattleVault.BattleCreated.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualLPBattleVaultBattleCreated = mockDbUpdated.entities.LPBattleVault_BattleCreated.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedLPBattleVaultBattleCreated: LPBattleVault_BattleCreated = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      battleId: event.params.battleId,
      creator: event.params.creator,
      creatorTokenId: event.params.creatorTokenId,
      duration: event.params.duration,
      totalValueUSD: event.params.totalValueUSD,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualLPBattleVaultBattleCreated, expectedLPBattleVaultBattleCreated, "Actual LPBattleVaultBattleCreated should be the same as the expectedLPBattleVaultBattleCreated");
  });
});
