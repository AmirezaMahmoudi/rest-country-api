
import './App.css';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Countries from "./routes/countries/Countries.tsx";
import Header from "./components/Header.tsx";
import Country from "./routes/country/Country.tsx";
function App() {
  return (
    <>
      <Header />
      <BrowserRouter><Routes>
        <Route path="/:name" element={<Country />} />
        <Route path="/" element={<Countries />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
