const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center w-full py-8">
      <div className="w-full px-4 sm:px-6 lg:px-8 flex justify-center mb-8">
        <div className="w-full max-w-6xl bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-lg p-6 sm:p-8 md:p-12 lg:p-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-12">
            Contact
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information Section */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-cyan-500">
                Get in Touch
              </h4>

              <div className="space-y-6">
                {/* Email Section */}
                <div>
                  <h5 className="text-lg font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    Email IDs
                  </h5>
                  <div className="space-y-2 ml-7">
                    {[
                      "rajeshdwivedi.cse@iiitranchi.ac.in",
                      "anubhav.dwivedi8@gmail.com",
                      "rajeshdwivedi@iiti.ac.in",
                    ].map((email, index) => (
                      <a
                        key={index}
                        href={`mailto:${email}`}
                        className="block text-cyan-700 hover:text-cyan-900 transition-colors duration-300 text-sm sm:text-base break-all"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Phone Section */}
                <div>
                  <h5 className="text-lg font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Phone Number
                  </h5>
                  <a
                    href="tel:+918445083894"
                    className="ml-7 text-cyan-700 hover:text-cyan-900 font-semibold text-lg transition-colors duration-300"
                  >
                    +91-8445083894
                  </a>
                </div>

                {/* Academic Profiles */}
                <div>
                  <h5 className="text-lg font-semibold text-gray-700 mb-3">Academic Profiles</h5>
                  <div className="space-y-3 ml-7">
                    {[
                      {
                        name: "ResearchGate",
                        url: "https://www.researchgate.net/profile/Rajesh-Dwivedi-4",
                      },
                      {
                        name: "Google Scholar",
                        url: "https://scholar.google.com/citations?user=SuXj91gAAAAJ&hl=en&oi=ao",
                      },
                      {
                        name: "LinkedIn",
                        url: "https://www.linkedin.com/in/rajesh-dwivedi-830141144/",
                      },
                    ].map((profile, index) => (
                      <div key={index}>
                        <p className="text-gray-600 text-sm font-medium">{profile.name}</p>
                        <a
                          href={profile.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-700 hover:text-cyan-900 text-xs sm:text-sm break-all transition-colors duration-300 hover:underline"
                        >
                          {profile.url}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Address Section */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-cyan-500 flex items-center gap-2">
                <svg className="w-6 h-6 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Address
              </h4>

              <div className="space-y-6">
                {/* Office Address */}
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Office Address</h5>
                  <div className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    <p className="font-semibold text-gray-800">Dr. Rajesh Dwivedi</p>
                    <p>Assistant Professor,</p>
                    <p>Department of Computer Science and Engineering,</p>
                    <p>IIIT Ranchi</p>
                    <p>ARTTC BSNL Campus, Getlatu,</p>
                    <p>Near Jumar River Bridge,</p>
                    <p>P.O.: Neori Vikas Vidyalaya SO,</p>
                    <p>Hazaribagh Road, Ranchi - 835217 (Jharkhand)</p>
                  </div>
                </div>

                {/* Permanent Address */}
                <div className="pt-4 border-t border-gray-200">
                  <h5 className="font-semibold text-gray-800 mb-2">Permanent Address</h5>
                  <div className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    <p>Jawahar Marg, Sabji Mandi, Lalganj</p>
                    <p>Raebareli, Uttar Pradesh</p>
                    <p>Pin - 229206</p>
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

export default Contact;
