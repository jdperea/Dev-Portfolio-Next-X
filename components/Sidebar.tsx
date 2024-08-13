import { AiFillGithub, AiFillLinkedin, AiFillYoutube, AiFillMail } from "react-icons/ai";
import { CgDarkMode } from "react-icons/cg";
import { FaFileDownload } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const email = "devjuandiegopereavalencia@gmail.com"

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <Image
        src="https://avatars.githubusercontent.com/u/4968958"
        alt="avatar"
        className=" mx-auto border rounded-full "
        height="128px"
        width="128px"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-opensans">
        <span className="text-red-500">Juan Diego</span> Perea Valencia
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-300 dark:bg-black-400">
        Web Developer
      </p>
      {/* Resume */}
      <a
        href="/assets/Full Stack Dev - Juan Diego Perea.pdf"
        download="Full Stack Dev - Juan Diego Perea.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-400"
      >
        <FaFileDownload className="w-5 h-3 text-red-600" />
        <span>Download Resume</span>
      </a>

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-red-600 md:w-full ">
        {/*<a href="https://www.youtube.com/channel/UClW8d1f5m0QAE_Ig024EP6A">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a>*/}
        <a title="Enviar Email" onClick={() => window.open(`mailto:{$email}`)}>
          <AiFillMail className="w-8 h-8 cursor-pointer" />
        </a>
        <a title="Linkedin" href="https://www.linkedin.com/in/jdperea59/" >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a title="Github" href="https://github.com/jdperea/">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
        </a>
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2 text-red-600" /><span>Cali, Colombia</span>
        </div>
        <p className="my-2 break-all"> {email} </p>
        <a className="my-2 underline decoration-sky-600 hover:decoration-blue-400 text-red-500" href="tel:+573046570765">304 657 0765</a>
      </div>

      {/* Email Button */}
      {/* 
      <button
        className="w-7/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-red-500 to-blue-700 hover:scale-105 focus:outline-none"
        onClick={() => window.open(`mailto:{$email}`)}
      >
        Email me
      </button>
      */}
      <div className="fixed bottom-4 left-4">
      <button
        onClick={changeTheme}
        title="Toggle Theme"
        className="w-5/12 px-5 py-2 pl-2 pr-6 my-4 text-white bg-black dark:bg-white-200 rounded-full cursor-pointer bg-black focus:outline-none hover:scale-105"
      >
        <CgDarkMode />
      </button>
      </div>
    </>
  );
};

export default Sidebar;
