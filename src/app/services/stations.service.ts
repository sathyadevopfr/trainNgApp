import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { CONSTANT } from '../constant/const';
import { Observable } from 'rxjs';
import { ResponseModel, Station } from '../modals/station';

@Injectable({
  providedIn: 'root'
})
export class StationsService {
  apiEndPoint: string = '';

  constructor(private http: HttpClient) { 
    this.apiEndPoint = environment.ApiEndPoint;
  }
  getAllStations():Observable<ResponseModel> {
    
 return this.http.get<ResponseModel>(
   this.apiEndPoint + CONSTANT.ENPOINTS.GET_ALL_STATIONS
 );
  }
  
}
