import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourTripComponent } from './your-trip.component';

describe('YourTripComponent', () => {
  let component: YourTripComponent;
  let fixture: ComponentFixture<YourTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
