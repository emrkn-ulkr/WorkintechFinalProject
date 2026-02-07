import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/actions";
import ProductCard from "../components/ProductCard";

export default function ShopPage() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((s) => s.product);

  useEffect(() => {
    if (!list.length) dispatch(fetchProducts());
  }, [dispatch, list.length]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-base font-semibold">Mağaza</h1>

        <div className="flex gap-2">
          <button
            type="button"
            className="flex items-center justify-center rounded-lg border px-3 py-2 text-sm"
          >
            Filtrele
          </button>
          <button
            type="button"
            className="flex items-center justify-center rounded-lg border px-3 py-2 text-sm"
          >
            Sırala
          </button>
        </div>
      </div>

      {error ? (
        <div className="flex w-full justify-center py-10">
          Ürünler yüklenemedi.
        </div>
      ) : loading ? (
        <div className="flex w-full justify-center py-10">Yükleniyor...</div>
      ) : (
        <div className="flex flex-wrap gap-4">
          {list.map((p) => (
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