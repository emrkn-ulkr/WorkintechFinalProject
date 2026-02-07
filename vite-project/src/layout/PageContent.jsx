import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ContactPage from "../pages/ContactPage";
import TeamPage from "../pages/TeamPage";
import AboutPage from "../pages/AboutPage";
import SignUpPage from "../pages/SignUpPage";

export default function PageContent() {
  return (
    <div className="flex flex-col w-full">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/product/:id" component={ProductDetailPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/team" component={TeamPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/signup" component={SignUpPage} />
      </Switch>
    </div>
  );
}