import { Component, OnInit } from '@angular/core';
import { CategoryServices } from 'src/app/services/category.service';
import { Product } from '../product';
import { Category } from '../../category/category';
import { NgForm } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-product-add-forms1',
  templateUrl: './product-add-forms1.component.html',
  styleUrls: ['./product-add-forms1.component.css'],
  providers:[CategoryServices,ProductsService]
})
export class ProductAddForms1Component implements OnInit {

  constructor(private CategoryServices : CategoryServices,private productservices : ProductsService,private alertifyservices : AlertifyService) { }
  model : Product = new Product();
  categories : Category[];
  ngOnInit(): void {
    this.CategoryServices.getCategories().subscribe(Data => {
      this.categories = Data;
    })
  }
  add(form:NgForm){
    this.productservices.addProduct(this.model).subscribe(data => {
      this.alertifyservices.success(data.name + " Başarıyla Eklendi")
    })
  }

}
