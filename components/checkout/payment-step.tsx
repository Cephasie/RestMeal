"use client"

import { Button } from "@/components/ui/button"
import { CreditCard, Banknote, QrCode } from "lucide-react"

interface PaymentStepProps {
  onSelectPayment: (method: "cash" | "card" | "transfer") => void
}

export function PaymentStep({ onSelectPayment }: PaymentStepProps) {
  return (
    <div className="py-4">
      <p className="text-gray-500 mb-6">Please select your preferred payment method to continue with your order.</p>

      <div className="grid gap-4">
        <Button
          variant="outline"
          className="flex justify-start items-center h-16 px-4"
          onClick={() => onSelectPayment("cash")}
        >
          <Banknote className="h-6 w-6 mr-4 text-green-600" />
          <div className="text-left">
            <div className="font-medium">Cash</div>
            <div className="text-sm text-gray-500">Pay with cash upon delivery</div>
          </div>
        </Button>

        <Button
          variant="outline"
          className="flex justify-start items-center h-16 px-4"
          onClick={() => onSelectPayment("card")}
        >
          <CreditCard className="h-6 w-6 mr-4 text-green-600" />
          <div className="text-left">
            <div className="font-medium">Credit/Debit Card</div>
            <div className="text-sm text-gray-500">Pay with your card</div>
          </div>
        </Button>

        <Button
          variant="outline"
          className="flex justify-start items-center h-16 px-4"
          onClick={() => onSelectPayment("transfer")}
        >
          <QrCode className="h-6 w-6 mr-4 text-green-600" />
          <div className="text-left">
            <div className="font-medium">QR Code Transfer</div>
            <div className="text-sm text-gray-500">Scan QR code to pay</div>
          </div>
        </Button>
      </div>
    </div>
  )
}

