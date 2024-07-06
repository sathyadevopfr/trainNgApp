import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { Passenger, ResponseModel } from './modals/station';
import { TrainServiceService } from './services/train-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  registerObj: Passenger = new Passenger();
  loggedUserData: any;

  @ViewChild('myModal') myModal: ElementRef | undefined;
  @ViewChild('myLogin') myLogin: ElementRef | undefined;
  constructor(
    private trainService: TrainServiceService,
   
  ) {
    const localdata = localStorage.getItem('trainUser');
    if (localdata != null) {
      this.loggedUserData = JSON.parse(localdata);
    }
  }

  openRegister() {
    if (this.myModal != null) {
      this.myModal.nativeElement.style.display = 'block';
    }
  }
  closeRegister() {
    if (this.myModal != null) {
      this.myModal.nativeElement.style.display = 'none';
    }
  }

  openLogin() {

    if (this.myLogin != null) {
      this.myLogin.nativeElement.style.display = 'block';
     
    }
  }
  closeLogin() {
    if (this.myLogin != null) {
      this.myLogin.nativeElement.style.display = 'none';
    }
  }
  // login() {}

  onReg() {
    this.trainService
      .createPassenger(this.registerObj)
      .subscribe((res: ResponseModel) => {
        if (res.result) {
          alert('Registration Success');
          localStorage.setItem('trainUser', JSON.stringify(res.data));
          this.loggedUserData = res.data;
          this.closeRegister();
        } else {
          alert(res.message);
        }
      });
  }
  Logout() {
    localStorage.removeItem('trainUser');
    this.loggedUserData = undefined;
  }
  onLogin() {
    this.trainService
      .loginPassenger(this.registerObj)
      .subscribe((result: any) => {
        if (result.result) {
          alert('Login SuccessFull');
          localStorage.setItem('trainUser', JSON.stringify(result.data));
          this.loggedUserData = result.data;
          this.closeLogin();
        } else {
          alert(result.message);
        }
      });
  }
}
