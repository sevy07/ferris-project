import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsGlossaryComponent } from './news-glossary.component';

describe('NewsGlossaryComponent', () => {
  let component: NewsGlossaryComponent;
  let fixture: ComponentFixture<NewsGlossaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsGlossaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsGlossaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
