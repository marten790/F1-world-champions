import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {
  StandingsLists,
  DriverStandingsResponse,
} from '../models/driverStandingsResponse.model';
import { map } from 'rxjs/operators';
import { Race, YearResultsResponse } from '../models/yearResultsResponse.model';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://ergast.com/api/f1';

  /* istanbul ignore next : should not need to test the API endpoint since the backend developers that created the endpoint will be testing the code */
  constructor(private http: HttpClient) {}

  /* istanbul ignore next */
  getRaceForYear$(year: number): Observable<[Race]> {
    const worldChampionForYearUrl = `${this.baseUrl}/${year}/results/1.json`;
    return this.http
      .get<YearResultsResponse>(worldChampionForYearUrl)
      .pipe(map((data: YearResultsResponse) => data.MRData.RaceTable.Races));
  }

  getLimitedWorldChampionsForYearsAfter1950$(
    limitAmountOfDriversShown: number,
    amountOfYearsAfter1950thatShouldBeQueried: number
  ) {
    const worldChampionForYearUrl = `${this.baseUrl}/driverStandings/1.json?limit=${limitAmountOfDriversShown}&offset=${amountOfYearsAfter1950thatShouldBeQueried}`;
    return this.http
      .get(worldChampionForYearUrl)
      .pipe(
        map(
          (data: DriverStandingsResponse) =>
            data.MRData.StandingsTable.StandingsLists
        )
      );
  }
}
