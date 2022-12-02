import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NovaProva } from 'src/app/model/nova-prova';
import { Questao } from 'src/app/model/questao';
import { Usuario } from 'src/app/model/usuario';
import { BackendService } from 'src/app/service/backend.service';




@Component({
  selector: 'app-banco-de-questoes',
  templateUrl: './banco-de-questoes.component.html',
  styleUrls: ['./banco-de-questoes.component.css']
})
export class BancoDeQuestoesComponent implements OnInit {

  disciplina: string = '';
  titulo: string = '';
  posicao = 0;
  prova: Questao[];
  questoes: Questao[] = [];
  provaPronta = new NovaProva();
  usuario = new Usuario;


  constructor(private backendService: BackendService, private router: Router, private snackBar: MatSnackBar) {
    this.prova = [];
  }

  ngOnInit(): void { }

  public array(questao: Questao) {
    var indice = this.prova.indexOf(questao);

    if (indice != -1) {
      this.prova.splice(indice, 1);
    } else {
      this.prova.push(questao);
    }

  }

  button() {
    this.backendService.listQuestoes(this.disciplina).subscribe(res => this.questoes = res);
  }

  criarProva(){

    this.usuario = this.backendService.usuarioLogado;
    

    this.provaPronta = {
      
      id_professor: this.usuario.id,
      data: '',
      disciplina: this.disciplina,
      titulo: this.titulo,
      questao: this.prova
    }    


    this.backendService.saveProva(this.provaPronta).subscribe(_result => this.onSucess(), _error => this.onError());;

    this.router.navigate(['dashboard/home']);
  }
  
  private onSucess() {
    this.snackBar.open('Prova Salva com sucesso!', '', {duration: 3000});
  }

  private onError() {
    this.snackBar.open('Erro ao Adicionar Prova.', '', { duration: 3000 });
  }
}
