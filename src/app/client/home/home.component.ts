// import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
// import {HttpClient} from '@angular/common/http';
//
// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {
//   constructor(private http: HttpClient, private renderer: Renderer2, private el: ElementRef) {
//   }
//
//   // ngOnInit(): void {
//   //   this.http.get('api/kommunicate/bot/get-bot-active')
//   //     .subscribe({
//   //       next: (res: any) => {
//   //         this.loadKommunicateScript(res.data.script);
//   //       },
//   //       error: () => {
//   //       }
//   //     });
//   // }
//   //
//   // loadKommunicateScript(scriptContent: string): void {
//   //   // check if script already exists
//   //   const scriptElement = document.getElementById('kommunicate-widget-iframe');
//   //   if (scriptElement) {
//   //     return;
//   //   }
//   //   const script = this.renderer.createElement('script');
//   //   script.type = 'text/javascript';
//   //   script.text = scriptContent;
//   //   this.renderer.appendChild(this.el.nativeElement, script);
//   // }
//
// }
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
        appId: '11d506f4dc67b18ae45d5d0cdea30861b',
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
