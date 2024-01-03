// // App.js
// import React, { useState, useEffect } from 'react';
// import './MenuStyle.css'; // Import your CSS file for styling

// const Navbar = () => {
//   const [showDrawer, setShowDrawer] = useState(false);

//   const toggleDrawer = () => {
//     setShowDrawer(!showDrawer);
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <img src="logo.png" alt="Logo" />
//         <span className="brand-name">Your Restaurant</span>
//       </div>
//       <div className={`mobile-menu ${showDrawer ? 'active' : ''}`} onClick={toggleDrawer}>
//         <div className={`hamburger ${showDrawer ? 'active' : ''}`}></div>
//       </div>
//       <div className={`drawer-background ${showDrawer ? 'active' : ''}`} onClick={toggleDrawer}></div>
//       <ul className={`nav-links ${showDrawer ? 'active' : ''}`}>
//         <li><a href="#home">Home</a></li>
//         <li><a href="#order-now">Order Now</a></li>
//         <li><a href="#contact-us">Contact Us</a></li>
//       </ul>
//     </nav>
//   );
// };

// const MenuPage = () => {
//   const [menuCategories, setMenuCategories] = useState([]);
//   const [showDrawer, setShowDrawer] = useState(false);

//   useEffect(() => {
//     fetch('http://localhost:5000/api/menuCategories') // Assuming backend is running locally
//       .then((response) => response.json())
//       .then((data) => setMenuCategories(data))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   const toggleDrawer = () => {
//     setShowDrawer(!showDrawer);
//   };

//   return (
//     <div className="main-page">
//       <Navbar />
//       <div className={`category-container ${showDrawer ? 'blurred' : ''}`}>
//         {menuCategories.map((category) => (
//           <a key={category.id} href={category.exploreLink} className="category-link">
//             <div className="category-card">
//               <img src={category.image} alt={category.title} />
//               <h2>{category.title}</h2>
//               <p>{category.description}</p>
//             </div>
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MenuPage;














// App.js
import React, { useState, useEffect } from 'react';
import './MenuStyle.css'; // Import your CSS file for styling

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
        <span className="brand-name">Your Restaurant</span>
      </div>
      <div className="mobile-menu" onClick={toggleDrawer}>
        <div className={`hamburger ${showDrawer ? 'active' : ''}`}></div>
      </div>
      <ul className={`nav-links ${showDrawer ? 'active' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#order-now">Order Now</a></li>
        <li><a href="#contact-us">Contact Us</a></li>
      </ul>
    </nav>
  );
};

const MenuPage = () => {
  const [menuCategories, setMenuCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/menuCategories') // Assuming backend is running locally
      .then((response) => response.json())
      .then((data) => setMenuCategories(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="main-page">
      <Navbar />
      <div className="category-container">
        {menuCategories.map((category) => (
          <a key={category.id} href={category.exploreLink} className="category-link">
            <div className="category-card">
              <img src={category.image} alt={category.title} />
              <h2>{category.title}</h2>
              <p>{category.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
