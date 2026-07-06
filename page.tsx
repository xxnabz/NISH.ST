import Link from "next/link";

const products = [
  { id: 1, name: "Black Hoodie", price: 199 },
  { id: 2, name: "Minimal Shirt", price: 129 },
  { id: 3, name: "Luxury Jacket", price: 299 }
];

export default function Shop() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Shop</h1>

      {products.map(p => (
        <div key={p.id} style={{ margin: 20, padding: 20, border: "1px solid #333" }}>
          <h2>{p.name}</h2>
          <p>${p.price}</p>
        </div>
      ))}

      <Link href="/">Back</Link>
    </main>
  );
}
