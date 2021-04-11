import { Component, Input, OnInit } from '@angular/core';
import { ListModel } from 'src/app/models/list.model';

@Component({
  selector: 'app-form-new-list',
  templateUrl: './form-new-list.component.html',
  styleUrls: ['./form-new-list.component.css'],
})
export class FormNewListComponent implements OnInit {
  @Input() list: ListModel = new ListModel('', '', '', '');
  public label: String = 'Nueva categoría';

  constructor() {}

  ngOnInit(): void {
    this.label = this.list.id == '' ? 'Nuevo listado' : 'Edita listado';
  }
}
