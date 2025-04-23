import React from "react";
import Ratings from "./Ratings";

export default function Product({
  title,
  category,
  brand,
  rating,
  reviews,
  thumbnail,
  description,
  price,
  discountPercentage,
  availabilityStatus,
}) {
  const discountedPrice = (price * (1 - discountPercentage / 100)).toFixed(2);

  return (
    <article>
      <img
        src={thumbnail}
        alt={title}
        width={160}
        height={160}
        style={{ objectFit: "cover", borderRadius: "0.5rem", background: "#f6f6f6" }}
      />
      <h3>{title}</h3>
      <p>
        <strong>Catégorie :</strong> {category}
      </p>
      <p>
        <strong>Marque :</strong> {brand}
      </p>
      <Ratings rating={rating} reviews={reviews} />
      <p style={{ minHeight: "3em" }}>{description}</p>
      <p>
        <span style={{ textDecoration: "line-through", color: "#888" }}>
          {price} €
        </span>
        <span style={{ color: "green", fontWeight: "bold", marginLeft: 8 }}>
          {discountedPrice} €
        </span>
      </p>
      <p>
        <strong>{availabilityStatus}</strong>
      </p>
      <button
        style={{
          background: "var(--primary, #007bff)",
          color: "#fff",
          border: "none",
          borderRadius: "0.5rem",
          padding: "0.5rem 1.2rem",
          fontWeight: "600",
          cursor: "pointer",
          marginTop: "0.8rem",
        }}
        disabled={availabilityStatus !== "In Stock"}
      >
        Buy Now
      </button>
    </article>
  );
}
