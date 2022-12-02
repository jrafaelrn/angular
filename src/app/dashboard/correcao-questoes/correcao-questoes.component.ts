import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProvasRealizadas } from 'src/app/model/provas-realizadas';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-correcao-questoes',
  templateUrl: './correcao-questoes.component.html',
  styleUrls: ['./correcao-questoes.component.css']
})
export class CorrecaoQuestoesComponent implements OnInit {

  prova: any;
  nota: number[] | undefined;
  notaFinal: any;
  gabarito?: ProvasRealizadas;

  constructor(private service: BackendService, private router: Router, private snackBar: MatSnackBar) {

    this.prova = this.getProva();

  }

  ngOnInit(): void { }

  excluir() {
    delete sessionStorage['prova'];
  }

  public getProva(): ProvasRealizadas {
    let usu = sessionStorage.getItem('prova');
    return (usu ? JSON.parse(usu) : null);
  }

  public finalizar() {
    var tamanho = this.prova.questoes.length;
    var i = 0;
    this.notaFinal = this.prova.nota;

    while (i < tamanho) {
      this.notaFinal += this.prova.questoes[i].notaQuestaoAberta;
      i++;
    }

    this.gabarito = {
      id: this.prova.id,
      idAluno: this.prova.idAluno,
      idProva: this.prova.idProva,
      data: '',
      disciplina: this.prova.disciplina,
      titulo: this.prova.titulo,
      nota: this.notaFinal,
      avaliacao: 'sim',
      questoes: this.prova.questoes
    }


    this.service.saveGabarito(this.gabarito).subscribe(_result => this.onSucess(), _error => this.onError());;

    this.excluir();

    this.router.navigate(['dashboard/home']);



  }

  private onSucess() {
    this.snackBar.open('Gabarito Salvo com sucesso!', '', { duration: 3000 });
  }

  private onError() {
    this.snackBar.open('Erro ao Adicionar Gabarito.', '', { duration: 3000 });
  }



}
