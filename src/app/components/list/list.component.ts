import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryModel } from 'src/app/models/category.model';
import { ListModel } from 'src/app/models/list.model';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() list: ListModel = new ListModel('', '', '', '', '');
  @Input() category: CategoryModel = new CategoryModel('', '');
  @Output() changeList: EventEmitter<boolean> = new EventEmitter();

  public label = '';

  public icon = [faEdit, faTrash];

  closeResult: string = '';

  constructor(
    private modalService: NgbModal,
    private _listService: ListService
  ) {}

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
