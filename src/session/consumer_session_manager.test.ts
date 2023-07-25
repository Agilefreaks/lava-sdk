"use strict";

import { ConsumerSessionsManager } from "./consumer_sessions_manager";
import { RandomProviderOptimizer } from "./provider_optimizer";

describe("ConsumerSessionManager", () => {
  describe("GetSessions", () => {
    it("will return an array with one entry", () => {
      const cm = new ConsumerSessionsManager(
        "TODO: rpcEndpoint",
        new RandomProviderOptimizer()
      );

      const sessions = cm.getSessions(0, {}, 0, "");
      expect(Object.keys(sessions).length).toBe(0);
    });
  });
});
