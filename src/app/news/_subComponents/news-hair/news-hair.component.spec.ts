import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsHairComponent } from './news-hair.component';

describe('NewsHairComponent', () => {
  let component: NewsHairComponent;
  let fixture: ComponentFixture<NewsHairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsHairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsHairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
