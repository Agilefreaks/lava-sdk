import { SingleConsumerSession } from "../types/types";
import { IProviderOptimizer } from "./provider_optimizer";

interface SessionInfo {
  session: SingleConsumerSession;
  epoch: number;
  providerAddress: string;
}

type ConsumerSessionsMap = Record<string, SessionInfo>;

export class ConsumerSessionsManager {
  private rpcEndpoint: any;
  private pairing: Record<string, any> = {};
  private currentEpoch = 0;
  private numberOfResets = 0;

  private pairingAddresses: Record<number, string> = {};
  private pairingAddressesLength = 0;

  private validAddresses: string[] = [];
  private addonAddresses: Record<string, string[]> = {};
  private addedToPurgeReport: Record<string, any> = {};

  private pairingPurge: Record<string, any> = {};
  private providerOptimizer: IProviderOptimizer;

  /**
   * Create a session manager
   */
  constructor(rpcEndpoint: any, _providerOptimizer: IProviderOptimizer) {
    this.rpcEndpoint = rpcEndpoint;
    this.providerOptimizer = _providerOptimizer;
  }

  public getRpcEndpoint(): any {
    return this.rpcEndpoint;
  }

  /**
   * Is getting called exetrnally from PairingUpdater
   */
  public updateAllProviders(
    epoch: number,
    pairingList: Map<number, any>
  ): void {
    throw new Error("Method not implemented.");
  }

  /**
   * In the addon scope
   * @param addon not sure about the string here, seems to me like a primitive obsesion code smell
   */
  public removeAddonAddresses(_addon: string): string[] {
    // Implement this function
    throw new Error("Method not implemented.");
  }

  public calculateAddonValidAddresses(_addon: string): string[] {
    // Implement this function
    throw new Error("Method not implemented.");
  }

  public getValidAddresses(_addon: string): string[] {
    // Implement this function
    throw new Error("Method not implemented.");
  }

  /**
   * GetSessions will return a ConsumerSession, given cu needed for that session.
   * The user can also request specific providers to not be included in the search for a session.
   * @returns An array with only one session until we get a proper Optimizer
   */
  public getSessions(
    _cuNeededForSession: number,
    _initUnwantedProviders: Record<string, any>,
    _requestedBlock: number,
    _addon: string
  ): ConsumerSessionsMap {
    // Implement this function
    return {};
  }

  /**
   * Report session unused, unblock it and decrease the cu that were applied
   */
  public onSessionUnused(consumerSession: SingleConsumerSession): void {
    throw new Error("Method not implemented.");
  }

  /**
   * Report session failure, mark it as blocked from future usages, report if timeout happened.
   */
  public onSessionFailure(
    _consumerSession: SingleConsumerSession,
    _errorReceived: Error
  ): void {
    // Implement this function
  }

  public onSessionDone(
    _consumerSession: SingleConsumerSession,
    _latestServiceBlock: number,
    _specComputeUnits: number,
    _currentLatency: number,
    _expectedLatency: number,
    _expectedBH: number,
    _numOfProviders: number,
    _providersCount: number,
    _isHangingApi: boolean
  ): void {
    // Implement this function
  }

  /**
   * Returns the reported providers stored in the sessions manager
   */
  public getReportedProviders(epoch: number): any[] {
    // Implement this function
    throw new Error("Method not implemented.");
  }
}
