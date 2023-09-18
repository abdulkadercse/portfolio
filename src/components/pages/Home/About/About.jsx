import React from "react";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <section id="about">
      <div className="about-wrapper md:mt-10 px-5 md:px-0 overflow-hidden">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-violet-700 font-semibold pb-16">
            About Myself
          </h2>
          <div className="md:flex">
            <div className="w-full md:w-2/3 md:pr-10">
              <div className="about-content" data-aos="fade-right">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold pb-4 md:pb-8">
                  Hi, I am{" "}
                  <span className="text-violet-700 font-bold">
                    <Typewriter
                      words={[
                        "Md. Abdul Kader",
                        "Flutter Developer",
                      ]}
                      loop={5}
                      cursor
                      cursorStyle="."
                      typeSpeed={20}
                      deleteSpeed={30}
                      delaySpeed={1000}
                    />
                  </span>
                </h3>
                <p>
                  Hi, I'm a professional Flutter Developer.
                   I have been working as a Flutter Developer for more than 1 year. 
                   
                </p>
                <br />
                <p>
                During my studies, I gained hands-on experience in developing mobile applications using Flutter framework. I have completed several projects that involved creating interactive user interfaces, integrating third-party APIs, and utilizing database management systems such as Firebase. In addition, I have a solid understanding of object-oriented programming concepts and experience with programming languages such as Dart and JavaScript.
               </p>
                <br />
                <p>
                I am a quick learner with a passion for solving problems and delivering high-quality code. I am comfortable working in a team environment and am eager to collaborate with other developers to create seamless user experiences. My attention to detail and dedication to testing ensure that my code is efficient and reliable.
                </p>
                <br/>
                <p>In addition to my technical skills, I am an excellent communicator and possess strong organizational skills. I am confident that I can work collaboratively with your team and contribute to your company's success.</p>
                <br/>
                <p>Thank you for considering my application. I look forward to discussing my qualifications further and learning more about the opportunity to join your team.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 mt-12 md:mt-0" data-aos="fade-left">
                <div className="about-info">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-violet-50 ring-2 ring-violet-700 rounded-lg text-center py-5">
                            <h4 className="text-xl text-violet-700 font-semibold">Experience</h4>
                            <span className="text-md text-violet-600 font-bold">1 Years +</span>
                        </div>
                        <div className="bg-violet-50 ring-2 ring-violet-700 rounded-lg text-center py-5">
                            <h4 className="text-xl text-violet-700 font-semibold">Completed Project</h4>
                            <span className="text-md text-violet-600 font-bold">100 +</span>
                        </div>
                        <div className="bg-violet-50 ring-2 ring-violet-700 rounded-lg text-center py-5">
                            <h4 className="text-xl text-violet-700 font-semibold">Happy Clients</h4>
                            <span className="text-md text-violet-600 font-bold">90 +</span>
                        </div>
                        <div className="bg-violet-50 ring-2 ring-violet-700 rounded-lg text-center py-5">
                            <h4 className="text-xl text-violet-700 font-semibold">Support</h4>
                            <span className="text-md text-violet-600 font-bold">24/7</span>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
