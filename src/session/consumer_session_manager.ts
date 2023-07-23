import { SingleConsumerSession } from '../types/types';
import { IProviderOptimizer } from './provider_optimizer'

type SessionInfo = {
  session: SingleConsumerSession,
  epoch: number,
  providerAddress: string
};


export class ConsumerSessionManager {

  // Placeholder for a list of sessions, you can replace this with an appropriate type
  sessions: SingleConsumerSession[] = [];

  /**
   * Create a session manager
   */
  constructor(_providerOptimizer: IProviderOptimizer) {
  }

  /**
   * Is getting called exetrnally from PairingUpdater
   */
  UpdateAllProviders(): void {
    // Implement this function
  }

  /**
   * In the addon scope
   * @param addon not sure about the string here, seems to me like a primitive obsesion code smell
   */
  RemoveAddonAddresses(_addon: string): string[] {
    // Implement this function
    throw new Error("Method not implemented.")
  }

  CalculateAddonValidAddresses(_addon: string): string[] {
    // Implement this function
    throw new Error("Method not implemented.")
  }

  GetValidAddresses(_addon: string): string[] {
    // Implement this function
    throw new Error("Method not implemented.")
  }

  /**
   * GetSessions will return a ConsumerSession, given cu needed for that session.
   * The user can also request specific providers to not be included in the search for a session.
   * @returns An array with only one session until we get a proper Optimizer
   */
  GetSessions(_cuNeededForSession: number, _initUnwantedProviders: string[], _requestedBlock: number, _addon: string): SingleConsumerSession | SingleConsumerSession[] {
    // Implement this function
    // Placeholder return statement
    return this.sessions;
  }

  /**
   * Report session failure, mark it as blocked from future usages, report if timeout happened.
   */
  OnSessionFailure(_consumerSession: SingleConsumerSession, _errorReceived: Error): void {
    // Implement this function
  }

  OnDataReliabilitySessionDone(
    _consumerSession: SingleConsumerSession,
    _latestServiceBlock: number,
    _specComputeUnits: number,
    _currentLatency: number,
    _expectedLatency: number,
    _expectedBH: number,
    _numOfProviders: number,
    _providersCount: number): void {
    // Implement this function
  }

  OnSessionDone(
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

  GetReportedProviders(epoch: number): any[] {
    // Implement this function
    throw new Error("Method not implemented.")
  }


  GetDataReliabilitySession(_originalProviderAddress: string, _index: number, _sessionEpoch: number): SessionInfo {
    // Implement this function
    throw new Error("Method not implemented.")
  }

  OnDataReliabilitySessionFailure(consumerSession: SingleConsumerSession, errorReceived: Error): void {
    // Implement this function
  }
}
