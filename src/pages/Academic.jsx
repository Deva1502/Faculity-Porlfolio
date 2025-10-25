const Academic = () => {
  const education = [
    {
      degree: "Doctor of Philosophy",
      year: "2024",
      field: "Computer Science and Engineering",
      institution: "Indian Institute of Technology Indore",
    },
    {
      degree: "Master of Technology",
      year: "2018",
      field: "Computer Science and Engineering",
      institution: "Indian Institute of Technology, Dhanbad",
    },
    {
      degree: "Bachelor of Technology",
      year: "2015",
      field: "Computer Science and Engineering",
      institution: "Gurukula Kangri University, Haridwar",
    },
  ];

  const courses = [
    "Operating Systems",
    "Data Structures and Algorithms",
    "Compiler Design",
    "Database Systems",
    "Computer System Design",
    "Computer Networks",
    "Machine Learning",
    "Discrete Mathematics",
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center w-full py-8">
      <div className="w-full px-4 sm:px-6 lg:px-8 flex justify-center space-y-8">
        <div className="w-full max-w-6xl space-y-8">
          {/* Education Section */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-lg p-6 sm:p-8 md:p-12 lg:p-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-12">
              Academic
            </h2>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 pb-4 border-b-2 border-cyan-500">
                Education
              </h4>
              <ul className="space-y-8">
                {education.map((edu, index) => (
                  <li
                    key={index}
                    className="group hover:bg-blue-50 p-5 rounded-xl transition-all duration-300"
                  >
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold group-hover:scale-110 transition-transform duration-300 shadow-md">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h6 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-cyan-900 transition-colors duration-300">
                          {edu.degree}
                          <span className="ml-2 text-cyan-700 font-semibold">[{edu.year}]</span>
                        </h6>
                        <p className="text-gray-600 mt-1 text-sm sm:text-base">{edu.field}</p>
                        <p className="text-gray-700 font-medium mt-2 text-sm sm:text-base">
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Course Work Section */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-lg p-6 sm:p-8 md:p-12 lg:p-16">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h5 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 pb-4 border-b-2 border-cyan-500">
                Course Work
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {courses.map((course, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 hover:bg-blue-50 rounded-lg transition-all duration-300 group"
                  >
                    <span className="w-2 h-2 bg-cyan-600 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                    <span className="text-gray-700 text-sm sm:text-base">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academic;
