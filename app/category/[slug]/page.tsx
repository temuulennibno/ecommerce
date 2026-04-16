"use client";

import { Header } from "@/app/components/header";
import { Nav } from "@/app/components/nav";
import { Pagination } from "@/app/components/pagination";
import { ProductCard } from "@/app/components/product-card";
import { Product } from "@/app/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const PRODUCTS_PER_PAGE = 10;

export default function Home() {
  const { slug } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    const url = `https://dummyjson.com/products/category/${slug}?limit=${PRODUCTS_PER_PAGE}&skip=${skip}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setTotal(data.total);
        setLoading(false);
      });
  }, [skip]);

  if (loading) {
    return <div className="w-full py-20 text-center text-2xl">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Header */}
      <Header />

      <Nav />

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-10">
        <p className="mb-6 text-sm text-zinc-500 dark:text-zinc-400">{/* TODO 12: Бүтээгдэхүүний тоо харуулах */}0 products found</p>

        {/* TODO 13: Доорх hardcode-г products.map() ашиглан солих */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>

        {/* Pagination */}
        <Pagination
          handlePrev={() => {
            setSkip(skip - PRODUCTS_PER_PAGE);
          }}
          handleNext={() => {
            setSkip(skip + PRODUCTS_PER_PAGE);
          }}
          totalPages={Math.ceil(total / PRODUCTS_PER_PAGE)}
          currentPage={skip / PRODUCTS_PER_PAGE + 1}
        />
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-6 py-4 text-center text-xs text-zinc-400">Exercise App &middot; Data from dummyjson.com</div>
      </footer>
    </div>
  );
}
