import { Component, Input } from '@angular/core';
import { ProductData } from 'src/app/models/interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: ProductData;

  details = false;

  showDetails() {
    return this.details = !this.details
  }
}
