import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { FIREBASE_CONFIG, snapshotToArray } from '../config/firebaseconfig';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  items = [];
  num: number = 0;
  image_base64: any;
  userAvatar:any;
  ref = firebase.database().ref('posts/')
  constructor(private router: Router, private storage: Storage, private camera: Camera) {
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

  openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.image_base64 = base64Image;
    }, (err) => {
      console.log(err);
    });
  }
  openGallery() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM
    }

    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.image_base64 = base64Image;
    }, (err) => {
      console.log(err);
    });
  }
  uploadAvatar(){
    firebase.database().ref('profiles/').on('value', res => {
      snapshotToArray(res).filter((user) => {
        if (user.key === "user001") {
          firebase.database().ref('profiles/'+user.key).update({path:this.image_base64});
          this.image_base64="";
        }
      });
    })
    firebase.database().ref('profiles/').on('value', res => {
      snapshotToArray(res).filter((user) => {
        if (user.key === "user001") {
          this.userAvatar = user.path;
        }
      });
    })
  }

}
