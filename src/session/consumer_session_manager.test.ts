"use strict";

import { ConsumerSessionManager } from './consumer_session_manager'
import { ProviderOptimizer } from './provider_optimizer';

describe("ConsumerSessionManager", () => {
  describe("GetSessions", () => {
    it("will return an array with one entry", () => {
      var cm = new ConsumerSessionManager(new ProviderOptimizer())
      expect(cm.GetSessions.length).toBe(1)
    })
  })
})