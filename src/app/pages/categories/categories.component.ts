import { Component } from '@angular/core';
import { CategoryModel } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  public categories: [CategoryModel] = [new CategoryModel('', '')];

  constructor(
    private _categoryService: CategoryService,
    private _loadingService: LoadingService
  ) {
    this.getAllCategories();
  }

  getAllCategories(event: boolean = true) {
    if (event) {
      this._loadingService.loading = true;
      this._categoryService.getAllCategories().subscribe((response) => {
        this.categories = response.category;
        localStorage.setItem('categories', JSON.stringify(this.categories));
        this._loadingService.loading = false;
      });
    }
  }
}
