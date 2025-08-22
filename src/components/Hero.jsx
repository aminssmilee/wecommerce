import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-white py-20 font-helvetica">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Create your <br />
            <span className="text-blue-600">course</span> <br />
            without code
          </h1>
          <p className="text-sm text-gray-600">
            Registering on the platform is the first step in creating a course. <br />
            You will have access to tools for uploading your materials <br />
            and customizing your course.
          </p>

          <p className="text-gray-700 text-sm">
            Our platform has all the advantages for creating your course
          </p>

          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition flex items-center gap-2">
              Start 7-day trial <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-gray-100 text-gray-800 px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
              Watch Showcase
            </button>
          </div>
        </div>

        {/* Image / illustration */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://source.unsplash.com/600x400/?education,course"
            alt="Course preview"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
