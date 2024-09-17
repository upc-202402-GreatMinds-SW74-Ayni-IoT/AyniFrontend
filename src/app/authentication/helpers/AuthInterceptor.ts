import {Injectable} from "@angular/core";
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {TokenStorageService} from "../services/token-storage.service";
import {Observable} from "rxjs";

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private token: TokenStorageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authenticationRequest = req;
    const token = this.token.getToken();
    if(token != null){
      authenticationRequest = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
      });
    }
    console.log(authenticationRequest);
    return next.handle(authenticationRequest);
  }
}

export const authInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
]
