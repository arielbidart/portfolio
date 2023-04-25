import React from "react";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
import Particulas from "./particulas";

const Header = () => {
  return (
    <>
      <main
        id="home"
        className="flex justify-center items-center bg-base-100 rounded-xl"
      >
        <div className="z-10 absolute sm:w22 opacity-10">
          <Particulas />
        </div>
        <section className="flex-none justify-center h-80 card rounded-box place-items-center z-20">
          <div className="avatar sm:hidden1">
            {/* <motion.div
              animate={{ y: 5}}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="w-60 rounded-full"
            >
              <Image alt="foto" src="/images/mi-pic.jpg" width="800px" height="800px" />
            </motion.div> */}
          </div>
        </section>

        {/* <article className=" z-30 pl-0 sm:pl-01 ">
          <h1 className=" text-4xl font-extralight ">
            <p className="font-bold text-3xl  ">Soy Ariel Bidart</p>
            <p className="font-light  ">Desarrollador </p>
            <span className="font-bold underline violeta ">
              <Typewriter
                words={["Full Stack"]}
                loop={0}
                typeSpeed={40}
                deleteSpeed={30}
                delaySpeed={5500}
                cursor
              />
            </span>
          </h1>
        </article> */}

        <article className="z-30 sm:pl-01 ">
          <h1 className="content-start ">
            <p className="font-bold text-6xl">
              <b>Ariel Bidart</b>
            </p>

            <span className="font-bold underline violeta text-3xl">
              <Typewriter
                words={["Full Stack Developer"]}
                loop={0}
                typeSpeed={40}
                deleteSpeed={30}
                delaySpeed={5500}
                cursor
              />
            </span>
          </h1>
        </article>
      </main>
    </>
  );
};

export default Header;
