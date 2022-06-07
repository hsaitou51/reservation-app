import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListingsComponent implements OnInit {
  products: any 

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // this.products = this.productService.getProducts()

    const productsObservable = this.productService.getProducts()
    productsObservable.subscribe(
      (data) => { 
        this.products = data
       },
      (err) => { console.error('次のエラーが発生しました: ' + err) },
      () => { console.log('完了しました!') }
    )

    // const observable = new Observable(subscriber => {
    //   subscriber.next(1);
    //   subscriber.next(2);
    //   subscriber.error('エラー発生');
    //   setTimeout(() => {
    //     subscriber.next(4);
    //     subscriber.complete();
    //   }, 1000);
    // });
    
    // console.log('subscribe前');
    // observable.subscribe({
    //   next(data) { console.log('次のデータが出力されました : ' + data); },
    //   error(err) { console.error('次のエラーが発生しました: ' + err); },
    //   complete() { console.log('完了しました!'); }
    // });
    // console.log('subscribeから抜けました!');

  }

}
