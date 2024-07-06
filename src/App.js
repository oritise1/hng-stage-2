import './App.css';
import Shop from './components/Shop/Shop';
import NavBar from './components/NavBar/NavBar'
import Product from './components/Product/Product';
import ProductCard from './components/ProductCard/ProductCard';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Shop />
      <Product />
      <ProductCard />
    </div>
  );
}

export default App;
