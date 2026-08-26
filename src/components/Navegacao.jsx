import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navegacao() {
  const [quantidade, setQuantidade] = useState(0);

  useEffect(() => {
    function handleAdicionar() {
      setQuantidade((q) => q + 1);
    }

    window.addEventListener("adicionarAoCarrinho", handleAdicionar);
    return () => window.removeEventListener("adicionarAoCarrinho", handleAdicionar);
  }, []);

  return (
    <header className="grid grid-cols-3 items-center p-5 bg-blue-400">
      <nav className="flex gap-5 text-white">
        <Link to="/" >Home</Link >
        <Link to="/Game">Video-Game</Link>
        <Link to="/Jogos">Jogos</Link>
        <Link to="/Acessorios">Acessorios</Link>
      </nav>

      <h1 className="text-3xl text-center text-white">Pichau</h1>

      <div className="flex gap-3 justify-end items-center">
        <img src="" alt="RedeSocial" />
        <img src="" alt="RedeSocial" />

        <div className="relative text-2xl">
          🛒
          <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {quantidade}
          </span>
        </div>
      </div>
    </header>
  );
}

export default Navegacao;