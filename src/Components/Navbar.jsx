import React from 'react';


function Navbar() {
  return (
    <nav className="navbar">

        <div class="image">
            <img id="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTinimFZRoXyZ1J5T4iC23QakjwfFyqkH_ovgDdWPoDLOrCn1VQRPZFjlA&s" alt="" />
        </div>
        
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;