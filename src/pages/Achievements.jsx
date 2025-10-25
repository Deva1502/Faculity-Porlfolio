const Achievements = () => {
  const achievements = [
    {
      text: "All India <b>99.20 %ile</b> in <b>GRADUATE APTITUDE TEST FOR ENGINEERS</b> among 2,00,000 students in 2016.",
      icon: "🏆",
    },
    {
      text: "Qualified <b>UGC-NET</b> in <b>Computer Science and Applications</b> subject in 2023.",
      icon: "🎓",
    },
    {
      text: "Successfully passed the <b>IBM DB2 ACADEMIC ASSOCIATE EXAM</b> in September 20, 2012.",
      icon: "💼",
    },
    {
      text: "Successfully completed the program requirement as an <b>IBM CERTIFIED ASSOCIATE DEVELOPER</b> in October 20, 2012.",
      icon: "⭐",
    },
    {
      text: "Secured 2nd Position in B.Tech seventh semester.",
      icon: "🥈",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center w-full py-8">
      <div className="w-full px-4 sm:px-6 lg:px-8 flex justify-center mb-8">
        <div className="w-full max-w-6xl bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-lg p-6 sm:p-8 md:p-12 lg:p-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-12">
            Achievements
          </h2>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
            <ul className="space-y-6">
              {achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="group hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 p-5 rounded-xl transition-all duration-300 border-l-4 border-transparent hover:border-cyan-600"
                >
                  <div className="flex gap-4 items-start">
                    <span className="flex-shrink-0 text-4xl transform group-hover:scale-125 transition-transform duration-300">
                      {achievement.icon}
                    </span>
                    <p
                      className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed flex-grow"
                      dangerouslySetInnerHTML={{ __html: achievement.text }}
                    />
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

export default Achievements;
