import icone1 from "../assets/icon1.png";
import icone2 from "../assets/icon2.png";
import icone3 from "../assets/icon3.png";
import icone4 from "../assets/icon4.png";
import CardFooter from "./CardFooter";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white  p-6 mt-16">
      <div className="flex justify-evenly p-5">
        <CardFooter icone={icone1} nomeIcone="Envio para todo Brasil" />
        <CardFooter icone={icone2} nomeIcone="Peças a parte" />
        <CardFooter icone={icone3} nomeIcone="Envio Nota Fiscal " />
        <CardFooter icone={icone4} nomeIcone="Proteção em camadas" />
      </div>
      <p className="text-sm text-center justify-end">
        ©2026 Pichau. Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default Footer;
