"use client"

import { useState } from 'react';

import { CartProvider } from '@/context/cart-context';
import type { FoodCategory } from '@/data/food-items';

import { Cart } from '../components/cart';
import { FoodGrid } from '../components/food-grid';
import { Header } from '../components/header';
import { SidebarNav } from '../components/sidebar-nav';

export default function POSPage() {
  const [activeCategory, setActiveCategory] = useState<FoodCategory>("All")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <CartProvider>
      <div className="flex h-screen bg-gray-100">
        <SidebarNav activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <div className="flex-1 flex overflow-hidden">
            <main className="flex-1 overflow-auto p-4">
              <FoodGrid activeCategory={activeCategory} searchQuery={searchQuery} />
            </main>
          </div>
          {/* <Footer /> */}
          <Cart />
        </div>
      </div>
    </CartProvider>
  )
}

