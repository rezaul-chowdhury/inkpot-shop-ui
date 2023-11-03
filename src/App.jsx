import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
// import Product from "./pages/Product";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
      // <div>
      //   <Home />
      //   <ProductList />
      //   <Product />
      //   <Register />
      //   <Login />
      //   <Cart />
      // </div>

      <Router>
          <Routes>
              <Route exact path="/" element={<Home />} />
          </Routes>
          <Routes>
              <Route path="/products/:category" element={<ProductList />} />
          </Routes>
      </Router>
  )
};

export default App;
