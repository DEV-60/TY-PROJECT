import React from 'react';
import './Navbar.css'; // Import your Navbar styling (if any)


const Navbar = () => {
  // Handler function for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to backend)
    // You can use state or hooks to manage form input values
  };

  

  return (
    <div className="Navbar">
      <header>
        <nav>
          <ul>
          <img src="" alt="Wanderly "/><br/>
          <br/>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/help">Help</a></li>
            {/* Add more sidebar links here */}
          </ul>
        </nav>
      </header>
      {/* Hero section */}
      <div className="hero">
        <h1>Welcome to Our Website</h1>
        <p>Discover amazing content and explore!</p>
              </div>

      {/* Feature section */}
      <div className="features">
        <div className="feature-container">
          <img src="https://onplanners.com/sites/default/files/styles/template_teaser/public/template-images/printable-travel-itinerary-template.png" alt="Feature 1" />
          <br/><br/><p>Trip Planner<br/>description</p>
          <button>GO</button>
        </div>
        <div className="feature-container">
          <img src="https://th.bing.com/th/id/OIP.Hz-Naz7e1FK55A6O1AzbPQHaE7?rs=1&pid=ImgDetMain" alt="Feature 2" />
          <br/><br/><p>Hotel Booking<br/> description</p>
          <button>GO</button>
        </div>
        <div className="feature-container">
          <img src="https://th.bing.com/th/id/R.2583a5c9e5e5784f6169a3539f0c469c?rik=It8z5IApuSse3Q&riu=http%3a%2f%2fevents.ufv.ca%2fwp-content%2fuploads%2f2020%2f08%2fmyCampusLife-Language-Exchange.png&ehk=YDXZBF5VPr9S%2badL2%2bWKivhbuu3636gGBZ%2f0ELuEbvs%3d&risl=&pid=ImgRaw&r=0" alt="Feature 3" />
          <br/><br/><p>Language Exchange<br/> description</p>
          <button>GO</button>
        </div>
        <div className="feature-container">
          <img src="https://img.freepik.com/free-vector/pay-balance-owed-abstract-concept-illustration-making-credit-payment-pay-owed-money-bank-irs-balance-due-debt-consolidation-management-taxpayer-bill_335657-1236.jpg?w=1380&t=st=1707894844~exp=1707895444~hmac=b49e903d22184985b61475c910f38780e2c193add56c4bbf3ff5b76038619550" alt="Feature 4" />
          <br/><br/><p>Expense Tracker<br/> description</p>
          <button>GO</button>
        </div>
        <div className="feature-container">
          <img src="https://th.bing.com/th/id/OIP.9_eSFHVP2Xj7Jnzcueh7QQHaEK?w=329&h=185&c=7&r=0&o=5&dpr=2&pid=1.7" alt="Feature 5" />
          <br/><br/><p>Review<br/> description</p>
          <button>GO</button>
        </div>
      </div>

      {/* Contact form section */}
      {/* Contact form section */}
      <div className="contact-form-container" style={{ backgroundImage: "url('https://burst.shopifycdn.com/photos/contact-us-phone.jpg?width=1850&format=pjpg&exif=1&iptc=1')" }}>
        <div className="contact-form-content">
          
          <div className="contact-form">
            <form id="contact-form" onSubmit={handleSubmit} method="POST">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone number</label>
                <input type="tel" id="phone" name="phone" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" id="email" name="email" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" className="form-control" rows="5"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send</button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer section */}
      <footer className="footer">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
         
      </footer>
    </div>
  );
};

export default Navbar;
