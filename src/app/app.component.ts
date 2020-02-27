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
  title = 'Accelerated Learning';
  subtitle = 'All accelerated learning!'

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
      title: 'Imprint',
      url: '/tabs/tab2',
      icon: 'paper-plane'
    },
    {
      title: 'Data Privacy',
      url: '/tabs/tab3',
      icon: 'person-circle'
    },

  ];
}
