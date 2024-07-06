import { Component, OnInit } from '@angular/core';
import { StationsService } from '../../services/stations.service';
import { ResponseModel, Station, } from '../../modals/station';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  stationList: Station[] = [];
  travelObj: any = {
    fromStationId: '',
    toStationId: '',
    dateOfTravel: '',
  };
  constructor(private stationService: StationsService,
    private router: Router) { }

  ngOnInit() {
    this.loadStations();
  }
  loadStations() {
    this.stationService.getAllStations().subscribe(
      (data: ResponseModel) => {
        this.stationList = data.data;
      },
      (error) => {
        alert('Error Occured' + JSON.stringify(error));
      }
    );
  }
  onSearch() {
    this.router.navigate(['search', this.travelObj.fromStationId, this.travelObj.toStationId, this.travelObj.dateOfTravel])
}
}
