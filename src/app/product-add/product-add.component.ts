import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  public productForm: any; 
  public title: string ='';
  public submitted: boolean = false;
  constructor(
    private fb: FormBuilder,
    public bsModalRef: BsModalRef
  ) {
    this.productForm = this.fb.group({
      id: [""],
      name: ["",[Validators.required]],
      price: ["", [Validators.required]],
      description:[]
    })
   }

  ngOnInit(): void {
  }
  save() {
    this.submitted = true;
  }
}
