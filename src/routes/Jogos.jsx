import Card from "../components/Card";

function Jogos() {

    return (<>
        <h1 className="text-3xl text-center text-black p-10">Todos os JOGOS!!</h1>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8 place-items-center">
            <Card image="https://images.tcdn.com.br/img/img_prod/1105451/hogwarts_legacy_standard_edition_playstation_5_midia_fisica_485_1_ffae9de8b666293e46898ab1e3c9f2a4.jpg" nome="Hogwarts Legacy" descricao="Magia" />
            <Card image="https://images.tcdn.com.br/img/img_prod/1105451/hogwarts_legacy_standard_edition_playstation_5_midia_fisica_485_1_ffae9de8b666293e46898ab1e3c9f2a4.jpg" nome="Hogwarts Legacy" descricao="Magia" />
            <Card image="https://images.tcdn.com.br/img/img_prod/1105451/hogwarts_legacy_standard_edition_playstation_5_midia_fisica_485_1_ffae9de8b666293e46898ab1e3c9f2a4.jpg" nome="Hogwarts Legacy" descricao="Magia" />
            <Card image="https://images.tcdn.com.br/img/img_prod/1105451/hogwarts_legacy_standard_edition_playstation_5_midia_fisica_485_1_ffae9de8b666293e46898ab1e3c9f2a4.jpg" nome="Hogwarts Legacy" descricao="Magia" />
            <Card image="https://images.tcdn.com.br/img/img_prod/1105451/hogwarts_legacy_standard_edition_playstation_5_midia_fisica_485_1_ffae9de8b666293e46898ab1e3c9f2a4.jpg" nome="Hogwarts Legacy" descricao="Magia" />
        </div>
    </>

    )
}

export default Jogos;