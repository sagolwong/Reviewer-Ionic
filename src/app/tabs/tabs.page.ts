import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private router: Router) { }

  goToLogin(){
    this.router.navigate(['/login']);
  }
 

}
