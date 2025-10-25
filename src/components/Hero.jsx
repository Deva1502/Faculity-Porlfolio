import user from "../assets/Rajesh_Dwivedi.jpg";

const Hero = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 flex justify-center mb-8">
      <div className="w-full max-w-6xl bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 sm:p-8 md:p-12 lg:p-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-center">
          {/* Image Section */}
          <div className="flex-shrink-0">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <img
                src={user}
                alt="Dr. Rajesh Dwivedi"
                className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover ring-4 ring-white shadow-xl"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-950 leading-tight">
              Dr. Rajesh Dwivedi
              <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2 text-cyan-800">
                (डॉ. राजेश द्विवेदी)
              </span>
            </h2>
            
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-cyan-900">
                Ph.D (IIT Indore)
              </h3>
              <h5 className="text-lg sm:text-xl text-gray-700">
                Assistant Professor, IIIT Ranchi
              </h5>
            </div>

            <a
              href="mailto:rajeshdwivedi.cse@iiitranchi.ac.in"
              className="inline-flex items-center justify-center lg:justify-start gap-2 text-base sm:text-lg text-cyan-700 hover:text-cyan-900 transition-colors duration-300 group"
            >
              <svg
                className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="font-medium border-b-2 border-transparent group-hover:border-cyan-700 transition-all duration-300">
                rajeshdwivedi.cse@iiitranchi.ac.in
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
