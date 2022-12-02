import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { AppMaterialModule } from './app-material/app-material.module';
import { MydialogComponent } from './components/mydialog/my-dialog.component';
import { MyDialogEditarComponent } from './components/my-dialog-editar/my-dialog-editar.component';
import { MyDialogAvisoComponent } from './components/my-dialog-aviso/my-dialog-aviso.component';
import { MyDialogSuporteProfessorComponent } from './components/my-dialog-suporte-professor/my-dialog-suporte-professor.component';

@NgModule({
  declarations: [
    MydialogComponent,
    MyDialogEditarComponent,
    MyDialogAvisoComponent,
    MyDialogSuporteProfessorComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule
  ]
})
export class SharedModule { }
