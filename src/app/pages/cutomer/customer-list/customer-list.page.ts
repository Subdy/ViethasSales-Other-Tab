import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.page.html',
  styleUrls: ['./customer-list.page.scss'],
})
export class CustomerListPage implements OnInit {
  list_staff1:Array<any>=[
    {
      id:1,
    name:'nguyễn van a',
    phone:'23456543346',
    code:'KH0923456',
    sell:'Đã mua 5,000,120'
  },
  {
    id:2,
    name:'nguyễn van a',
    phone:'23456543346',
    code:'KH0923456',
    sell:'Đã mua 5,000,120'
  },
  {
    id:3,
    name:'nguyễn van a',
    phone:'23456543346',
    code:'KH0923456',
    sell:'Đã mua 5,000,120'
  },
  {
    id:4,
    name:'nguyễn van a',
    phone:'23456543346',
    code:'KH0923456',
    sell:'Đã mua 5,000,120'
  },
  {
    id:5,
    name:'nguyễn van a',
    phone:'23456543346',
    code:'KH0923456',
    sell:'Đã mua 5,000,120'
  },
  {
    id:6,
    name:'nguyễn van a',
    phone:'23456543346',
    code:'KH0923456',
    sell:'Đã mua 5,000,120'
  },
]
  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotocustomerdetail(){
    this.router.navigateByUrl('customer-detail');
  }
}
