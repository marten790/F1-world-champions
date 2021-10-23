import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {
  StandingsLists,
  DriverStandingsResponse,
} from '../models/driverStandingsResponse.model';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://ergast.com/api/f1';

  /* istanbul ignore next : should not need to test the API endpoint since the backend developers that created the endpoint will be testing the code */
  constructor(private http: HttpClient) {}

  /* istanbul ignore next */
  getWorldChampionForYear$(year: number): Observable<DriverStandingsResponse> {
    const worldChampionForYearUrl = `${this.baseUrl}/${year}/driverStandings/1.json?limit=1`;
    return this.http.get<DriverStandingsResponse>(worldChampionForYearUrl);
  }
  getWorldChampionForYearFiltered$(year: number): Observable<StandingsLists> {
    const worldChampionForYearUrl = `${this.baseUrl}/${year}/driverStandings/1.json?limit=1`;
    return this.http
      .get<DriverStandingsResponse>(worldChampionForYearUrl)
      .pipe(
        map(
          (data: DriverStandingsResponse) =>
            data.MRData.StandingsTable.StandingsLists[0]
        )
      );
  }
  getLimitedWorldChampionsForYearsAfter1950$(
    limitAmountOfDriversShown: number,
    amountOfYearsAfter1950thatShouldBeQueried: number
  ): Observable<[StandingsLists]> {
    const worldChampionForYearUrl = `${this.baseUrl}/driverStandings/1.json?limit=${limitAmountOfDriversShown}&offset=${amountOfYearsAfter1950thatShouldBeQueried}`;
    return this.http
      .get<DriverStandingsResponse>(worldChampionForYearUrl)
      .pipe(
        map(
          (data: DriverStandingsResponse) =>
            data.MRData.StandingsTable.StandingsLists
        )
      );
  }
}
