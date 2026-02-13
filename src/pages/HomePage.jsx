import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProductCard from "../components/ProductCard";

export default function HomePage() {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    const products = [
        {
            id: 1,
            title: "Basic T-Shirt",
            price: "$19.99",
            image: "https://picsum.photos/seed/p1/600/400",
        },
        {
            id: 2,
            title: "Sneakers",
            price: "$89.99",
            image: "https://picsum.photos/seed/p2/600/400",
        },
        {
            id: 3,
            title: "Backpack",
            price: "$49.99",
            image: "https://picsum.photos/seed/p3/600/400",
        },
        {
            id: 4,
            title: "Jacket",
            price: "$129.99",
            image: "https://picsum.photos/seed/p4/600/400",
        },
    ];

    return (
        <div className="flex w-full flex-col gap-6">
            {/* Slider */}
            <section className="flex w-full flex-col gap-3">
                <div className="flex items-center justify-between">
                    <h1 className="text-lg font-bold md:text-2xl">Featured</h1>
                    <span className="text-sm font-medium md:text-base">New Season</span>
                </div>

                <div className="w-full overflow-hidden rounded-lg border">
                    <Slider {...sliderSettings}>
                        <div>
                            <div className="flex h-48 w-full items-center justify-center md:h-72">
                                <img
                                    className="h-full w-full object-cover"
                                    src="https://picsum.photos/seed/hero1/1200/600"
                                    alt="slide-1"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex h-48 w-full items-center justify-center md:h-72">
                                <img
                                    className="h-full w-full object-cover"
                                    src="https://picsum.photos/seed/hero2/1200/600"
                                    alt="slide-2"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex h-48 w-full items-center justify-center md:h-72">
                                <img
                                    className="h-full w-full object-cover"
                                    src="https://picsum.photos/seed/hero3/1200/600"
                                    alt="slide-3"
                                />
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>

            {/* Products (flex layout, responsive) */}
            <section className="flex w-full flex-col gap-3">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold md:text-2xl">Products</h2>
                    <span className="text-sm font-medium md:text-base">Popular</span>
                </div>

                <div className="flex w-full flex-wrap gap-4">
                    {products.map((p) => (
                        <div
                            key={p.id}
                            className="flex w-full md:w-[calc(50%-8px)] lg:w-[calc(25%-12px)]"
                        >
                            <ProductCard title={p.title} price={p.price} image={p.image} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
