import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr'
const hostUrl = environment.host;

const httpOptions = {
  withCredentials: true, 
}; 
@Injectable({
  providedIn: 'root'
})
export class LinksService {

  constructor(private http: HttpClient, private toastr: ToastrService) { }
  async getLink(urlToShorten: string){
    try{

      const result = await this.http.post(`${hostUrl}/links/link`, {url: urlToShorten}, httpOptions).toPromise() 
      return result;
    }catch(err:any){
      console.log(err.error.message)
      this.toastr.error(err?.error?.message && err?.error?.message[0])
      return Promise.reject(err)
    }
  }

  async getUserInfo(){
    return this.http.get(`${hostUrl}/links/user`, httpOptions).toPromise()
  }
}
