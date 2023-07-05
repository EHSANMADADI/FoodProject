
import './App.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import MyLoader from './MyLoader';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

////tyadet bashe to in proje bayad Az skeleton estefade koni
import { useState } from 'react';
import Home from './Pageas/Home/Home';
import Create from './Pageas/Create/Create';
import Search from './Pageas/Search/Search';
import Recipe from './Pageas/Recipe/Recipe';
import Navbar from './Component/Navbar';
import Card from './Component/Card';
function App() {
  return (

    <div className="App">


      {/* <div className="loader d-flex m-2 flex-wrap">
        <div className="m-2">
          <MyLoader />
        </div>
        <div className="m-2">
          <MyLoader />
        </div>
        <div className="m-2">
          <MyLoader />
        </div>
        <div className="m-2">
          <MyLoader />
        </div>
      </div> */}



      
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recipes/:id" element={<Card />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
