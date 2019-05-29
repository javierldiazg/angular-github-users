import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalSearchComponent } from './additional-search.component';

describe('AdditionalSearchComponent', () => {
  let component: AdditionalSearchComponent;
  let fixture: ComponentFixture<AdditionalSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
