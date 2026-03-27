import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AikaSupporterComponent } from './aika-supporter.component';

describe('AikaSupporterComponent', () => {
  let component: AikaSupporterComponent;
  let fixture: ComponentFixture<AikaSupporterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AikaSupporterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AikaSupporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
