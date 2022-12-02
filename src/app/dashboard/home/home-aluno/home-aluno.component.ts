import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { Usuario } from 'src/app/model/usuario';
import { MyDialogSuporteProfessorComponent } from 'src/app/shared/components/my-dialog-suporte-professor/my-dialog-suporte-professor.component';

@Component({
  selector: 'app-home-aluno',
  templateUrl: './home-aluno.component.html',
  styleUrls: ['./home-aluno.component.css']
})
export class HomeAlunoComponent implements OnInit {

  @Input() usuario: Usuario = new Usuario();

  constructor(private router: Router, private dialog: MatDialog) {
    console.log(this.usuario)
   }

  ngOnInit(): void {}

  public navegar(rota: string) {
    this.router.navigate([rota]);
  }

  openDialogSuporte(): void {
    const dialogRef = this.dialog.open(MyDialogSuporteProfessorComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog fechado!');
    });
  }



}
