import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  list = [
    {
      'id': 1,
      'value': 'Soups'
    },
    {
      'id': 2,
      'value': 'Starters'
    },
    {
      'id': 3,
      'value': 'Main Course'
    },
    {
      'id': 4,
      'value': 'Desserts'
    },
   
  ];

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
   closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  
  Logout() {
    this.router.navigate(['/auth/login']);
  }
  indian() {
    this.router.navigate(['food/food-list/indian']);
  }

  chinese() {
    this.router.navigate(['food/food-list/chinese']);
  }

  american() {
    this.router.navigate(['food/food-list/american']);
  }
}
