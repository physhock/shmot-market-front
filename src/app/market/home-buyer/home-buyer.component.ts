import { Component, OnInit } from '@angular/core';
import { Buyer } from 'src/app/models/actors/buyer';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-buyer',
  templateUrl: './home-buyer.component.html',
  styleUrls: ['./home-buyer.component.css']
})
export class HomeBuyerComponent implements OnInit {

  private buyer: Buyer;

  constructor(private apiService: ApiService, private router: Router) {
    this.buyer = JSON.parse(this.router.getCurrentNavigation().extras.state);
  }

  ngOnInit() {
  }

}
