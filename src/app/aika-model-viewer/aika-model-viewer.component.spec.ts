import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AikaModelViewerComponent } from './aika-model-viewer.component';

describe('AikaModelViewerComponent', () => {
  let component: AikaModelViewerComponent;
  let fixture: ComponentFixture<AikaModelViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AikaModelViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AikaModelViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
