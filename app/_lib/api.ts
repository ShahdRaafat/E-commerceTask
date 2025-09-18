export async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) throw Error("Failed fetching products");

  const data = await res.json();
  return data;
}
