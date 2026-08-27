import { useState, useEffect } from "react";
import imgBanner1 from "../assets/PS5Banner1.jpeg";
import imgBanner2 from "../assets/PS5Banner2.jpeg";
import imgBanner3 from "../assets/PS5Banner3.jpeg";

const banners = [imgBanner1, imgBanner2, imgBanner3];

function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full h-200 overflow-hidden">
    
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <img
            key={index}
            src={banner}
            alt={`Banner PS5 ${index + 1}`}
            className="w-full h-full flex-shrink-0 object-cover"
          />
        ))}
      </div>
    </section>
  );
}

export default Carousel;
