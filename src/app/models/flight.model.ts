export interface Flight {
  additionalInformation: string;
  code: string;
  crew: Crew[];
  departureTime: string;
  departureDate: string;
  destination: string;
  origin: string;
  returnTime: string;
  returnDate: string;
  withSKPlanesDiscount: boolean;
  key: string;
}

export interface Crew {
  job: string;
  name: string;
}
