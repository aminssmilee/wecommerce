import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaYoutube } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-gray-300 font-helvetica">
      {/* Connect Section */}
      <div className="max-w-[85rem] mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-zinc-800">
        <h2 className="text-2xl font-bold">
          Let’s <span className="text-blue-600">Connect</span> there
        </h2>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors">
          Contact Us Now <ArrowRight className="w-4 h-4 text-black" />
        </button>

      </div>


      {/* Main Footer Content */}
      <div className="max-w-[85rem] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div className="space-y-4 text-justify">
          <h2 className="text-2xl font-bold text-blue-700">Webcare.idn</h2>
          <p className="text-sm leading-relaxed">
            Start-Up yang bergerak dalam bidang teknologi guna membantu para pelaku usaha khususnya UMKM untuk naik kelas melalui platform website
          </p>
          <div className="flex gap-3 text-lg text-white">
            {[FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaYoutube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-blue-600 font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "Services", "About Us", "Projects", "Careers", "FAQs"].map((item, i) => (
              <li key={i}>
                <a href="#" className="hover:text-blue-600">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-blue-600 font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm text-justify">
            <li>+0123-456-789</li>
            <li>www.webcareidn.com</li>
            <li>webcareidn@gmail.com</li>
            <li>
              Jl. Alas Sari, GG. Alam Pesona I, Jl. Alas Tipis, RT.65/RW.02,
              Pabean, Kec. Sedati, Kabupaten Sidoarjo, Jawa Timur 61253
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-blue-600 font-semibold mb-4">Get the latest information</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="px-3 py-2 text-sm bg-zinc-800 text-white rounded-l-full outline-none flex-grow"
            />
            <button className="px-4 bg-blue-600 text-black font-bold rounded-r-full hover:bg-blue-700">
              ➤
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 gap-2">
          <p>
            Copyright © 2024 <span className="text-blue-600">Webcare.idn</span>. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-600">User Terms & Conditions</a>
            <a href="#" className="hover:text-blue-600">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
