import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private iab: InAppBrowser
  ) { }
  openUrl() {
    const browserRef = this.iab.create('https://ionicframework.com/docs/native/in-app-browser', '_blank', {
      location: 'no',
      footer: 'no',
      clearcache: 'yes',
      clearsessioncache: 'yes',
      toolbar: 'no',
    });
    browserRef.show();
  }
  open() {
    const { Browser} = Plugins;
    Browser.open({url: 'https://ionicframework.com/docs/native/in-app-browser'});
  }
}
