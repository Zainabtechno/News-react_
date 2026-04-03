import React from 'react';

const Navbar = () => {
  const navItems = ["Article", "Sports", "Music", "Art", "History"];

  return (
    <nav style={{
      backgroundColor: '#BDA6CE',
      
      padding: '10px 0px',
      borderBottom: '2px solid #333' // Dark line from your image
    }}>
      <ul style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'center',
        gap: '25px',
        margin: '0',
        padding: ' 0px'
      }}>
        {navItems.map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} style={{
              textDecoration: 'none',
              color: '#574964',
              
              fontSize: '1.2rem',
              fontFamily:"Impact"
            }}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;