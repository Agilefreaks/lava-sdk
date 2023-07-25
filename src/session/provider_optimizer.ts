import { QualityOfServiceReport } from "../codec/pairing/relay";

export interface IProviderOptimizer {
  chooseProvider(
    allAddresses: string[],
    ignoredProviders: Map<string, any>,
    cu: number,
    requestedBlock: number,
    perturbationPercentage: number
  ): string[];
  appendRelayData(
    providerAddress: string,
    latency: number,
    isHangingApi: boolean,
    cu: number,
    syncBlock: number
  ): void;
  appendRelayFailure(providerAddress: string): void;
  getExcellenceQoSReportForProvider(
    providerAddress: string
  ): QualityOfServiceReport;
}

export class RandomProviderOptimizer implements IProviderOptimizer {
  public chooseProvider(
    allAddresses: string[],
    ignoredProviders: Map<string, any>,
    cu: number,
    requestedBlock: number,
    perturbationPercentage: number
  ): string[] {
    // Implement this function
    return allAddresses;
  }

  public appendRelayData(
    providerAddress: string,
    latency: number,
    isHangingApi: boolean,
    cu: number,
    syncBlock: number
  ): void {
    // Implement this function
    throw new Error("Method not implemented.");
  }

  public appendRelayFailure(providerAddress: string): void {
    // Implement this function
    throw new Error("Method not implemented.");
  }

  public getExcellenceQoSReportForProvider(
    providerAddress: string
  ): QualityOfServiceReport {
    // Implement this function
    throw new Error("Method not implemented.");
  }
}
