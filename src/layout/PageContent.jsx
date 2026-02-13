import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";

export default function PageContent() {
    return (
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-4">
            <Switch>
                <Route exact path="/" component={HomePage} />
                {/* T02 kapsamında sadece Home linki aktif olsun diye şimdilik boş route eklemiyorum */}
            </Switch>
        </main>
    );
}
