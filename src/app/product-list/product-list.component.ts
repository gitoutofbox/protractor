import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProductAddComponent } from '../product-add/product-add.component';
import { ProductListService } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public products: Array<any> = [];
  bsModalRef: BsModalRef;
  constructor(
    private productListService: ProductListService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productListService.getProducts().subscribe((resp: any) => {
      this.products = resp.data;
    })
  }
  addProduct() {
    const initialState = {
      title: 'Add Product'
    };
    this.bsModalRef = this.modalService.show(ProductAddComponent, { initialState, class: 'add-product modal-lg' });
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
