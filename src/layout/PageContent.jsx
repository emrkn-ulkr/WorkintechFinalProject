import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import ShopPage from "../pages/ShopPage.jsx";
import ProductDetailPage from "../pages/ProductDetailPage.jsx";
import ContactPage from "../pages/ContactPage.jsx";

export default function PageContent() {
    return (
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-4">
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/shop" component={ShopPage} />
                <Route exact path="/product/:id" component={ProductDetailPage} />
                <Route exact path="/contact" component={ContactPage} />

            </Switch>
        </main>
    );
}
