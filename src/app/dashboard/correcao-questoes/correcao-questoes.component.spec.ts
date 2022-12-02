import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrecaoQuestoesComponent } from './correcao-questoes.component';

describe('CorrecaoQuestoesComponent', () => {
  let component: CorrecaoQuestoesComponent;
  let fixture: ComponentFixture<CorrecaoQuestoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrecaoQuestoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorrecaoQuestoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
