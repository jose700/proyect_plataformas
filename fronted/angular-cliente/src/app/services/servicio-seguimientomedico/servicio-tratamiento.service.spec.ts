import { TestBed } from '@angular/core/testing';

import { ServicioTratamientoService } from './servicio-tratamiento.service';

describe('ServicioTratamientoService', () => {
  let service: ServicioTratamientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioTratamientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
