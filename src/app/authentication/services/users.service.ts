import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { User } from '../model/user';
import { BaseService } from '../../shared/services/base.service';
import { environment } from 'src/app/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends BaseService<User> {
  private readonly apiUrl: string;
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/auth';
    this.apiUrl = environment.apiUrl + this.resourceEndpoint;
  }

  //funciona xq le puse protected en el base service.
  signup(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, user);
  }

  signin(credentials: { password: any; username: any }): Observable<any> {
    // return this.http.post(`${this.apiUrl}/signin`, credentials);
    return this.http.get<User[]>(`${environment.apiUrl}/users`).pipe(
      map((response) => {
        const matchingUser = response.find(
          (user) => user.username === credentials.username
        );

        return matchingUser;
      })
    );
  }
}
