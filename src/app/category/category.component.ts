import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryServices } from "../services/category.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryServices]
})
export class CategoryComponent implements OnInit {

  constructor(private CategoryServices:CategoryServices) {}
  title = "Kategori Listesi";
  categories : Category[];
  ngOnInit(): void {
    this.CategoryServices.getCategories().subscribe(Data => {
      this.categories = Data;
    })
  }

}
