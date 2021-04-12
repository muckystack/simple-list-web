export class ListModel {
  constructor(
    public id: String,
    public code: String,
    public description: String,
    public idCategory: String,
    public category_fk: String
  ) {}
}
