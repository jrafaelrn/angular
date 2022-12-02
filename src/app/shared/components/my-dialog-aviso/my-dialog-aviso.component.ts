import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

//import { Usuario } from 'src/app/model/usuario';


@Component({
  selector: 'app-my-dialog-aviso',
  templateUrl: './my-dialog-aviso.component.html',
  styleUrls: ['./my-dialog-aviso.component.css']
})
export class MyDialogAvisoComponent implements OnInit {

  //usuario = new Usuario();

  constructor(
    private snackBar: MatSnackBar,
    private router: Router
    ) { }

  ngOnInit(): void {}

  public saiu() {
    this.router.navigate(['login']);
    this.snackBar.open('Saiu com sucesso!', '', {duration: 3000});
  }

  public onError() {
    this.snackBar.open('Erro ao Adicionar Descrição.', '', { duration: 3000 });
  }



}
