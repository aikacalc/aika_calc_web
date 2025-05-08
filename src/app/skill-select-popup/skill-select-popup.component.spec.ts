import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillSelectPopupComponent } from './skill-select-popup.component';

describe('SkillSelectPopupComponent', () => {
  let component: SkillSelectPopupComponent;
  let fixture: ComponentFixture<SkillSelectPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillSelectPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillSelectPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
