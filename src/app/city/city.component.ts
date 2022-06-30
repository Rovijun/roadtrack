import { Component, OnInit } from '@angular/core'
import { SearchBar } from '@nativescript/core';

import { City } from './city'
import { CityService } from './city.service'

@Component({
  selector: 'ns-items',
  templateUrl: './city.component.html',
})

export class CityComponent implements OnInit {
  public city: City[];
  search: string = '';

  constructor(private cityService: CityService) {}

  ngOnInit() {
    this.cityService.getItinerary(this.search).subscribe(res => {
      this.city = res;
      console.log(res)
    });
  }

  onSubmit(args) {
    const searchBar = args.object as SearchBar;
    this.search = searchBar.text;
    this.ngOnInit();
    console.log(`Searching for ${this.search}`);
  }

  onTextChanged(args) {
    const searchBar = args.object as SearchBar;
    this.search = searchBar.text;
    this.ngOnInit();
    console.log(`Input changed! New value: ${this.search}`);
  }

  onClear(args) {
    const searchBar = args.object as SearchBar;
    this.ngOnInit();
    console.log(`Clear event raised`);
  }

}
