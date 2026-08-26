import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navegacao from "./components/Navegacao";
import Home from "./routes/Home";
import Game from "./routes/Game";
import Jogos from "./routes/Jogos";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navegacao />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Game" element={<Game/>} />
          <Route path="/Jogos" element={<Jogos/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
