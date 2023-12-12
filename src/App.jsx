import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { useState } from 'react';
let SERVER = import.meta.env.VITE_SERVER;


function App(){
  const [books, setBooks]= useState([]);

  async function fetchBooks(){
    try{
      let response = await axios.get(`${SERVER}/books`)
      setBooks(response.data);
      console.log('getting books', response.data)
    }catch(e){console.error(e.message)}
  }
    return (
      <>
        <Router>
          <Header />
          <button onClick={fetchBooks}>Get me some books!</button>
          <Routes>
            <Route 
              exact path="/books"
              element={<BestBooks books={books}/>}
            >
            </Route>
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }


export default App;
