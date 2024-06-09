'use client';
import Link from "next/link";
import Image from "next/image";
import { addToCart } from "@/utils/cart";

type CardProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  link: string;
};

const Card = (product: CardProps) => {
  return (
    <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
      <Image
        className="h-auto flex flex-col justify-center items-center rounded-t-xl"
        src={product.image}
        alt={product.title}
        width={700}
        height={700}
      />
      <div className="p-4 md:p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
          {product.title}
        </h3>
        <p className="mt-3 text-gray-500 dark:text-neutral-500">
        €{product.price}
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
          onClick={() => addToCart(product)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
