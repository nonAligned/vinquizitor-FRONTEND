import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineGlassModalComponent } from './wine-glass-modal.component';

describe('WineGlassModalComponent', () => {
  let component: WineGlassModalComponent;
  let fixture: ComponentFixture<WineGlassModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WineGlassModalComponent]
    });
    fixture = TestBed.createComponent(WineGlassModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
