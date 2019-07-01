import { Component, OnInit } from '@angular/core';
import { Account } from "../../account";
import { AccountService } from "../../account.service";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-account-cash',
  templateUrl: './account-cash.component.html',
  styleUrls: ['./account-cash.component.css']
})
export class AccountCashComponent implements OnInit {

  constructor(private accountService: AccountService, private router: Router, private http: HttpClient) { }
  accountList: Account[];
  displayedColumns = ['account', 'availablecash'];
  showAll = false;
  limit = 3;

  ngOnInit() {
    this.fetchAccounts();
  }

/* fetchAccounts() Fetches the data from the data response model*/ 
  fetchAccounts() {
    this.accountService
      .getAccountDetail()
      .subscribe((data: Account[]) => {
        this.accountList = data;
        console.log(data)

      });
  }
/*loadMore() will display the rest of the items */ 
  loadMore() {
    this.showAll = true;
    this.limit = this.accountList.length;
  }

/*sortByAccount() does sorting based on account's number when clicked on  Account Header*/
  sortByAccount(event) {
    this.sortDefault()
    this.setClassOrder(event, sort)
    function sort(order, account) {
      account.sort(function (a, b) {
        let len = a.account_number.length;
        if (order == "asc") {
          return parseInt(a.account_number.substring(len - 4)) - parseInt(b.account_number.substring(len - 4));
        }
        else {
          return parseInt(b.account_number.substring(len - 4)) - parseInt(a.account_number.substring(len - 4));
        }
      })
    }
  }
/*sortByCash() does sorting based on account's available cash when clicked on  Available Cash or Todays Change Header*/
  sortByCash(event) {
    this.sortDefault()
    this.setClassOrder(event, sort)
    function sort(order, account) {
      account.sort(function (a, b) {
        if (order == "asc") {
          return a.available_cash - b.available_cash;
        }
        else {
          return b.available_cash - a.available_cash;
        }
      })
    }

  }
/*setClassOrder(event, sort) sets the sorting order for ascending and descending*/
  setClassOrder(event, sort) {
    let target = event.currentTarget
    target.classList.add('sort');
    if (target.classList.contains('ascending')) {
      target.classList.replace('ascending', 'descending')
      sort('desc', this.accountList)
    }
    else if (target.classList.contains('descending')) {
      target.classList.replace('descending', 'ascending');
      sort('asc', this.accountList)
    } else {
      target.classList.add('ascending');
      sort('asc', this.accountList)
    }
  }
/*sortDefault() removes current sort existing from the rows */ 
  sortDefault() {
    var elemList = document.getElementsByClassName('sort')
    if (elemList.length > 0) {
      for (let elm of elemList) {
        elm.classList.remove('sort')
      }
    }
  }

}