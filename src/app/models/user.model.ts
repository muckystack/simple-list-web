export class UserModel {
  constructor(
    public id: String,
    public username: String,
    public email: String,
    public password: String,
    public role: String,
    public status: String,
    public updatedAt: String,
    public createdAt: String,
  ) {}
}