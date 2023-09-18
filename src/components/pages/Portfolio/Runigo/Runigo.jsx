import React from "react";
import runigoHome from "../../../../images/restaurant-welcome.png";
import runigoLesson from "../../../../images/restaurant-home.png";
import runigoMentor from "../../../../images/restaurant-registration-first.png";

const Runigo = () => {
  return (
    <section>
      <div className="py-32 px-5 md:px-0">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-violet-700 font-semibold">
          Resturant App
          </h2>
          <div className="pt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <img
                className="shadow-xl rounded-lg"
                src={runigoHome}
                alt="resturant-welcome.png"
              />
              <img
                className="shadow-xl rounded-lg"
                src={runigoMentor}
                alt="runigo-mentor"
              />
              <img
                className="shadow-xl rounded-lg"
                src={runigoLesson}
                alt="runigo-lesson"
              />
            </div>
          </div>
          <div className="pt-12">
            <h3 className="text-2xl md:text-3xl text-violet-700 font-semibold">
              Project Name : Resturant App
            </h3>
            <div className="pt-5">
              <h5 className="text-xl md:text-2xl text-dark font-medium">
                Project Features :
              </h5>
              <ul className="list-disc pl-8 pt-4">
                <li>Sign up, Sign in (Save data in a SharedPreferences) </li>
                <li>
                	Form Validation (valid name, email address and password must be at least 8 digit, one uppercase, lowercase, number, special characters).
                </li>
                <li>Phone Call.</li>
                <li>Responsive Design.</li>
              </ul>
            </div>
          </div>
          <div className="pt-12">
            <h5 className="text-xl md:text-2xl text-dark font-medium pb-4">
              Technology Used :
            </h5>
            <div className="flex flex-wrap">
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">Flutter</span>
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">Dart</span>
            </div>
          </div>
          <div className="pt-12"> 
          <h5 className="text-xl md:text-2xl text-dark font-medium pb-4">
              Package Used :
            </h5>
            <div className="flex flex-wrap">
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">Flutter screenutil</span>
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">Get</span>
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm"> Flutter Easyloading </span>
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">Flutter Svg</span>
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">Nb Utils</span>
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">Container Tab Indicator</span>
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">Shared Preferences</span>
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">Google Fonts</span>
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">Dots Indicator</span>
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">Badges</span>
              <span className="bg-violet-200 px-2 mr-2 mb-2 rounded-sm">Url Launcher</span>
            </div>
          </div>
          <div className="pt-8">
            <a
              className="text-base text-white bg-violet-700 py-3 px-6 rounded-md hover:bg-violet-500 duration-300"
              href="https://github.com/abdulkadercse/restaurant_app"
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
