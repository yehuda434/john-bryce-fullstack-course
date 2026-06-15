// src/components/ProductCard/ProductCard.tsx

import { Link } from "react-router-dom";
import type { Product } from "../../data/products";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product; 
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} />

      <div className={styles.content}>
        <span className={styles.category}>{product.category}</span>
        <h3>{product.name}</h3>
        <p>₪{product.price}</p>

        <Link className={styles.button} to={`/products/${product.id}`}>
          View Details
        </Link>
      </div>
    </div>
  );
}