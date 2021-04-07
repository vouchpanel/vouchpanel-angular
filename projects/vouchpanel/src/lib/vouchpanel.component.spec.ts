import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VouchpanelComponent } from './vouchpanel.component';

describe('VouchpanelComponent', () => {
  let component: VouchpanelComponent;
  let fixture: ComponentFixture<VouchpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VouchpanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VouchpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
