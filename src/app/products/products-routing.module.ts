import { SelectorMatcher } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';

import { ProductsComponent } from './products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewAllProductsByCategoryComponent } from './view-all-products-by-category/view-all-products-by-category.component';
import { ViewAllProductsByDateComponent } from './view-all-products-by-date/view-all-products-by-date.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  { path: '',
   component:ViewAllProductComponent },
  {
    path:'create-product',
    component:CreateProductComponent
  },
  // {
  //   path:'view-product',
  //   component:ViewProductComponent
  // },
  // {
  //   path:'list-products',
  //   component:ViewAllProductComponent
  // },
  {
    path:'search',
    component:ViewAllProductsByCategoryComponent
  },
  {
    path:'search-date',
    component:ViewAllProductsByDateComponent
  },
  {
    path:'delete-product/:id',
    component:DeleteProductComponent
  },
  {
    path:'view-product/:id',
    component:ViewProductComponent
  },
  {
    path:'update-product/:id',
    component:UpdateProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
