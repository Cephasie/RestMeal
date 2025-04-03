"use client"

import {
  ChefHat,
  Coffee,
  Grid,
  Pizza,
  Sandwich,
  Soup,
  UtensilsCrossed,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import type { FoodCategory } from '@/data/food-items';

const categories = [
  { icon: Grid, label: "All", value: "All" as FoodCategory },
  { icon: Coffee, label: "Breakfast", value: "Breakfast" as FoodCategory },
  { icon: Soup, label: "Soups", value: "Soups" as FoodCategory },
  { icon: UtensilsCrossed, label: "Pasta", value: "Pasta" as FoodCategory },
  { icon: ChefHat, label: "Main Course", value: "Main Course" as FoodCategory },
  { icon: Sandwich, label: "Burgers", value: "Burgers" as FoodCategory },
  { icon: Pizza, label: "Pizza", value: "Pizza" as FoodCategory },
]

interface SidebarNavProps {
  activeCategory: FoodCategory
  setActiveCategory: (category: FoodCategory) => void
}

export function SidebarNav({ activeCategory, setActiveCategory }: SidebarNavProps) {
  return (
    <div className="w-64 p-4 border-r h-screen">
      <div className="flex items-center gap-2 mb-8">
        <img
          src="https://res.cloudinary.com/dtqrzl86y/image/upload/v1743274750/UltraSmart%20Homes/mealdash_zkadma.png"
          alt="MealDash Logo"
          className="w-8 h-8"
        />
        <span className="font-semibold">MealDash</span>
      </div>
      <div className="border-t border-b py-4 mb-4">
        <h3 className="text-sm font-medium text-gray-500 mb-3 uppercase tracking-wider">Food Categories</h3>
        <nav className="space-y-2">
          {categories.map((item) => (
            <Button
              key={item.value}
              variant="ghost"
              className={`w-full justify-start ${activeCategory === item.value ? "text-green-600 bg-green-50" : "text-gray-600"}`}
              onClick={() => setActiveCategory(item.value)}
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
            </Button>
          ))}
        </nav>
      </div>
    </div>
  )
}

