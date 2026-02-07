import React from "react";
import { toast } from "react-toastify";

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Mesajınız gönderildi.");
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-base font-semibold">İletişim</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 rounded-xl border p-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm">Ad Soyad</label>
          <input
            className="flex rounded-lg border px-3 py-2 text-sm"
            placeholder="Adınızı girin"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm">E-posta</label>
          <input
            className="flex rounded-lg border px-3 py-2 text-sm"
            placeholder="eposta@ornek.com"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm">Mesaj</label>
          <textarea
            className="flex min-h-28 rounded-lg border px-3 py-2 text-sm"
            placeholder="Mesajınızı yazın..."
          />
        </div>

        <button
          type="submit"
          className="flex items-center justify-center rounded-lg border px-4 py-3 text-sm font-medium"
        >
          Gönder
        </button>
      </form>
    </div>
  );
}