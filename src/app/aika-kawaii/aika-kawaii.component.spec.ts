import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AikaKawaiiComponent } from './aika-kawaii.component';

describe('AikaKawaiiComponent', () => {
  let component: AikaKawaiiComponent;
  let fixture: ComponentFixture<AikaKawaiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AikaKawaiiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AikaKawaiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
