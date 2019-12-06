import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadeAvatarPage } from './uploade-avatar.page';

const routes: Routes = [
  {
    path: '',
    component: UploadeAvatarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadeAvatarPageRoutingModule {}
