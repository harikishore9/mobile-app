import { Component } from '@angular/core';
import { Network, SpinnerDialog } from 'ionic-native';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private network: string;
  private speed: string;
  constructor(public navCtrl: NavController) {

  }
  ionViewDidEnter() {
    this.network = Network.type;
    this.speed = Network.downlinkMax;
    SpinnerDialog.show("Spinner Dialog Demo", "This is spinner dialog content", () => {
      console.error("Hiding spinner dialog using cancel");
      SpinnerDialog.hide();
    });
  }

}
