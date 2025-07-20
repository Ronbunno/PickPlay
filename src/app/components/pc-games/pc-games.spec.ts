import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcGames } from './pc-games';

describe('PcGames', () => {
  let component: PcGames;
  let fixture: ComponentFixture<PcGames>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PcGames]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcGames);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
