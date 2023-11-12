import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaAprobadaComponent } from './materia-aprobada.component';

describe('MateriaAprobadaComponent', () => {
  let component: MateriaAprobadaComponent;
  let fixture: ComponentFixture<MateriaAprobadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriaAprobadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MateriaAprobadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
