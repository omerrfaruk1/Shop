import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductsService],
})
export class ProductComponent implements OnInit {
  constructor(
    private alertifyServices: AlertifyService,
    private productServices: ProductsService,
    private activedRoute : ActivatedRoute
  ) {}
  title = 'Ürün Listesi';
  filterText = '';
  products: Product[];

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params => {
      this.productServices.getProducts(params["categoryId"]).subscribe((data) => {
      this.products = data;
    });
    }))
    
  }
  addToCart(product: any) {
    this.alertifyServices.success(product.name + ' added');
  }
}
