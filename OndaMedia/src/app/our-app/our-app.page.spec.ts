import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurAppPage } from './our-app.page';

describe('OurAppPage', () => {
  let component: OurAppPage;
  let fixture: ComponentFixture<OurAppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurAppPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
