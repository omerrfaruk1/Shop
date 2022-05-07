import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/category/category';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CategoryServices } from 'src/app/services/category.service';
import { ProductsService } from 'src/app/services/products.service';
import {Product } from "../product"

@Component({
  selector: 'app-product-add-form2',
  templateUrl: './product-add-form2.component.html',
  styleUrls: ['./product-add-form2.component.css'],
  providers:[CategoryServices,ProductsService]
})
export class ProductAddForm2Component implements OnInit {

  constructor(private formBuilder:FormBuilder,private categoryservice:CategoryServices,private productservice:ProductsService,private alertifyservices:AlertifyService) { }
    productAddForm : FormGroup;
    product:Product = new Product();
  categories : Category[];

    createProductAddForm(){
      this.productAddForm = this.formBuilder.group({
        name:["",Validators.required],
        description:["",Validators.required],
        ImageUrl:["",Validators.required],
        price:["",Validators.required],
        categoryId:["",Validators.required]
      })
    }
  ngOnInit() {
    this.createProductAddForm()
    this.categoryservice.getCategories().subscribe(Data => {
      this.categories = Data;
    })
  }
  add(){
    if(this.productAddForm.valid){
      this.product = Object.assign({},this.productAddForm.value);
    }
    
    this.productservice.addProduct(this.product).subscribe(data => {
      this.alertifyservices.success(data.name + " Başarıyla Eklendi")
    })
  }
}
