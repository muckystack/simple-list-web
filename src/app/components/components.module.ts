import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { WidgetsModule } from '../widgets/widgets.module';
import { CategoryComponent } from './category/category.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { FormNewCategoryComponent } from './form-new-category/form-new-category.component';
import { AsideComponent } from './aside/aside.component';
import { ListComponent } from './list/list.component';
import { FormNewListComponent } from './form-new-list/form-new-list.component';
import { AsideListComponent } from './aside-list/aside-list.component';
import { FormsModule } from '@angular/forms';
import { AutofocusDirective } from '../directives/autofocus.directive';

@NgModule({
  declarations: [
    NavbarComponent,
    CategoryComponent,
    FormNewCategoryComponent,
    AsideComponent,
    ListComponent,
    FormNewListComponent,
    AsideListComponent,
    AutofocusDirective,
  ],
  imports: [
    CommonModule,
    WidgetsModule,
    FontAwesomeModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    NavbarComponent,
    CategoryComponent,
    AsideComponent,
    ListComponent,
    AsideListComponent,
  ],
})
export class ComponentsModule {}
