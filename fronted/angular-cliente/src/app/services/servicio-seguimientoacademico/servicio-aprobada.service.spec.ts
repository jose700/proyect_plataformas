import { TestBed } from '@angular/core/testing';

import { ServicioAprobadaService } from './servicio-aprobada.service';

describe('ServicioAprobadaService', () => {
  let service: ServicioAprobadaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioAprobadaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
