
import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <div className="home-page">
      <header>
        <h1>Airline Ticket Booking</h1>
        <p>Find the best deals on flights</p>
      </header>

      <main>
        <section className="search-section">
          <h2>Search for Flights</h2>
          
          <form>
            
            <input type="text" placeholder="Departure City" />
            <input type="text" placeholder="Destination City" />
            <input type="date" placeholder="Departure Date" />
            <button type="submit">Search</button>
          </form>
        </section>

        <section className="featured-flights">
          <h2>Featured Flights</h2>
          <div className="flight-card">
            <b>Boeing 777</b>
            <p><b>Departure : U.S</b></p>
            <p><b>Destination: U.K</b></p>
            <p>Price: $10,000</p>
            <Link to='./login'>Book Now</Link>
          </div>

          
        </section>
      </main>
    </div>
  );
};

export default HomePage;
