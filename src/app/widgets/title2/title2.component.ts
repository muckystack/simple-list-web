import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title2',
  templateUrl: './title2.component.html',
  styleUrls: ['./title2.component.css'],
})
export class Title2Component {
  @Input() class: String = 'font-weight-bold mb-5';
  @Input() label: String = 'Titulo 2';

  constructor() {}
}
