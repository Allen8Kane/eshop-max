"use client";
import { useForm } from "@tanstack/react-form";
import { useState, useEffect } from "react";
import {
  createProduct,
  deleteProductById,
  getProducts,
} from "../products/actions";
import { upload } from "@vercel/blob/client";
import Link from "next/link";
import Image from "next/image";

const Admin = () => {
  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
      price: "",
      image: null,
    },
    onSubmit: async ({ value }) => {
      console.log(value.image);
      if (!value.image) {
        return;
      }
      const blob = await upload(value.image.name, value.image, {
        access: "public",
        handleUploadUrl: "/api/image/upload",
      });

      console.log(blob.url);
      console.log(value.price);

      createProduct({ ...value, image: blob.url, price: Number(value.price) });
    },
  });

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProducts().then((res) => {
      setProducts(res);
      setLoading(false);
    });
  }, []);

  return (
    <main>
      <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <div className="bg-white rounded-xl shadow dark:bg-neutral-900">
            <div className="pt-0 p-4 sm:pt-0 sm:p-7">
              <div className="space-y-4 sm:space-y-6 pt-4">
                <form.Field
                  name="title"
                  children={(field) => (
                    <div className="space-y-2">
                      <label
                        htmlFor="af-submit-app-project-name"
                        className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
                      >
                        Title
                      </label>

                      <input
                        id="af-submit-app-project-name"
                        type="text"
                        className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                        placeholder="Enter product name"
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                    </div>
                  )}
                />

                <form.Field
                  name="price"
                  children={(field) => (
                    <div className="space-y-2">
                      <label
                        htmlFor={field.name}
                        className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
                      >
                        Price
                      </label>

                      <input
                        id={field.name}
                        type="number"
                        className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                        placeholder="Enter product price"
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                    </div>
                  )}
                />

                <form.Field
                  name="description"
                  children={(field) => (
                    <div className="space-y-2">
                      <label
                        htmlFor={field.name}
                        className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
                      >
                        Description
                      </label>

                      <textarea
                        id={field.name}
                        className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                        rows={6}
                        placeholder="A product description will better explain your products to the audiences. Our users will see this in your dedicated product page."
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      ></textarea>
                    </div>
                  )}
                />

                <form.Field
                  name="image"
                  children={(field) => (
                    <div className="space-y-2">
                      <label
                        htmlFor="image"
                        className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
                      >
                        Preview image
                      </label>

                      <label
                        htmlFor="image"
                        className="group p-4 sm:p-7 block cursor-pointer text-center border-2 border-dashed border-gray-200 rounded-lg focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 dark:border-neutral-700"
                      >
                        <input
                          id="image"
                          name={field.name}
                          onChange={(e) =>
                            field.handleChange(e.target.files[0])
                          }
                          className="sr-only"
                          required
                          type="file"
                        />
                        <svg
                          className="size-10 mx-auto text-gray-400 dark:text-neutral-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"
                          />
                          <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                        </svg>
                        <span className="mt-2 block text-sm text-gray-800 dark:text-neutral-200">
                          Browse your device or
                          <span className="group-hover:text-blue-700 text-blue-600">
                            drag 'n drop'
                          </span>
                        </span>
                        <span className="mt-1 block text-xs text-gray-500 dark:text-neutral-500">
                          Maximum file size is 4 MB
                        </span>
                      </label>
                    </div>
                  )}
                />
              </div>

              <div className="mt-5 flex justify-center gap-x-2">
                <button
                  type="submit"
                  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Submit your project
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      {loading ? (
        <div className="flex justify-center">
          <p className="text-center text-sm text-gray-500">
            Loading products...
          </p>
        </div>
      ) : (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <Card
                key={p.id}
                id={p.id}
                title={p.title}
                price={p.price}
                description={p.description}
                image={p.image}
                link={`products/${p.id}`}
              />
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

const Card = (product: {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  link: string;
}) => {
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
          onClick={() => deleteProductById(product.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Admin;
