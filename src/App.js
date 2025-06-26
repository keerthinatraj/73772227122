import React from 'react';
import './App.css';
function App() {
  return (
    <div class="container">
      <header className="header">
        <h1>Hello Buddies!!</h1>
        <p className="subtitle"><h1>Afford Med</h1></p>
      </header>
      <section class="about">
        <h2>About Me</h2>
        <p><span>Afford Med Technologies</span><br></br> The founder name: Dayanidhi Sankara,
        and Dayanidhi Krishnan.<br></br>It was founded in 2007 september 24,with the age of 
        17 years,7 months,22 days.</p>
      </section>

      <section class="projects">
        <h2>Contact Us</h2>
        <ul>
          <li><strong>Email:</strong> afford@yahoo.com</li>
          <li><strong>Phone:</strong> 1234567890</li>
          <li><strong>Address:</strong> Hyderabad,Telungana</li>
        </ul>
      </section>

      <footer class="footer">
        <p>© 2025 Afford Med</p>
      </footer>
    </div>
  );
}

export default App;
