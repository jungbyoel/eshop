import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import BrandsAvailable from "./components/BrandsAvailable";
import OrderBy from "./components/OrderBy";
import { sunglasses } from "./data/sunglasses";

const shopName = "My Eshop App";

function getBrands(products) {
  const counts = {};
  products.forEach(p => {
    counts[p.brand] = (counts[p.brand] || 0) + 1;
  });
  return Object.entries(counts).map(([name, count]) => ({ name, count }));
}

export default function App() {
  const [category, setCategory] = useState("sunglasses");
  const [products, setProducts] = useState(sunglasses);
  const [selectedBrands, setSelectedBrands] = useState(getBrands(sunglasses).map(b => b.name));
  const [orderBy, setOrderBy] = useState("price-asc");

  // Filtrage par marque
  const filteredProducts = products.filter(p => selectedBrands.includes(p.brand));

  // Tri
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (orderBy === "price-asc") return a.price - b.price;
    if (orderBy === "price-desc") return b.price - a.price;
    if (orderBy === "rating-desc") return b.rating < b.rating ? 1 : -1;
    if (orderBy === "discount-desc") return b.discountPercentage - a.discountPercentage;
    return 0;
  });

  // Marque cochage/décochage
  const brands = getBrands(products);
  function handleBrandChange(brand) {
    setSelectedBrands(sel =>
      sel.includes(brand)
        ? sel.filter(b => b !== brand)
        : [...sel, brand]
    );
  }

  // Changement de catégorie
  function handleCategoryChange(cat) {
    setCategory(cat);
    setProducts(sunglasses); 
    setSelectedBrands(getBrands(sunglasses).map(b => b.name));
  }

  return (
    <div className="container">
      <Header shopName={shopName} category={category} onCategoryChange={handleCategoryChange} />
      <main>
        <BrandsAvailable brands={brands} selectedBrands={selectedBrands} onChange={handleBrandChange} />
        <OrderBy orderBy={orderBy} setOrderBy={setOrderBy} />
        <Products products={sortedProducts} />
      </main>
      <Footer shopName={shopName} />
    </div>
  );
}
