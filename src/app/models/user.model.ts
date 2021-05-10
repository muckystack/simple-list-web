export class UserModel {
  constructor(
    public id: String,
    public username: String,
    public email: String,
    public sex: String,
    public password: String,
    public role: String,
    public status: String
    ) {}
  }

export class NewUserModel {
  constructor(
    public email: String,
    public sex: String,
    public password: String,
    public passwordConfirm: String,
  ) {}
}