import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

//CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//COMPONENTS
import MovieList from './components/MovieList';
import ShowList from './components/ShowList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<MovieList />}/>
      <Route path="shows" element={<ShowList />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
