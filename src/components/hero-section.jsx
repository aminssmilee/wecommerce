import { useEffect, useState } from "react";
import Slider from "react-slick";
import { getBanners } from "../services/api";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Phone } from "lucide-react";

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
          const imageUrl = `http://127.0.0.1:8000/storage/${banner.gambar}`;

          return (
            <div key={index} className="relative min-h-screen">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${imageUrl})` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Content */}
              <div className="relative z-10 flex items-center justify-center min-h-screen">
                <div className="max-w-4xl mx-auto px-4 text-center">
                  {/* Kategori */}
                  {banner.kategori && (
                    <p className="text-blue-200 font-medium mb-4">
                      {banner.kategori}
                    </p>
                  )}

                  {/* Headline */}
                  <h1 className="text-5xl font-bold mb-6 leading-tight text-white">
                    {banner.headline || banner.judul}
                  </h1>

                  {/* Deskripsi */}
                  <p className="text-xl mb-8 text-white">{banner.deskripsi}</p>

                  {/* Tombol CTA */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {banner.link ? (
                      <a
                        href={banner.link}
                        className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-md hover:bg-blue-700 transition"
                      >
                        Shop Now
                      </a>
                    ) : (
                      <button className="flex items-center space-x-2 px-6 py-3 border border-white text-white text-lg font-medium rounded-md hover:bg-white hover:text-black transition">
                        <Phone className="w-5 h-5" />
                        <span>Schedule 30 Min Call</span>
                      </button>
                    )}
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
