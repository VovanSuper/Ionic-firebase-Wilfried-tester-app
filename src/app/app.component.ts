import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  public selectedIndex = 0;
  public appPages = [
    {
      title: 'About',
      url: '/tabs/tab1',
      icon: 'menu'
    },
    {
      title: 'Outbox',
      url: '/tabs/tab2',
      icon: 'paper-plane'
    },
    {
      title: 'Favorites',
      url: '/tabs/tab3',
      icon: 'person-circle'
    },

  ];
}
