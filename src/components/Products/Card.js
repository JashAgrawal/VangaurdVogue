import React from "react";

export default function Card({ product }) {
  // console.log(product.color);
  return (
    <div
      className={`w-full m-2 max-w-xs shadow-lg shadow-gray-400/60 rounded-md bg-black hover:text-lg  duration-200`}
    >
      <a href="/product">
        <img
          class="pb-6 hover:scale-[1.15] ml-4 mt-4 h-96 w-72 duration-200 rounded-t-lg"
          src={product.image}
          alt="product"
        />
      </a>
      <div class="px-4 pb-4">
        <a href="/product">
          <h5 class="text-l font-semibold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>
        </a>
        <div class="flex items-center mt-2 justify-between">
          <span class="text-3xl font-bold text-gray-900 dark:text-white">
            ₹ {"  " + product.price}
          </span>
          <a
            href="/cart"
            class="text-white bg-accent hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 text-center border-2 border- dark:bg-black dark:hover:bg-accent dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}
