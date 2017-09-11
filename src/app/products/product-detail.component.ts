import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle = 'Product Details';
  product: IProduct;

  constructor(private _route: ActivatedRoute,
              private _productService: ProductService,
              private _router: Router) {
  }

  ngOnInit() {
    let id: number = +this._route.snapshot.paramMap.get('id');
    console.log(`Id Selected: ${id}`);
    this._productService.getProductById(id).subscribe(
      product => {
      this.product = product;
      }
    );
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }

}
