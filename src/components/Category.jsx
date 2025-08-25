import React, { useEffect, useMemo, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

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

export default function CategorySliderDuplicate() {
  const { isMobile, isTablet } = useScreen();
  const [selectedCategory, setSelectedCategory] = useState("All Services");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const prodRes = await axios.get("http://127.0.0.1:8000/api/products");
        const catRes = await axios.get("http://127.0.0.1:8000/api/categories");
        setProducts(prodRes.data.data);
        setCategories([{ id: 0, name: "All Services" }, ...catRes.data.data]);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const filteredProducts =
    selectedCategory === "All Services"
      ? products
      : products.filter((p) => p.category?.name === selectedCategory);

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

  // ambil 5 produk pertama untuk slider atas
  const topProducts = filteredProducts.slice(0, 5);
  // ambil 5 produk berikutnya untuk slider bawah
  const bottomProducts = filteredProducts.slice(5, 10);

  const renderSlider = (productsList) => (
    <Slider key={`${isMobile}-${isTablet}-${selectedCategory}-${productsList.length}`} {...settings}>
      {productsList.map((product) => (
        <div key={product.id} className="px-2">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
            <div className="w-full overflow-hidden aspect-[4/3] sm:aspect-[16/9]">
              <img
                src={product.images?.length ? `http://127.0.0.1:8000/storage/${product.images[0].image_path}` : "/placeholder.jpg"}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-5 text-left">
              <h3 className="font-semibold text-base sm:text-lg text-gray-800 mb-1 truncate">
                {product.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-snug mb-3 line-clamp-2">
                {(product.description || "").slice(0, 50) + "..."}
              </p>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <p className="text-blue-600 font-semibold text-sm sm:text-base">
                  Rp {parseInt(product.price || 0).toLocaleString("id-ID")}
                </p>
                <Link
                  to={`/detail/${product.id}`}
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
  );

  return (
    <section className="bg-gray-50 font-helvetica pt-16">
      <div className="max-w-8xl mx-auto px-4">
        {/* Pilihan kategori */}
        <div className="mb-4 flex justify-between items-center">
          <div className="md:hidden">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-md py-1 w-full"
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.name}>{cat.name}</option>
              ))}
            </select>
          </div>
          <div className="hidden md:flex gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-4 py-2 rounded-full border ${selectedCategory === cat.name ? "bg-blue-700 text-white border-black" : "bg-blue-400 text-white border-gray-300 hover:bg-blue-500"}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Slider atas */}
        {renderSlider(topProducts)}

        {/* Spasi antara slider */}
        <div className="my-8"></div>

        {/* Slider bawah */}
        {renderSlider(bottomProducts)}
      </div>
    </section>
  );
}
