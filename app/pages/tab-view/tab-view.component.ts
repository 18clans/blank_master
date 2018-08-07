import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-tab-view',
  templateUrl: './tab-view.component.html',
  styleUrls: ['./tab-view.component.scss']
})
export class TabViewComponent implements OnInit {

  constructor(private router: RouterExtensions) { }

  ngOnInit() {
    this.router.navigate(["/tabview", { outlets: { newPage: "tabview-child" } }]);
  }


}
