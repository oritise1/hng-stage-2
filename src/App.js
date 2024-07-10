import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProductList from './pages/ProductPage/index';
import CartPage from './pages/CartPage/index';
import CheckOut from './pages/CheckOutPage/index';
import Product1 from './pages/ProductDetails/Product1';
import Product2 from './pages/ProductDetails/Product2';
import Product3 from './pages/ProductDetails/Product3';
import Product4 from './pages/ProductDetails/Product4';
import Product5 from './pages/ProductDetails/Product5';
import Product6 from './pages/ProductDetails/Product6';
import Product7 from './pages/ProductDetails/Product7';
import Product8 from './pages/ProductDetails/Product8';
import Product9 from './pages/ProductDetails/Product9';
import Product10 from './pages/ProductDetails/Product10';
import Product11 from './pages/ProductDetails/Product11';
import Product12 from './pages/ProductDetails/Product12';
import Product13 from './pages/ProductDetails/Product13';
import Product14 from './pages/ProductDetails/Product14';
import Product15 from './pages/ProductDetails/Product15';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/checkout' element={<CheckOut />} />
          <Route path='/product1' element={<Product1 />} />
          <Route path='/product2' element={<Product2 />} />
          <Route path='/product3' element={<Product3 />} />
          <Route path='/product4' element={<Product4 />} />
          <Route path='/product5' element={<Product5 />} />
          <Route path='/product6' element={<Product6/>} />
          <Route path='/product7' element={<Product7 />} />
          <Route path='/product8' element={<Product8 />} />
          <Route path='/product9' element={<Product9 />} />
          <Route path='/product10' element={<Product10 />} />
          <Route path='/product11' element={<Product11 />} />
          <Route path='/product12' element={<Product12 />} />
          <Route path='/product13' element={<Product13 />} />
          <Route path='/product14' element={<Product14 />} />
          <Route path='/product15' element={<Product15 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
