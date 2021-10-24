export interface DriverStandingsResponse {
  MRData: QueryInfo;
}

interface QueryInfo {
  xmlns: string;
  series: string;
  url: string;
  limit: string;
  offset: string;
  total: string;
  StandingsTable: StandingsTable;
}

interface StandingsTable {
  season: string;
  driverStandings: string;
  StandingsLists: [StandingsLists];
}

export interface StandingsLists {
  season: string;
  round: string;
  DriverStandings: [DriverStandings];
}

interface DriverStandings {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Driver: Driver;
  Constructors: [Constructors];
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

interface Constructors {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
}
