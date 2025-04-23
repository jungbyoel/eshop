import Ratings from "./Ratings";

export default function Product({
  title, category, brand, rating, reviews, thumbnail,
  description, price, discountPercentage, availabilityStatus
}) {
  const discountedPrice = (price * (1 - discountPercentage / 100)).toFixed(2);
  return (
    <article>
      <img src={thumbnail} alt={title} width={150} />
      <h3>{title}</h3>
      <p><strong>Catégorie:</strong> {category}</p>
      <p><strong>Marque:</strong> {brand}</p>
      <Ratings rating={rating} reviews={reviews} />
      <p>{description}</p>
      <p>
        <span style={{ textDecoration: "line-through" }}>{price}€</span>
        <span style={{ color: "green", marginLeft: 8 }}>{discountedPrice}€</span>
      </p>
      <p><strong>{availabilityStatus}</strong></p>
      <button>Buy Now</button>
    </article>
  );
}
