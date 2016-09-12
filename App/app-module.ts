import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "./Components";

import { LayoutComponent } from "./Components/Layout";
import { AppComponents, AppRoutes } from "./Components/";

declare var x: any;

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
		ReactiveFormsModule,
        HttpModule,
        RouterModule,
		AppRoutes
    ],

    declarations: [       
        AppComponents
    ],
    bootstrap: [LayoutComponent]
})
export class AppModule {
}