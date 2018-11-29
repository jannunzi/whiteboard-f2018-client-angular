import {Injectable} from "@angular/core";

@Injectable()
export class UserService {
  users = [
    {_id: 123, username: 'alice', password: 'alice'},
    {_id: 234, username: 'bob', password: 'bob'}
  ];
  findUserByCredentials(username, password) {
    return this.users.find(
      user => user.username === username
        && user.password === password);
  }
  findUserById(userId) {
    userId = parseInt(userId, 0);
    return this.users.find(
      user => user._id === userId);
  }
}
