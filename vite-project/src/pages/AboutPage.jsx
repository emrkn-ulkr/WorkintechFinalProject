import React from "react";
import { BadgeCheck, Truck, ShieldCheck, Headphones } from "lucide-react";

export default function AboutPage() {
    const features = [
        {
            id: "f1",
            title: "Kalite Odaklı Seçim",
            desc: "Özenle seçilmiş ürünlerle güvenilir bir alışveriş deneyimi sunarız.",
            icon: BadgeCheck,
        },
        {
            id: "f2",
            title: "Hızlı Teslimat",
            desc: "Siparişlerinizi mümkün olan en kısa sürede kapınıza ulaştırırız.",
            icon: Truck,
        },
        {
            id: "f3",
            title: "Güvenli Ödeme",
            desc: "Ödeme adımlarında güvenliği ve kullanıcı gizliliğini önceliklendiririz.",
            icon: ShieldCheck,
        },
        {
            id: "f4",
            title: "Destek Ekibi",
            desc: "İhtiyaç duyduğunuz her an size yardımcı olmaya hazırız.",
            icon: Headphones,
        },
    ];

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <h1 className="text-base font-semibold">Hakkımızda</h1>
                <p className="text-sm text-gray-600">
                    E-Ticaret deneyimini sade, hızlı ve güvenilir hale getirmek için çalışıyoruz.
                </p>
            </div>

            <div className="flex flex-col gap-4 rounded-xl border p-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-col gap-2 lg:max-w-xl">
                    <p className="text-sm">
                        Amacımız; kullanıcıların ihtiyaç duyduğu ürünleri kolayca bulabildiği, şeffaf bir
                        fiyatlandırma ve güvenli ödeme altyapısıyla tamamlayabildiği bir alışveriş platformu
                        sunmak.
                    </p>
                    <p className="text-sm text-gray-600">
                        Bu proje; modern frontend pratikleri (Vite, Router v5, Redux/Thunk, Tailwind) ile
                        ölçeklenebilir bir e-ticaret arayüzü geliştirmek için oluşturulmuştur.
                    </p>
                </div>

                <div className="flex flex-col gap-2 lg:items-end">
                    <div className="flex gap-2">
                        <div className="flex flex-col rounded-lg border px-4 py-3">
                            <p className="text-xs text-gray-600">Odak</p>
                            <p className="text-sm font-semibold">Kullanıcı Deneyimi</p>
                        </div>
                        <div className="flex flex-col rounded-lg border px-4 py-3">
                            <p className="text-xs text-gray-600">Yaklaşım</p>
                            <p className="text-sm font-semibold">Mobile First</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <h2 className="text-sm font-semibold">Neler Sunuyoruz?</h2>

                <div className="flex flex-wrap gap-4">
                    {features.map((f) => {
                        const Icon = f.icon;
                        return (
                            <div
                                key={f.id}
                                className="flex w-full sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)]"
                            >
                                <div className="flex w-full flex-col gap-3 rounded-xl border p-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full border">
                                        <Icon size={18} />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <p className="text-sm font-semibold">{f.title}</p>
                                        <p className="text-xs text-gray-600">{f.desc}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="flex flex-col gap-3 rounded-xl border p-4">
                <h2 className="text-sm font-semibold">Vizyonumuz</h2>
                <p className="text-sm text-gray-600">
                    Kullanıcıların güvenle alışveriş yapabildiği, hızlı ve erişilebilir bir platform oluşturmak.
                </p>

                <h2 className="text-sm font-semibold">Misyonumuz</h2>
                <p className="text-sm text-gray-600">
                    Sade bir arayüz, güçlü performans ve sürdürülebilir geliştirme yaklaşımıyla kaliteli bir
                    deneyim sunmak.
                </p>
            </div>
        </div>
    );
}