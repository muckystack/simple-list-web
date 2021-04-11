import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { ComponentsModule } from '../components/components.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from '../interceptors/interceptor.service';
import { CategoriesComponent } from './categories/categories.component';
import { ListOfCategoryComponent } from './list-of-category/list-of-category.component';

@NgModule({
  declarations: [PagesComponent, CategoriesComponent, ListOfCategoryComponent],
  imports: [CommonModule, RouterModule, ComponentsModule, HttpClientModule],
  exports: [PagesComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
})
export class PagesModule {}
