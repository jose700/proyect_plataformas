import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientoCumplidoComponent } from './tratamiento-cumplido.component';

describe('TratamientoCumplidoComponent', () => {
  let component: TratamientoCumplidoComponent;
  let fixture: ComponentFixture<TratamientoCumplidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TratamientoCumplidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TratamientoCumplidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
