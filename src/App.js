import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./components/hero";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    </div>
  );
}

export default App;
