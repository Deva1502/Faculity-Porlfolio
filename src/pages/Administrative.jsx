const Administrative = () => {
  const administrativeData = [
    {
      title: "Administrative Responsibilities at IIIT Ranchi",
      items: [
        "Faculty Incharge - Technical and Cultural",
        "Faculty Advisor - First Year CSE",
        "Hostel Warden",
      ],
      color: "cyan",
    },
    {
      title: "Administrative Responsibilities at Vignan's University, Andhra Pradesh",
      items: ["Board of Academics member"],
      color: "blue",
    },
    {
      title: "Administrative Responsibilities at KIET Group of Institutions, Ghaziabad",
      items: ["Member of the Examination Committee"],
      color: "teal",
    },
    {
      title: "Professional Memberships",
      items: [
        "IEEE member, IEEE Computational Intelligence Society Membership, IEEE Young Professionals",
        "ACM member",
        "Soft Computing Research Society (SCRS) - Life member",
      ],
      color: "purple",
    },
  ];

  const colorClasses = {
    cyan: "bg-cyan-600",
    blue: "bg-blue-600",
    teal: "bg-teal-600",
    purple: "bg-purple-600",
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center w-full py-8">
      <div className="w-full px-4 sm:px-6 lg:px-8 flex justify-center mb-8">
        <div className="w-full max-w-6xl">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-lg p-6 sm:p-8 md:p-12 lg:p-16 mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-12">
              Administrative
            </h2>
          </div>

          <div className="space-y-6">
            {administrativeData.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-lg p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md">
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 pb-4 border-b-2 border-cyan-500">
                    {section.title}
                  </h4>
                  <ul className="space-y-4">
                    {section.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex gap-3 items-start group hover:bg-blue-50 p-3 rounded-lg transition-all duration-300"
                      >
                        <span
                          className={`flex-shrink-0 w-2 h-2 ${colorClasses[section.color]} rounded-full mt-2 group-hover:scale-150 transition-transform duration-300`}
                        ></span>
                        <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Administrative;
