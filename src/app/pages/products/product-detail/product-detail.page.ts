import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  listitem:Array<any>=[
    {
      name:'Áo Khoát Chống Nắng',

      codeitem:'GJ304',
      barcode:'234567876543',
      unti:'Cái',
      size:'M',
      color:'Tím',
      entryprice:'12300',
      price:'120.000 VND',
      dateadded:'12/10/2019',
      supplier:'Lime Oragen',
      already:25,
      inventory:21,
      
     
      fashion:'Thời Trang Phụ Nữ'
  }
];
listedit1:Array<any>=[
  {id:1,
    name:"S"
  },
  {id:2,
    name:"M"
  },
  {id:3,
    name:"L"
  },
  {id:4,
    name:"XL"
  }
];
listedit2:Array<any>=[
  {id:1,
    name:"tất cả"
  },
  {id:2,
    name:"thời trang nữ "
  },
  {id:3,
    name:"thời trang nam"
  },
  {id:4,
    name:"thời trang bé gái"
  }
];
  constructor() { }

  ngOnInit() {
  }

}
