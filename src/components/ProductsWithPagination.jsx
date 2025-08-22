import React, { useEffect, useMemo, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

export default function ProductsSlider({ products }) {
  const { isMobile, isTablet } = useScreen();

  const settings = useMemo(() => ({
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: isMobile ? 1 : isTablet ? 2 : 3,            // ✅ mobile 1, tablet 2, desktop 3
    centerMode: isMobile ? false : true,                       // ✅ matikan di mobile
    centerPadding: isMobile ? "0px" : (isTablet ? "40px" : "60px"),
  }), [isMobile, isTablet]);

  return (
    <section className="py-6 bg-gray-50 font-helvetica">
      <div className="max-w-8xl mx-auto">
        {/* key memaksa remount saat breakpoint berubah */}
        <Slider key={`${isMobile}-${isTablet}`} {...settings}>
          {products.map((service, index) => (
            <div key={service.id || index} className="px-2">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
                <div className="w-full overflow-hidden aspect-[4/3] sm:aspect-[16/9]">
                  <img
                    src={service.images?.length
                      ? `http://127.0.0.1:8000/storage/${service.images[0].image_path}`
                      : "/placeholder.jpg"}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4 sm:p-5 text-left">
                  <h3 className="font-semibold text-base sm:text-lg text-gray-800 mb-1 truncate">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-snug mb-3 line-clamp-2">
                    {(service.description || "").slice(0, 50) + "..."}
                  </p>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <p className="text-blue-600 font-semibold text-sm sm:text-base">
                      Rp {parseInt(service.price || 0).toLocaleString("id-ID")}
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
