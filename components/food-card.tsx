"use client";

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useCart } from '@/context/cart-context';

interface FoodCardProps {
  id: string;
  image: string;
  title: string;
  price: number;
  discount?: number;
  type: "Veg" | "Non Veg";
}

export function FoodCard({ id, image, title, price, discount, type }: FoodCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, image, title, price, type });
  };

  return (
    <Card className="overflow-hidden w-80 shadow-md transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer rounded-lg">
      <div className="relative">
        <img src={image || "/placeholder.svg?height=160&width=320"} alt={title} className="w-full h-40 object-cover" />
        {discount && (
          <div className="absolute top-2 left-2 bg-yellow-400 text-black px-2 py-1 rounded-md text-xs font-medium">
            {discount}% Off
          </div>
        )}
      </div>
      <div className="p-3">
        <h3 className="text-sm font-medium mb-1">{title}</h3>
        <div className="flex justify-between items-center mb-2">
          <span className="text-green-600 font-semibold">N{price.toFixed(2)}</span>
          <div className="flex items-center gap-1">
            <span className={`w-2 h-2 rounded-full ${type === "Veg" ? "bg-green-500" : "bg-orange-500"}`}></span>
            <span className="text-xs text-gray-500">{type}</span>
          </div>
        </div>
        <Button variant="default" className="w-full h-8 bg-green-700 hover:bg-green-900" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </div>
    </Card>
  );
}
