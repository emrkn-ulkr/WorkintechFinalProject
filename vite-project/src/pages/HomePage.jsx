import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/actions";
import Slider from "../components/Slider";
import ProductCard from "../components/ProductCard";
import { toast } from "react-toastify";

export default function HomePage() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((s) => s.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (error) toast.error(error || "Bir hata oluştu.");
  }, [error]);

  return (
    <div className="flex flex-col gap-6">
      <Slider />

      <div className="flex items-center justify-between">
        <h1 className="text-base font-semibold">Öne Çıkan Ürünler</h1>
        <span className="text-sm text-gray-600">Tümünü Gör</span>
      </div>

      {loading ? (
        <div className="flex w-full justify-center py-10">Yükleniyor...</div>
      ) : (
        <div className="flex flex-wrap gap-4">
          {list.slice(0, 8).map((p) => (
            <div
              key={p.id}
              className="flex w-full sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)]"
            >
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}