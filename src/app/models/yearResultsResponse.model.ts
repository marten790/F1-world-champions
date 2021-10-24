export interface YearResultsResponse {
  MRData: MRData;
}

interface MRData {
  xmlns: string;
  series: string;
  url: string;
  limit: string;
  offset: string;
  total: string;
  RaceTable: RaceTable;
}

interface RaceTable {
  season: string;
  position: string;
  Races: [Race];
}

export interface Race {
  date: string;
  raceName: string;
  round: string;
  season: string;
  time: string;
  url: string;
  Circuit: Circuit;
  Results: [Result];
}

interface Circuit {
  Location: Location;
  circuitId: string;
  circuitName: string;
  url: string;
}
interface Location {
  country: string;
  lat: string;
  locality: string;
  long: string;
}

interface Result {
  Constructor: Constructor;
  Driver: Driver;
  FastestLap: FastestLap;
  Time: ResultTime;
  grid: string;
  laps: string;
  number: string;
  points: string;
  position: string;
  positionText: string;
  status: string;
}

interface ResultTime {
  millis: string;
  time: string;
}

interface Constructor {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
}

interface Driver {
  driverId: string;
  permanentNumber: string;
  code: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
}

interface FastestLap {
  AverageSpeed: AverageSpeed;
  Time: FastestLapTime;
  lap: string;
  rank: string;
}

interface AverageSpeed {
  speed: string;
  units: string;
}

interface FastestLapTime {
  time: string;
}
