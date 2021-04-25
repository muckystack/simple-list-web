import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
})
export class AsideComponent {
  @Output() changeCategories: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  createItem() {
    this.changeCategories.emit(true);
  }
}
