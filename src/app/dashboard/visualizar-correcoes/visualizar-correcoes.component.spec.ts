import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarCorrecoesComponent } from './visualizar-correcoes.component';

describe('VisualizarCorrecoesComponent', () => {
  let component: VisualizarCorrecoesComponent;
  let fixture: ComponentFixture<VisualizarCorrecoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarCorrecoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarCorrecoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
