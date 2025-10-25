const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center w-full">
      {/* Main Projects Header */}
      <div className="w-full px-4 sm:px-6 lg:px-8 flex justify-center mb-8">
        <div className="w-full max-w-6xl bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-lg p-6 sm:p-8 md:p-12 lg:p-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-12">
            Projects
          </h2>

          {/* Key Project Section */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h4 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 pb-4 border-b-2 border-cyan-500">
              Key Project
            </h4>
            
            <div className="space-y-4">
              <h5 className="text-lg sm:text-xl font-bold text-gray-800">
                An scalable system for genome data analysis using clustering and classification
              </h5>
              <p className="text-cyan-700 font-semibold text-sm sm:text-base">
                Duration: Apr 2021 - Feb 2024
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium">
                  Role: SRF
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  CSIR Funded
                </span>
              </div>
              <p className="text-gray-600 text-sm sm:text-base">
                In collaboration with ICAR-IISR Indore and Mahindra University
              </p>
              
              <div className="mt-6">
                <h6 className="font-semibold text-gray-800 mb-3">Objectives:</h6>
                <ul className="space-y-3">
                  {[
                    "Develop scalable feature extraction and feature selection methods for processing and analyzing SNP, DNA, and protein sequences",
                    "Develop efficient clustering algorithms that can incrementally process both static and dynamic genome data",
                    "Utilize the system to identify the family of newly sequenced genomes, aiding in the identification of disease resistance and drought tolerance genes",
                  ].map((objective, index) => (
                    <li key={index} className="flex gap-3 text-gray-700">
                      <span className="flex-shrink-0 w-6 h-6 bg-cyan-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-sm sm:text-base leading-relaxed">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Funded Projects Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 flex justify-center mb-8">
        <div className="w-full max-w-6xl bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-lg p-6 sm:p-8 md:p-12 lg:p-16">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h4 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 pb-4 border-b-2 border-cyan-500">
              Funded Projects
            </h4>
            <ul className="space-y-8">
              {[
                {
                  title: "Autonomous Precision Agriculture: Data Driven Pest Detection, Disease Identification and Prediction, and Growth Analysis Using Computer Vision and Deep Learning",
                  duration: "1 Apr 2025 - 31 March 2028",
                  role: "Co-PI",
                  amount: "21 Lakhs",
                  agency: "AgriHub-Innovation Hub for Agriculture, IIT Indore",
                },
                {
                  title: "AI-ML Techniques for Groundwater Management and Data Analysis",
                  duration: "1 Apr 2025 - 31 March 2026",
                  role: "Co-PI",
                  amount: "6 Lakhs",
                  agency: "AgriHub-Innovation Hub for Agriculture, IIT Indore",
                },
              ].map((project, index) => (
                <li
                  key={index}
                  className="group hover:bg-blue-50 p-5 rounded-xl transition-all duration-300"
                >
                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </span>
                    <div className="flex-grow space-y-3">
                      <h5 className="text-base sm:text-lg font-bold text-gray-800 group-hover:text-cyan-900 transition-colors duration-300">
                        {project.title}
                      </h5>
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Duration:</span> {project.duration}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-xs font-medium">
                          Role: {project.role}
                        </span>
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                          Amount: ₹{project.amount}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">Funding Agency:</span> {project.agency}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
