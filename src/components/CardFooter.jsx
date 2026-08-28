function CardFooter({ icone, nomeIcone}) {
  return (
    <>
      <div className="flex items-center bg-blue-600 w-55 border rounded-2xl p-1">
        <img src={icone} alt="Foto icone" className="w-9 h-9 fill-neutral-200 ml-2"/>
        <div className="p-1 text-center">
          <p>{nomeIcone}</p>
        </div>
      </div>
    </>
  );
}

export default CardFooter;