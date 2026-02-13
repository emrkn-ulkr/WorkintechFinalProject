import ProductCard from "../components/ProductCard.jsx";

export default function ShopPage() {
    const products = [
        { id: 1, title: "Basic T-Shirt", price: "$19.99", image: "https://picsum.photos/seed/s1/600/400" },
        { id: 2, title: "Sneakers", price: "$89.99", image: "https://picsum.photos/seed/s2/600/400" },
        { id: 3, title: "Backpack", price: "$49.99", image: "https://picsum.photos/seed/s3/600/400" },
        { id: 4, title: "Jacket", price: "$129.99", image: "https://picsum.photos/seed/s4/600/400" },
        { id: 5, title: "Hat", price: "$14.99", image: "https://picsum.photos/seed/s5/600/400" },
        { id: 6, title: "Sunglasses", price: "$39.99", image: "https://picsum.photos/seed/s6/600/400" },
    ];

    return (
        <div className="flex w-full flex-col gap-6">
            {/* Header/Footer zaten global, burada sadece sayfa içi içerik */}

            {/* Sayfa başlığı */}
            <div className="flex w-full flex-col gap-1">
                <h1 className="text-xl font-bold md:text-3xl">Shop</h1>
                <p className="text-sm md:text-base">Browse all products</p>
            </div>

            {/* Ürün listesi (Flex + Mobile First + Desktop) */}
            <div className="flex w-full flex-wrap gap-4">
                {products.map((p) => (
                    <div
                        key={p.id}
                        className="flex w-full md:w-[calc(50%-8px)] lg:w-[calc(25%-12px)]"
                    >
                        <ProductCard id={p.id} title={p.title} price={p.price} image={p.image} />
                    </div>
                ))}
            </div>
        </div>
    );
}
