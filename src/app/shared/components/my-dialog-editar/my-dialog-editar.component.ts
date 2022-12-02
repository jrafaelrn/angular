import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { BackendService } from 'src/app/service/backend.service';
//import { Usuario } from 'src/app/model/usuario';


@Component({
  selector: 'app-my-dialog-editar',
  templateUrl: './my-dialog-editar.component.html',
  styleUrls: ['./my-dialog-editar.component.css']
})
export class MyDialogEditarComponent implements OnInit {

  //usuario = new Usuario();

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    private serviceBackend: BackendService
    ) { }

  ngOnInit(): void {}

  public saiu() {
    this.router.navigate(['login']);
    this.serviceBackend.logout();
    this.snackBar.open('Saiu com sucesso!', '', {duration: 3000});
  }

  public onError() {
    this.snackBar.open('Erro ao Adicionar Descrição.', '', { duration: 3000 });
  }



}
