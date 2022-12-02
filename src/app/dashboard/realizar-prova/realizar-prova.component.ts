import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProvasAlunos } from 'src/app/model/provas-alunos';

import { ProvasRealizadas } from 'src/app/model/provas-realizadas';
import { Questao } from 'src/app/model/questao';
import { Usuario } from 'src/app/model/usuario';
import { BackendService } from 'src/app/service/backend.service';
import { MyDialogAvisoComponent } from 'src/app/shared/components/my-dialog-aviso/my-dialog-aviso.component';
import { MyDialogEditarComponent } from 'src/app/shared/components/my-dialog-editar/my-dialog-editar.component';

@Component({
  selector: 'app-realizar-prova',
  templateUrl: './realizar-prova.component.html',
  styleUrls: ['./realizar-prova.component.css']
})
export class RealizarProvaComponent implements OnInit {

  horas: number = 0;
  minutos: number = 0;
  segundos: number = 0;

  provas: any = [];
  prova = new ProvasAlunos();
  fimProva = new ProvasRealizadas();
  usuario = new Usuario();
  nota: number = 0;


  constructor(private serviceService: BackendService, private dialog: MatDialog, private router: Router, private snackBar: MatSnackBar) {
    this.usuario = this.serviceService.usuarioLogado;
    this.serviceService.listProvas().subscribe(res => this.provas = res);

  }

  ngOnInit(): void {

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MyDialogEditarComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog fechado!');
    });
  }

  openDialogAviso(): void {
    const dialogRef = this.dialog.open(MyDialogAvisoComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog fechado!');
    });
  }


  public tempoRotacaoImagem(): void {
    let time = 1000;

    setInterval(() => {
    this.segundos++;

    if(this.segundos == 60){
      this.minutos++;
      this.segundos = 0;
    }

    if(this.minutos == 60){
      this.horas++;
      this.minutos = 0;
    }

    }, time);
  }

  escolher(p: any){
    this.prova = p;
    this.tempoRotacaoImagem();
  }

  button(alternativa?: string, alternativaCorreta?: string, notaQuestao?: any){

    if(alternativa == alternativaCorreta){
      this.nota += notaQuestao;
    }


  }

 

  navegar(){

    this.fimProva = {
        idAluno: this.usuario.id,
        idProva: this.prova.id,
        data: '',
        disciplina: this.prova.disciplina,
        titulo: this.prova.titulo,
        nota: this.nota,
        avaliacao: 'nao',
        questoes: this.prova.questao
    }

    this.serviceService.saveGabarito(this.fimProva).subscribe(_result => this.onSucess(), _error => this.onError());;
  

    this.router.navigate(['dashboard/home']);
  }

  private onSucess() {
    this.snackBar.open('Gabarito Salvo com sucesso!', '', {duration: 3000});
    }
    
    private onError() {
    this.snackBar.open('Erro ao Adicionar Gabarito.', '', { duration: 3000 });
    }
}