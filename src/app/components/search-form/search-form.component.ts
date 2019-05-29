import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  @Input() public returnedSearchText: any;
  searchText = '';

  constructor(protected _router: Router) { }

  ngOnInit() {
    if (this.returnedSearchText !== '') {
      this.searchText = this.returnedSearchText;
    }
  }

  search() {
    if (this.searchText !== '') {
      this._router.navigate(['/search/' + this.searchText]);
    }
  }

}
