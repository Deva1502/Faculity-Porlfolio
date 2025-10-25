const About = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 flex justify-center mb-8">
      <div className="w-full max-w-6xl bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-lg p-6 sm:p-8 md:p-12 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] gap-8 lg:gap-16">
          {/* Research Interest Sidebar */}
          <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-2xl font-bold text-gray-800 mb-5 pb-3 border-b-2 border-cyan-500">
                Research Interest
              </h4>
              <ul className="flex flex-col gap-3">
                {[
                  "Machine Learning",
                  "Genomic Data Analysis",
                  "Bioinformatics",
                  "Big Data Analytics",
                ].map((interest, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-700 hover:text-cyan-900 transition-colors duration-300 group"
                  >
                    <span className="w-2 h-2 bg-cyan-600 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                    <span className="font-medium">{interest}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col gap-8">
            {/* About Me Section */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-cyan-500">
                About Me
              </h3>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                I am currently working as an <b className="text-gray-800">Assistant Professor (Grade II)</b> in the
                Department of Computer Science at the{" "}
                <b className="text-cyan-900">Indian Institute of Information Technology, Ranchi</b>. I earned my Ph.D.
                in Computer Science and Engineering from the{" "}
                <b className="text-cyan-900">Indian Institute of Technology Indore</b>, where my research focused on
                scalable feature extraction and clustering methods for genomic data analysis.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4 text-base sm:text-lg">
                With more than seven years of teaching and research experience, I have had the opportunity to work at
                esteemed institutions such as <b className="text-cyan-900">Bennett University</b>,{" "}
                <b className="text-cyan-900">KIET Group of Institutions</b>, and{" "}
                <b className="text-cyan-900">Vignan's University</b>. My research interests include machine learning,
                bioinformatics, and big data analytics, and I have published several papers in reputed international
                journals like <b className="text-cyan-900">Computers and Electrical Engineering (Elsevier)</b> and{" "}
                <b className="text-cyan-900">The Journal of Supercomputing (Springer)</b>.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4 text-base sm:text-lg">
                I am also involved as a <b className="text-gray-800">Co-Principal Investigator</b> in funded projects
                at <b className="text-cyan-900">AgriHub–IIT Indore</b>, focusing on AI-driven precision agriculture and
                groundwater management. Beyond research, I am passionate about mentoring students and fostering
                innovation through interdisciplinary collaboration. My professional memberships with{" "}
                <b className="text-cyan-900">IEEE</b> and <b className="text-cyan-900">ACM</b>, along with a granted
                patent in biomedical device design, reflect my ongoing commitment to impactful research and
                technological advancement.
              </p>
            </div>

            {/* Teaching Experience Section */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h6 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-cyan-500">
                Teaching and Research Experience
              </h6>
              <ul className="space-y-6">
                {[
                  {
                    title: "Assistant Professor-Grade II",
                    period: "June 2025 - Till now",
                    dept: "Department of computer science",
                    institution: "Indian Institute of Information Technology Ranchi, Ranchi",
                  },
                  {
                    title: "Assistant Professor",
                    period: "May 2024 - May 2025",
                    dept: "School of computer science engineering and technology",
                    institution: "Bennett University, Noida",
                  },
                  {
                    title: "Senior Research Fellow (CSIR Funded Project)",
                    period: "April 2021 - Feb 2024",
                    dept: "Department of computer science",
                    institution: "Indian Institute of Technology Indore, Indore",
                  },
                  {
                    title: "Assistant Professor",
                    period: "July 2019 - April 2021",
                    dept: "Department of computer science",
                    institution: "Kiet Group of Institutions, Ghaziabad",
                  },
                  {
                    title: "Assistant Professor",
                    period: "July 2018 - Dec 2018",
                    dept: "Department of computer science",
                    institution: "Vignan's university, Andhra Pradesh",
                  },
                  {
                    title: "Teaching Assistant",
                    period: "July 2016 - May 2018",
                    dept: "Machine Learning, Dr. A.C.S Rao",
                    institution: "IIT Dhanbad",
                  },
                ].map((experience, index) => (
                  <li key={index} className="group">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-3 h-3 bg-cyan-600 rounded-full mt-1.5 group-hover:scale-150 transition-transform duration-300"></div>
                      </div>
                      <div className="flex-grow">
                        <p className="text-lg font-bold text-gray-800 group-hover:text-cyan-900 transition-colors duration-300">
                          {experience.title}
                        </p>
                        <p className="text-sm text-cyan-700 font-medium mt-1">{experience.period}</p>
                        <p className="text-gray-600 mt-1">{experience.dept}</p>
                        <p className="text-gray-700 font-medium mt-1">{experience.institution}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
