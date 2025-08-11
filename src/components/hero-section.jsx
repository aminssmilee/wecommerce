import { useEffect, useState } from "react";
import Slider from "react-slick";
import { getProducts, getBanners } from "../services/api";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroSection() {
  const [banners, setBanners] = useState([]);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getBanners(), getProducts()])
      .then(([bannerRes, productRes]) => {
        console.log("Banner API:", bannerRes);
        console.log("Product API:", productRes);
        setBanners(Array.isArray(bannerRes) ? bannerRes : []);
        setProduct(productRes?.data?.[0] || {});
      })
      .catch(err => console.error("❌ Error fetching data:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="text-center py-20">Loading...</p>;
  }

  if (banners.length === 0 || !product.title) {
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
    <section className="min-h-screen">
      <Slider {...settings}>
        {banners.map((banner, index) => {
          const imageUrl = `http://127.0.0.1:8000/storage/${banner.gambar}`;
          console.log("Banner Image URL:", imageUrl);

          return (
            <div key={index} className="relative min-h-screen">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${imageUrl})` }}
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="relative z-10 flex items-center min-h-screen">
                <div className="max-w-7xl mx-auto px-4">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-white">
                      <p className="text-blue-200 font-medium mb-4">Wecommerce.idn</p>
                      <h1 className="text-5xl font-bold mb-6 leading-tight">
                        {product.title?.toUpperCase()} <br />
                        <span className="text-blue-400">{banner.deskripsi}</span>
                      </h1>
                      <p className="text-xl mb-8">
                        Starting from Rp {parseInt(product.price || 0).toLocaleString()}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-md hover:bg-blue-700 transition">
                          Get Started
                        </button>
                        <button className="px-6 py-3 border border-white text-white text-lg font-medium rounded-md hover:bg-white hover:text-black transition">
                          View Portfolio
                        </button>
                      </div>
                    </div>
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
