"use client";
import { useState } from "react";
import Head from "next/head";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillHtml5,
  AiOutlineConsoleSql,
  AiFillWindows,
} from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoPhp,
} from "react-icons/bi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { SiPhpmyadmin } from "react-icons/si";
import { DiLinux } from "react-icons/di";
import developedbynzo from "../public/developedbynzo.jpg";
import dev_web from "../public/dev_web.jpg";
//import cv_screen from "../public/cv_screen.png";
import Image from "next/image";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section id="home" className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl dark:text-teal-400 md:text-lg">
              Enzo.dev
            </h1>
            <ul className="flex items-center space-x-6">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  href="#home"
                  className="font-burtons dark:text-teal-400 md:text-lg"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="font-burtons dark:text-teal-400 md:text-lg"
                >
                  A propos
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="font-burtons dark:text-teal-400 md:text-lg"
                >
                  Compétences
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-burtons dark:text-teal-400 md:text-lg"
                >
                  Projets
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-burtons dark:text-teal-400 md:text-lg"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Enzo Six
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Développeur Web.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Salut, je suis Enzo Six. Un passionné de développement web.
              Développeur basé dans la commune d'Aubin, France 📍.
            </p>
            <div className="text-4xl flex justify-center gap-16 py-3 text-black dark:text-gray-400">
              <a href="https://www.linkedin.com/in/enzo-six-8b5727267/">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/Enzo-six">
                <AiFillGithub />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-48 h-48 relative overflow-hidden mt-14 md:h-64 md:w-64">
              <Image src={developedbynzo} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <hr className="my-16 border-t-4 border-gray-300 dark:border-gray-700" />
        <section id="about" className="min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl text-teal-600 font-medium dark:text-teal-400 md:text-5xl">
              A propos de moi
            </h1>
            <div class="flex justify-center grid-cols-2 grid-rows-1 p-20">
              <Image
                src={dev_web}
                className="w-72 h-72 md:w-96 md:h-96 rounded-md"
              />
              <p className="p-16 flex justify-start text-lg dark:text-white md:text-xl">
                Hello ! Moi c'est Enzo SIX, j'ai 19 ans et j'ai obtenu à la fin
                de l'année scolaire 2023 mon diplôme de BTS SNIR. Suite à ce
                diplôme, je souhaite continuer jusqu'à au moins bac+3 afin
                d'avoir un bachelor en développement web (en alternance). Étant
                donné que je n'en ai pas trouvé, je me réserve une année pour
                m'autoformer en développement web afin d'acquérir le plus de
                connaissances possible dans ce domaine. Je suis passionné par le
                développement web, notamment ses deux côtés : front-end/back-end
                et je pratique souvent les deux. A terme, j'aimerais devenir
                officiellement développeur web pour une entreprise.
              </p>
            </div>
          </div>
        </section>
        <hr className="my-16 border-t-4 border-gray-300 dark:border-gray-700" />
        <section id="skills" className="min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl text-teal-600 font-medium dark:text-teal-400 md:text-5xl">
              Compétences
            </h1>
            <p className="text-lg p-16 dark:text-white md:text-xl max-w-4xl mx-auto">
              Mes compétences sont en perpetuelle amélioration car je pratique
              le développement web de manière presque quotidienne, j'en apprends
              tous les jours, surtout en étant impliqué, curieux et passionné !
            </p>
            <div class="grid grid-rows-3 grid-flow-col gap-4 p-16">
              
              <div class="col-span-2">
                <h3 className="text-2xl text-teal-600 font-medium md:text-xl dark:text-white">
                  Compétences Back-End
                </h3>
                <div className=" p-10 flex justify-center text-5xl space-x-7 dark:text-gray-400">
                <BiLogoPhp />
                <AiOutlineConsoleSql />
                <SiPhpmyadmin />
                </div>
              </div>
              <div class="col-span-2">
                <h3 className="text-2xl text-teal-600 font-medium md:text-xl dark:text-white">
                  Compétences Front-End
                </h3>
                <div className=" p-10 flex justify-center text-5xl space-x-7 dark:text-gray-400">
                <AiFillHtml5 />
                <BiLogoCss3 />
                <BiLogoJavascript />
                <BiLogoReact />
                <BiLogoTailwindCss />
                </div>
              </div>
              <div class="col-span-2">
                <h3 className="text-2xl text-teal-600 font-medium md:text-xl dark:text-white">
                  Compétences Diverses
                </h3>
                <div className=" p-10 flex justify-center text-5xl space-x-7 dark:text-gray-400">
                <AiFillWindows />
                <DiLinux />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
