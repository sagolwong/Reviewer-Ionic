import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { FIREBASE_CONFIG, snapshotToArray } from '../config/firebaseconfig';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-uploade-avatar',
  templateUrl: './uploade-avatar.page.html',
  styleUrls: ['./uploade-avatar.page.scss'],
})
export class UploadeAvatarPage implements OnInit {

  image_base64: any;
  userAvatar: any;
  constructor(private router: Router, private camera: Camera) { }

  ngOnInit() {
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
  uploadAvatar() {
    firebase.database().ref('profiles/').on('value', res => {
      snapshotToArray(res).filter((user) => {
        if (user.key === "user001") {
          firebase.database().ref('profiles/' + user.key).update({ path: this.image_base64 });
          alert("Success!!");
          this.router.navigate(['//tabs/tab4']);
        }
      });
    })
  }
  cancle() {
    this.image_base64 = "";
  }
}
