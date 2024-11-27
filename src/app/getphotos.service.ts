import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface unsplashRespone {
  urls: {
    regular: string;
  };
} //This interface defines body of response will have urls object with regular parameter
@Injectable({
  providedIn: 'root',
})
export class GetphotosService {
  baseUrl = 'https://api.unsplash.com/';
  constructor(private http: HttpClient) {}
  getPhoto() {
    return this.http.get<unsplashRespone>(`${this.baseUrl}/photos/random`, {
      headers: {
        Authorization: 'Client-ID 05zp1UTeZ0sgZtfB1JgUecwEPoM8Z1SW6dBr7xL6Yj4',
      },
    }); //This will return an Observable
  }
}
