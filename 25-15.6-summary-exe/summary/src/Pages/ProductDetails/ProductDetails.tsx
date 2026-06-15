// src/pages/ProductDetails/ProductDetails.tsx

import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import styles from "./ProductDetails.module.css";

export default function ProductDetails() {
  const { productId } = useParams<{ productId: string }>();

  const product = products.find((item) => item.id === productId);

  if (!product) {
    return <h2 className={styles.notFound}>Product not found</h2>;
  }
  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <img src={product.image} alt={product.name} />

        <div>
          <span>{product.category}</span>
          <h1>{product.name}</h1>
          <h2>₪{product.price}</h2>
          <p>{product.description}</p>
        </div>
      </div>
    </main>
  );
}