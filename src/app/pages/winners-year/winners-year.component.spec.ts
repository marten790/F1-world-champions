import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api-service';

import { WinnersYearComponent } from './winners-year.component';

describe('WinnersYearComponent', () => {
  let component: WinnersYearComponent;
  let fixture: ComponentFixture<WinnersYearComponent>;
  let apiServiceSpy: jasmine.SpyObj<ApiService>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [WinnersYearComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                season: () => '2008',
                permanentNumber: () => '17',
              },
            },
          },
        },
        {
          provide: ApiService,
          useValue: jasmine.createSpyObj('ApiService', ['getRaceForYear$']),
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnersYearComponent);
    component = fixture.componentInstance;
    apiServiceSpy = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
