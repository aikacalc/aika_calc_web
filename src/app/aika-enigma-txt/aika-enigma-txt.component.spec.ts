import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AikaEnigmaTxtComponent } from './aika-enigma-txt.component';

describe('AikaEnigmaTxtComponent', () => {
  let component: AikaEnigmaTxtComponent;
  let fixture: ComponentFixture<AikaEnigmaTxtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AikaEnigmaTxtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AikaEnigmaTxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
