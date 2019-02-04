import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioChannelsPage } from './radio-channels.page';

describe('RadioChannelsPage', () => {
  let component: RadioChannelsPage;
  let fixture: ComponentFixture<RadioChannelsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioChannelsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioChannelsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
