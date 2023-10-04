import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineStyleComponent } from './wine-style.component';

describe('WineStyleComponent', () => {
  let component: WineStyleComponent;
  let fixture: ComponentFixture<WineStyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WineStyleComponent]
    });
    fixture = TestBed.createComponent(WineStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
