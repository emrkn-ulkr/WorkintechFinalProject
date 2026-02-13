import { ShoppingCart } from "lucide-react";

export default function ProductCard({ title, price, image }) {
    return (
        <div className="flex w-full flex-col gap-3 rounded-lg border p-3">
            <div className="flex w-full items-center justify-center overflow-hidden rounded-md border">
                <img className="h-40 w-full object-cover" src={image} alt={title} />
            </div>

            <div className="flex flex-col gap-1">
                <span className="line-clamp-2 text-sm font-medium">{title}</span>
                <span className="text-base font-bold">{price}</span>
            </div>

            <button
                className="flex items-center justify-center gap-2 rounded-md border px-3 py-2 text-sm font-medium"
                type="button"
            >
                <ShoppingCart className="h-4 w-4" />
                Add to cart
            </button>
        </div>
    );
}
