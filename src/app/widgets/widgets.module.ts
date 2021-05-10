import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title2Component } from './title2/title2.component';
import { Title6Component } from './title6/title6.component';
import { Title5Component } from './title5/title5.component';
import { IconBanerNuevaCategoriaComponent } from './icon-baner-nueva-categoria/icon-baner-nueva-categoria.component';
import { BtnSaveComponent } from './btn-save/btn-save.component';
import { IconBanerNewListComponent } from './icon-baner-new-list/icon-baner-new-list.component';
import { IconBanerTrashComponent } from './icon-baner-trash/icon-baner-trash.component';
import { UserCardComponent } from './user-card/user-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconMenAvatarComponent } from './avatar/icon-men-avatar/icon-men-avatar.component';
import { IconWomanAvatarComponent } from './avatar/icon-woman-avatar/icon-woman-avatar.component';
import { IconVerifyComponent } from './icon-verify/icon-verify.component';

@NgModule({
  declarations: [
    Title2Component,
    Title6Component,
    Title5Component,
    IconBanerNuevaCategoriaComponent,
    BtnSaveComponent,
    IconBanerNewListComponent,
    IconBanerTrashComponent,
    UserCardComponent,
    IconMenAvatarComponent,
    IconWomanAvatarComponent,
    IconVerifyComponent,
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [
    Title2Component,
    Title6Component,
    Title5Component,
    IconBanerNuevaCategoriaComponent,
    BtnSaveComponent,
    IconBanerNewListComponent,
    IconBanerTrashComponent,
    UserCardComponent,
    IconMenAvatarComponent,
    IconWomanAvatarComponent,
    IconVerifyComponent
  ],
})
export class WidgetsModule {}
