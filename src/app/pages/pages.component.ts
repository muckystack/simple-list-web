import { Component } from '@angular/core';
import { CategoryModel } from '../models/category.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
})
export class PagesComponent {
  public categories: [CategoryModel] = [new CategoryModel('', '')];

  constructor(private _categoryService: CategoryService) {
    this.getAllCategories();
  }

  getAllCategories(event: boolean = true) {
    if (event) {
      this._categoryService.getAllCategories().subscribe((response) => {
        this.categories = response.category;
        localStorage.setItem('categories', JSON.stringify(this.categories));
      });
    }
  }
}
