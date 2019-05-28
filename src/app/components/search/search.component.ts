import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AttributesSearch } from './search.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [UserService]
})
export class SearchComponent implements OnInit {
  AttributesSearch: Array<AttributesSearch>;
  result = {};

  constructor(protected _router: Router,
    protected route: ActivatedRoute,
    protected _userService: UserService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['searchText'] !== undefined && params['searchText'] !== '') {
        this._userService.getUser(params['searchText']).subscribe(
          resp => {
            this.result = resp;
            console.log(resp);
          }
        );
      }
    });
  }
}
