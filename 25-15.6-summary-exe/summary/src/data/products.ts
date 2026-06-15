
export interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    description: string;
    image: string
  }
  
  export const products: Product[] = [
    {
      id: "1",
      name: "Smart Watch",
      price: 299,
      category: "Technology",
      description: "שעון חכם עם מד צעדים, התראות ועיצוב מודרני.",
      image: "/54-300x200.jpg"
    },
    {
      id: "2",
      name: "Headphones",
      price: 199,
      category: "Music",
      description: "אוזניות איכותיות ללימודים, עבודה ומוזיקה.",
      image: "/407-300x200.jpg"
    },
    {
      id: "3",
      name: "Backpack",
      price: 149,
      category: "School",
      description: "תיק גב נוח עם מקום למחשב וספרים.",
      image: "/502-300x200.jpg"
    },
    {
      id: "4",
      name: "Laptop",
      price: 1999,
      category: "Technology",
      description: "מחשב נייד מהיר ועדיף לעבודה ולמשחקים.",
      image: "/54-300x200.jpg"
    },
    {
      id: "5",
      name: "Laptop",
      price: 1999,
      category: "Technology",
      description: "מחשב נייד מהיר ועדיף לעבודה ולמשחקים.",
      image: "/54-300x200.jpg"
    }
  ];