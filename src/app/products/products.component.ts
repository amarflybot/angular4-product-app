import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './products.service';

@Component({
    selector: 'app-products',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css']
})

export class ProductListComponent implements OnInit, OnChanges, OnDestroy {
    errorMessage: string;
    pageTitle = 'Product List';
    imageWidth = 50;
    imageMargin = 2;
    showImage = false;
    private _listFilter: string;

    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(str: string ) {
        this._listFilter = str;
        this.filterProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filterProducts: IProduct[];
    products: IProduct[];

    constructor(private _productService: ProductService) {
        this.listFilter = '';
    }

    toggleImage() {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log(' In Init Method of Angular Products List Component.');
        this._productService.getProducts().subscribe(
            products => {
                this.products = products;
                this.filterProducts = this.products;
            },
            error => this.errorMessage = <any>error
        );
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('What Changes is: ');
    }

    ngOnDestroy(): void {
        console.log(' In Destroy Method of Angular Products List Component.');
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1 );
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }

}
