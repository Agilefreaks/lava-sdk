import { Endpoint, SingleConsumerSession } from "../types/types";

export class ConsumerSessionsWithProvider {
  private publicLavaAddress: string;
  private endpoints: Endpoint[];
  private sessions: Map<number, SingleConsumerSession>;
  private maxComputeUnits: number;
  private usedComputeUnits: number;
  private reliabilitySent: boolean;

  constructor(
    publicLavaAddress: string,
    endpoints: Endpoint[],
    sessions: Map<number, SingleConsumerSession>,
    maxComputeUnits: number,
    usedComputeUnits: number,
    reliabilitySent: boolean
  ) {
    this.publicLavaAddress = publicLavaAddress;
    this.endpoints = endpoints;
    this.sessions = sessions;
    this.maxComputeUnits = maxComputeUnits;
    this.usedComputeUnits = usedComputeUnits;
    this.reliabilitySent = reliabilitySent;
  }

  public isSupportingAddon(addon: string): boolean {
    return false;
  }

  public getConsumerSessionInstanceFromEndpoint(
    endpoint: Endpoint,
    numberOfResets: number
  ): {
    session: SingleConsumerSession;
    pairingEpoch: number;
  } {
    throw new Error("Not implemented");
  }

  public calculateExpectedLantency(timeoutGivenToRelay: number): number {
    throw new Error("Not implemented");
  }

  public calculateQoS(
    latency: number,
    expectedLatency: number,
    blockHeightDiff: number,
    numOfProviders: number,
    servicersToCount: number
  ) {
    throw new Error("Not implemented");
  }
}
