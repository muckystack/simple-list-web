import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  public categories: [CategoryModel] = [new CategoryModel('', '')];

  constructor(private _categoryService: CategoryService) {
    this.getAllCategories();
  }

  getAllCategories(event:boolean = true) {
    if(event) {
      this._categoryService.getAllCategories().subscribe((response) => {
        this.categories = response.category;
        console.log(this.categories);
      });
    }
  }
}
