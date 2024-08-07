import "./navbar.css";

export const Navbar = () => {
  const navOption = [
    {
      id: 1,
      city: "Helsinki",
      country: "Finland",
    },
    {
      id: 2,
      city: "Turku",
      country: "Finland",
    },
    {
      id: 3,
      city: "Turku",
      country: "Finland",
    },
    {
      id: 4,
      city: "Vaasa",
      country: "Finland",
    },
    {
      id: 5,
      city: "Oulu",
      country: "Finland",
    },
  ];
  return (
    <div className="nav-container">
      <nav>
        <figure>
          <img src="/logo.png" alt="Logo" />
        </figure>
        <div className="search-form">
          <div className="input-group">
            <label htmlFor="location-input"></label>
            <input
              list="locations"
              id="location-input"
              placeholder="Add location"
            />
            <datalist id="locations">
              {navOption.map((opt) => (
                <option key={opt.id} value={`${opt.city} ${opt.country}`} />
              ))}
            </datalist>
          </div>
          <div className="input-group">
            <label htmlFor="guests-input"></label>
            <input
              type="number"
              id="guests-input"
              placeholder="Add guests"
              min="0"
            />
          </div>
          <button className="btn-search">
            <img src="/search.svg" alt="" />
          </button>
        </div>
      </nav>
    </div>
  );
};
