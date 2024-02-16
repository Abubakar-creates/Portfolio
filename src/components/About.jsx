import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full max-md:pt-[5%] bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            About
          </p>
        </div>

        <p className="text-xl mt-5 max-md:text-[.9rem]">
        I am a developer, working in both, mobile and web base application. Excited for improving my skills and learning new technologies. I'm open to learn and work with any web technology and currently doing freelance gigs.
        </p>

        <br />

        <p className="text-xl max-md:text-[.9rem]">
        I like to code matters from scratch and love the idea of bringing thoughts to life. Connect with me to get your project done. <br /> <br />
        I value minimalistic designs, thoughtful branding of the content, and customer relatable experience. Let’s discover together how we can make your project convert better!<br /> <br />
        I enjoy creating or redesigning a distinct identity for a product or service, get more traffic from search engine and social platforms.
        </p>
      </div>
    </div>
  );
};

export default About;
