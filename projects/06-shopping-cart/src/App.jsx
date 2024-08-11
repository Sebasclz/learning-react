import './App.css';
import { Products } from './components/Products';
import { Header } from './components/Header';
import { useFilters } from './hooks/useFilters';
import { Footer } from './components/Footer.jsx';
import { Cart } from './components/Cart.jsx';
import { CartProvider } from './context/cart.jsx';
import { useProductsData } from './hooks/getProductsData.js';

function App() {
  const products = useProductsData();
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
    </CartProvider>
  );
}

export default App;
