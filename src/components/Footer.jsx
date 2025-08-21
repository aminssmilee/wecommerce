import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="bg-muted/30 bg-zinc-200 font-jakarta">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4 text-justify">
                        <h3 className="text-lg font-semibold">Webcareidn.</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Penyedia jasa pembuatan website, toko online, dan sistem e-commerce profesional.
                            Kami membantu bisnis Anda hadir secara online dengan desain modern dan fitur lengkap.
                        </p>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                                <span>📍</span>
                                <span>Jl. Alas Sari, GG. Alam Pesona I Jl. Alas Tipis, RT.65/RW.02, Pabean, Kec. Sedati, Kabupaten Sidoarjo, Jawa Timur 61253</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>📞</span>
                                <span>+62 812 3456 7890</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>✉️</span>
                                <span>support@webcommer.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Layanan Kami</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="text-muted-foreground hover:text-foreground">Pembuatan Website</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-foreground">Desain Toko Online</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-foreground">Custom E-Commerce</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-foreground">Optimasi SEO</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-foreground">Maintenance Website</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-foreground">Konsultasi Bisnis Digital</a></li>
                        </ul>
                    </div>

                    {/* About Company */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Tentang Kami</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="text-muted-foreground hover:text-foreground">Profil Perusahaan</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-foreground">Portofolio</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-foreground">Testimoni Klien</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-foreground">Blog Teknologi</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-foreground">Kebijakan Privasi</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-foreground">Syarat & Ketentuan</a></li>
                        </ul>
                    </div>

                    {/* Social Media & Features */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Ikuti Kami</h3>
                        <div className="flex gap-3 text-lg">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 border rounded hover:bg-pink-100 text-pink-600">
                                <FaInstagram />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 border rounded hover:bg-red-100 text-red-600">
                                <FaYoutube />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 border rounded hover:bg-blue-100 text-blue-700">
                                <FaFacebook />
                            </a>
                        </div>

                        <div className="space-y-3 pt-4">
                            <h4 className="font-medium">Mengapa Memilih Kami</h4>
                            <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-2">
                                    <span>⚡</span>
                                    <span>Desain Cepat & Responsif</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span>🛡️</span>
                                    <span>Keamanan Website Terjamin</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span>🤝</span>
                                    <span>Dukungan Pelanggan 24/7</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Payment Methods & Copyright */}
            <div className="border-t">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <div className="flex items-center gap-4">
                            {/* <span className="text-sm text-muted-foreground">Metode Pembayaran:</span>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-6 bg-blue-600 rounded text-white text-xs font-bold">VISA</div>
                <div className="flex items-center justify-center w-8 h-6 bg-red-600 rounded text-white text-xs font-bold">MC</div>
                <div className="flex items-center justify-center w-8 h-6 bg-blue-500 rounded text-white text-xs font-bold">BCA</div>
                <div className="flex items-center justify-center w-8 h-6 bg-green-600 rounded text-white text-xs font-bold">OVO</div>
                <div className="flex items-center justify-center w-8 h-6 bg-blue-700 rounded text-white text-xs font-bold">DANA</div>
              </div> */}
                        </div>
                        <div className="text-sm text-muted-foreground">© 2025 Webcareidn. Semua hak dilindungi undang-undang.</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
