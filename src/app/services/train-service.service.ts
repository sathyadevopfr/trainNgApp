import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { environment } from '../../environments/environment';
import { Passenger, ResponseModel } from '../modals/station';
import { CONSTANT } from '../constant/const';
import { Observable } from 'rxjs';
 import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class TrainServiceService {
  apiEndPoint: string = '';
  constructor(private http: HttpClient) {
    this.apiEndPoint = environment.ApiEndPoint;
  }

  createPassenger(userObj: Passenger): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(
      this.apiEndPoint + CONSTANT.ENPOINTS.ADD_UPDATE_PASSENGER,
      userObj
    );
  }
  loginPassenger(userObj: Passenger): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(
      this.apiEndPoint + CONSTANT.ENPOINTS.LOGIN_USER,
      userObj
    );
  }
  getTrainsBetweenStations(serachObj: any): Observable<ResponseModel> {
    return this.http.get<ResponseModel>(
      this.apiEndPoint +
        CONSTANT.ENPOINTS.GET_TRAINS_BETWEEN_STATIONS +
        `?departureStationId=${serachObj.fromStationId}&arrivalStationId=${serachObj.toStationId}&departureDate=${serachObj.dateOfTravel}`
    );
  }
}
