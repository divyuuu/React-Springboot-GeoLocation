import "./hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">

        <div className="hero-text">

          <h1>
            Move smarter with <span>Ryde</span>
          </h1>

          <p>
            Book rides instantly, share trips, and travel across the city
            with premimum and reliable rides.
          </p>

          <div className="hero-buttons">
            <button className="primary">Book a Ride</button>
            <button className="secondary">Become a Driver</button>
          </div>

        </div>

        <div className="hero-card">

          <h3>Book your ride</h3>

          <input placeholder="Pickup location" />
          <input placeholder="Drop location" />

          <button className="ride-btn">
            Find Ride
          </button>

        </div>

      </div>
    </section>
  );
}