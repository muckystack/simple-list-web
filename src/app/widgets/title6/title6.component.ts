import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title6',
  templateUrl: './title6.component.html',
  styleUrls: ['./title6.component.css'],
})
export class Title6Component {
  @Input() class: String = '';
  @Input() label: String = 'Título por definir';

  constructor() {}

}
