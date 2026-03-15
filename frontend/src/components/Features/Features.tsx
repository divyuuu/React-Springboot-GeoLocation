import "./features.css";

const features = [
  {
    title: "Fast Pickup",
    desc: "Drivers arrive within minutes across the city."
  },
  {
    title: "Premimum Cars",
    desc: "Choose your next dream car."
  },
  {
    title: "Ride Sharing",
    desc: "Share rides with others and save money."
  }
];

export default function Features() {
  return (
    <section className="features">
      <div className="container">

        <h2>Why choose Ryde</h2>

        <div className="feature-grid">

          {features.map((f, i) => (
            <div className="feature-card" key={i}>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}