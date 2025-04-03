"use client"

import {
  Minus,
  Plus,
  Trash2,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useCart } from '@/context/cart-context';

interface CartItemProps {
  id: string
  title: string
  price: number
  quantity: number
  image: string
}

export function CartItem({ id, title, price, quantity, image }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart()

  const handleIncrease = () => {
    updateQuantity(id, quantity + 1)
  }

  const handleDecrease = () => {
    if (quantity > 1) {
      updateQuantity(id, quantity - 1)
    } else {
      removeFromCart(id)
    }
  }

  return (
    <div className="flex items-center gap-3 mb-4 relative group">
      <img
        src={image || "/placeholder.svg?height=64&width=64"}
        alt={title}
        className="w-16 h-16 rounded-lg object-cover"
      />
      <div className="flex-1">
        <h4 className="text-sm font-medium mb-1">{title}</h4>
        <div className="flex justify-between items-center">
          <span className="text-green-600 font-bold">N{price.toFixed(2)}</span>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="h-6 w-6 rounded-full" onClick={handleDecrease}>
              <Minus className="h-3 w-3" />
            </Button>
            <span className="text-sm">{quantity}</span>
            <Button variant="outline" size="icon" className="h-6 w-6 rounded-full" onClick={handleIncrease}>
              <Plus className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute -right-2 -top-2 h-6 w-6 bg-red-50 text-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={() => removeFromCart(id)}
      >
        <Trash2 className="h-3 w-3" />
      </Button>
    </div>
  )
}

