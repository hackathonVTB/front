export interface Atm {
  address: string;
  latitude: number;
  longitude: number;
  allDay: boolean;
  services: Services;
}

interface Services {
  wheelchair: Wheelchair;
  blind: Blind;
  nfcForBankCards: NfcForBankCards;
  qrRead: QrRead;
  supportsUsd: SupportsUsd;
  supportsChargeRub: SupportsChargeRub;
  supportsEur: SupportsEur;
  supportsRub: SupportsRub;
}

interface Wheelchair {
  serviceCapability: string;
  serviceActivity: string;
}

interface Blind {
  serviceCapability: string;
  serviceActivity: string;
}

interface NfcForBankCards {
  serviceCapability: string;
  serviceActivity: string;
}

interface QrRead {
  serviceCapability: string;
  serviceActivity: string;
}

interface SupportsUsd {
  serviceCapability: string;
  serviceActivity: string;
}

interface SupportsChargeRub {
  serviceCapability: string;
  serviceActivity: string;
}

interface SupportsEur {
  serviceCapability: string;
  serviceActivity: string;
}

interface SupportsRub {
  serviceCapability: string;
  serviceActivity: string;
}
