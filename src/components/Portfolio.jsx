import React, { useState } from "react";
import api from "../assets/portfolio/api.jpg";
import apod from "../assets/portfolio/apod.jpg";
import iptracker from "../assets/portfolio/iptracker.jpg";
import nftportal from "../assets/portfolio/nftportal.jpg";
import webpostman from "../assets/portfolio/webpostman.jpg";
import waveportal from "../assets/portfolio/waveportal.jpg";
import CarousalModal from "./CarousalModal";

const Portfolio = () => {

  const data = [
    { id: 1, name: 'C.R.M Audit Times', description: 'this is a crm description', thumbnail: api, project: 'crm' },
    { id: 1, name: 'Jobs', description: 'this is a crm description', thumbnail: api, project: 'jobs' },
  ]

  const [open, setOpen] = useState(false);

  const [id, setId] = useState('')

  const toggleOpen = () => setOpen(!open)

  const handClick = (val) => {
    setOpen(true)
    setId(val)

  }

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white pt-[5%]"
    >
      <CarousalModal open={open} handleClose={toggleOpen} project={id} />
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Portfolio
          </p>
          <p className="py-6 max-md:text-[.9rem]">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {data.map((value) => (
            <div onClick={() => handClick(value?.project)} key={value?.id} className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105 cursor-pointer">
              <img
                src={value?.thumbnail}
                alt="projects"
                className="rounded-lg "

              />
              <div className="p-6 text-[.9rem]">
                <h1 className="font-[600] text-[1.2rem]">{value?.name}</h1>
                <h1 className="mt-4">{value?.description}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
