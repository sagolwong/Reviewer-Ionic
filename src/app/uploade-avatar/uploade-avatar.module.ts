import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadeAvatarPageRoutingModule } from './uploade-avatar-routing.module';

import { UploadeAvatarPage } from './uploade-avatar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadeAvatarPageRoutingModule
  ],
  declarations: [UploadeAvatarPage]
})
export class UploadeAvatarPageModule {}
