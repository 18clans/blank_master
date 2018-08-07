import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-another-page',
  templateUrl: './another-page.component.html',
  styleUrls: ['./another-page.component.scss']
})
export class AnotherPageComponent implements OnInit {

  constructor(private _page: Page, private router: RouterExtensions) { }

  ngOnInit() {
    //  I tried using the built in back button and it still gives me the same error
    //  ERROR TypeError: undefined is not an object (evaluating 'states.pop')
    this._page.actionBarHidden = true;
  }

  goBackToTapViewChild() {
    this.router.backToPreviousPage();
  }

}
