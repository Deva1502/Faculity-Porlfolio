const InternationalConferences = () => {
  const conferences = [
    {
      text: "Alok Kumar Tiwari, <b>Rajesh Dwivedi</b>, Transformer Based Deep Learning Model For Object Detection Using Meta Learning, 2025 6th International Conference on Recent Advances in Information Technology (RAIT), March 6-8, IIT(ISM) Dhanbad, India.",
      rank: null,
    },
    {
      text: "Sweta Mishra, <b>Rajesh Dwivedi</b>, Rishi Kumar Jha, A Hybrid ECC-Based Lightweight Authentication Scheme for IoT and RFID, 2025 6th International Conference on Recent Advances in Information Technology (RAIT), March 6-8, IIT(ISM) Dhanbad, India.",
      rank: null,
    },
    {
      text: "Abhishek Tripathi, <b>Rajesh Dwivedi</b>, Ashutosh Samantaray, Madhav Kadam, Aruna Tiwari, Narendra S Chaudhari, Milind Ratnaparkhe, Scalable Distributed Laplacian Score for Feature Selection, International Conference on Neural Information Processing (ICONIP) 2024, Dec 2-6, Auckland, New Zealand",
      rank: "Rank A conference, Accepted",
    },
    {
      text: "<b>Rajesh Dwivedi</b>, Aruna Tiwari, Neha Bharill, and Milind Ratnaparkhe, A Novel Feature Extraction Approach for the Clustering and Classification of Genome Sequences, 2023 IEEE Symposium Series on Computational Intelligence (IEEE-SSCI), 2023, Dec 5-8, Mexico",
      rank: "Rank C conference",
    },
    {
      text: "Preeti Jha, Aruna Tiwari, Neha Bharill, Milind Ratnaparkhe, Om Prakash Patel, Anjali Gupta, Deepali Sukhija, DEEPIKA SUKHIJA, <b>Rajesh Dwivedi</b>, 'Scalable Kernelized Deep Fuzzy Clustering Algorithms for Big Data,' 2023 IEEE Symposium Series on Computational Intelligence (IEEE-SSCI), 2023, Dec 5-8, Mexico",
      rank: "Rank C conference",
    },
    {
      text: "<b>Rajesh Dwivedi</b>, Aruna Tiwari, Neha Bharill, and Milind Ratnaparkhe, A Hybrid Feature Selection Approach for Data Clustering Based on Ant Colony Optimization, International Conference on Neural Information Processing (ICONIP) 2022, Nov 22-26, IIT Indore, India.",
      rank: "Rank A conference",
    },
    {
      text: "<b>Rajesh Dwivedi</b> and Deepak Kumar, 'Challenges of Facial Micro-Expression Detection and Recognition: A Survey,' International Conference on Neural Information Processing (ICONIP) 2022, Nov 22-26, IIT Indore, India.",
      rank: "Rank A conference",
    },
    {
      text: "Rahul Kumar, <b>Rajesh Dwivedi</b>, and Ebenezer Jangam. 'Hybrid fuzzy C-means using bat optimization and maxi-min distance classifier.' International Conference on Advances in Computing and Data Sciences. Springer, Singapore, 2019.",
      rank: null,
    },
    {
      text: "Pravin Kumar, <b>Rajesh Dwivedi</b>, and Varun Tyagi. 'Fuzzy ant colony optimization based energy efficient routing for mixed wireless sensor network.' 2019 International Conference on Issues and Challenges in Intelligent Computing Techniques (ICICT). Vol. 1. IEEE, 2019.",
      rank: null,
    },
    {
      text: "Mukul Kirti Verma, <b>Rajesh Dwivedi</b>, Ajay Kumar Mallick, and Ebenezer Jangam, 'Dimensionality reduction technique on SIFT feature vector for content based image retrival.' International Conference on Recent Trends in Image Processing and Pattern Recognition.(RTIPTR) Springer, Singapore, 2018.",
      rank: null,
    },
    {
      text: "Saurabh Singh Raghuvanshi, Dr. Ritu Singh (Md Ayu.), Alok Kumar Tiwari, <b>Rajesh Dwivedi</b>, Anil Kumar Rajput, Dr. Deep Shikha Punera, 'HEAD-WORN DEVICE FOR EEG RECOGNITION,' Patent design no. - 401076-001, Date of issue : 19/01/2024, Status - Granted.",
      rank: "Patent",
    },
    {
      text: "Mr. Manish Bhardwaj, Mr. Saurabh Sharma, Mrs. Arti Sharma, Dr. Pramod Kumar Yadav, Aman Jolly, <b>Rajesh Dwivedi</b>, Amrit Kaur Saggu, Deepak Kumar, Payal Malik, Dr. Anand Prakash Shukla, Sunidhi Sharma, Sharad Mishra, Pranit Puri, Mohammad Arsh,'SMART ELECTRONIC INDUCTION STOVE' Patent application no. - 202011038833, Publication date : 09/10/2020, Status - Published",
      rank: "Patent",
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 flex justify-center mb-8">
      <div className="w-full max-w-6xl bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-lg p-6 sm:p-8 md:p-12 lg:p-16">
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md">
          <h4 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 pb-4 border-b-2 border-cyan-500">
            International Conferences
          </h4>
          <ul className="space-y-6">
            {conferences.map((conf, index) => (
              <li
                key={index}
                className="group hover:bg-blue-50 p-4 rounded-xl transition-all duration-300"
              >
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </span>
                  <div className="flex-grow">
                    <p
                      className="text-gray-700 leading-relaxed text-sm sm:text-base"
                      dangerouslySetInnerHTML={{ __html: conf.text }}
                    />
                    {conf.rank && (
                      <span
                        className={`inline-block mt-2 px-3 py-1 text-xs font-semibold rounded-full ${
                          conf.rank.includes("Rank A")
                            ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white"
                            : conf.rank.includes("Rank C")
                            ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                            : conf.rank.includes("Patent")
                            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                            : "bg-gradient-to-r from-gray-600 to-slate-600 text-white"
                        }`}
                      >
                        {conf.rank}
                      </span>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InternationalConferences;
