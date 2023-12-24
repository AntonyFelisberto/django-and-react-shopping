import { Container } from 'react-bootstrap'
import {HashRouter as Router,Routes,Route} from 'react-router-dom'
import Header from "./components/Header"
import Footer from "./components/Footer"
import CartScreen from "./screens/CartScreen"
import HomeScreen from "./screens/HomeScreens"
import ProductScreen from "./screens/ProductScreen"

function App() {
  return (
    <Router>
      <Header/>
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact/>
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/cart/:id?' element={<CartScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
