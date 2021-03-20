import { Component, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public products: Array<any> =[];
  constructor(
    private productListService: ProductListService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productListService.getProducts().subscribe((resp:any) => {
      this.products = resp.data;
    })
  }
}
