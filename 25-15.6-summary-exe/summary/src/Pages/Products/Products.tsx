// src/pages/Products/Products.tsx
import { useEffect, useState } from "react";
import { products, type Product } from "../../data/products";
import ProductCard from "../../Components/ProductCard/ProductCard";
import styles from "./Products.module.css";

export default function Products() {
  const [productsData, setProductsData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setProductsData(products);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <h2 className={styles.loading}>Loading products...</h2>;
  }

  return (
    <main className={styles.page}>
      <h1>Products</h1>

      <div className={styles.grid}>
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}