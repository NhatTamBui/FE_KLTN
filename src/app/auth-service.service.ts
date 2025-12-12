import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from "./auth.service";
import {CONSTANT} from "./common/constant";
import {ProfileService} from './common/profile.service';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService implements HttpInterceptor {

  constructor(private authService: AuthService, private profileService: ProfileService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let apiEndPoint = new URL(req.url, environment.apiUrl);
    const token = this.authService.getToken();
    // handle if running on production
    if (this.profileService.isDevelopmentMode || req.url.includes('assets')) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    } else {
      const captcha = document.cookie.split(';').find((item: string) => item.includes(CONSTANT.captcha));
      req = req.clone({
        url: apiEndPoint.href,
        withCredentials: true,
        setHeaders: {
          Authorization: `Bearer ${token}`,
          'Captcha': captcha ? captcha.split('=')[1] : ''
        }
      });
    }
    return next.handle(req);
  }
}
