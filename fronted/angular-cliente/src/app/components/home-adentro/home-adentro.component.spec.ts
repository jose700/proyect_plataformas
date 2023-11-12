import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdentroComponent } from './home-adentro.component';

describe('HomeAdentroComponent', () => {
  let component: HomeAdentroComponent;
  let fixture: ComponentFixture<HomeAdentroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAdentroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAdentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
