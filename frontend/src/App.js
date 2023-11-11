import { Container } from 'react-bootstrap'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomeScreen from "./screens/HomeScreens"

function App() {
  return (
    <div>
      <Header/>
      <main className='py-3'>
        <Container>
          <Route path="/" component={HomeScreen} exact/>
        </Container>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
