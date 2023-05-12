import React from "react";
import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="py-5 text-center bg-slate-50 mt-24">
        <div className="container mx-auto">
          <div className="footer-copy">
            <p className="text-base text-gray-500">
              &copy; Copyright 2023 | Abdul Kader | All rights reserved.
            </p>
          </div>
          <div className="footer-social flex justify-center pt-5">
            <a className="px-3" href="https://github.com/abdulkadercse">
              <FaGithub className="text-xl"></FaGithub>
            </a>
            <a className="px-3" href="https://www.linkedin.com/in/abdulkadercse">
              <FaLinkedin className="text-xl"></FaLinkedin>
            </a>
            <a className="px-3" href="mailto:kaderhosen2002@gmail.com">
              <FaRegEnvelope className="text-xl"></FaRegEnvelope>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
