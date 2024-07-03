import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelPremiumComponent } from './panel-premium.component';

describe('PanelPremiumComponent', () => {
  let component: PanelPremiumComponent;
  let fixture: ComponentFixture<PanelPremiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelPremiumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
