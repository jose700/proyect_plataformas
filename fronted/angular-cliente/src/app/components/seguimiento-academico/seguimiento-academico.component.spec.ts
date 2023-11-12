import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoAcademicoComponent } from './seguimiento-academico.component';

describe('SeguimientoAcademicoComponent', () => {
  let component: SeguimientoAcademicoComponent;
  let fixture: ComponentFixture<SeguimientoAcademicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguimientoAcademicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeguimientoAcademicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
