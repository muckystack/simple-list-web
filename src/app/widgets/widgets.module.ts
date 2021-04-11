import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title2Component } from './title2/title2.component';
import { Title6Component } from './title6/title6.component';
import { Title5Component } from './title5/title5.component';
import { IconBanerNuevaCategoriaComponent } from './icon-baner-nueva-categoria/icon-baner-nueva-categoria.component';
import { BtnSaveComponent } from './btn-save/btn-save.component';
import { IconBanerNewListComponent } from './icon-baner-new-list/icon-baner-new-list.component';
import { IconBanerTrashComponent } from './icon-baner-trash/icon-baner-trash.component';

@NgModule({
  declarations: [
    Title2Component,
    Title6Component,
    Title5Component,
    IconBanerNuevaCategoriaComponent,
    BtnSaveComponent,
    IconBanerNewListComponent,
    IconBanerTrashComponent,
  ],
  imports: [CommonModule],
  exports: [
    Title2Component,
    Title6Component,
    Title5Component,
    IconBanerNuevaCategoriaComponent,
    BtnSaveComponent,
    IconBanerNewListComponent,
    IconBanerTrashComponent,
  ],
})
export class WidgetsModule {}
