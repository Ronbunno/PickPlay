import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comming } from './comming';

describe('Comming', () => {
  let component: Comming;
  let fixture: ComponentFixture<Comming>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comming]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Comming);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
