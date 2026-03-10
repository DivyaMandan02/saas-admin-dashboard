function Card({ title, value }) {
  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}

export default Card;