import React from "react";

import Image from "next/image";
import { logo, shortLogo, title, titleLink } from "@/utils/constant";
export default function Footer() {
  return (
    <div>
      <footer className="p-4 bg-white sm:p-6 dark:bg-black  ">
        <hr className="border-accent mx-72 mb-8"></hr>
        <div className="md:flex items-center md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href={titleLink} className="flex items-center">
              <Image
                src={shortLogo || logo}
                className="h-12 w-20 rounded-full mr-3"
                alt={title + "Logo"}
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                {title.toLocaleUpperCase()}
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-20 sm:grid-cols-2">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href={titleLink} className="hover:underline">
                    {title.toLocaleUpperCase()}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-accent lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              {title.split(" ").join("")}™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
