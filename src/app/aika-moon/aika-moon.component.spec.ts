import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AikaMoonComponent } from './aika-moon.component';

describe('AikaMoonComponent', () => {
  let component: AikaMoonComponent;
  let fixture: ComponentFixture<AikaMoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AikaMoonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AikaMoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
