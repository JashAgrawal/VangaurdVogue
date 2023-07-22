import React from "react";
import ts from "../../assests/ts.webp";
import OrderHistoryCard from "./OrderHistoryCard";
import { Orderdproducts } from "@/utils/constant";
export default function OrdersHistory() {
  return (
    <div className="max-h-[70vh] w-full overflow-auto noScroll">
      <ol className="noScroll overflow-y-auto">
        {Orderdproducts.map((product, idx) => (
          <OrderHistoryCard key={idx} product={product} />
        ))}
      </ol>
    </div>
  );
}
