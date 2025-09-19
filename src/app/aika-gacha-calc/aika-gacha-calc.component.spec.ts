import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AikaGachaCalcComponent } from './aika-gacha-calc.component';

describe('AikaGachaCalcComponent', () => {
  let component: AikaGachaCalcComponent;
  let fixture: ComponentFixture<AikaGachaCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AikaGachaCalcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AikaGachaCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
