
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import Profile from './About';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            exact path="/"
            element={<Home />}
          >
          </Route>
          <Route
            exact path="/books"
            element={<BestBooks />}
          >
          </Route>
          <Route
            exact path="/about"
            element={<Profile />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}


export default App;
