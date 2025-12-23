import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AikaSpinComponent } from './aika-spin.component';

describe('AikaSpinComponent', () => {
  let component: AikaSpinComponent;
  let fixture: ComponentFixture<AikaSpinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AikaSpinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AikaSpinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
