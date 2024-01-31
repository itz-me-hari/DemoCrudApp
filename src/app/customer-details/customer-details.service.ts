import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailsService {
  constructor(private http: HttpClient, private toastr: ToastrService) { }
  httpHeaders: HttpHeaders = new HttpHeaders({ "Content-Type": "application/json; charset=utf-8" });

  getCustomerDetails(): Observable<any> {
    return this.http.get(environment.webServiceUrl + 'customers').pipe(
      catchError(this.handleError)
    );
  }

  deleteCustomer(req: any): Observable<any> {
    return this.http.delete(environment.webServiceUrl + 'customers/' + req).pipe(
      catchError(this.handleError)
    );
  }


  handleError(Error: any) {
    let errorMessage = '';
    if (Error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = Error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${Error.status}\nMessage: ${Error.message}`;
      console.log(errorMessage);
    }
    return throwError(errorMessage);
  }

}
