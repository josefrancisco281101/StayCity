import "./card.css";
export const Card = ({ cards }) => {
  return (
    <main>
      <h2>Stays in Finland</h2>
      <span className="stays">{cards.length}+ stays</span>
      <div className="main-container">
        {cards.map((opt, index) => (
          <section key={opt.id || index} className="section">
            <figure>
              <img className="img-card" src={opt.photo} alt={opt.title} />
            </figure>
            <div className="description">
              {opt.superHost && <button>SUPER HOST</button>}
              <span>
                {`${opt.type}. ${opt.beds || 0} beds`}
                <span>
                  <img className="img-star" src="/estrella.png" alt="" />
                  {opt.rating}
                </span>
              </span>
            </div>
            <h4>{opt.title}</h4>
          </section>
        ))}
      </div>
    </main>
  );
};
