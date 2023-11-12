import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoMedicoComponent } from './seguimiento-medico.component';

describe('SeguimientoMedicoComponent', () => {
  let component: SeguimientoMedicoComponent;
  let fixture: ComponentFixture<SeguimientoMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguimientoMedicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeguimientoMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
