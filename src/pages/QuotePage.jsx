import { Footer } from "../components/Footer";
import TopBar from '../components/top-bar'; 
import Navbar from '../components/navbar';

// src/pages/QuotePage.jsx
export default function QuotePage() {
    return (
        <>
            <TopBar />
            <Navbar />
            <section className="py-16 bg-gray-50 min-h-screen flex flex-col items-center font-jakarta">
                <h1 className="text-3xl font-bold mb-4 text-center">Send a Message</h1>
                <p className="text-gray-600 mb-8 text-center max-w-4xl px-4">
                    Perlengkapan terbaik untuk semua kebutuhan Anda. Hubungi kami untuk informasi lebih lanjut tentang produk dan layanan kami.
                </p>

                <form className="w-full px-4 md:px-16 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Masukkan nama Anda"
                                className="w-full border-b border-gray-300 focus:border-b-2 focus:border-black focus:outline-none py-2"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Masukkan email Anda"
                                className="w-full border-b border-gray-300 focus:border-b-2 focus:border-black focus:outline-none py-2"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="interested" className="block text-sm font-medium mb-1">Interested In</label>
                            <select
                                id="interested"
                                className="w-full border-b border-gray-300 focus:border-b-2 focus:border-black focus:outline-none py-2"
                            >
                                <option value="">Pilih kategori</option>
                                <option value="produk-elektronik">Produk Elektronik</option>
                                <option value="fashion">Fashion & Aksesoris</option>
                                <option value="rumah-tangga">Rumah Tangga</option>
                                <option value="olahraga">Olahraga & Outdoor</option>
                                <option value="kecantikan">Kecantikan & Kesehatan</option>
                                <option value="lainnya">Lainnya</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                placeholder="Masukkan nomor telepon"
                                className="w-full border-b border-gray-300 focus:border-b-2 focus:border-black focus:outline-none py-2"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                        <textarea
                            id="message"
                            rows={4}
                            placeholder="Tulis pesan Anda di sini..."
                            className="w-full border-b border-gray-300 focus:border-b-2 focus:border-black focus:outline-none py-2 resize-none"
                        ></textarea>
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </section>
            <Footer />
        </>
    );
}
