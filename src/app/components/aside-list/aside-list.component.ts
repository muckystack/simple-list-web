import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryModel } from 'src/app/models/category.model';

@Component({
  selector: 'app-aside-list',
  templateUrl: './aside-list.component.html',
  styleUrls: ['./aside-list.component.css'],
})
export class AsideListComponent {
  @Output() changeList: EventEmitter<boolean> = new EventEmitter();
  
  public icon = faPlus;

  constructor(private modalService: NgbModal) {}

  openLg(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }

  createItem() {
    this.changeList.emit(true);
  }
}
