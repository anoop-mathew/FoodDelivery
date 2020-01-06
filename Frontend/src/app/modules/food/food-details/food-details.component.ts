import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoodDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
