import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    //For blocking routing 
    if (sessionStorage.getItem("user") != "admin") {
      this.router.navigate(['']);
    } else {
    }
  }

}
