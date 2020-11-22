import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  clients: any[];
  dataTable: any;

  constructor(private http: HttpClient,private chRef:ChangeDetectorRef){}

  ngOnInit(): void {
    
    this.http.get('https://5a5a9e00bc6e340012a03796.mockapi.io/clients')
    .subscribe((data: any[]) =>{ 
      this.clients = data;
      this.chRef.detectChanges();

      const table: any = $('table');
      this.dataTable = table.DataTable();
    });
  }
  // ngAfterViewInit():void{
  //   const table: any = $('table');
  //   this.dataTable = table.DataTable();
  // } 
}
