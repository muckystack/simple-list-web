import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryModel } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  @Input() category: CategoryModel = new CategoryModel('', '');
  @Output() changeCategories: EventEmitter<boolean> = new EventEmitter();

  public label = '';

  public icon = [faEdit, faTrash];

  closeResult: string = '';

  constructor(
    private modalService: NgbModal,
    private _categoryService: CategoryService
  ) {}

  openLg(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }

  openLgTrash(content: any) {
    this.label = `¿Quieres borrar la categoría ${this.category.name}?`;
    this.modalService.open(content, { size: 'lg' });
  }

  deleteCategoryById(modal: any) {
    this._categoryService
      .deleteCategoyByid(this.category)
      .subscribe((response) => {
        this.changeCategories.emit(true);
        modal.dismiss();
      });
  }

  createItem(modal: any) {
    modal.dismiss();
    this.changeCategories.emit(true);
  }
}
