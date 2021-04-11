import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ListOfCategoryComponent } from './list-of-category/list-of-category.component';

const routes: Routes = [
  {
    path: 'categories',
    // component: PagesComponent,
    children: [
      {
        path: '',
        component: CategoriesComponent,
        data: { title: 'Categorías' },
      },
      {
        path: 'list/:id',
        component: ListOfCategoryComponent,
        data: { title: 'Lista' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
