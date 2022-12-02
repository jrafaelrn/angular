import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BancoDeQuestoesComponent } from './banco-de-questoes.component';

describe('BancoDeQuestoesComponent', () => {
  let component: BancoDeQuestoesComponent;
  let fixture: ComponentFixture<BancoDeQuestoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BancoDeQuestoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BancoDeQuestoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
