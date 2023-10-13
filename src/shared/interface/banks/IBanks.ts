import { IOpenHours } from './IOpenHours';

export interface IBank {
  salePointName: string;
  address: string;
  status: string;
  openHours: IOpenHours[];
  openHoursIndividual: IOpenHours[];
  officeType: string;
  salePointFormat: string;
  suoAvailability: string;
  hasRamp: string;
  latitude: number;
  longitude: number;
  metroStation: string | null;
  distance: number;
  kep: boolean;
  myBranch: boolean;
}
