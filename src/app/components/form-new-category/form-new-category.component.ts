import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoryModel } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-form-new-category',
  templateUrl: './form-new-category.component.html',
  styleUrls: ['./form-new-category.component.css'],
})
export class FormNewCategoryComponent implements OnInit {
  @Input() category: CategoryModel = new CategoryModel('', '');
  @Output() createItem: EventEmitter<boolean> = new EventEmitter();

  public label: String = 'Nueva categoría';

  constructor(private _categoryServide: CategoryService) {}

  ngOnInit(): void {
    this.label = this.category.id == '' ? 'Nueva categoría' : 'Edita categoría';
  }

  onSubmit() {
    if(this.category.id == '') {
      this._categoryServide
        .createCategory(this.category)
        .subscribe((response) => {
          this.createItem.emit(true);
        });
    }else {
      this._categoryServide
        .editCategory(this.category)
        .subscribe((response) => {
          this.createItem.emit(true);
        });
    }
  }
}
