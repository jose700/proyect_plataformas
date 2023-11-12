import { TestBed } from '@angular/core/testing';

import { ServicioReprobadaService } from './servicio-reprobada.service';

describe('ServicioReprobadaService', () => {
  let service: ServicioReprobadaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioReprobadaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
