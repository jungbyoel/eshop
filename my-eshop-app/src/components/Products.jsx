import Product from "./Product";

export default function Products({ products }) {
  return (
    <section style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      {products.map(product => (
        <Product key={product.id} {...product} />
      ))}
    </section>
  );
}
