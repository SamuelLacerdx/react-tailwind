import { Link } from "react-router-dom";

function Navegacao() {
  return (
    <header className="grid grid-cols-3 items-center p-5 bg-blue-400">
      <nav className="flex gap-5">
        <Link to="/">Home</Link>
        <Link to="/Game">Video-Game</Link>
        <Link to="/Jogos">Jogos</Link>
        <Link to="/Acessorios">Acessorios</Link>
      </nav>

      <h1 className="text-3xl text-center">Pichau</h1>

      <div className="flex gap-3 justify-end">
        <img src="" alt="RedeSocial" />
        <img src="" alt="RedeSocial" />
      </div>
    </header>
  );
}

export default Navegacao;