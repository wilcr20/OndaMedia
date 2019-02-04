import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeUsPage } from './we-us.page';

describe('WeUsPage', () => {
  let component: WeUsPage;
  let fixture: ComponentFixture<WeUsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeUsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeUsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
