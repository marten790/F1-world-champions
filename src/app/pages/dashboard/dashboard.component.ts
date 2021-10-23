import { Component, OnInit } from '@angular/core';
import { StandingsLists } from 'src/app/models/driverStandingsResponse.model';
import { ApiService } from 'src/app/services/api-service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  public worldChampions: [StandingsLists];
  public loading: boolean = true;
  ngOnInit() {
    this.apiService
      .getLimitedWorldChampionsForYearsAfter1950$(16, 55)
      .subscribe((response) => {
        console.log('response', response);
        this.worldChampions = response;
        this.loading = false;
      });
  }
  public openYear(year: number) {
    console.log('year clicked:', year);
  }
}
