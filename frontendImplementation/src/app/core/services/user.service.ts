import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  signup(data: any): Observable<any> {
    return this.post(`${environment.api}/signup`, data);
  }
}
