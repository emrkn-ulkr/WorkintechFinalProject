import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Slider() {
  const slides = [
    { id: 1, title: "Yeni Sezon", desc: "En yeni trendleri keşfet" },
    { id: 2, title: "Kaçırılmayacak Fırsatlar", desc: "Sınırlı süreli kampanyalar" },
    { id: 3, title: "Çok Satanlar", desc: "En çok tercih edilen ürünler" },
  ];

  return (
    <div className="flex w-full">
      <Swiper spaceBetween={12} slidesPerView={1}>
        {slides.map((s) => (
          <SwiperSlide key={s.id}>
            <div className="flex w-full flex-col justify-between rounded-xl border p-5">
              <div className="flex flex-col gap-1">
                <h2 className="text-lg font-semibold">{s.title}</h2>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>

              <div className="flex pt-4">
                <button
                  type="button"
                  className="flex items-center justify-center rounded-lg border px-4 py-2 text-sm"
                >
                  Hemen İncele
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}