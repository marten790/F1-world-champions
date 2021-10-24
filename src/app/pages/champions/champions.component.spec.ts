import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { throwError } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { mockDriverStandingsResultsResponseData } from 'src/app/mocks/mockDriverStandingsResponseData';
import { ApiService } from 'src/app/services/api-service';

import { ChampionsComponent } from './champions.component';

describe('ChampionsComponent', () => {
  let component: ChampionsComponent;
  let fixture: ComponentFixture<ChampionsComponent>;
  let apiServiceSpy: jasmine.SpyObj<ApiService>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ChampionsComponent],
        providers: [
          {
            provide: ApiService,
            useValue: jasmine.createSpyObj('ApiService', [
              'getLimitedWorldChampionsForYearsAfter1950$',
            ]),
          },
        ],
        schemas: [NO_ERRORS_SCHEMA],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionsComponent);
    component = fixture.componentInstance;
    apiServiceSpy = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
  });

  it('Should make champion call for champions from 2005', () => {
    apiServiceSpy.getLimitedWorldChampionsForYearsAfter1950$.and.returnValue(
      of([mockDriverStandingsResultsResponseData])
    );

    fixture.detectChanges();

    expect(component.worldChampions).toEqual([
      mockDriverStandingsResultsResponseData,
    ]);
    expect(component.loading).toBe(false);
  });

  it('Should make champion call for champions from 2005 and fail', () => {
    apiServiceSpy.getLimitedWorldChampionsForYearsAfter1950$.and.returnValue(
      throwError(new Error('oops!'))
    );

    fixture.detectChanges();

    expect(component.worldChampions).toEqual(null);
    expect(component.loading).toBe(false);
  });
});
