export default function Header({ shopName, category, onCategoryChange }) {
    return (
      <header>
        <h1>{shopName}</h1>
        <nav>
          <span>Catégorie : <strong>{category}</strong></span>
          <button onClick={() => onCategoryChange("sunglasses")}>Sunglasses</button>
          <button onClick={() => onCategoryChange("mens-shirts")}>T-Shirts</button>
        </nav>
      </header>
    );
  }
  