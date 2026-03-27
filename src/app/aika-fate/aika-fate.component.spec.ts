import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AikaFateComponent } from './aika-fate.component';

describe('AikaFateComponent', () => {
  let component: AikaFateComponent;
  let fixture: ComponentFixture<AikaFateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AikaFateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AikaFateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
