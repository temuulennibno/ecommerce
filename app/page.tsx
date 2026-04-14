/* eslint-disable react-hooks/set-state-in-effect */

"use client";
import { useEffect, useState } from "react";
import { Product, ProductApiResponse } from "./components/type";
import { ProductCard } from "./components/Card";

const PRODUCTS_PER_PAGE = 10;

export default function Home() {
  // TODO 4: State хувьсагчдыг зарлах (products, loading, error)
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const totalPages = Math.ceil(total / PRODUCTS_PER_PAGE);
  const currentPage = skip / PRODUCTS_PER_PAGE + 1;
  const handlePrev = () => {
    setSkip((s) => Math.max(0, s - PRODUCTS_PER_PAGE));
  };
  const handleNext = () => {
    setSkip((s) => s + PRODUCTS_PER_PAGE);
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setSkip(0);
  };
  useEffect(() => {
    let url = `https://dummyjson.com/products?limit=${PRODUCTS_PER_PAGE}&skip=${skip}`;

    if (category) {
      url = `https://dummyjson.com/products/category/${category}?limit=${PRODUCTS_PER_PAGE}&skip=${skip}`;
    } else if (search) {
      url = `https://dummyjson.com/products/search?q=${search}&limit=${PRODUCTS_PER_PAGE}&skip=${skip}`;
    }

    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((data: ProductApiResponse) => {
        setProducts(data.products);
        setTotal(data.total);
        setSkip(data.skip);
        setLoading(false);
      })
      .catch(() => {
        setError("алдаа гарсан");
        setLoading(false);
      });
  }, [skip, search, category]);

  // TODO 10: Ачааллын төлөв (loading state)

  // TODO 11: Алдааны төлөв (error state)

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 ">
      <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Product Store
          </h1>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Browse our collection of products
          </p>
        </div>
      </header>
      <nav className="border-b border-zinc-800 bg-zinc-900 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-6">
          <ul className="flex gap-1 overflow-x-auto py-3 no-scrollbar">
            <li>
              <button
                onClick={() => {
                  setCategory("");
                  setSkip(0);
                }}
                className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                  category === ""
                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                    : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
                }`}
              >
                All
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setCategory("beauty");
                  setSkip(0);
                }}
                className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                  category === "beauty"
                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                    : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
                }`}
              >
                Beauty
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setCategory("fragrances");
                  setSkip(0);
                }}
                className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                  category === "fragrances"
                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                    : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
                }`}
              >
                Fragrances
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setCategory("furniture");
                  setSkip(0);
                }}
                className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                  category === "furniture"
                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                    : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
                }`}
              >
                Furniture
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setCategory("groceries");
                  setSkip(0);
                }}
                className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                  category === "groceries"
                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                    : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
                }`}
              >
                Groceries
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setCategory("home-decoration");
                  setSkip(0);
                }}
                className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                  category === "home-decoration"
                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                    : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
                }`}
              >
                Home Decoration
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setCategory("kitchen-accessories");
                  setSkip(0);
                }}
                className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                  category === "kitchen-accessories"
                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                    : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
                }`}
              >
                Kitchen Accessories
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setCategory("laptops");
                  setSkip(0);
                }}
                className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                  category === "laptops"
                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                    : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
                }`}
              >
                Laptops
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setCategory("smartphones");
                  setSkip(0);
                }}
                className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                  category === "smartphones"
                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                    : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
                }`}
              >
                Smartphones
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setCategory("sports-accessories");
                  setSkip(0);
                }}
                className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                  category === "sports-accessories"
                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                    : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
                }`}
              >
                Sports Accessories
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setCategory("vehicle");
                  setSkip(0);
                }}
                className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                  category === "vehicle"
                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                    : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
                }`}
              >
                Vehicle
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <main className="mx-auto max-w-7xl px-6 py-10">
        {/* Search */}
        <div className="mb-8">
          <input
            value={search}
            onChange={handleSearch}
            type="text"
            placeholder="Бүтээгдэхүүн хайх..."
            className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 shadow-sm outline-none transition-colors focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-zinc-500 dark:focus:ring-zinc-800 sm:max-w-md"
          />
        </div>
        <p className="mb-6 text-sm text-zinc-500 dark:text-zinc-400">
          {products.length} products found
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            disabled={currentPage === 1}
            onClick={handlePrev}
            className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition-colors hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            &larr; Өмнөх
          </button>
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            Хуудас {currentPage} / {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={handleNext}
            className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition-colors hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            Дараах &rarr;
          </button>
        </div>
      </main>
      <footer className="mt-auto border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-6 py-4 text-center text-xs text-zinc-400">
          Exercise App &middot; Data from dummyjson.com
        </div>
      </footer>
    </div>
  );
}

// БОНУС TODO 14: Компонент болгон задлах
//   - app/types/product.ts
//   - app/components/ProductCard.tsx
//   - app/components/SearchBar.tsx
//   - app/components/Pagination.tsx
//   - app/components/ProductList.tsx
//   - app/page.tsx
