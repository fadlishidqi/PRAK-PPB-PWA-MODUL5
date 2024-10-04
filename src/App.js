// src/App.js

import React from 'react';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import { MdGroup } from 'react-icons/md';
import { FaBook, FaGamepad } from 'react-icons/fa';
import './App.css';
import Movie from './pages/Movie';
import Profile from './pages/Profile';
import Book from './pages/Book';
import DetailMovie from './pages/DetailMovie';
import Games from './pages/Games';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <p id="titleGroup">Kelompok 9</p>
        </header>
        <Routes>
          <Route path="/" element={<Navigate to="/movie" replace />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/movie/detail/:id" element={<DetailMovie />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/book" element={<Book />} />
          <Route path="/games" element={<Games />} />
        </Routes>
        <footer>
          <NavLink to="/movie" className="iconWrapper">
            <HiHome className="icon" /> Movie
          </NavLink>
          <NavLink to="/book" className="iconWrapper">
            <FaBook className="icon" /> Book
          </NavLink>
          <NavLink to="/games" className="iconWrapper">
            <FaGamepad className="icon" /> Games
          </NavLink>
          <NavLink to="/profile" className="iconWrapper">
            <MdGroup className="icon" /> Profile
          </NavLink>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;