import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Card } from "./components/Card/Card";
import { Footer } from "./components/Footer/Footer";
export default function App() {
  return (
    <>
      <Navbar />
      <Card />
      <Footer />
    </>
  );
}
