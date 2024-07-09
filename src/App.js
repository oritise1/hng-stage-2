import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
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
        <Switch>
          <Route exact path='/' component={ProductList} />
          <Route path='/cart' component={CartPage} />
          <Route path='/checkout' component={CheckOut} />
          <Route path='/product1' component={Product1} />
          <Route path='/product2' component={Product2} />
          <Route path='/product3' component={Product3} />
          <Route path='/product4' component={Product4} />
          <Route path='/product5' component={Product5} />
          <Route path='/product6' component={Product6} />
          <Route path='/product7' component={Product7} />
          <Route path='/product8' component={Product8} />
          <Route path='/product9' component={Product9} />
          <Route path='/product10' component={Product10} />
          <Route path='/product11' component={Product11} />
          <Route path='/product12' component={Product12} />
          <Route path='/product13' component={Product13} />
          <Route path='/product14' component={Product14} />
          <Route path='/product15' component={Product15} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
