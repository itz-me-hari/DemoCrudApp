import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerDetailsService } from './customer-details.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  public dataSource = new MatTableDataSource;
  displayedColumns: string[] = ['position', 'name', 'age', 'mobile', 'email', 'location', 'edit', 'delete'];
  constructor(private service: CustomerDetailsService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.getCustomerDetails()
  }

  getCustomerDetails() {
    this.service.getCustomerDetails().subscribe(response => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      console.log("response: ", response)
    },
      (err) => {
        this.toastr.error('Crud Endpoint Expired! Please update new Crud Endpoint!')
      },
    )
  }

  editRecord(obj: any) {
    this.router.navigateByUrl('/create-customer', { state: { action: 'edit', id: obj['_id'] } });
  }

  deleteRecord(obj: any) {
    this.service.deleteCustomer(obj['_id']).subscribe(response => {
      this.toastr.success("Customer deleted successfully!")
      this.getCustomerDetails()
    })
  }
}
