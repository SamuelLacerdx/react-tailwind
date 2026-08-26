import Banner from "../components/Banner";
import Card from "../components/Card";

function Home() {
  return (
    <>
      <Banner />
      <h1 className="text-center p-10 text-3xl font-bold my-6">O que você procura?</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8 place-items-center">
        <Card image="https://cdn.awsli.com.br/11/11317/produto/262961352/2446584647e41c83947-xrqz5w86s9.jpg" nome="PS5" descricao="Melhor dos video-games" />
        <Card image="https://images.tcdn.com.br/img/img_prod/1105451/hogwarts_legacy_standard_edition_playstation_5_midia_fisica_485_1_ffae9de8b666293e46898ab1e3c9f2a4.jpg" nome="Hogwarts Legacy" descricao="Magia" />
        <Card image="https://cdn.awsli.com.br/400x400/53/53761/produto/235008456/dimens-es-gg---2023-09-26t102446-386-4sl39jvcoq.png" nome="PS Portal" descricao="Aonde o PS5 não vai!" />
        <Card image="https://images.tcdn.com.br/img/img_prod/993382/headset_sem_fio_pulse_3d_sony_ps5_269_1_7407f2c5647d8a4499c53ca27051d84e.jpg" nome="Headset" descricao="O mlehor do headset" />
      </div>

    </>
  );
}

export default Home;