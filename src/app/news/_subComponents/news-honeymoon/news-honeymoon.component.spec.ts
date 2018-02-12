import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsHoneymoonComponent } from './news-honeymoon.component';

describe('NewsHoneymoonComponent', () => {
  let component: NewsHoneymoonComponent;
  let fixture: ComponentFixture<NewsHoneymoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsHoneymoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsHoneymoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
