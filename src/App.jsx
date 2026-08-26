import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navegacao from "./components/Navegacao";
import Home from "./routes/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navegacao />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
