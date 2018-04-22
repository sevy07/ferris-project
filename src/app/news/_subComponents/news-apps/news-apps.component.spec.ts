import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAppsComponent } from './news-apps.component';

describe('NewsAppsComponent', () => {
  let component: NewsAppsComponent;
  let fixture: ComponentFixture<NewsAppsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsAppsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
