import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { Login } from '../model/login';
import { Usuario } from '../model/usuario';
import { BackendService } from '../service/backend.service';
import { MydialogComponent } from '../shared/components/mydialog/my-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();
  dadosUsuario: Usuario = new Usuario();
  loading: boolean = false;
  form: FormGroup;

  constructor(
    private backendService: BackendService,
    private router: Router,
    private formBuilder: FormBuilder, 
    private dialog: MatDialog

  ) {

    this.form = this.formBuilder.group({
      usuario: [''],
      senha: ['']
    });

  }

  ngOnInit(): void {}


  logar(): void {

    sessionStorage.clear();

    this.login = {
      login: this.form.value.usuario,
      senha: this.form.value.senha
    }

    console.log(this.login);

    this.backendService.login(this.login).subscribe(
      _result => this.router.navigate(['dashboard/home']));
    
    this.backendService.logout();

    
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MydialogComponent, {});
    dialogRef.afterClosed().subscribe(result => {      
    });
  }



}