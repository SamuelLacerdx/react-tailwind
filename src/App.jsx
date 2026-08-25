import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navegacao from "./components/Navegacao";
import Home from "./routes/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navegacao />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
