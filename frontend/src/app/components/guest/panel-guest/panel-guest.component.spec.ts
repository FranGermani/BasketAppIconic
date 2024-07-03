import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelGuestComponent } from './panel-guest.component';

describe('PanelGuestComponent', () => {
  let component: PanelGuestComponent;
  let fixture: ComponentFixture<PanelGuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelGuestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
