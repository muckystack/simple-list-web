import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CategoryModel } from 'src/app/models/category.model';
import { ListModel } from 'src/app/models/list.model';
import { ListService } from 'src/app/services/list.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-list-of-category',
  templateUrl: './list-of-category.component.html',
  styleUrls: ['./list-of-category.component.css'],
})
export class ListOfCategoryComponent implements OnInit {
  public list: [ListModel] = [
    new ListModel('', '', '', '', '', '', '', '', ''),
  ];
  public listOrigin: [ListModel] = [
    new ListModel('', '', '', '', '', '', '', '', ''),
  ];
  public busqueda: string = '';

  constructor(
    private _listService: ListService,
    private _activatedRoute: ActivatedRoute,
    private _loadingService: LoadingService
  ) {
    this.getListOfCateoryId();
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.getListOfCateoryId();
    });
  }

  getListOfCateoryId(event: boolean = true) {
    if (event) {
      this._loadingService.loading = true;
      this._listService
        .getListOfCateoryId(this._activatedRoute.snapshot.params.id)
        .subscribe((response) => {
          this.listOrigin = response.list;
          this.busqueda == ''
            ? (this.list = response.list)
            : this.filterCategory();
          this._loadingService.loading = false;
        });
    }
  }

  filterCategory() {
    this.list = [new ListModel('', '', '', '', '', '', '', '', '')];
    this.list.pop();

    this.listOrigin.map((item: ListModel) => {
      if (
        item.code.toUpperCase().indexOf(this.busqueda.toUpperCase()) != -1 ||
        item.description.toUpperCase().indexOf(this.busqueda.toUpperCase()) !=
          -1
      ) {
        this.list.push(item);
      }
    });
  }
}
