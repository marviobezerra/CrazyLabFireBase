import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "./Components";
import { AngularFireModule } from "angularfire2";

import { LayoutComponent } from "./Components/Layout";
import { AppComponents, AppRoutes } from "./Components/";

export const firebaseConfig = {
  apiKey: "AIzaSyBD_5JTRVm1k51jI2Si3fKdrLoYkMA4S34",
  authDomain: "crazylabfirebase.firebaseapp.com",
  databaseURL: "https://crazylabfirebase.firebaseio.com",
  storageBucket: "crazylabfirebase.appspot.com"
};

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
		ReactiveFormsModule,
        HttpModule,
        AngularFireModule.initializeApp(firebaseConfig),
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