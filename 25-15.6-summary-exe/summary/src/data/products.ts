export interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    description: string;
    image: string;
  }
  
  export const products: Product[] = [
    {
      id: "1",
      name: "Smart Watch",
      price: 299,
      category: "Technology",
      description: "שעון חכם עם מד צעדים, התראות ועיצוב מודרני.",
      image: "https://picsum.photos/300/200?random=1"
    },
    {
      id: "2",
      name: "Headphones",
      price: 199,
      category: "Music",
      description: "אוזניות איכותיות ללימודים, עבודה ומוזיקה.",
      image: "https://picsum.photos/300/200?random=2"
    },
    {
      id: "3",
      name: "Backpack",
      price: 149,
      category: "School",
      description: "תיק גב נוח עם מקום למחשב וספרים.",
      image: "https://picsum.photos/300/200?random=3"
    }
  ];