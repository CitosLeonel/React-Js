
function App() {

  const products = [
    { id: 1, name: "Iphone", price: 800, stock: 10 },
    { id: 2, name: "Macbook Pro", price: 1200, stock: 5 },
    { id: 3, name: "Ipad", price: 600, stock: 2 },
    { id: 4, name: "Apple Watch", price: 400, stock: 0 },
    { id: 5, name: "MacBook Air", price: 1000, stock: 8 },
    { id: 6, name: "Airpods", price: 200, stock: 10 },
    { id: 7, name: "Magic Mouse", price: 100, stock: 10 },
    { id: 8, name: "Magic Keyboard", price: 150, stock: 10 },
  ]

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => {
          <li key={product.id}>
            {product.name} - {product.price} - {product.stock}
          </li>
        })}
      </ul>

      <h2>Productos con Stock</h2>
      <ul>
        {products.filter(product => product.stock > 0).map(product => {
          <li key={product.id}>
            {product.name} - {product.price} - {product.stock}
          </li>
        })}
      </ul>
    </div>
  )
}

export default App
