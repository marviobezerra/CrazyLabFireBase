import { Component } from "@angular/core";
import { AngularFire, FirebaseObjectObservable } from "angularfire2";

interface IUser {
    Name: string;
    Email: string;
}

@Component({
    selector: "layout",
    templateUrl: "/components/layout/layout.html",
    styles: [require("./layout.scss")]
})
export class LayoutComponent {
    constructor(private af: AngularFire) {
        this.Model = af.database.object("/user");
    }

    public Model: FirebaseObjectObservable<IUser>;
}