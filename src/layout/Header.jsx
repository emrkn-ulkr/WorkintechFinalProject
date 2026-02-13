import { Link } from "react-router-dom";
import { Search, ShoppingCart, User } from "lucide-react";

export default function Header() {
    return (
        <header className="w-full border-b">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <span className="text-lg font-bold">E-Commerce</span>
                </Link>

                {/* Navigation */}
                <nav className="flex items-center gap-4">
                    <Link to="/" className="text-sm font-medium">
                        Home
                    </Link>

                    <Link to="/shop" className="text-sm font-medium">
                        Shop
                    </Link>

                    <Link to="/cart" className="text-sm font-medium">
                        Cart
                    </Link>
                </nav>

                {/* Icons */}
                <div className="flex items-center gap-3">
                    <button
                        className="p-2"
                        type="button"
                        aria-label="search"
                    >
                        <Search className="h-5 w-5" />
                    </button>

                    <Link
                        className="p-2"
                        to="/cart"
                        aria-label="cart"
                    >
                        <ShoppingCart className="h-5 w-5" />
                    </Link>

                    <Link
                        className="p-2"
                        to="/login"
                        aria-label="user"
                    >
                        <User className="h-5 w-5" />
                    </Link>
                </div>

            </div>
        </header>
    );
}
