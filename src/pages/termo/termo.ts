import { Home } from '../pages';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { App, NavParams } from 'ionic-angular';

export const KEY = '_termo';

@Component({
  selector: 'page-termo',
  templateUrl: 'termo.html'
})
export class TermoPage {
  hiddenButton: boolean = false;

  constructor(
    private app: App,
    private storage: Storage,
    navParams: NavParams
  ) {
    if (navParams.get('internal') === true) {
      this.hiddenButton =  true;
    }
  }

  ngAfterViewInit() {
    this.storage.get(KEY).then((data) => {
      if (data === true) {
        this.hiddenButton = true;
      }
    });
  }

  accept() {
    this.storage.set(KEY, true);
    this.app.getActiveNav().setRoot(Home);
  }
}