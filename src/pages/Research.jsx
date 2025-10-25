import InternationalConferences from "../components/InternationalConferences";
import InternationalJournal from "../components/InternationalJournal";

const Research = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center w-full">
      {/* Main Research Header Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 flex justify-center mb-8">
        <div className="w-full max-w-6xl bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-lg p-6 sm:p-8 md:p-12 lg:p-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-12">
            Research
          </h2>

          {/* Patents Section */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md">
            <h4 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 pb-4 border-b-2 border-cyan-500">
              Patents
            </h4>
            <ul className="space-y-6">
              {[
                {
                  text: "Saurabh Singh Raghuvanshi, Dr. Ritu Singh (Md Ayu.), Alok Kumar Tiwari, <b>Rajesh Dwivedi</b>, Anil Kumar Rajput, Dr. Deep Shikha Punera, 'HEAD-WORN DEVICE FOR EEG RECOGNITION,' Patent design no. - 401076-001, Date of issue : 19/01/2024, Status - Granted.",
                  status: "Granted",
                },
                {
                  text: "Mr. Manish Bhardwaj, Mr. Saurabh Sharma, Mrs. Arti Sharma, Dr. Pramod Kumar Yadav, Aman Jolly, <b>Rajesh Dwivedi</b>, Amrit Kaur Saggu, Deepak Kumar, Payal Malik, Dr. Anand Prakash Shukla, Sunidhi Sharma, Sharad Mishra, Pranit Puri, Mohammad Arsh,'SMART ELECTRONIC INDUCTION STOVE' Patent application no. - 202011038833, Publication date : 09/10/2020, Status - Published",
                  status: "Published",
                },
              ].map((patent, index) => (
                <li
                  key={index}
                  className="group hover:bg-blue-50 p-4 rounded-xl transition-all duration-300"
                >
                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </span>
                    <div className="flex-grow">
                      <p
                        className="text-gray-700 leading-relaxed text-sm sm:text-base"
                        dangerouslySetInnerHTML={{ __html: patent.text }}
                      />
                      <span
                        className={`inline-block mt-2 px-3 py-1 text-xs font-semibold rounded-full ${
                          patent.status === "Granted"
                            ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white"
                            : "bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                        }`}
                      >
                        {patent.status}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <InternationalJournal />
      <InternationalConferences />
    </div>
  );
};

export default Research;
