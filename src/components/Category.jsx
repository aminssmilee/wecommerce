import React, { useEffect, useMemo, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import cti from "../assets/logo/clouds.jpg";
import ctii from "../assets/logo/styleclouds.jpg";
import ctiii from "../assets/logo/custom.png";
import ctiiii from "../assets/logo/maintenance.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dummy data produk
const dummyProducts = [
  { id: 1, title: "Corporate Website", category: "Web Development", description: "Website perusahaan profesional.", price: 5000000, images: cti },
  { id: 2, title: "E-commerce Platform", category: "Web Development", description: "Toko online lengkap dengan pembayaran.", price: 12000000, images: ctii },
  { id: 3, title: "Brand Identity Design", category: "Design", description: "Logo, warna, dan guideline merek.", price: 3000000, images: ctiii },
  { id: 4, title: "Social Media Marketing", category: "Marketing", description: "Kampanye media sosial strategis.", price: 2500000, images: ctiiii },
  { id: 5, title: "Corporate Website", category: "Web Development", description: "Website perusahaan profesional.", price: 5000000, images: cti },
  { id: 6, title: "E-commerce Platform", category: "Web Development", description: "Toko online lengkap dengan pembayaran.", price: 12000000, images: ctii },
  { id: 7, title: "Brand Identity Design", category: "Design", description: "Logo, warna, dan guideline merek.", price: 3000000, images: ctiii },
  { id: 8, title: "Social Media Marketing", category: "Marketing", description: "Kampanye media sosial strategis.", price: 2500000, images: ctiiii },
];

// Daftar kategori
const categories = ["All Services", "Web Development", "Design", "Marketing"];

// Hook untuk mendeteksi ukuran layar
function useScreen() {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1024);
  useEffect(() => {
    const onResize = () => setW(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return {
    isMobile: w < 768,
    isTablet: w >= 768 && w < 1024,
  };
}

export default function CategorySlider() {
  const { isMobile, isTablet } = useScreen();
  const [selectedCategory, setSelectedCategory] = useState("All Services");

  // Filter produk berdasarkan kategori
  const filteredProducts =
    selectedCategory === "All Services"
      ? dummyProducts
      : dummyProducts.filter((p) => p.category === selectedCategory);

  // Settings slider
  const settings = useMemo(() => ({
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: isMobile ? 1 : isTablet ? 2 : 3,
    centerMode: isMobile ? false : true,
    centerPadding: isMobile ? "0px" : isTablet ? "40px" : "60px",
  }), [isMobile, isTablet]);

  return (
    <section className="bg-gray-50 font-helvetica">
      <div className="max-w-8xl mx-auto">

        {/* Pilihan kategori */}
        <div className="mb-4 px-5 flex justify-between">
          <label className="font-semibold text-gray-700 block mb-2">
            Choose Category:
          </label>

          {/* Mobile: Select */}
          <div className="flex md:hidden">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-md py-1 w-full"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop: Button Group */}
          <div className="hidden md:flex gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full border 
          ${selectedCategory === cat
                    ? "bg-blue-700 text-white border-black"
                    : "bg-blue-400 text-white border-gray-300 hover:bg-blue-500"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>


        {/* Slider */}
        <Slider key={`${isMobile}-${isTablet}-${selectedCategory}`} {...settings}>
          {filteredProducts.map((service) => (
            <div key={service.id} className="px-2">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
                <div className="w-full overflow-hidden aspect-[4/3] sm:aspect-[16/9]">
                  <img
                    src={service.images} // langsung import image
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4 sm:p-5 text-left">
                  <h3 className="font-semibold text-base sm:text-lg text-gray-800 mb-1 truncate">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-snug mb-3 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <p className="text-blue-600 font-semibold text-sm sm:text-base">
                      Rp {service.price.toLocaleString("id-ID")}
                    </p>
                    <Link
                      to={`/detail/${service.id}`}
                      className="inline-flex items-center text-blue-600 font-medium hover:underline text-xs sm:text-sm mt-1 md:mt-0"
                    >
                      Learn More <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

      </div>
      <div className="max-w-8xl mx-auto">

        {/* Pilihan kategori */}


        {/* Slider */}
        <Slider key={`${isMobile}-${isTablet}-${selectedCategory}`} {...settings}>
          {filteredProducts.map((service) => (
            <div key={service.id} className="px-2">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
                <div className="w-full overflow-hidden aspect-[4/3] sm:aspect-[16/9]">
                  <img
                    src={service.images} // langsung import image
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4 sm:p-5 text-left">
                  <h3 className="font-semibold text-base sm:text-lg text-gray-800 mb-1 truncate">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-snug mb-3 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <p className="text-blue-600 font-semibold text-sm sm:text-base">
                      Rp {service.price.toLocaleString("id-ID")}
                    </p>
                    <Link
                      to={`/detail/${service.id}`}
                      className="inline-flex items-center text-blue-600 font-medium hover:underline text-xs sm:text-sm mt-1 md:mt-0"
                    >
                      Learn More <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

      </div>
    </section>
  );
}
