import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MiscelaneaService extends BaseService {
  getDepartament(): Observable<any> {
    return this.get(`${environment.api}/departaments`);
  }
}
