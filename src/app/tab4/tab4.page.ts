import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {FIREBASE_CONFIG, snapshotToArray} from '../config/firebaseconfig';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  items = [];
  ref = firebase.database().ref('posts/')
  constructor() { 
    this.ref.on('value', res =>{
      this.items = snapshotToArray(res);
    })
  }

  ngOnInit() {}

}
