import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./layout/Header";
import PageContent from "./layout/PageContent";
import Footer from "./layout/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex flex-1 w-full justify-center">
          <div className="flex w-full max-w-6xl flex-col px-4 py-4">
            <PageContent />
          </div>
        </main>

        <Footer />
        <ToastContainer position="top-right" autoClose={2500} />
      </div>
    </BrowserRouter>
  );
}