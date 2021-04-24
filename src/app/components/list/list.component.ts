import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faEdit, faTrash, faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryModel } from 'src/app/models/category.model';
import { ListModel } from 'src/app/models/list.model';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() list: ListModel = new ListModel('', '', '', '', '', '', '', '', '');
  @Output() changeList: EventEmitter<boolean> = new EventEmitter();

  public label = '';

  public icon = [faEdit, faTrash, faExternalLinkSquareAlt];

  public closeResult: string = '';

  private category: CategoryModel = new CategoryModel('', '');

  constructor(
    private modalService: NgbModal,
    private _listService: ListService
  ) {}

  ngOnInit(): void {
    let categories: any = localStorage.getItem('categories');
    categories = JSON.parse(categories);
    categories.map((category: CategoryModel) => {
      if (category.id == this.list.category_fk) {
        this.category = category;
      }
    });
    // this.category = JSON.parse(category);
  }

  openLg(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }

  openLgTrash(content: any) {
    this.label = `¿Quieres borrarlo de ${this.category.name}?`;
    this.modalService.open(content, { size: 'lg' });
  }

  deleteListByCategory(modal: any) {
    this._listService.deleteListByCategory(this.list).subscribe((response) => {
      this.changeList.emit(true);
      modal.dismiss();
    });
  }

  createItem(modal: any) {
    modal.dismiss();
    this.changeList.emit(true);
  }
}
