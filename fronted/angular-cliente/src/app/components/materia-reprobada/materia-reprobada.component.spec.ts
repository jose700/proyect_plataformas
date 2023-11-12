import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaReprobadaComponent } from './materia-reprobada.component';

describe('MateriaReprobadaComponent', () => {
  let component: MateriaReprobadaComponent;
  let fixture: ComponentFixture<MateriaReprobadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriaReprobadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MateriaReprobadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
