import React from "react";

export default function Footer() {
  return (
    <footer className="flex w-full justify-center border-t">
      <div className="flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 sm:flex-row">
        <p className="text-xs">© {new Date().getFullYear()} E-Ticaret</p>

        <div className="flex gap-4 text-xs">
          <span>Gizlilik</span>
          <span>Kullanım Şartları</span>
          <span>Destek</span>
        </div>
      </div>
    </footer>
  );
}