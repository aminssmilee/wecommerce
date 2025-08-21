import { Footer } from "../components/Footer";
import TopBar from '../components/top-bar';
import Navbar from '../components/navbar';

// src/pages/MaintenancePage.jsx
export default function MaintenancePage() {
    return (
        <>
            <TopBar />
            <Navbar />
            <section className="py-16 bg-gray-50 min-h-screen flex flex-col items-center font-jakarta">
                <h1 className="text-3xl font-bold mb-4 text-center">Maintenance Plans</h1>
                <p className="text-gray-600 mb-8 text-center max-w-4xl px-4">
                    Jaga website Anda tetap aman, terupdate, dan berjalan lancar dengan paket maintenance kami. Pilih paket yang sesuai dan hubungi kami untuk info lebih lanjut.
                </p>

                <form className="w-full px-4 md:px-16 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Masukkan nama lengkap"
                                className="w-full border-b border-gray-300 focus:border-b-2 focus:border-black focus:outline-none py-2"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Masukkan email"
                                className="w-full border-b border-gray-300 focus:border-b-2 focus:border-black focus:outline-none py-2"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="website" className="block text-sm font-medium mb-1">Website URL</label>
                        <input
                            type="text"
                            id="website"
                            placeholder="https://example.com"
                            className="w-full border-b border-gray-300 focus:border-b-2 focus:border-black focus:outline-none py-2"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">Additional Details</label>
                        <textarea
                            id="message"
                            rows={4}
                            placeholder="Tulis detail tambahan di sini..."
                            className="w-full border-b border-gray-300 focus:border-b-2 focus:border-black focus:outline-none py-2 resize-none"
                        ></textarea>
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition"
                        >
                            Submit Request
                        </button>
                    </div>
                </form>
            </section>
            <Footer />
        </>
    );
}
