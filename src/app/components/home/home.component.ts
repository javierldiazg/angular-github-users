import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchText = '';

  constructor(protected _router: Router) { }

  ngOnInit() {
  }

  search() {
    if (this.searchText !== '') {
      this._router.navigate(['/search/' + this.searchText]);
    }
  }

}
