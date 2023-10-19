import { HttpClient, HttpParams } from '@angular/common/http';
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

  getAllWines(params?: any): Observable<WineList> {
    let queryParams = {};

    if(params) {
      queryParams = {
        params: new HttpParams()
          .set("filter", params.filter && params.filter.toString() || '')
          .set("searchString", params.searchString && params.searchString.toString() || '')
          .set("sort", params.sort || '_id:1')
      }
    }

    return this.http.get<WineList>(BASE_URL+"/varieties/find", queryParams).pipe(map(res => {
      return new WineList(res);
    }));
  }

  getWineById(id: string): Observable<Wine> {
    return this.http.get(BASE_URL+"/varieties/find/"+id).pipe(map(data => {
      return new Wine(data);
    }));
  }
}
