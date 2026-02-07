import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/actions";
import { toast } from "react-toastify";

export default function ProductDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((s) => s.product);

  useEffect(() => {
    if (!list.length) dispatch(fetchProducts());
  }, [dispatch, list.length]);

  useEffect(() => {
    if (error) toast.error(error || "Bir hata oluştu.");
  }, [error]);

  const product = useMemo(() => {
    return list.find((p) => String(p.id) === String(id));
  }, [list, id]);

  if (loading) {
    return <div className="flex w-full justify-center py-10">Yükleniyor...</div>;
  }

  if (!product) {
    return (
      <div className="flex w-full justify-center py-10">Ürün bulunamadı.</div>
    );
  }

  return (
    <div className="flex flex-col gap-6 lg:flex-row">
      <div className="flex w-full items-center justify-center rounded-xl border p-4 lg:w-1/2">
        <img
          src={product.image}
          alt={product.title}
          className="h-64 w-64 object-contain"
        />
      </div>

      <div className="flex w-full flex-col gap-3 lg:w-1/2">
        <h1 className="text-lg font-semibold">{product.title}</h1>
        <p className="text-base font-semibold">${product.price}</p>

        <p className="text-sm text-gray-600">{product.description}</p>

        <div className="flex gap-3 pt-2">
          <button
            type="button"
            className="flex flex-1 items-center justify-center rounded-lg border px-4 py-3 text-sm font-medium"
          >
            Sepete Ekle
          </button>
          <button
            type="button"
            className="flex flex-1 items-center justify-center rounded-lg border px-4 py-3 text-sm font-medium"
          >
            Hemen Satın Al
          </button>
        </div>
      </div>
    </div>
  );
}