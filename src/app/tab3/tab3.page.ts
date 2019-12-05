import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { FIREBASE_CONFIG, snapshotToArray } from '../config/firebaseconfig';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  items = [];
  favs = [];
  posts = [];
  num: number = 0;
  constructor() {
    firebase.database().ref('favorite/').on('value', res => {
      this.items = snapshotToArray(res).filter((item) => {
        if (item.userId === 'user002') {
          this.num = 1;
          /*firebase.database().ref('posts/').on('value', res => {
            this.favs = snapshotToArray(res).filter((post) => {
              if (post.key === item.postId) {
                post.like = item.like;
                return post;
              }
            });
            console.log(this.favs);
          })*/
          //console.log(this.favs);
          
          return item;
        }
        this.num = 2;
      });
      this.findFav();
      //console.log(this.items);
    })
    //console.log(this.items);
  }
  findFav() {
    firebase.database().ref('posts/').on('value', res => {
      this.favs = this.items.map((item) => {
        return this.posts = snapshotToArray(res).filter((post) => {
          if (post.key === item.postId) {
            post.like = item.like;
            return post;
          }
          //console.log(this.favs);
        });
      })
    })
  }
}
