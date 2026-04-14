"use client";

// TODO 1: React hook-уудыг импортлох (useState, useEffect)

// TODO 2: useParams импортлох
// import { useParams } from "next/navigation";

import Link from "next/link";

// TODO 3: Product төрөл зарлах
// API: https://dummyjson.com/products/{id}
// Хариу: { id, title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images, ... }

export default function ProductDetail() {
  // TODO 4: URL-ээс id параметр авах
  // const { id } = useParams();

  // TODO 5: State хувьсагчдыг зарлах (product, loading, error)

  // TODO 6: useEffect-ээр бүтээгдэхүүний мэдээлэл татах
  // URL: `https://dummyjson.com/products/${id}`
  // dependency array: [id]

  // TODO 7: Ачааллын төлөв (loading state)

  // TODO 8: Алдааны төлөв (error state)

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Header */}
      <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex items-center gap-4">
            {/* TODO 9: Link компонент ашиглах (next/link) */}
            <Link
              href="/"
              className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
            >
              &larr; Буцах
            </Link>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Product Store</h1>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Product detail</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-10">
        {/* TODO 10: Доорх hardcode-г product state-ээр солих */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Image Section */}
          <div>
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
              <img
                src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
                alt="Essence Mascara Lash Princess"
                className="h-96 w-full object-cover"
              />
            </div>

            {/* Thumbnail Gallery */}
            {/* TODO 11: product.images массивыг map-аар гүйлгэх */}
            <div className="mt-4 grid grid-cols-4 gap-3">
              <button className="overflow-hidden rounded-xl border-2 border-zinc-900 dark:border-zinc-100">
                <img
                  src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
                  alt="Thumbnail 1"
                  className="h-20 w-full object-cover"
                />
              </button>
              <button className="overflow-hidden rounded-xl border-2 border-zinc-200 transition-colors hover:border-zinc-400 dark:border-zinc-700 dark:hover:border-zinc-500">
                <img
                  src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/2.png"
                  alt="Thumbnail 2"
                  className="h-20 w-full object-cover"
                />
              </button>
              <button className="overflow-hidden rounded-xl border-2 border-zinc-200 transition-colors hover:border-zinc-400 dark:border-zinc-700 dark:hover:border-zinc-500">
                <img
                  src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/3.png"
                  alt="Thumbnail 3"
                  className="h-20 w-full object-cover"
                />
              </button>
            </div>
          </div>

          {/* Product Info Section */}
          <div>
            {/* Category Badge */}
            <span className="inline-block rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
              beauty
            </span>

            {/* Title */}
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Essence Mascara Lash Princess</h2>

            {/* Brand */}
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Essence</p>

            {/* Rating */}
            <div className="mt-4 flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`h-5 w-5 ${star <= 5 ? "text-amber-400" : "text-zinc-200 dark:text-zinc-700"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">4.94</span>
            </div>

            {/* Price */}
            <div className="mt-6 flex items-baseline gap-3">
              {/* TODO 12: Хямдралтай үнэ тооцоолох */}
              {/* Хямдралтай үнэ = price - (price * discountPercentage / 100) */}
              <span className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">$9.99</span>
              <span className="text-lg text-zinc-400 line-through">$11.23</span>
              <span className="rounded-full bg-red-50 px-2.5 py-0.5 text-sm font-medium text-red-600 dark:bg-red-900/30 dark:text-red-400">
                -7.17%
              </span>
            </div>

            {/* Description */}
            <p className="mt-6 leading-relaxed text-zinc-600 dark:text-zinc-400">
              The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with
              this long-lasting and easy-to-apply mascara.
            </p>

            {/* Product Details */}
            <div className="mt-8 space-y-4 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Дэлгэрэнгүй мэдээлэл</h3>

              {/* TODO 13: product state-ээс утга авах */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500">Брэнд</p>
                  <p className="mt-0.5 text-sm font-medium text-zinc-900 dark:text-zinc-100">Essence</p>
                </div>
                <div>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500">Категори</p>
                  <p className="mt-0.5 text-sm font-medium text-zinc-900 dark:text-zinc-100">beauty</p>
                </div>
                <div>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500">Үлдэгдэл</p>
                  <p className="mt-0.5 text-sm font-medium text-zinc-900 dark:text-zinc-100">5 ширхэг</p>
                </div>
                <div>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500">Хүргэлт</p>
                  <p className="mt-0.5 text-sm font-medium text-zinc-900 dark:text-zinc-100">Ships in 1 month</p>
                </div>
                <div>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500">Баталгаа</p>
                  <p className="mt-0.5 text-sm font-medium text-zinc-900 dark:text-zinc-100">1 month warranty</p>
                </div>
                <div>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500">Буцаалт</p>
                  <p className="mt-0.5 text-sm font-medium text-zinc-900 dark:text-zinc-100">30 days return policy</p>
                </div>
              </div>
            </div>

            {/* Stock Status */}
            {/* TODO 14: Үлдэгдлийн тоогоор өнгө өөрчлөх */}
            {/* stock > 50: emerald, stock > 10: amber, stock <= 10: red */}
            <div className="mt-6 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500"></span>
              <span className="text-sm font-medium text-red-600 dark:text-red-400">Бага үлдэгдэл — зөвхөн 5 ширхэг</span>
            </div>

            {/* Reviews Section */}
            {/* TODO 15: product.reviews массивыг map-аар гүйлгэх */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Сэтгэгдлүүд</h3>
              <div className="mt-4 space-y-4">
                {/* Review 1 */}
                <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">John Doe</span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className={`h-3.5 w-3.5 ${star <= 5 ? "text-amber-400" : "text-zinc-200 dark:text-zinc-700"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Very unhappy with myستستشسي purchase!</p>
                </div>

                {/* Review 2 */}
                <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Nolan Gonzalez</span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className={`h-3.5 w-3.5 ${star <= 4 ? "text-amber-400" : "text-zinc-200 dark:text-zinc-700"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Not bad, butستست could be better.</p>
                </div>

                {/* Review 3 */}
                <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Scarlett Wright</span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className={`h-3.5 w-3.5 ${star <= 4 ? "text-amber-400" : "text-zinc-200 dark:text-zinc-700"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Highly impressed with the استستستس mascara!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-6 py-4 text-center text-xs text-zinc-400">Exercise App &middot; Data from dummyjson.com</div>
      </footer>
    </div>
  );
}

// БОНУС TODO 16: Компонент болгон задлах
//   - app/components/ProductImageGallery.tsx
//   - app/components/ProductInfo.tsx
//   - app/components/ReviewCard.tsx
//   - app/components/StockBadge.tsx
