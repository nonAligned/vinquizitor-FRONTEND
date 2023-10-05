import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineGlassComponent } from './wine-glass.component';

describe('WineGlassComponent', () => {
  let component: WineGlassComponent;
  let fixture: ComponentFixture<WineGlassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WineGlassComponent]
    });
    fixture = TestBed.createComponent(WineGlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
