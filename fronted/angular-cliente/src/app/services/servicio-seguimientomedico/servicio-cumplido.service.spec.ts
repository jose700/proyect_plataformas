import { TestBed } from '@angular/core/testing';

import { ServicioCumplidoService } from './servicio-cumplido.service';

describe('ServicioCumplidoService', () => {
  let service: ServicioCumplidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioCumplidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
