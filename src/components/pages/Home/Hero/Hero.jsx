import React from 'react';
import hero from '../../../../images/hero.jpeg';
import resume from '../../../../images/resume.pdf';
import './Hero.css';

const Hero = () => {
    return (
        <section>
            <div className="hero-wrapper pt-32 md:pt-56 pb-32 px-5 md:px-0 overflow-hidden">
                <div className="container mx-auto">
                    <div className="hero-contents text-center" data-aos="zoom-in">
                        <div className="hero-img">
                            <img className='w-[150px] mx-auto rounded-full ring-2 ring-violet-700' src={hero} alt="" />
                        </div>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl text-black font-bold pt-6'>Hi, this is Md. Abdul Kader</h2>
                        <p className='text-base text-violet-700 font-semibold pt-4'>Passionate Flutter Developer</p>
                        <div className='pt-8'>
                            <a className='text-base text-white bg-violet-700 py-3 px-6 rounded-md hover:bg-violet-500 duration-300' href={resume} download={resume}> Download Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
