import styles from './Home.module.css'
export default function Home() {
  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <h1>Welcome to our store</h1>
        <p>אפליקציית מוצרים קטנה שבנויה עם React, Routing, State ו־CSS Modules.</p>
      </section>
    </main>
  )
}