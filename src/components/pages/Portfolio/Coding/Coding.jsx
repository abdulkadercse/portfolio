import React from "react";
import codingDetails from "../../../../images/loan-partner.png";
import codingHome from "../../../../images/loan-home.png";
import codingCourse from "../../../../images/loan-profile.png";



const Runigo = () => {
  return (
    <section>
      <div className="py-32 px-5 md:px-0">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-violet-700 font-semibold">
            Salary Loan
          </h2>
          <div className="pt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <img
                className="shadow-xl rounded-lg"
                src={codingHome}
                alt="loan-home"
              />
              <img
                className="shadow-xl rounded-lg"
                src={codingCourse}
                alt="loan-profile"
              />
              <img
                className="shadow-xl rounded-lg"
                src={codingDetails}
                alt="coding-course-details"
              />
            </div>
          </div>
          <div className="pt-12">
            <h3 className="text-2xl md:text-3xl text-violet-700 font-semibold">
              Project Name : Salary Loan
            </h3>
            <div className="pt-5">
              <h5 className="text-xl md:text-2xl text-dark font-medium">
                Project Features :
              </h5>
              <ul className="list-disc pl-8 pt-4">
                <li>Splash Screen</li>
                <li>
                Beautiful UI Design
                </li>
                <li>
                Lottie Animation
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-12">
            <h5 className="text-xl md:text-2xl text-dark font-medium pb-4">
              Technology Used :
            </h5>
            <div className="flex flex-wrap">
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">
              Dart
              </span>
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">
                Flutter
              </span>
            </div>
          </div>
          <div className="pt-12"> 
          <h5 className="text-xl md:text-2xl text-dark font-medium pb-4">
              Package Used :
            </h5>
            <div className="flex flex-wrap">
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">Flutter screenutil</span>
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">Nb Utils</span>
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">Font Awesome Flutter</span>
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">Google Fonts</span>
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">Lottie</span>
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">Flutter Easyloading</span>
            </div>
          </div>
          <div className="pt-8">
            <a
              className="text-base text-white bg-violet-700 py-3 px-6 rounded-md hover:bg-violet-500 duration-300"
              href="https://github.com/abdulkadercse/salary_loan"
            >
              Live Website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Runigo;
