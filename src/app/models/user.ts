import { UserSession } from './user.session';

export class User {
  id: string;
  email: string;
  name: string;
  userSession: UserSession;

  constructor() {
    this.userSession = new UserSession();
  }
}
