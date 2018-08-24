import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrActionsPage } from './qr-actions';

@NgModule({
  declarations: [
    QrActionsPage,
  ],
  imports: [
    IonicPageModule.forChild(QrActionsPage),
  ],
})
export class QrActionsPageModule {}
