import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { AnotherPageComponent } from "./pages/another-page/another-page.component";
import { TabViewComponent } from "./pages/tab-view/tab-view.component";
import { TabViewChildComponent } from "./pages/tab-view-child/tab-view-child.component";

const routes: Routes = [
    { path: "", component: HomeComponent },
    {
        path: "tabview", component: TabViewComponent,
        children: [
            { path: "another-page", component: AnotherPageComponent, outlet: "newPage" },
            { path: "tabview-child", component: TabViewChildComponent, outlet: "newPage" }
        ]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }