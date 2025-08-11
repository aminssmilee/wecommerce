import React, { useState, useEffect } from "react";
import { getProducts } from "../services/api"; // sesuaikan path API-mu
import ProductsWithPagination from "./ProductsWithPagination";

export default function ServiceCategories() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then(res => {
        setServices(res.data || []);
      })
      .catch(err => {
        console.error("Error fetching products:", err);
        setServices([]);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center py-10">Loading products...</p>;
  if (!services.length) return <p className="text-center py-10">No products found.</p>;

  return <ProductsWithPagination products={services} />;
}
