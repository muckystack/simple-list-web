import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
})
export class AsideComponent {
  @Output() changeItem: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  createItem() {
    this.changeItem.emit(true);
  }
}
