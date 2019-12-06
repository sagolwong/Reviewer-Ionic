import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { FIREBASE_CONFIG, snapshotToArray } from '../config/firebaseconfig';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  items = [];
  num: number = 0;
  userAvatar: any;
  ref = firebase.database().ref('posts/')
  constructor(private router: Router, private camera: Camera) {
    this.ref.on('value', res => {
      this.items = snapshotToArray(res).filter((item) => {
        if (item.userId === 'user001') {
          this.num = 1;
          return item;
        }
        this.num = 2;
      });
    })
  }

  ngOnInit() { }

  goToNewPost() {
    this.router.navigateByUrl('/tabs/tab2');
  }
  goToUploadAvatar(){
    this.router.navigate(['/uploade-avatar']);
  }
}
