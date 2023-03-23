import { Component } from '@angular/core';
import { ProductData } from 'src/app/models/interfaces/product.interface';
import { products as data } from 'src/app/data/products';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  products: ProductData[] = data
}
