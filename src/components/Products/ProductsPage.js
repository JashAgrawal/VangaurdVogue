import React, { useState } from "react";
import ts from "../../assests/ts.webp";
import FiltersSection from "./FiltersSection";
import NewCard from "./NewCard";
import { products } from "@/utils/constant";
import PageCard from "./PageCard";
export default function ProductsPage() {
  return (
    <div>
      <div className="w-full text-3xl mb-3 my-2 text-center">
        <h1>Anime</h1>
      </div>
      {/* PC VIEW */}
      <div className="hidden lg:grid gap-2 grid-cols-12 gradient-bg bg-opacity-20">
        <div className="max-h-[79vh] flex justify-center items-center col-span-3">
          <FiltersSection />
        </div>
        <div className=" max-h-[79vh] col-span-9 overflow-auto noScroll">
          <div className="grid gap-2 mx-2 grid-cols-3">
            {products.map((product, idx) => (
              <NewCard key={idx} product={product} />
            ))}
          </div>
        </div>
      </div>
      {/* Mobile View */}
      <div className="lg:hidden block overflow-hidden gradient-bg bg-opacity-10">
        <div className="grid gap-2 mx-2 grid-cols-2">
          {products.map((product, idx) => (
            <div key={idx}>
              <PageCard page={true} product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
