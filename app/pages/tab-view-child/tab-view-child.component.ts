import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-tab-view-child',
  templateUrl: './tab-view-child.component.html',
  styleUrls: ['./tab-view-child.component.scss']
})
export class TabViewChildComponent implements OnInit {

  constructor(private router: RouterExtensions) { }

  ngOnInit() { }

  goToAnotherPage() {
    this.router.navigate(["/tabview", { outlets: { newPage: "another-page" } }]);
  }

}
