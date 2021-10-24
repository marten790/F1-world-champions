import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs/internal/observable/of';
import {
  mockDriverStandingsResponseData,
  mockDriverStandingsResultsResponseData,
} from 'src/app/mocks/mockDriverStandingsResponseData';
import { ApiService } from 'src/app/services/api-service';

import { ChampionsComponent } from './champions.component';

describe('ChampionsComponent', () => {
  let component: ChampionsComponent;
  let fixture: ComponentFixture<ChampionsComponent>;
  let apiServiceSpy: jasmine.SpyObj<ApiService>;

  beforeEach(async(() => {
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
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionsComponent);
    component = fixture.componentInstance;
    apiServiceSpy = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should Get HeroById From HeroService And SetToHeroProperty', () => {
    const mockDriverStandingsResultsResponseData = {
      season: '2005',
      round: '19',
      DriverStandings: [
        {
          position: '1',
          positionText: '1',
          points: '133',
          wins: '7',
          Driver: {
            driverId: 'alonso',
            permanentNumber: '14',
            code: 'ALO',
            url: 'http://en.wikipedia.org/wiki/Fernando_Alonso',
            givenName: 'Fernando',
            familyName: 'Alonso',
            dateOfBirth: '1981-07-29',
            nationality: 'Spanish',
          },
          Constructors: [
            {
              constructorId: 'renault',
              url: 'http://en.wikipedia.org/wiki/Renault_in_Formula_One',
              name: 'Renault',
              nationality: 'French',
            },
          ],
        },
      ],
    };
    apiServiceSpy.getLimitedWorldChampionsForYearsAfter1950$.and.returnValue(
      of([
        {
          season: '2005',
          round: '19',
          DriverStandings: [
            {
              position: '1',
              positionText: '1',
              points: '133',
              wins: '7',
              Driver: {
                driverId: 'alonso',
                permanentNumber: '14',
                code: 'ALO',
                url: 'http://en.wikipedia.org/wiki/Fernando_Alonso',
                givenName: 'Fernando',
                familyName: 'Alonso',
                dateOfBirth: '1981-07-29',
                nationality: 'Spanish',
              },
              Constructors: [
                {
                  constructorId: 'renault',
                  url: 'http://en.wikipedia.org/wiki/Renault_in_Formula_One',
                  name: 'Renault',
                  nationality: 'French',
                },
              ],
            },
          ],
        },
      ])
    );
    fixture.detectChanges();

    expect(component.worldChampions).toBe([
      mockDriverStandingsResultsResponseData,
    ]);
    expect(component.loading).toBe(false);
  });
});
