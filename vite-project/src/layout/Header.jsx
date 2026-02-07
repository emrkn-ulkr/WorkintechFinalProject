import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="flex w-full justify-center border-b">
      <div className="flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border">
            E
          </div>
          <span className="text-base font-semibold">E-Ticaret</span>
        </Link>

        <nav className="flex items-center gap-4">
          <NavLink exact to="/" className="text-sm" activeClassName="font-semibold">
            Ana Sayfa
          </NavLink>
          <NavLink to="/shop" className="text-sm" activeClassName="font-semibold">
            Mağaza
          </NavLink>
          <NavLink to="/signup" className="text-sm" activeClassName="font-semibold">
            Üye Ol
          </NavLink>
          <NavLink to="/about" className="text-sm" activeClassName="font-semibold">
            Hakkımızda
          </NavLink>
          <NavLink to="/team" className="text-sm" activeClassName="font-semibold">
            Takım
          </NavLink>
          <NavLink to="/contact" className="text-sm" activeClassName="font-semibold">
            İletişim
          </NavLink>

        </nav>


        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border"
            aria-label="Ara"
            title="Ara"
          >
            <Search size={18} />
          </button>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border"
            aria-label="Sepet"
            title="Sepet"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}