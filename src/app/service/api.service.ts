import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/index";
import { User } from '../models/actors/user';
import { Item } from '../models/system/item';
import { Bet } from '../models/system/bet';
import { Ask } from '../models/system/ask';
import { Deal } from '../models/system/deal';
import { Order } from '../models/system/order';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  login(loginPayload: User): Observable<User> {
    return this.http.post<User>('http://10.0.2.2:8080/marketplace/login',
      JSON.stringify(loginPayload), this.httpOptions);
  }

  loadItems(): Observable<Item[]> {
    return this.http.get<Item[]>('http://10.0.2.2:8080/marketplace/items');
  }

  placeBet(bet: Bet): Observable<number> {
    return this.http.post<number>('http://10.0.2.2:8080/buyer/bet/' + encodeURIComponent(bet.buyer.id),
      JSON.stringify(bet), this.httpOptions)
  }

  placeAsk(ask: Ask): Observable<number> {
    return this.http.post<number>('http://10.0.2.2:8080/seller/ask/' + encodeURIComponent(ask.seller.id),
      JSON.stringify(ask), this.httpOptions)
  }

  loadBets(byuerId: number): Observable<Bet[]> {
    return this.http.get<Bet[]>('http://10.0.2.2:8080/buyer/getBets',
      { params: { id: byuerId.toString() } });
  }

  loadOrders(byuerId: number): Observable<Order[]> {
    return this.http.get<Order[]>('http://10.0.2.2:8080/buyer/getOrders',
      { params: { id: byuerId.toString() } });
  }

  loadDeals(adminId: number): Observable<Deal[]> {
    return this.http.get<Deal[]>('http://10.0.2.2:8080/admin/getDeals',
      { params: { id: adminId.toString() } });
  }

  loadLowestAsks(): Observable<Ask[]> {
    return this.http.get<Ask[]>('http://10.0.2.2:8080/marketplace/getLowestAsks');
  }


  loadHighestBets(): Observable<Bet[]> {
    return this.http.get<Bet[]>('http://10.0.2.2:8080/marketplace/getHighestBets');
  }

  approveDeal(deal: Deal): Observable<Ask[]> {
    return this.http.get<Ask[]>('http://10.0.2.2:8080/admin/approve/' + encodeURIComponent(deal.id));
  }
}
