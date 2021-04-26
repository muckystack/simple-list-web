import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-register-button',
  templateUrl: './new-register-button.component.html',
  styleUrls: ['./new-register-button.component.css'],
})
export class NewRegisterButtonComponent {
  @Output() changeCategories: EventEmitter<boolean> = new EventEmitter();
  @Input() modalOption: String = 'category';
  @Input() label: String = 'Nueva categoría';

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
