import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ProvasRealizadas } from 'src/app/model/provas-realizadas';

import { Usuario } from 'src/app/model/usuario';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-visualizar-correcoes',
  templateUrl: './visualizar-correcoes.component.html',
  styleUrls: ['./visualizar-correcoes.component.css']
})
export class VisualizarCorrecoesComponent implements OnInit {

  @Input() usuario: Usuario = new Usuario();

  provas$: Observable<ProvasRealizadas[]>;

  constructor(private serviceService: BackendService, private dialog: MatDialog, private location: Location) {
    this.provas$ = serviceService.listProvasRealizadas()
    .pipe(
      catchError(error => {
      return of ([])
    })
    );
   }
  ngOnInit(): void {
  }

  back(){
    this.location.back();  
  }

}
