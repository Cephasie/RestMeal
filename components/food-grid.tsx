"use client"

import { FoodCard } from "./food-card"
import { type FoodCategory, foodItems } from "@/data/food-items"
import { useEffect, useState } from "react"

interface FoodGridProps {
  activeCategory: FoodCategory
  searchQuery: string
}

export function FoodGrid({ activeCategory, searchQuery }: FoodGridProps) {
  const [filteredItems, setFilteredItems] = useState(foodItems)

  useEffect(() => {
    let filtered = foodItems

    // Filter by category
    if (activeCategory !== "All") {
      filtered = filtered.filter((item) => item.category === activeCategory)
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.description?.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query),
      )
    }

    setFilteredItems(filtered)
  }, [activeCategory, searchQuery])

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        {activeCategory === "All" ? "All Items" : activeCategory}
        {searchQuery && ` - Search results for "${searchQuery}"`}
      </h2>
      {filteredItems.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">No items found. Try a different search or category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <FoodCard key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
  )
}

