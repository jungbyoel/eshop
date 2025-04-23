export default function OrderBy({ orderBy, setOrderBy }) {
    return (
      <select value={orderBy} onChange={e => setOrderBy(e.target.value)}>
        <option value="price-asc">Prix croissant</option>
        <option value="price-desc">Prix décroissant</option>
        <option value="rating-desc">Meilleure note</option>
        <option value="discount-desc">Meilleure promo</option>
      </select>
    );
  }
  