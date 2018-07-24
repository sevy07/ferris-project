import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFaqComponent } from './news-faq.component';

describe('NewsFaqComponent', () => {
  let component: NewsFaqComponent;
  let fixture: ComponentFixture<NewsFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
