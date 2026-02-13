import { useParams } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

export default function ProductDetailPage() {
    const { id } = useParams();

    // Şimdilik demo veri (T04 promptu API istemiyor)
    const product = {
        id,
        title: `Product ${id}`,
        price: "$99.99",
        description:
            "This is a demo product detail description. It is structured for mobile first and scales to desktop.",
        image: `https://picsum.photos/seed/detail-${id}/1200/800`,
    };

    return (
        <div className="flex w-full flex-col gap-6">
            {/* Mobile: column, Desktop: row */}
            <div className="flex w-full flex-col gap-6 md:flex-row">
                {/* Image */}
                <div className="flex w-full flex-col gap-3 md:w-1/2">
                    <div className="flex w-full items-center justify-center overflow-hidden rounded-lg border">
                        <img
                            className="h-72 w-full object-cover md:h-[520px]"
                            src={product.image}
                            alt={product.title}
                        />
                    </div>
                </div>

                {/* Info */}
                <div className="flex w-full flex-col gap-4 md:w-1/2">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl font-bold md:text-3xl">{product.title}</h1>
                        <span className="text-2xl font-bold md:text-3xl">
                            {product.price}
                        </span>
                    </div>

                    <p className="text-sm leading-6 md:text-base md:leading-7">
                        {product.description}
                    </p>

                    <div className="flex w-full flex-col gap-3 md:flex-row">
                        <button
                            className="flex w-full items-center justify-center gap-2 rounded-md border px-4 py-3 text-sm font-medium md:w-auto"
                            type="button"
                        >
                            <ShoppingCart className="h-4 w-4" />
                            Add to cart
                        </button>

                        <button
                            className="flex w-full items-center justify-center rounded-md border px-4 py-3 text-sm font-medium md:w-auto"
                            type="button"
                        >
                            Buy now
                        </button>
                    </div>

                    {/* Small details row */}
                    <div className="flex w-full flex-col gap-2 border-t pt-4 text-sm md:flex-row md:items-center md:justify-between">
                        <span className="font-medium">SKU: {product.id}</span>
                        <span className="font-medium">Stock: In stock</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
