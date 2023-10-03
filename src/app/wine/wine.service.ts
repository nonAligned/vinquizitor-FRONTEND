import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WineList } from '../models/wine-list.model';
import { Wine } from '../models/wine.model';

const BASE_URL = "http://localhost:5000/api";

@Injectable({
  providedIn: 'root'
})
export class WineService {


  constructor(private http: HttpClient) { }

  getAllWines(): Observable<WineList> {

    return this.http.get<WineList>(BASE_URL+"/varieties/find").pipe(map(res => {
      return new WineList(res);
    }));
  }

  getWineById(id: string): Observable<Wine> {
    return this.http.get(BASE_URL+"/varieties/find/"+id).pipe(map(data => {
      return new Wine(data);
    }));
  }
}
