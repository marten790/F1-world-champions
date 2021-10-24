import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service';
import { ActivatedRoute } from '@angular/router';
import { Race } from 'src/app/models/yearResultsResponse.model';

@Component({
  selector: 'winners-year',
  templateUrl: './winners-year.component.html',
  styleUrls: ['./winners-year.component.scss'],
})
export class WinnersYearComponent implements OnInit {
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  public racesResultsForYear: Race[];
  public loading: boolean = true;
  public season: string;
  public permanentNumber: string;
  public title: string;
  public description =
    '* All blue highlighted rows indicate champion of the year';

  ngOnInit() {
    this.route.params.subscribe((paramMap) => {
      this.season = paramMap.season;
      this.permanentNumber = paramMap.permanentNumber;

      this.apiService.getRaceForYear$(Number(this.season)).subscribe(
        (response) => {
          this.title = `F1 race winners for ${this.season}`;
          this.racesResultsForYear = response;
          this.loading = false;
        },
        () => {
          this.racesResultsForYear = null;
          this.loading = false;
        }
      );
    });
  }
}
