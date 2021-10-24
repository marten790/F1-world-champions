import { Component, OnInit } from '@angular/core';
import { StandingsLists } from 'src/app/models/driverStandingsResponse.model';
import { ApiService } from 'src/app/services/api-service';

@Component({
  selector: 'champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.scss'],
})
export class ChampionsComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  public worldChampions;
  public loading: boolean = true;
  public title = 'F1 world champions since 2005';

  ngOnInit() {
    this.apiService
      .getLimitedWorldChampionsForYearsAfter1950$(16, 55)
      .subscribe(
        (response) => {
          this.worldChampions = response;
          this.loading = false;
        },
        () => {
          this.worldChampions = null;
          this.loading = false;
        }
      );
  }
}
