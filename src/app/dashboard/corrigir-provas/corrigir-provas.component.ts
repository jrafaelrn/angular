import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProvasAlunos } from 'src/app/model/provas-alunos';
import { ProvasRealizadas } from 'src/app/model/provas-realizadas';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-corrigir-provas',
  templateUrl: './corrigir-provas.component.html',
  styleUrls: ['./corrigir-provas.component.css']
})
export class CorrigirProvasComponent implements OnInit {

  provas?: ProvasRealizadas[];


  constructor(private router: Router, private serviceService: BackendService) {
    this.serviceService.listProvasCorrigir().subscribe(res => this.provas = res);
  }

  ngOnInit(): void {
  }

  corrigir(prova: ProvasRealizadas) {
    this.setProva(prova);
    this.router.navigate(['dashboard/corrigir'])
  }

  public setProva(prova: ProvasRealizadas) {
    sessionStorage['prova'] = JSON.stringify(prova);
  }




}
