import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import {FIREBASE_CONFIG} from '../config/firebaseconfig';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private router: Router) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }
 

}
