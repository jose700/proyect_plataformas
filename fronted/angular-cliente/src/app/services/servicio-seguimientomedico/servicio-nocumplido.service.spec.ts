import { TestBed } from '@angular/core/testing';

import { ServicioNocumplidoService } from './servicio-nocumplido.service';

describe('ServicioNocumplidoService', () => {
  let service: ServicioNocumplidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioNocumplidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
