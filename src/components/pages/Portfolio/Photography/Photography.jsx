import React from "react";
import photographyDetails from "../../../../images/profile.png";
import photographyHome from "../../../../images/dashboard.png";
import photographyService from "../../../../images/wallet.png";

const Runigo = () => {
  return (
    <section>
      <div className="py-32 px-5 md:px-0">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-violet-700 font-semibold">
            Bank App
          </h2>
          <div className="pt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <img
                className="shadow-xl rounded-lg"
                src={photographyHome}
                alt="photography-home"
              />
              <img
                className="shadow-xl rounded-lg"
                src={photographyService}
                alt="photography-services"
              />
              <img
                className="shadow-xl rounded-lg"
                src={photographyDetails}
                alt="photography-details"
              />
            </div>
          </div>
          <div className="pt-12">
            <h3 className="text-2xl md:text-3xl text-violet-700 font-semibold">
              Project Name : Bank App
            </h3>
            <div className="pt-5">
              <h5 className="text-xl md:text-2xl text-dark font-medium">
                Project Features :
              </h5>
              <ul className="list-disc pl-8 pt-4">
                <li>Splash Screen</li>
                <li> Beautiful UI Design</li>
                <li>Custom Font</li>
  
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
          <div className="pt-8">
            <a
              className="text-base text-white bg-violet-700 py-3 px-6 rounded-md hover:bg-violet-500 duration-300"
              href="https://github.com/abdulkadercse/bank_app_ui_design"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Runigo;
