import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { mockRaceForYearResponseData } from 'src/app/mocks/mockRaceForYearResponseData';
import { ApiService } from 'src/app/services/api-service';

import { WinnersYearComponent } from './winners-year.component';

describe('WinnersYearComponent', () => {
  let component: WinnersYearComponent;
  let fixture: ComponentFixture<WinnersYearComponent>;
  let apiServiceSpy: jasmine.SpyObj<ApiService>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [WinnersYearComponent],
        providers: [
          {
            provide: ActivatedRoute,
            useValue: {
              params: of({
                season: '2008',
                permanentNumber: '17',
              }),
            },
          },
          {
            provide: ApiService,
            useValue: jasmine.createSpyObj('ApiService', ['getRaceForYear$']),
          },
        ],
        schemas: [NO_ERRORS_SCHEMA],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnersYearComponent);
    component = fixture.componentInstance;
    apiServiceSpy = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
  });

  it('Should make winner call for winners from chosen year', () => {
    apiServiceSpy.getRaceForYear$.and.returnValue(
      of(mockRaceForYearResponseData.MRData.RaceTable.Races)
    );
    fixture.detectChanges();

    expect(component.racesResultsForYear).toEqual(
      mockRaceForYearResponseData.MRData.RaceTable.Races
    );
    expect(component.loading).toBe(false);
  });

  it('Should make winner call for winners from chosen year and fail', () => {
    apiServiceSpy.getRaceForYear$.and.returnValue(
      throwError(new Error('oops!'))
    );
    fixture.detectChanges();

    expect(component.racesResultsForYear).toEqual(null);
    expect(component.loading).toBe(false);
  });
});
