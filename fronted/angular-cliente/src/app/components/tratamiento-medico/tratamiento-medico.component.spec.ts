import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientoMedicoComponent } from './tratamiento-medico.component';

describe('TratamientoMedicoComponent', () => {
  let component: TratamientoMedicoComponent;
  let fixture: ComponentFixture<TratamientoMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TratamientoMedicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TratamientoMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
