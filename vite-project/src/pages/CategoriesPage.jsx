import React from "react";

export default function CategoriesPage() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6 flex flex-col gap-4">
      <h1 className="text-xl font-semibold">Kategoriler</h1>
      <div className="border rounded-lg p-5 flex items-center justify-center bg-neutral-50">
        <div className="text-sm text-neutral-600">Yakında</div>
      </div>
    </div>
  );
}
