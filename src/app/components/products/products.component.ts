import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ProductData } from 'src/app/models/interfaces/product.interface';
import { ModalService } from 'src/app/services/modal.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // products: ProductData[] = [];
  loading = false;
  term = ''
  products$: Observable<ProductData[]>

  constructor(
    private productsService: ProductsService,
    public modalService: ModalService) {}

  ngOnInit(): void {
    this.loading = true;
    // this.productsService.getAllProducts().subscribe((products) => {
    //   this.products = products
    // })
    // this.loading = false;

    this.products$ = this.productsService.getAllProducts().pipe(
      tap(() => this.loading = false)
    )
  }
}
