"use client"

import type React from 'react';

import {
  Search,
  ShoppingCart,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/context/cart-context';

interface HeaderProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
}

export function Header({ searchQuery, setSearchQuery }: HeaderProps) {
  const { toggleCart, items } = useCart()
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div className="bg-white p-4 flex items-center gap-4 border-b">
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder="Search food items..."
          className="pl-10 w-full"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div className="flex items-center gap-2">
        {/* <span className="font-semibold">Table 1</span> */}
        <span className="text-gray-500 text-sm font-bold">Cephas Ayo</span>
      </div>
      <Button variant="ghost" size="icon" className="relative" onClick={toggleCart}>
        <ShoppingCart className="h-5 w-5" />
        {itemCount > 0 && (
          <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-green-600">
            {itemCount}
          </Badge>
        )}
      </Button>
    </div>
  )
}

