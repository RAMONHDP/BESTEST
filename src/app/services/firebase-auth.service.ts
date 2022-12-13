import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from '@angular/fire/auth';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
@Injectable()
export class FirebaseAuthService {
  constructor(private auth: Auth) {
    this.user = new User();
    this.user$ = new Subject();
  }

  private user: User;
  private user$: Subject<User>;

  getFirebaseUser(): any {
    return this.user;
  }

  logout() {
    signOut(this.auth);
  }

  resetPassword(email: string) {
    return sendPasswordResetEmail(this.auth, email);
  }

  login(email: string, password: string): Observable<User> {
    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        this.user.email = email;
        this.user.userSession.isValidUser = true;
        this.user$.next(this.user);
      })
      .catch((error) => {
        this.user.userSession.errorMessage = error.message;
        this.user.userSession.isValidUser = false;
        this.user$.next(this.user);
      });
    return this.user$.asObservable();
  }
}
