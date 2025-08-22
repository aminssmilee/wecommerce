import { useEffect, useState } from "react";
import Slider from "react-slick";
import { getBanners } from "../services/api";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Phone } from "lucide-react";
import figma from "../assets/items/figma.svg";
import cloud from "../assets/logo/styleclouds.jpg"

export default function HeroSection() {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBanners()
      .then((res) => {
        console.log("Banner API:", res);
        setBanners(Array.isArray(res) ? res : []);
      })
      .catch((err) => console.error("❌ Error fetching banners:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="text-center py-20">Loading...</p>;
  }

  if (banners.length === 0) {
    return <p className="text-center py-20">Data tidak ditemukan</p>;
  }

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="min-h-screen font-helvetica">
      <Slider {...settings}>
        {banners.map((banner, index) => {
          // const imageUrl = `http://127.0.0.1:8000/storage/${banner.gambar}`;

          return (
            <div key={index} className="relative min-h-screen">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                // style={{ backgroundImage: `url(${imageUrl})` }}
                style={{ backgroundImage: `url(${cloud})` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-white/70" />

              {/* Content */}
              <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
                <div className="max-w-4xl mx-auto text-center">
                  {/* Kategori */}
                  {banner.kategori && (
                    <span className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs md:text-sm font-light text-gray-800 bg-white rounded-full shadow">
                      <div className="flex items-center justify-center w-5 h-5 bg-black rounded-full">
                        <img
                          src={figma}
                          alt="icon"
                          className="w-3 h-3 object-contain invert"
                        />
                      </div>
                      {banner.kategori}
                    </span>
                  )}

                  {/* Headline */}
                  <h1 className="text-3xl md:text-6xl font-bold mb-6 md:mb-8 text-white max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-2 md:gap-3 leading-tight">
                    {/* Kata pertama */}
                    <span className="text-black">
                      {banner.headline?.split(" ")[0]}
                    </span>

                    {/* Icon tengah */}
                    <span className="flex items-center fill-white justify-center px-2 md:px-3 py-1 md:py-2 text bg-blue-700 rounded-xl shadow">
                      <img
                        src={figma}
                        alt="icon"
                        className="w-6 h-6 md:w-10 md:h-10 object-contain invert"
                      />

                    </span>

                    {/* Kata kedua */}
                    <span className="text-black">
                      {banner.headline?.split(" ")[1]}
                    </span>

                    {/* Sisa kata + kata terakhir */}
                    {(() => {
                      const words = banner.headline?.split(" ").slice(2) || [];
                      const lastWord = words.pop();
                      const rest = words.join(" ");
                      return (
                        <>
                          {rest && <span className="text-black">{rest} </span>}
                          {lastWord && <span className="text-blue-700">{lastWord}</span>}
                        </>
                      );
                    })()}
                  </h1>


                  {/* Deskripsi */}
                  <p className="text-sm md:text-lg text-gray-700 mb-6 md:mb-8 max-w-sm md:max-w-xl mx-auto leading-relaxed">
                    {banner.deskripsi}
                  </p>

                  {/* Tombol CTA */}
                  <div className="flex justify-center">
                    <button className="flex items-center space-x-2 px-4 md:px-6 py-2 md:py-3 bg-black text-white text-xs md:text-sm font-medium rounded-full hover:bg-gray-900 transition shadow-sm">
                      <Phone className="w-4 h-4 md:w-5 md:h-5" />
                      <span>Schedule 30 Min Call</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
}
