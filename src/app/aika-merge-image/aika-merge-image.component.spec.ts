import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AikaMergeImageComponent } from './aika-merge-image.component';

describe('AikaMergeImageComponent', () => {
  let component: AikaMergeImageComponent;
  let fixture: ComponentFixture<AikaMergeImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AikaMergeImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AikaMergeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
