import React from "react";
import { GrReactjs } from "react-icons/gr";
import Image from "next/image";
import { IoLogoJavascript, IoLogoGithub, IoLogoNodejs } from "react-icons/io";
import {
  SiRedux,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiOracle,
  SiMaterialui,
  SiTailwindcss,
  SiExpress,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
} from "react-icons/si";
import { motion } from "framer-motion";

const Proyectos = () => {
  return (
    <>
      <div className="pt-10">
        <div id="projects" className="divider text-3xl">
        MY PROJECTS
        </div>

        <div className="container py-0 mx-auto pt-5">
          <div className="grid grid-cols-2 gap-4 mt-8 2xl:grid-cols-2  xl:grid-cols-2 sm:grid1-cols-1 sm:mx-auto mx-auto">
            {/* Seccion ************************************************************/}

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="overflow-hidden rounded-lg shadow-sm"
            >
              <div className="px-4 py-2">
                <h1 className="text-3xl font-bold  uppercase da">
                  SEARCH PUNK
                </h1>
                <p className="mt-1 text-sm ">
                Search Punk is a web application where you can search for items, 
                sort them by price and name. I developed it when I was learning 
                about states and lifecycle methods in React.
                </p>
              </div>

              <Image
                className="object-cover object-top w-full h-48 mt-2"
                alt="CRIPTO"
                src="/images/search_cripto.png"
                width="600px"
                height="350px"
              />

              <div className="flex items-center justify-between px-4 py-2 ">
                <h1 className="text-lg font-bold  grid grid-cols-10 gap-2">
                  <SiHtml5 /> <SiCss3 /> <GrReactjs /> <IoLogoJavascript />{" "}
                  <SiMaterialui />
                </h1>

                <a
                  href="https://github.com/arielbidart/search-punk"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="px-5 py-2 font-semibold transition-colors duration-200 transform  rounded-md hover:bg-gray-200"
                >
                  <IoLogoGithub />
                </a>

                <a
                  href="https://search-punk.vercel.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="px-5 py-2 font-semibold transition-colors duration-200 transform  rounded-md hover:bg-gray-200"
                >
                  View
                </a>
              </div>
            </motion.div>

            {/* Seccion ************************************************************/}

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="overflow-hidden rounded-lg shadow-sm "
            >
              <div className="px-4 py-2">
                <h1 className="text-3xl font-bold  uppercase da">MERN App</h1>
                <p className="mt-1 text-sm pb-6">
                Full-stack web application using MongoDB, Express, React, and Node. 
                It allows users to upload posts with images, edit them, and delete them.
                </p>
              </div>

              <Image
                className="object-cover w-full h-48 mt-2"
                src="/images/mern_crud.png"
                width="600px"
                height="350px"
                alt="MERN CRUD"
              />

              <div className="flex items-center justify-between px-4 py-2 ">
                <h1 className="text-lg font-bold  grid grid-cols-10 gap-2">
                  <SiHtml5 /> <SiCss3 /> <IoLogoJavascript />
                  <SiMongodb /> <SiExpress /> <SiTailwindcss /> <GrReactjs />{" "}
                  <SiNodedotjs />
                </h1>

                <a
                  href="https://github.com/arielbidart/mern-crud"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="px-5 py-2 font-semibold transition-colors duration-200 transform  rounded-md hover:bg-gray-200"
                >
                  <IoLogoGithub />
                </a>

                <a
                  href="https://mern-crud-ab.herokuapp.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="px-5 py-2 font-semibold  transition-colors duration-200 transform  rounded-md hover:bg-gray-200"
                >
                  View
                </a>
              </div>
            </motion.div>

            {/* Seccion ************************************************************/}

            <motion.div
              whileHover={{ scale: 1.02 }}
              className=" overflow-hidden  rounded-lg shadow-sm "
            >
              <div className="px-4 py-2 ">
                <h1 className="text-3xl font-bold  uppercase ">GOTA WATER</h1>
                <p className="mt-1 text-sm ">
                The Gota Water website stands out for its background images and videos,
                showcasing the products and services offered by this premium quality natural 
                mineral water brand. It was developed using HTML5, CSS3, and Javascript.
                </p>
              </div>
              <Image
                className="object-cover object-top w-full h-48 mt-2"
                alt="GOTA WATER"
                src="/images/gotawater.png"
                width="600px"
                height="350px"
              />

              <div className="flex items-center justify-between px-4 py-2 ">
                <div className="text-lg font-bold  grid grid-cols-3 gap-2">
                  <SiHtml5 /> <SiCss3 /> <IoLogoJavascript />
                </div>
                <a
                  href="https://gotawater.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="px-5 py-2 font-semibold  transition-colors duration-200 transform  rounded-md hover:bg-gray-200"
                >
                  View
                </a>
              </div>
            </motion.div>

            {/* Seccion ************************************************************/}

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="overflow-hidden  rounded-lg shadow-sm "
            >
              <div className="px-4 py-2">
                <h1 className="text-3xl font-bold uppercase ">CORS</h1>
                <p className="mt-1 text-sm pb-5">
                The CORS Green Spaces website was designed as a portfolio to showcase the companys
                 highlighted works. <br />
                 It is responsive and was developed in HTML5, CSS3, and Javascript.
                </p>
              </div>

              <Image
                className="object-cover object-top w-full h-48 mt-2"
                alt="CORS"
                src="/images/cors.png"
                width="600px"
                height="350px"
              />

              <div className="flex items-center justify-between px-4 py-2 ">
                <h1 className="text-lg font-bold  grid grid-cols-3 gap-2">
                  <SiHtml5 /> <SiCss3 /> <IoLogoJavascript />
                </h1>
                <a
                  href="http://cors-espaciosverdes.com.ar"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="px-5 py-2 font-semibold  transition-colors duration-200 transform  rounded-md hover:bg-gray-200"
                >
                  View
                </a>
              </div>
            </motion.div>

            {/* <motion.div
              whileHover={{ scale: 1.02 }}
              className="overflow-hidden col-span-2 sm:col1-auto  rounded-lg shadow-sm "
            >
              <div className="px-4 py-2">
                <h1 className="text-3xl font-bold  uppercase da">
                  MERN App
                </h1>
                <p className="mt-1 text-sm ">
                  Aplicación web FullStack usando Mongodb, Express, React y
                  Node. Permite subir posts con imágenes, editarlas y borrarlas.
                </p>
              </div>

              <img
                className="object-cover object-top w-full h-48 mt-2"
                src="./images/mern_crud.png"
                alt="GOTA WATER"
              />

              <div className="flex items-center justify-between px-4 py-2 ">
                <h1 className="text-lg font-bold  grid grid-cols-3 gap-2">
                  <SiHtml5 /> <SiCss3 /> <IoLogoJavascript />
                </h1>

                <a
                  href="https://github.com/arielbidart/mern-crud"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="px-5 py-2 font-semibold transition-colors duration-200 transform  rounded-md hover:bg-gray-200"
                >
                  <IoLogoGithub />
                </a>

                <a
                  href="https://mern-crud-ab.herokuapp.com/"
                  target="_blank"
                  className="px-5 py-2 font-semibold  transition-colors duration-200 transform  rounded-md hover:bg-gray-200"
                >
                  View
                </a>
              </div>
            </motion.div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Proyectos;
