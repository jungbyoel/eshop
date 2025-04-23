import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import BrandsAvailable from "./components/BrandsAvailable";
import OrderBy from "./components/OrderBy";
import './assets/custom.css';


const shopName = "My Eshop App";

function getBrands(products) {
  const counts = {};
  products.forEach((p) => {
    counts[p.brand] = (counts[p.brand] || 0) + 1;
  });
  return Object.entries(counts).map(([name, count]) => ({ name, count }));
}

export default function App() {
  const [category, setCategory] = useState("sunglasses");
  const [products, setProducts] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [orderBy, setOrderBy] = useState("price-asc");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Chargement des produits depuis l'API
  useEffect(() => {
    setLoading(true);
    setError(false);
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setSelectedBrands(getBrands(data.products).map((b) => b.name));
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [category]);

  // Extraction des marques uniques
  const brands = getBrands(products);

  // Filtrage par marque
  const filteredProducts = products.filter((p) =>
    selectedBrands.includes(p.brand)
  );

  // Tri
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (orderBy === "price-asc") return a.price - b.price;
    if (orderBy === "price-desc") return b.price - a.price;
    if (orderBy === "rating-desc") return b.rating < a.rating ? 1 : -1;
    if (orderBy === "discount-desc")
      return b.discountPercentage - a.discountPercentage;
    return 0;
  });

  // Gestion du changement de marque
  function handleBrandChange(brand) {
    setSelectedBrands((sel) =>
      sel.includes(brand)
        ? sel.filter((b) => b !== brand)
        : [...sel, brand]
    );
  }

  // Gestion du changement de catégorie
  function handleCategoryChange(cat) {
    setCategory(cat);
  }

  // Affichage du chargement ou des erreurs
  if (loading) return <p>Chargement…</p>;
  if (error)
    return (
      <div>
        <p>Erreur de chargement des produits.</p>
        <button onClick={() => setCategory(category)}>Réessayer</button>
      </div>
    );

  return (
    <div className="container">
      <Header
        shopName={shopName}
        category={category}
        onCategoryChange={handleCategoryChange}
      />
      <main>
        <BrandsAvailable
          brands={brands}
          selectedBrands={selectedBrands}
          onChange={handleBrandChange}
        />
        <OrderBy orderBy={orderBy} setOrderBy={setOrderBy} />
        <Products products={sortedProducts} />
      </main>
      <Footer shopName={shopName} />
    </div>
  );
}
