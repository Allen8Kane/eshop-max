"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import { getCart, removeFromCart } from "@/utils/cart";

const Cart = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const cart = getCart();
    setProducts(cart);
  }, []);

  const deleteProduct = (productId: string) => {
    removeFromCart(productId);
    setProducts(getCart());
  };

  return products.length > 0 ? (
    <main>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
              key={product.id}
            >
              <Image
                className="h-52 flex flex-col justify-center items-center rounded-t-xl"
                src={product.image}
                alt={product.title}
                width={700}
                height={400}
              />
              <div className="p-4 md:p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                  {product.title}
                </h3>
                <p className="mt-3 text-gray-500 dark:text-neutral-500">
                  {product.description}
                </p>
              </div>
              <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
                <Link
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                  href={product.link}
                >
                  Show more
                </Link>
                <button
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                  onClick={() => deleteProduct(product.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  ) : (
    <main>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="w-full h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <div className="p-4 md:p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                Your cart is empty
              </h3>
              <p className="mt-3 text-gray-500 dark:text-neutral-500">
                You haven't added any products to your cart yet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
