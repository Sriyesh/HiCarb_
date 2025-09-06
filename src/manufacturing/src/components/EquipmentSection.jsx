"use client"
import { PRODUCTS } from "../assets/data"
import ProductCard from "./ProductCard"
import "../index-manufacturing.css"  


export default function EquipmentSection() {
  return (
    <section id="products" className="bg-slate-50 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Products</h2>
            <p className="mt-2 text-slate-700">
              Engineered for performance, safety and efficiency. Explore our core furnace lines and auxiliary systems.
            </p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-4 ">
          {PRODUCTS.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
