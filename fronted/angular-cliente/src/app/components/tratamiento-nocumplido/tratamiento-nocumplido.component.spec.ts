import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientoNocumplidoComponent } from './tratamiento-nocumplido.component';

describe('TratamientoNocumplidoComponent', () => {
  let component: TratamientoNocumplidoComponent;
  let fixture: ComponentFixture<TratamientoNocumplidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TratamientoNocumplidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TratamientoNocumplidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
