import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarEstatisticasComponent } from './visualizar-estatisticas.component';

describe('VisualizarEstatisticasComponent', () => {
  let component: VisualizarEstatisticasComponent;
  let fixture: ComponentFixture<VisualizarEstatisticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarEstatisticasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarEstatisticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
