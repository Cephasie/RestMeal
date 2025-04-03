"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

interface SuccessStepProps {
  onFinish: () => void
}

export function SuccessStep({ onFinish }: SuccessStepProps) {
  return (
    <div className="py-4 text-center">
      <div className="flex justify-center mb-4">
        <CheckCircle className="h-16 w-16 text-green-600" />
      </div>

      <h3 className="text-xl font-bold mb-2">Thank You for Your Order!</h3>
      <p className="text-gray-500 mb-6">
        Your order has been placed successfully. You will receive a confirmation shortly.
      </p>

      <div className="bg-gray-50 p-4 rounded-md mb-6">
        <div className="text-sm text-gray-600 mb-2">Order Reference</div>
        <div className="font-mono font-bold">{generateOrderReference()}</div>
      </div>

      <Button className="w-full bg-green-600 hover:bg-green-700" onClick={onFinish}>
        Done
      </Button>
    </div>
  )
}

function generateOrderReference() {
  return `ORD-${Math.floor(100000 + Math.random() * 900000)}`
}

