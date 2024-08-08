import React, { useEffect, useState } from "react";
import "./navbar.css";

export const Navbar = ({ data, setCards }) => {
  const [citys, setCitys] = useState([]);
  const [searchValues, setSearchValues] = useState({
    city: "",
    maxGuests: "",
  });

  function filterData() {
    const { city, maxGuests } = searchValues;
    if (city.trim() !== "" && maxGuests === "") {
      const rs = data.filter((card) =>
        card.city.toLowerCase().includes(city.toLowerCase())
      );
      setCards(rs);
      return;
    }
    if (city.trim() === "" && maxGuests !== "") {
      const rs = data.filter((card) => card.maxGuests >= parseInt(maxGuests));

      setCards(rs);
      return;
    }
    if (city.trim() !== "" && maxGuests !== "") {
      const rs = data.filter(
        (card) =>
          card.city.toLowerCase().includes(city.toLowerCase()) &&
          card.maxGuests >= parseInt(maxGuests)
      );
      setCards(rs);
      return;
    }
    setCards(data);
  }
  const handleChange = (e) => {
    const target = e.target;
    setSearchValues({ ...searchValues, [target.name]: target.value });
  };
  const getCitys = () => {
    const rs = [];
    data.forEach((city) => {
      if (!rs.includes(city.city)) {
        rs.push(city.city);
      }
    });
    return rs;
  };
  useEffect(() => {
    const rs = getCitys();
    setCitys(rs);
  }, []);
  const navOption = [
    { id: 1, city: "Helsinki", country: "Finland" },
    { id: 2, city: "Turku", country: "Finland" },
    { id: 3, city: "Vaasa", country: "Finland" },
    { id: 4, city: "Oulu", country: "Finland" },
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
              type="search"
              list="locations"
              id="location-input"
              placeholder="Add location"
              name="city"
              onChange={handleChange}
            />
            <datalist id="locations">
              {navOption.map((opt) => (
                <option key={opt.id} value={opt.city} />
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
              name="maxGuests"
              onChange={handleChange}
            />
          </div>
          <button
            value={searchValues.city}
            onClick={filterData}
            className="btn-search"
          >
            <img src="/search.svg" alt="" />
          </button>
        </div>
      </nav>
    </div>
  );
};
