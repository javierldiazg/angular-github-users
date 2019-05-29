import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-additional-search',
  templateUrl: './additional-search.component.html',
  styleUrls: ['./additional-search.component.scss']
})
export class AdditionalSearchComponent implements OnInit {
  @Input() public config: any;
  result;

  constructor(protected _searchService: SearchService) { }

  ngOnInit() {
    if (this.config.url) {
      const info = {};
      this._searchService.getData(this.config.url).subscribe(
        resp => {
          if (resp) {
            this.result = resp;
          }
        }
      );
    }
  }

}
