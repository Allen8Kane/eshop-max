"use client";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";

import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Products",
      link: "/products",
    },
    {
      title: "About us",
      link: "/about",
    },
  ];

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-7">
      <nav
        className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-6 md:px-8 mx-auto"
        aria-label="Global"
      >
        <div className="md:col-span-3">
          <Link
            href={"/"}
            className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
            aria-label="Preline"
          >
            <Image
              className="w-14 h-auto"
              src={"/car-logo.svg"}
              alt="Preline"
              width={116}
              height={32}
              priority={true}
            />
          </Link>
        </div>

        <div className="flex items-center gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
          <Link
            href={"/login"}
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white"
          >
            Sign in
          </Link>
          <button
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white"
            onClick={() => logout()}
          >
            Logout
          </button>
          <Link
            href={"/profile"}
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white"
          >
            <UserIcon className="w-5 h-auto" />
          </Link>
          <Link
            href="/cart"
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-lime-400 text-black hover:bg-lime-500 transition disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-lime-500"
          >
            <ShoppingBagIcon className="w-5 h-auto" />
          </Link>

          <div className="md:hidden">
            <button
              type="button"
              className="hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6"
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
            {links.map((link) => (
              <div key={link.title}>
                <a
                  className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300"
                  href={link.link}
                >
                  {link.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

/* 
<div>
              <a
                className="relative inline-block text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 dark:text-white"
                href="#"
                aria-current="page"
              >
                Work
              </a>
            </div>
            <div>
              <a
                className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300"
                href="#"
              >
                Services
              </a>
            </div>
*/
