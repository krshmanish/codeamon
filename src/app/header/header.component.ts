import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  @Output() searchClicked: EventEmitter<any> = new EventEmitter();

  searchForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      firstName: new FormControl(null),
      lastName: new FormControl(null)
    });
  }

  ngOnInit() {
  }

  onSearch() {
    const searchData = {
      firstName: this.searchForm.value['firstName'],
      lastName: this.searchForm.value['lastName'],
    };
    this.searchClicked.emit(searchData);
  }
}
