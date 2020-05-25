import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Item } from 'src/app/models/system/item';
import { Buyer } from 'src/app/models/actors/buyer';
import { Bet } from 'src/app/models/system/bet';
import { MatDialog } from '@angular/material';
import { ModalWindowComponent } from '../modal-window/modal-window.component';
import { Ask } from 'src/app/models/system/ask';
import { Order } from 'src/app/models/system/order';

@Component({
  selector: 'app-home-buyer',
  templateUrl: './home-buyer.component.html',
  styleUrls: ['./home-buyer.component.css']
})
export class HomeBuyerComponent implements OnInit {

  buyer: Buyer;
  items: Item[];
  asks: Ask[];

  constructor(private apiService: ApiService, public dialog: MatDialog) { }

  ngOnInit() {
    this.buyer = history.state.user;
    this.apiService
    .loadLowestAsks()
    .subscribe((asks: Ask[]) => {
      this.asks = asks;
    }, error => console.log(error));
    this.apiService
      .loadItems()
      .subscribe((items: Item[]) => {
        this.items = items;
      }, error => console.log(error));
      this.apiService
      .loadOrders(this.buyer.id)
      .subscribe((orders: Order[]) => {
        this.buyer.orders = orders;
      }, error => console.log(error));
  }

  placeBet(item: Item): void {
    let money: number;
    const dialogRef = this.dialog.open(ModalWindowComponent, {
      width: '150px',
      data: { text: "Please enter your bet", bet: money }
    })
    dialogRef.afterClosed().subscribe(result => {
      let bet = new Bet(item, result, this.buyer);
      this.apiService.placeBet(bet).subscribe(id => {
        bet.id = id;
        this.buyer.bets.push(bet);
      });
    })
  }
}
