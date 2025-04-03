"use client"

import {
  Banknote,
  CreditCard,
  QrCode,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import type { CartItem } from '@/context/cart-context';

interface ConfirmationStepProps {
  items: CartItem[]
  subtotal: number
  tax: number
  total: number
  paymentMethod: "cash" | "card" | "transfer"
  onBack: () => void
  onConfirm: () => void
}

export function ConfirmationStep({
  items,
  subtotal,
  tax,
  total,
  paymentMethod,
  onBack,
  onConfirm,
}: ConfirmationStepProps) {
  return (
    <div className="py-4">
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Order Summary</h3>
        <div className="max-h-40 overflow-y-auto mb-4">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between py-2 border-b">
              <span>
                {item.title} x {item.quantity}
              </span>
              <span>N{(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Subtotal</span>
            <span>N{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Tax (5%)</span>
            <span>N{tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>N{total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Payment Method</h3>
        <div className="flex items-center p-3 border rounded-md">
          {paymentMethod === "cash" && <Banknote className="h-5 w-5 mr-2 text-green-600" />}
          {paymentMethod === "card" && <CreditCard className="h-5 w-5 mr-2 text-green-600" />}
          {paymentMethod === "transfer" && <QrCode className="h-5 w-5 mr-2 text-green-600" />}
          <span className="capitalize">{paymentMethod}</span>
        </div>
      </div>

      <div className="flex gap-4">
        <Button variant="outline" className="flex-1" onClick={onBack}>
          Back
        </Button>
        <Button className="flex-1 bg-green-600 hover:bg-green-700" onClick={onConfirm}>
          Confirm Order
        </Button>
      </div>
    </div>
  )
}

