import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { AikaGachaCalcComponent } from './aika-gacha-calc.component';

describe('AikaGachaCalcComponent', () => {
  let component: AikaGachaCalcComponent;
  let fixture: ComponentFixture<AikaGachaCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AikaGachaCalcComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()]
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
