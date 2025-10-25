const AwardsGrants = () => {
  const awards = [
    {
      title: "GATE fellowship for M.Tech",
      description: "from Ministry of Education in 2016",
      year: "2016",
      type: "Fellowship",
    },
    {
      title: "CSIR-SRF fellowship",
      description: "in March 2021",
      year: "2021",
      type: "Fellowship",
    },
    {
      title: "Travel grant to present a paper in IEEE-SSCI Mexico",
      description: "in 2023",
      year: "2023",
      type: "Travel Grant",
    },
    {
      title: "Financial support from Science and Engineering Research Board, New Delhi, India",
      description: "to attend the International Conference IEEE-SSCI, Mexico in 2023",
      year: "2023",
      type: "Financial Support",
    },
  ];

  const internationalVisit = {
    title: "Visited the Center for Research and Advanced Studies of the National Polytechnic Institute 'CINVESTAV-IPN', Mexico City",
    duration: "December 2023",
    description: "International academic visit for research collaboration and conference participation",
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center w-full py-8">
      <div className="w-full px-4 sm:px-6 lg:px-8 flex justify-center space-y-8">
        <div className="w-full max-w-6xl space-y-8">
          {/* Main Header */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-lg p-6 sm:p-8 md:p-12 lg:p-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-12">
              Awards & Grants
            </h2>
          </div>

          {/* Awards and Grants Section */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-lg p-6 sm:p-8 md:p-12 lg:p-16">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 pb-4 border-b-2 border-cyan-500">
                Awards and Grants
              </h4>
              
              <div className="space-y-6">
                {awards.map((award, index) => (
                  <div
                    key={index}
                    className="group hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 p-5 rounded-xl transition-all duration-300 border-l-4 border-transparent hover:border-cyan-600"
                  >
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold group-hover:scale-110 transition-transform duration-300 shadow-md">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h5 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-cyan-900 transition-colors duration-300">
                            {award.title}
                          </h5>
                          <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold rounded-full">
                            {award.type}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm sm:text-base mt-1">
                          {award.description}
                        </p>
                        <p className="text-cyan-700 font-semibold text-sm mt-2">
                          Year: {award.year}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* International Visit Section */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-lg p-6 sm:p-8 md:p-12 lg:p-16">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 pb-4 border-b-2 border-cyan-500 flex items-center gap-3">
                <svg className="w-8 h-8 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                International Visit
              </h4>
              
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border-l-4 border-cyan-600">
                <div className="flex gap-4">
                  <span className="text-5xl">✈️</span>
                  <div className="flex-grow">
                    <h5 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
                      {internationalVisit.title}
                    </h5>
                    <div className="space-y-2">
                      <p className="text-gray-700 text-sm sm:text-base">
                        <span className="font-semibold text-cyan-700">Duration:</span> {internationalVisit.duration}
                      </p>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {internationalVisit.description}
                      </p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        Research Collaboration
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                        Conference Participation
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                        Mexico
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardsGrants;
