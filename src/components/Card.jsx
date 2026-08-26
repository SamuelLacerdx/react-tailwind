function Card({ nome, descricao, image }) {
  return (
    <div className="flex flex-col w-70 p-4 gap-4 border border-gray-500 rounded-md">
      <img src={image} alt="Imagem produto" className="w-full" />
      <div className="flex flex-col gap-3 ">
        <p className="text-xl font-bold "> {nome}</p>
        <p className="text-sm">{descricao}</p>
        <button className="flex justify-center p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Comprar
        </button>
      </div>
    </div>
  );
}

export default Card;
