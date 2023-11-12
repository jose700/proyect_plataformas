import { TestBed } from '@angular/core/testing';

import { ServiciorepresentanteService } from './serviciorepresentante.service';

describe('ServiciorepresentanteService', () => {
  let service: ServiciorepresentanteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciorepresentanteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
