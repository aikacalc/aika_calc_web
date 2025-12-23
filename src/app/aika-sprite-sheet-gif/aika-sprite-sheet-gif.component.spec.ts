import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AikaSpriteSheetGifComponent } from './aika-sprite-sheet-gif.component';

describe('AikaSpriteSheetGifComponent', () => {
  let component: AikaSpriteSheetGifComponent;
  let fixture: ComponentFixture<AikaSpriteSheetGifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AikaSpriteSheetGifComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AikaSpriteSheetGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
