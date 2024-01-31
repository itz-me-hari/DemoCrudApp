import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }

  logout() {
    this.toastr.success("Logged out successfully!");
    this.router.navigateByUrl('/');
  }

  navToCreate() {
    history.replaceState(null, '', window.location.href);
    this.router.navigateByUrl('/create-customer');
  }
}