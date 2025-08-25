import { ArrowRight } from "lucide-react";
import Item1 from "../assets/items/item1.png"
// import bg from "../assets/logo/bg.jpg"
// import bg1 from "../assets/logo/bg1.jpg"
import bg2 from "../assets/logo/bg2.jpg"

export default function Hero() {
  return (
    <section className="font-helvetica py-16">
      <div
        className="max-w-[85rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-10 md:p-16 rounded-2xl bg-cover bg-center"
        style={{ backgroundImage: `url(${bg2})` }}
      >
        {/* Text content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            Create your <br />
            <span className="text-white">course</span> <br />
            without code
          </h1>

          <p className="text-base md:text-sm text-gray-300 leading-relaxed">
            Registering on the platform is the first step in creating a course. <br />
            You will have access to tools for uploading your materials <br />
            and customizing your course.
          </p>

          <p className="text-base text-gray-300">
            Our platform has all the advantages for creating your course
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition flex items-center justify-center gap-2">
              Start 7-day trial <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full font-medium hover:bg-gray-300 transition">
              Watch Showcase
            </button>
          </div>
        </div>

        {/* Image / illustration */}
        <div className="flex justify-center md:justify-end">
          {/* <img
            src={Item1}
            alt="Course preview"
            className="rounded-2xl"
          /> */}
        </div>
      </div>
    </section>
  );
}

