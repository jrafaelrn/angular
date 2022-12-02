import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrigirProvasComponent } from './corrigir-provas.component';

describe('CorrigirProvasComponent', () => {
  let component: CorrigirProvasComponent;
  let fixture: ComponentFixture<CorrigirProvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrigirProvasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrigirProvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
