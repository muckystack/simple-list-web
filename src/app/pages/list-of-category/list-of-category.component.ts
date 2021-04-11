import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryModel } from 'src/app/models/category.model';
import { ListModel } from 'src/app/models/list.model';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-of-category',
  templateUrl: './list-of-category.component.html',
  styleUrls: ['./list-of-category.component.css'],
})
export class ListOfCategoryComponent {
  public list: [ListModel] = [new ListModel('', '', '', '')];
  public category: CategoryModel = new CategoryModel('', '');

  constructor(
    private _listService: ListService,
    private _activeRoute: ActivatedRoute
  ) {
    this.getListOfCateoryId();
  }

  getListOfCateoryId() {
    this._listService
      .getListOfCateoryId(this._activeRoute.snapshot.params.id)
      .subscribe((response) => {
        this.list = response.list;
        console.log(this.list);
      });
  }
}
