import { Component } from '@angular/core';
import { GetphotosService } from '../getphotos.service';

@Component({
  selector: 'app-showphotos',
  templateUrl: './showphotos.component.html',
  styleUrl: './showphotos.component.css',
})
export class ShowphotosComponent {
  photoUrl: string = '';
  requestMethod() {
    this.getPhotosService.getPhoto().subscribe((response) => {
      //console.log(response.urls.regular);
      this.photoUrl = response.urls.regular;
    });
  }
  constructor(private getPhotosService: GetphotosService) {
    this.requestMethod();
  }
  onClick() {
    this.requestMethod();
  }
}
