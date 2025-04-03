"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useCart } from "@/context/cart-context"
import { PaymentStep } from "./payment-step"
import { ConfirmationStep } from "./confirmation-step"
import { SuccessStep } from "./success-step"

type CheckoutStep = "payment" | "confirmation" | "success"

interface CheckoutModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const [step, setStep] = useState<CheckoutStep>("payment")
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "card" | "transfer" | null>(null)
  const { items, subtotal, tax, total, clearCart } = useCart()

  const handlePaymentSelect = (method: "cash" | "card" | "transfer") => {
    setPaymentMethod(method)
    setStep("confirmation")
  }

  const handleConfirm = () => {
    setStep("success")
  }

  const handleFinish = () => {
    clearCart()
    onClose()
    setStep("payment")
    setPaymentMethod(null)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            {step === "payment" && "Select Payment Method"}
            {step === "confirmation" && "Confirm Your Order"}
            {step === "success" && "Order Placed Successfully!"}
          </DialogTitle>
        </DialogHeader>

        {step === "payment" && <PaymentStep onSelectPayment={handlePaymentSelect} />}

        {step === "confirmation" && paymentMethod && (
          <ConfirmationStep
            items={items}
            subtotal={subtotal}
            tax={tax}
            total={total}
            paymentMethod={paymentMethod}
            onBack={() => setStep("payment")}
            onConfirm={handleConfirm}
          />
        )}

        {step === "success" && <SuccessStep onFinish={handleFinish} />}
      </DialogContent>
    </Dialog>
  )
}

