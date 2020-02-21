import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.page.html',
  styleUrls: ['./category-list.page.scss'],
})
export class CategoryListPage implements OnInit {
  status = false;
  listcategy:Array<any>=[
    {name:'Thời trang nam'},
    {name:'Thời trang  nữ'},
    {name:'Váy bé gái'},
]
listcategy1:Array<any>=[
  {name:'Thời trang nam '},
  {name:'Thời trang nam'},
 
]
  constructor() { }

  ngOnInit() {
  }
  change() {
    this.status = !this.status;
  }
}
