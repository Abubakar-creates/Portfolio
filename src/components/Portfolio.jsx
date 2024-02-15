import React, { useState } from "react";
import api from "../assets/portfolio/api.jpg";
import apod from "../assets/portfolio/apod.jpg";
import iptracker from "../assets/portfolio/iptracker.jpg";
import nftportal from "../assets/portfolio/nftportal.jpg";
import webpostman from "../assets/portfolio/webpostman.jpg";
import waveportal from "../assets/portfolio/waveportal.jpg";
import CarousalModal from "./CarousalModal";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: api,
      link: 'https://crypto-info-api.cyclic.app/',
      repo: 'https://github.com/rahulkarda/crypto-info-api'
    },
    {
      id: 2,
      src: webpostman,
      link: 'https://webpostman.netlify.app/',
      repo: 'https://github.com/rahulkarda/Web-Postman'
    },
    {
      id: 3,
      src: apod,
      link: 'https://apodbyrahul.netlify.app/',
      repo: 'https://github.com/rahulkarda/NASA-APOD'
    },
    {
      id: 4,
      src: waveportal,
      link: 'https://waveatrahul.netlify.app/',
      repo: 'https://github.com/rahulkarda/Wave-Portal'
    },
    {
      id: 5,
      src: nftportal,
      link: 'https://nftportalbyrahul.netlify.app/',
      repo: 'https://github.com/rahulkarda/NFT-Portal'
    },
    {
      id: 6,
      src: iptracker,
      link: 'https://trackmyip.netlify.app/',
      repo: 'https://github.com/rahulkarda/IP-Address-Tracker'
    },
  ];

  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open)

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white pt-[5%]"
    >
      <CarousalModal open={open} handleClose={toggleOpen} />
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Portfolio
          </p>
          <p className="py-6 max-md:text-[.9rem]">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105 cursor-pointer">
              <img
                src={src}
                alt="projects"
                className="rounded-lg "
                onClick={toggleOpen}
              />
              <div className="p-6 text-[.9rem]">
                <h1 className="font-[600] text-[1.2rem]">Jobs.com.au</h1>
                <h1 className="mt-4">it is a web base software use to apply on various jobs through one click </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
