import { Component, OnInit } from '@angular/core';
import { Deal } from 'src/app/models/system/deal';
import { Administrator } from 'src/app/models/actors/administrator';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {

  administator: Administrator;
  deals: Deal[];

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.administator = history.state.user;
    this.apiService
      .loadDeals(this.administator.id)
      .subscribe((deals: Deal[]) => {
        this.deals = deals;
      }, error => console.log(error));
  }

  approveDeal(deal: Deal): void {
    this.apiService.approveDeal(deal).subscribe(() => {
      this.deals = [];
    });
  }
}
