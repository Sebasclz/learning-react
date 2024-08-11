import './Products.css';
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx';
import { useCart } from '../hooks/useCart.js';

export function Products({ products }) {
  const { addToCart, cart, removeFromCart } = useCart();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <main className="products">
      <ul>
        {products.slice(0, 12).map((product) => {
          const isInCart = checkProductInCart(product);
          return (
            <li key={product.id}>
              <img src={product.images[0]} alt={product.name} />
              <div>
                <strong className="product-title">{product.title}</strong>
                <strong className="product-price">${product.price}</strong>
              </div>
              <div>
                <button
                  className={isInCart ? 'remove-button' : 'add-button'}
                  onClick={() =>
                    isInCart ? removeFromCart(product) : addToCart(product)
                  }
                >
                  {isInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
