import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-food-checkout',
  templateUrl: './food-checkout.component.html',
  styleUrls: ['./food-checkout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoodCheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
