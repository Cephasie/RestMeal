export type FoodCategory = "All" | "Breakfast" | "Soups" | "Pasta" | "Main Course" | "Burgers" | "Pizza"

export interface FoodItem {
  id: string
  image: string
  title: string
  price: number
  discount?: number
  type: "Veg" | "Non Veg"
  category: FoodCategory
  description?: string
}

export const foodItems: FoodItem[] = [
  {
    id: "food-1",
    image: "https://res.cloudinary.com/dtqrzl86y/image/upload/v1743630890/UltraSmart%20Homes/grilled-chicken-salad-png_f7tfor.png",
    title: "Vegetable Salad with Grilled Chicken",
    price: 2500,
    discount: 20,
    type: "Non Veg",
    category: "Main Course",
    description: "Fresh vegetables with grilled chicken breast, served with our special dressing.",
  },
  {
    id: "food-2",
    image: "https://res.cloudinary.com/dtqrzl86y/image/upload/v1743276031/UltraSmart%20Homes/burger_s20yyk.jpg",
    title: "Cheeseburger with Fries",
    price: 1500,
    type: "Non Veg",
    category: "Burgers",
    description: "Juicy beef patty with melted cheese, lettuce, tomato, and our special sauce.",
  },
  {
    id: "food-3",
    image: "https://res.cloudinary.com/dtqrzl86y/image/upload/v1743275093/UltraSmart%20Homes/friedRice_clbnyj.png",
    title: "Fried Rice and Chicken",
    price: 1450,
    type: "Non Veg",
    category: "Main Course",
    description: "Three soft tacos filled with grilled chicken, fresh salsa, and sour cream.",
  },
  {
    id: "food-4",
    image: "https://res.cloudinary.com/dtqrzl86y/image/upload/v1743275730/UltraSmart%20Homes/orange_jr0qce.jpg",
    title: "Fresh Orange Juice",
    price: 1200,
    type: "Veg",
    category: "Breakfast",
    description: "Freshly squeezed orange juice with basil seeds.",
  },
  {
    id: "food-5",
    image: "https://res.cloudinary.com/dtqrzl86y/image/upload/v1743631085/UltraSmart%20Homes/R_who3xj.jpg",
    title: "Egusi Soup and beef",
    price: 4600,
    type: "Non Veg",
    category: "Main Course",
    description: "Selection of fresh beef including tuna, salmon, and California rolls.",
  },
  {
    id: "food-6",
    image: "https://res.cloudinary.com/dtqrzl86y/image/upload/v1743631245/UltraSmart%20Homes/IMG_1013-2_q7zoox.jpg",
    title: "Veg Burgers",
    price: 1300,
    discount: 20,
    type: "Veg",
    category: "Burgers",
    description: "Plant-based patty with lettuce, tomato, and vegan mayo.",
  },
  {
    id: "food-7",
    image: "https://res.cloudinary.com/dtqrzl86y/image/upload/v1743631323/UltraSmart%20Homes/Tomato-Soup-7-640x960_yccqxz.jpg",
    title: "Tomato Soup",
    price: 800,
    type: "Veg",
    category: "Soups",
    description: "Creamy tomato soup served with garlic bread.",
  },
  {
    id: "food-8",
    image: "https://res.cloudinary.com/dtqrzl86y/image/upload/v1743275633/UltraSmart%20Homes/yam_hxgbb8.jpg",
    title: "Yam and egg sauce",
    price: 2200,
    type: "Veg",
    category: "Breakfast",
    description: "yam and eggs served with fresh berries and maple syrup.",
  },
  {
    id: "food-9",
    image: "https://res.cloudinary.com/dtqrzl86y/image/upload/v1743275933/UltraSmart%20Homes/spag_iazz0h.jpg",
    title: "Spaghetti Carbonara",
    price: 4500,
    type: "Non Veg",
    category: "Pasta",
    description: "Classic Italian pasta with eggs, cheese, pancetta, and black pepper.",
  },
  {
    id: "food-10",
    image: "https://res.cloudinary.com/dtqrzl86y/image/upload/v1743631642/UltraSmart%20Homes/OIP_wfqebf.jpg",
    title: "Margherita Pizza",
    price: 2200,
    type: "Veg",
    category: "Pizza",
    description: "Traditional pizza with tomato sauce, mozzarella, and fresh basil.",
  },
  {
    id: "food-11",
    image: "https://res.cloudinary.com/dtqrzl86y/image/upload/v1743275093/UltraSmart%20Homes/friedRice_clbnyj.png",
    title: "Chicken Noodle Soup",
    price: 9000,
    type: "Non Veg",
    category: "Soups",
    description: "Hearty soup with chicken, vegetables, and noodles.",
  },
  {
    id: "food-12",
    image: "https://res.cloudinary.com/dtqrzl86y/image/upload/v1743631323/UltraSmart%20Homes/Tomato-Soup-7-640x960_yccqxz.jpg",
    title: "Pepperoni Pizza",
    price: 2000,
    type: "Non Veg",
    category: "Pizza",
    description: "Classic pizza topped with pepperoni slices and mozzarella cheese.",
  },
  {
    id: "food-13",
    image: "https://res.cloudinary.com/dtqrzl86y/image/upload/v1743275933/UltraSmart%20Homes/spag_iazz0h.jpg",
    title: "Spaghetti",
    price: 1650,
    type: "Veg",
    category: "Pasta",
    description: "Creamy pasta with parmesan cheese and butter sauce.",
  },
  {
    id: "food-14",
    image: "https://res.cloudinary.com/dtqrzl86y/image/upload/v1743275336/UltraSmart%20Homes/aple_komzco.png",
    title: "Apple Juice Toast",
    price: 2350,
    type: "Veg",
    category: "Breakfast",
    description: "Toasted apple juice topped with mashed avocado, cherry tomatoes, and microgreens.",
  },
]

