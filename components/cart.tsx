"use client"

import { useState } from 'react';

import {
  ShoppingCart,
  Trash2,
  X,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useCart } from '@/context/cart-context';

import { CartItem } from './cart-item';
import { CheckoutModal } from './checkout/checkout-modal';

export function Cart() {
  const { items, isCartOpen, toggleCart, subtotal, tax, total, clearCart } = useCart()
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  if (!isCartOpen) return null

  const handleCheckout = () => {
    setIsCheckoutOpen(true)
  }

  return (
    <>
      <div className="fixed inset-y-0 right-0 w-[380px] bg-white border-l flex flex-col h-full shadow-xl z-50 transition-transform transform">
        <div className="p-4 border-b flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">Cart</h2>
            <p className="text-sm text-gray-500">{items.length > 0 ? `${items.length} items` : "Empty cart"}</p>
          </div>
          <div className="flex gap-2">
            {items.length > 0 && (
              <Button variant="ghost" size="icon" onClick={clearCart}>
                <Trash2 className="h-5 w-5 text-red-500" />
              </Button>
            )}
            <Button variant="ghost" size="icon" onClick={toggleCart}>
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {items.length > 0 ? (
          <>
            <div className="flex-1 overflow-auto p-4">
              {items.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>
            <div className="border-t p-4">
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Sub Total</span>
                  <span>N{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax 5%</span>
                  <span>N{tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total Amount</span>
                  <span>N{total.toFixed(2)}</span>
                </div>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white h-12" onClick={handleCheckout}>
                Checkout
              </Button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-4">
            <ShoppingCartEmpty />
            <h3 className="mt-4 text-lg font-medium">Your cart is empty</h3>
            <p className="text-gray-500 text-center mt-2">
              Add some food items to your cart and they will appear here
            </p>
            <Button className="mt-6" onClick={toggleCart}>
              Continue with orders
            </Button>
          </div>
        )}
      </div>

      <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
    </>
  )
}

function ShoppingCartEmpty() {
  return (
    <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
      <ShoppingCart className="h-12 w-12 text-gray-400" />
    </div>
  )
}
