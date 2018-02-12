import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFlightComponent } from './news-flight.component';

describe('NewsFlightComponent', () => {
  let component: NewsFlightComponent;
  let fixture: ComponentFixture<NewsFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
