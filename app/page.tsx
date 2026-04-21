/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { useEffect, useState } from "react";
import { Product, ProductApiResponse } from "./type";
import { ProductCard } from "./components/Card";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Search } from "./components/Search";
import { Pagenation } from "./components/Pagenation";
import { Footer } from "./components/Footer";
import axios from "axios";
const PRODUCTS_PER_PAGE = 10;
export default function Home() {
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
    setError("");
    axios
      .get<ProductApiResponse>(url)
      .then(({ data }) => {
        setProducts(data.products);
        setTotal(data.total);
      })
      .catch(() => {
        setError("алдаа гарсан");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [skip, search, category]);
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 ">
      <Header />
      <Nav setCategory={setCategory} setSkip={setSkip} category={category} />
      <main className="mx-auto max-w-7xl px-6 py-10">
        <Search search={search} handleSearch={handleSearch} />
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-900 dark:border-zinc-700 dark:border-t-zinc-100" />
          </div>
        ) : error ? (
          <div className="flex justify-center py-20">
            <p className="text-red-500">{error}</p>
          </div>
        ) : (
          <>
            <p className="mb-6 text-sm text-zinc-500 dark:text-zinc-400">
              {total} products found
            </p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.length === 0 ? (
                <p className="col-span-full text-center py-10">
                  No products found
                </p>
              ) : (
                products.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))
              )}
            </div>
          </>
        )}
        <Pagenation
          currentPage={currentPage}
          handlePrev={handlePrev}
          totalPages={totalPages}
          handleNext={handleNext}
        />
      </main>
      <Footer />
    </div>
  );
}
