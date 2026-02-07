import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="flex flex-col rounded-xl border p-3">
      <div className="flex w-full items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-36 w-36 object-contain"
        />
      </div>

      <div className="flex flex-col gap-1 pt-3">
        <p className="text-sm font-medium">{product.title}</p>
        <p className="text-sm font-semibold">${product.price}</p>
      </div>
    </Link>
  );
}