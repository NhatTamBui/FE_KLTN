import {Component, OnInit ,OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
   private kommunicateLoaded = false;

  constructor() {}

  ngOnInit(): void {
    this.loadKommunicate();
  }

  /** ================================
   *  TÍCH HỢP KOMMUNICATE CHATBOT
   *  ================================ */
  loadKommunicate() {
    if (this.kommunicateLoaded) return;
    this.kommunicateLoaded = true;

    (function (d, m) {
      var kommunicateSettings = {
        appId: '13260c98e3e7f4b34528286ad2da6833b',
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
        
      };

      var s = d.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://widget.kommunicate.io/v2/kommunicate.app';

      var h = d.getElementsByTagName('head')[0];
      h.appendChild(s);

      (window as any).kommunicate = m;
      m._globals = kommunicateSettings;

    })(document, (window as any).kommunicate || {});
  }

  /** ================================
   *  DỌN DẸP WIDGET KHI RỜI PAGE
   *  ================================ */
  ngOnDestroy(): void {
    const widgetFrame = document.getElementById('kommunicate-widget-iframe');
    widgetFrame?.remove();
  }

}
