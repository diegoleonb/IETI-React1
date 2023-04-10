import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { Home } from './components/Home'
import { AboutUs } from './components/AboutUs'
import { Tasks } from './components/Tasks'

function App() {

  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/tasks">Tasks</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={
            <Home/>
          } />
          <Route path="/about" element={
            <AboutUs/>
          } />
          <Route path="/tasks" element={
            <Tasks/>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App
