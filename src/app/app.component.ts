import { Component } from '@angular/core';
import { ProductService } from './products/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ProductService]
})

export class AppComponent {
  title = 'Acme Product Management';
}
