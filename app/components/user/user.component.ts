import { Component } from "@angular/core";
import { FirebaseAuth, FirebaseAuthState, AuthMethods, AuthProviders } from "angularfire2";

@Component({
    selector: "user",
    templateUrl: "/components/user/user.html",
    styles: [require("./user.scss")]
})
export class UserComponent {
    constructor(public auth$: FirebaseAuth) {

        auth$
            .subscribe((state: FirebaseAuthState) => {
                this.authState = state;
            });

    }

    public authState: FirebaseAuthState = null;

    get Authenticated(): boolean {
        return this.authState !== null;
    }

    private signIn(provider: number): firebase.Promise<FirebaseAuthState> {
        return this.auth$.login({ method: AuthMethods.Popup, provider: AuthProviders.Google })
            .catch(error => console.log('ERROR @ AuthService#signIn() :', error));
    }

    public Login(): firebase.Promise<FirebaseAuthState> {
        return this.signIn(AuthProviders.Google);
    }
}