import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Card } from "./components/Card/Card";
import { Footer } from "./components/Footer/Footer";
export default function App() {
  const [data, setData] = useState([]);
  const [cards, setCards] = useState([]);
  async function getData() {
    try {
      const response = await fetch("/stays.json");
      const jsonResponse = await response.json();
      setCards(jsonResponse);
      setData(jsonResponse);
    } catch (error) {
      console.error("Error al cargar los datos:", error);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Navbar data={data} setCards={setCards} />

      <Card cards={cards} />
      <Footer />
    </>
  );
}
