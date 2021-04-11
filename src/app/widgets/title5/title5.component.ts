import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title5',
  templateUrl: './title5.component.html',
  styleUrls: ['./title5.component.css'],
})
export class Title5Component {
  @Input() class: String = 'font-weight-bold mb-5';
  @Input() label: String = 'Título por definir';

  constructor() {}
}
