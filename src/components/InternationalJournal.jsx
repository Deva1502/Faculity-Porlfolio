const InternationalJournal = () => {
  const publications = [
    {
      text: "<b>Rajesh Dwivedi</b>, Aruna Tiwari, Neha Bharill, Milind Ratnaparkhe, Saurabh Kumar Singh, and Abhishek Tripathi, 'A novel chemical property-based alignment-free scalable feature extraction method for genomic data clustering,' Computers and Electrical Engineering, Elsevier, Vol. 123, Part C, 2025,",
      impact: "SCI Q1, IF=4.9",
    },
    {
      text: "<b>Rajesh Dwivedi</b>, Aruna Tiwari, Neha Bharill, Milind Ratnaparkhe, and Alok Kumar Tiwari, 'A taxonomy of unsupervised feature selection methods including their pros, cons, and challenges,' The Journal of Supercomputing, Springer, 2024,",
      impact: "SCI, Q2, IF=3.3",
    },
    {
      text: "<b>Rajesh Dwivedi</b>, Aruna Tiwari, Neha Bharill, Milind Ratnaparkhe, Rishabh Soni, Rahul Mahbubani and Saket Kumar, 'An incremental clustering method based on multiple objectives for dynamic data analysis', Multimedia Tools and Applications, Springer, vol. 83, pp. 38145-38165, 2024,",
      impact: "SCIE, Q2, IF=3.6",
    },
    {
      text: "<b>Rajesh Dwivedi</b>, Aruna Tiwari, Neha Bharill, Milind Ratnaparkhe, Parul Mogre, Pranjal Gadge, and Kethavath Jagadeesh, 'A novel apache spark-based 14-dimensional scalable feature extraction approach for the clustering of genomics data,' The Journal of Supercomputing, Springer, vol. 80, pp. 3554-3588, 2024,",
      impact: "SCI, Q2, IF=3.3",
    },
    {
      text: "<b>Rajesh Dwivedi</b>, Aruna Tiwari, Neha Bharill, and Milind Ratnaparkhe, 'A Novel Clustering-Based Hybrid Feature Selection Approach Using Ant Colony Optimization,' Arabian Journal for Science and Engineering, Springer, vol. 48 pp. 10727-10744, 2023,",
      impact: "SCIE, Q1, IF=2.9",
    },
    {
      text: "Achint Kumar Kansal, Aruna Tiwari, Milind Ratnaparkhe, <b>Rajesh Dwivedi</b> and Preeti Jha, 'A Scalable method for extracting features using a complex network from SNP sequences and clustering using the Scalable Max of Min Algorithm' Soft Computing, Springer, 2024,",
      impact: "Accepted, SCI, Q2, IF=3.1",
    },
    {
      text: "Abhishek Tripathi, Aruna Tiwari, Narendra S Chaudhari, Milind Ratnaparkhe, <b>Rajesh Dwivedi</b>, 'Enhancing K-means Clustering Performance with a Two-Stage Hybrid Preprocessing Strategy' Arabian Journal for Science and Engineering, Springer, 2024,",
      impact: "In Press, SCIE, Q1, IF=2.9",
    },
    {
      text: "Purushottam Agrawal , Alok Sinha, Satish Kumar, Ankit Agarwal , Ashes Banerjee Vasanta Govind Kumar Villuri, Annavarapu Chandra Sekhara Rao, <b>Rajesh Dwivedi</b> , Vijaya Vardhan Reddy Dera, Jitendra Sinha and Srinivas Pasupuleti , 'Exploring Artificial Intelligence Techniques for Groundwater Quality Assessment', Water Journal 2021, 13, 1172, PP: 1-27,",
      impact: "SCIE, Q2, IF=3.4",
    },
    {
      text: "Amit Chawla, Srinivas Pasupuleti, Sowmiya Chawla, A. C. S. Rao, Kripamoy Sarkar, <b>Rajesh Dwivedi</b>, 'Landslide Susceptibility Zonation Mapping: A Case Study from Darjeeling District, Eastern Himalayas, India', Journal of the Indian Society of Remote Sensing, vol 47, Issue 3, pp 497–511, Mar 2019.",
      impact: "SCIE, Q4, IF=2.5",
    },
    {
      text: "Chawla, A., Chawla, S., Pasupuleti, S., A. C. S. Rao, Sarkar, K., and <b>Dwivedi, R.</b>, 'Landslide Susceptibility Mapping in Darjeeling Himalayas India,' Advances in Civil Engineering, Hindawi, vol. 2018, Article ID 6416492, 17 pages, 2018.",
      impact: "SCI, Q3, IF=1.8",
    },
    {
      text: "Abhishek Tripathi, Aruna Tiwari, Narendra S Chaudhari, Milind Ratnaparkhe, Neha Bharill, Preeti Jha, <b>Rajesh Dwivedi</b>, 'Scalable alignment-free feature extraction approach for genome data and their cluster analysis' Multimedia Tools and Applications, Springer, 2024,",
      impact: "In Press, SCIE, Q1, IF=3.3",
    },
    {
      text: "<b>Rajesh Dwivedi</b>, Rahul Kumar, Ebenezer Jangam, and Vishnu Kumar, 'An ant colony optimization based feature selection for data classification.' Int. J Recent Technol. Eng 7 (2019): 35-40.",
      impact: "Scopus indexed",
    },
    {
      text: "<b>Rajesh Dwivedi</b>, A.C.S. Rao, Deepak Kumar, Mohit Dayal. 'Diagnosis the Stages Of Lung Cancer Using Lung CT Slices'. International Journal of Advanced Science and Technology, Vol. 29, no. 05, May 2020, pp. 7710-9,",
      impact: "Scopus indexed",
    },
    {
      text: "Ebenezer Jangam, Rahul Kumar, <b>Rajesh Dwivedi</b>, and Vishnu Kumar, 'Segmentation of Lungs from Chest X-rays using Firefly Optimized Spatial FCM (FASFCM).' International Journal of Recent Technology and Engineering (IJRTE) 7, no. 584 (2019): 75-78.",
      impact: "Scopus indexed",
    },
    {
      text: "Vishnu Kumar, Ajeet Kumar Verma, <b>Rajesh Dwivedi</b>, and Ebenezer Jangam, 'Rule Based Experiment on Exponential Integrate and Fire Neuron Model.' International Journal of Recent Technology and Engineering (IJRTE) vol. 7, 1-10",
      impact: "Scopus indexed",
    },
    {
      text: "<b>Rajesh Dwivedi</b>, Aruna Tiwari, Neha Bharill, and Milind Ratnaparkhe, 'A novel feature extraction technique for the clustering of SNP data', Journal of Oilseed Research, Vol. 40, special issue.",
      impact: "UGC indexed",
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 flex justify-center mb-8">
      <div className="w-full max-w-6xl bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-lg p-6 sm:p-8 md:p-12 lg:p-16">
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md">
          <h4 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 pb-4 border-b-2 border-cyan-500">
            International Journal Publications
          </h4>
          <ul className="space-y-6">
            {publications.map((pub, index) => (
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
                      dangerouslySetInnerHTML={{ __html: pub.text }}
                    />
                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-600 hover:text-cyan-800 underline text-sm mt-2 inline-block"
                      >
                        View Publication
                      </a>
                    )}
                    <span className="inline-block mt-2 px-3 py-1 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-xs font-semibold rounded-full">
                      {pub.impact}
                    </span>
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

export default InternationalJournal;
