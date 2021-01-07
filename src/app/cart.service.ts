import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CartService {
  items = [];
  // 添加商品到购物车
  addToCart(product) {
    this.items.push(product);
  }
  // 收集用户加到购物车中的商品，并返回每个商品及其数量。
  getItems() {
    return this.items;
  }
  // 清空购物车，返回一个空数组
  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get("/assets/shipping.json");
  }

  constructor(private http: HttpClient) {}
}
