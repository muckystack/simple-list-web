import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryModel } from 'src/app/models/category.model';
import { ListModel } from 'src/app/models/list.model';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-form-new-list',
  templateUrl: './form-new-list.component.html',
  styleUrls: ['./form-new-list.component.css'],
})
export class FormNewListComponent implements OnInit {
  @Input() list: ListModel = new ListModel('', '', '', '', '', '');
  @Output() createItem: EventEmitter<boolean> = new EventEmitter();

  public label: String = 'Nueva categoría';

  constructor(
    private _listServide: ListService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.label = this.list.id == '' ? 'Nuevo listado' : 'Edita listado';
  }

  onSubmit() {
    this.list.idCategory = this._activatedRoute.snapshot.params.id;
    if (this.list.id == '') {
      this._listServide.createList(this.list).subscribe((response) => {
        this.createItem.emit(true);
      });
    } else {
      this._listServide.editList(this.list).subscribe((response) => {
        this.createItem.emit(true);
      });
    }
  }
}
