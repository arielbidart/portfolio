import React from "react";
import { AiFillMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
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
} from "react-icons/si";
import { motion } from "framer-motion";

const Contacto = () => {
  return (
    <>
      <div className="pt-10">
        <div id="contact" className="divider text-3xl">
          CONTACT
        </div>

        <div className="grid rounded-sm gap-2 place-items-center grid-flow-col pt-20">
          <div className="text-4xl grid place-items-center">
            <motion.div whileHover={{ scale: 1.2 }}>
              <AiFillLinkedin />
            </motion.div>
            <a rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/ariel-bidart/"
              className="link link-hover text-lg sm:text1-xs"
            >
              Ariel Bidart
            </a>
          </div>

          <div className="text-4xl grid place-items-center">
            <motion.div whileHover={{ scale: 1.2 }} >
              <AiFillMail />
            </motion.div>
            <a rel="noopener noreferrer"
              target="_blank"
              href="mailto:bidart.arielf@gmail.com"
              className="link link-hover text-lg sm:text1-xs"
            >
              bidart.arielf@gmail.com
            </a>
          </div>

          <div className="text-4xl grid place-items-center">
            <motion.div whileHover={{ scale: 1.2 }}>
              <AiFillGithub />
            </motion.div>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/afbweb"
              className="link link-hover text-lg sm:text1-xs "
            >
              afbweb
            </a>
          </div>
        </div>

        <br /> <br /> <br /> <br />

        <footer className="footer rounded-sm footer-center p-10 bg-base-200 text-base-content  ">
          <div className="grid">
            <p className="text-center">Created with Next.js</p>
            <div className="flex gap-2 text-2xl">
              <SiNextdotjs />
              <SiTailwindcss />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Contacto;
