import { BrowserRouter as Router, Route} from "react-router-dom";
import { CookiesProvider } from 'react-cookie';

import Home from './pages/frontend/Home';
import Products from './pages/frontend/Products';
import Contact from './pages/frontend/Contact';
import Blog from './pages/frontend/Blog';
// import NotFound from './pages/frontend/NotFound';
import addProduct from "./pages/backend/AddProduct";

import Header from "./components/frontend/Header";


function App() {
  return(
    <CookiesProvider>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" component={Blog} />
        {/* <Route component={NotFound}/> */}
        <Route path="/admin" component={addProduct} />
      </Router>
    </CookiesProvider>
    
  );
}

export default App;
