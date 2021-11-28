import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const hostUrl = environment.host;

const httpOptions = {
  withCredentials: true, 
}; 
@Injectable({
  providedIn: 'root'
})
export class LinksService {

  constructor(private http: HttpClient) { }
  async getLink(urlToShorten: string){
    return this.http.post(`${hostUrl}/links/link`, {url: urlToShorten}, httpOptions).toPromise()
  }

  async getUserInfo(){
    return this.http.get(`${hostUrl}/links/user`, httpOptions).toPromise()
  }
}
