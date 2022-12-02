import { Component, OnInit, Output } from '@angular/core';

import { Usuario } from 'src/app/model/usuario';
import { BackendService } from 'src/app/service/backend.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() usuario: Usuario = new Usuario();

  constructor(private backendService: BackendService) {

    this.usuario = this.backendService.usuarioLogado;
   }

  ngOnInit(): void {}



}
