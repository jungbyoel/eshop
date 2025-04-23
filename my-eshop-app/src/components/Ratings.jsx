export default function Ratings({ rating, reviews }) {
    
    const stars = Array.from({ length: 5 }, (_, i) => (
      <span key={i} style={{ color: i < Math.round(rating) ? "#FFD700" : "#ccc" }}>★</span>
    ));
    return (
      <div>
        {stars}
        <span style={{ marginLeft: 8 }}>{rating.toFixed(2)} ({reviews.length} avis)</span>
      </div>
    );
  }
  