export default function TopBar() {
  return (
    <div className="bg-blue-600 text-white text-sm py-2 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <span className="animate-pulse">
          🎉 Promo Spesial! Diskon 50% untuk Semua Paket Landing Page Hari Ini!
        </span>
        <div className="flex items-center gap-4">
          <span className="hover:underline cursor-pointer">🇮🇩 Indonesia / 🇬🇧 English</span>
          <span className="hover:underline cursor-pointer">Rp. IDR</span>
        </div>
      </div>
    </div>
  );
}
