export class ListModel {
  constructor(
    public id: String,
    public code: String,
    public description: String,
    public link: String,
    public status: String,
    public idCategory: String,
    public category_fk: String,
    public updatedAt: String,
    public createdAt: String
  ) {}
}
