import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { AttributesSearch } from './search.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit {
  AttributesSearch: Array<AttributesSearch>;
  searchText = '';
  result = {};
  additionalInfo = [];

  constructor(protected _router: Router,
    protected route: ActivatedRoute,
    protected _searchService: SearchService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['searchText'] !== undefined && params['searchText'] !== '') {
        this.searchText = params['searchText'];
        this._searchService.getUser(params['searchText']).subscribe(
          resp => {
            console.log(resp);
            this.result = resp;
            if (resp['repos_url']) {
              this.additionalInfo.push({
                id: 'repos',
                url: resp['repos_url']
              });
            }
          }
        );
      }
    });
  }
}
