import { Component, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { Usuario } from 'src/app/model/usuario';
import { BackendService } from 'src/app/service/backend.service';
import { MyDialogAvisoComponent } from 'src/app/shared/components/my-dialog-aviso/my-dialog-aviso.component';
import { MyDialogEditarComponent } from 'src/app/shared/components/my-dialog-editar/my-dialog-editar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  @Output() usuario: Usuario = new Usuario();

  constructor(
    private backendService: BackendService,
    private dialog: MatDialog,
    private router: Router) {

    this.usuario = this.backendService.usuarioLogado;
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

  navegar() {
    this.router.navigate(['dashboard/home']);
  }

}
