import React, { useState } from "react";
import Pagination from "react-paginate";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ProductsWithPagination({ products }) {
    const itemsPerPage = 4; // jumlah produk per halaman
    const [currentPage, setCurrentPage] = useState(0);

    const pageCount = Math.ceil(products.length / itemsPerPage);

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };

    const offset = currentPage * itemsPerPage;
    const currentItems = products.slice(offset, offset + itemsPerPage);

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 text-center mb-10">
                <h1 className="text-3xl font-bold text-gray-800 mb-3">
                    Our Product Selection
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Explore our curated collection of digital products crafted to deliver innovation, efficiency, and quality for your business and personal needs.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {currentItems.map((service, index) => (
                        <div
                            key={service.id || index}
                            className="bg-zinc-100 overflow-hidden group hover:border-black border border-gray-200 transition-shadow duration-300 cursor-pointer"
                        >
                            <div className="h-48 w-full overflow-hidden">
                                <img
                                    src={
                                        service.images?.length
                                            ? `http://127.0.0.1:8000/storage/${service.images[0].image_path}`
                                            : "/placeholder.jpg"
                                    }
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            <div className="p-6">
                                <span className="inline-block text-xs font-semibold px-2 py-1 rounded mb-2 bg-blue-100 text-blue-800">
                                    Product
                                </span>
                                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                                <p className="text-gray-600 text-sm mb-3">
                                    {service.description?.split(" ").slice(0, 8).join(" ")}...
                                </p>
                                <p className="text-blue-600 font-semibold">
                                    Rp {parseInt(service.price || 0).toLocaleString()}
                                </p>
                                <Link
                                    to="/detail"
                                    className="mt-2 inline-flex items-center text-blue-600 font-medium hover:underline text-sm"
                                >
                                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className=" justify-between mt-10">
                    <Pagination
                        previousLabel={"← "}
                        nextLabel={"Next →"}
                        pageCount={pageCount}
                        onPageChange={handlePageClick}
                        containerClassName="flex justify-center space-x-2 mt-10"
                        activeClassName="bg-blue-600 text-white"
                        pageClassName="border border-gray-300 rounded cursor-pointer px-3 py-1 hover:bg-gray-200"
                        pageLinkClassName="select-none"
                        previousClassName="border border-gray-300 rounded cursor-pointer px-3 py-1 hover:bg-gray-200 flex items-center"
                        previousLinkClassName="select-none"
                        nextClassName="border border-gray-300 rounded cursor-pointer px-3 py-1 hover:bg-gray-200 flex items-center"
                        nextLinkClassName="select-none"
                        disabledClassName="opacity-50 cursor-not-allowed"
                    />

                </div>
            </div>
        </section>
    );
}
