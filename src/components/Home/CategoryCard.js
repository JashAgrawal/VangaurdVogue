import React from "react";

export default function CategoryCard({ product }) {
  return (
    <div class="w-full shadow-xl shadow-accent m-6 max-w-sm bg-white border border-gray-200 rounded-xl dark:bg-black dark:border-gray-700">
      <a href="/product">
        <img
          class="pb-4 hover:scale-[1.1] duration-200 rounded-t-xl"
          src={product.image}
          alt="product"
        />
      </a>
      <div className="flex hover:scale-[1.8] hover:text-yellow-600 duration-200 justify-center">
        <h1 className="p-2 m-2 text-lg">{product.name}</h1>
      </div>
    </div>
  );
}
