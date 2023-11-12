import { TestBed } from '@angular/core/testing';

import { ServicioAcademicoService } from './servicio-academico.service';

describe('ServicioAcademicoService', () => {
  let service: ServicioAcademicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioAcademicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
