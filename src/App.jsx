import { useState } from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Content from './Components/Content';


function App() {
  return (
    <div className="container">
      <Navbar />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;