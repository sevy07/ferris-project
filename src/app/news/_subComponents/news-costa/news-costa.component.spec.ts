import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCostaComponent } from './news-costa.component';

describe('NewsCostaComponent', () => {
  let component: NewsCostaComponent;
  let fixture: ComponentFixture<NewsCostaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsCostaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsCostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
