import {Injectable} from "@angular/core";
import {AngularFireAuth} from "@angular/fire/auth";
import firebase from "firebase";
import UserInfo = firebase.UserInfo;

@Injectable({providedIn: 'root'})
export class AuthService {
  private userData?: firebase.User | null;


  constructor(private fireAuth: AngularFireAuth) {}


  login(credentials: {email: string, password: string}) {
    return this.fireAuth.signInWithEmailAndPassword(credentials.email, credentials.password)
    .then(user => this.userData = user.user);
  }

  get user() {
    return this.userData;
  }


  register(credentials: {email: string, password: string}) {
    return this.fireAuth.createUserWithEmailAndPassword(credentials.email, credentials.password);
  }

  logout() {
    return this.fireAuth.signOut();
  }

}
