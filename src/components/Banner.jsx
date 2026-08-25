import imgBanner from "../assets/gtaBanner.jpeg";

function Banner() {
  return (
    <section>
      <img src={imgBanner} alt="Banner PS5" className="w-full object-contain" />
    </section>
  );
}

export default Banner;