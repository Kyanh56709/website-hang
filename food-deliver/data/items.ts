export interface FoodItem {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  desc: string;
}

export const categories = ["All", "Pizza", "Burger", "Sushi", "Drinks"];

export const foodItems: FoodItem[] = [
  {
    id: 1,
    name: "Double Cheeseburger",
    category: "Burger",
    price: 12.99,
    image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Two beef patties with melted cheddar.",
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    category: "Pizza",
    price: 15.50,
    image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Classic pepperoni with mozzarella.",
  },
  {
    id: 3,
    name: "California Roll",
    category: "Sushi",
    price: 8.99,
    image: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Crab, avocado, and cucumber.",
  },
  {
    id: 4,
    name: "Iced Coffee",
    category: "Drinks",
    price: 4.50,
    image: "https://images.pexels.com/photos/2615323/pexels-photo-2615323.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Cold brew with a splash of milk.",
  },
  {
    id: 5,
    name: "Chicken Supreme",
    category: "Pizza",
    price: 18.00,
    image: "https://images.pexels.com/photos/3682837/pexels-photo-3682837.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Chicken, onion, peppers, and mushroom.",
  },
  {
    id: 6,
    name: "Spicy Chicken Burger",
    category: "Burger",
    price: 11.00,
    image: "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Crispy chicken with spicy mayo.",
  },
];