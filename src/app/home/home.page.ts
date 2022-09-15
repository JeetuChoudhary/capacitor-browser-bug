import { Component } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  async openInAppBrowser() {
    const url = 'https://www.youtube.com/embed/A0MhMwF_LyY';
    await Browser.open({ url });
  }
}
