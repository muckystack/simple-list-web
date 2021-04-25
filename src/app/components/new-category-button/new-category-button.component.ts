import { Component, EventEmitter, Output } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-category-button',
  templateUrl: './new-category-button.component.html',
  styleUrls: ['./new-category-button.component.css'],
})
export class NewCategoryButtonComponent {
  @Output() changeCategories: EventEmitter<boolean> = new EventEmitter();

  public icon = faPlus;

  constructor(private modalService: NgbModal) {}

  openLg(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }

  createItem(modal: any) {
    modal.dismiss();
    this.changeCategories.emit(true);
  }
}
