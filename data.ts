import { RiComputerLine, RiJavascriptLine } from "react-icons/ri";
import { CgDatabase } from "react-icons/cg"
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { Experience, IProject, Service, Skill, Studies } from "./types";

import { BsCircleFill } from "react-icons/bs";
import { DiPhp } from "react-icons/di";
import { GiBrain } from "react-icons/gi";
import { TbBrandPython, TbBrandDjango, TbBrandBootstrap } from "react-icons/tb";
import { FaReact, FaPhp, FaDocker } from "react-icons/fa";
import { SiCreatereactapp, SiVisualstudio, SiFigma, SiDocker, SiLaravel, SiSelenium, SiJira } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Desarrollo Frontend",
    about:
      "Puedo construir aplicaciones web dinámicas y responsivas usando <b>React.js</b>, <b>HTML</b> y <b>CSS</b>.",
  },
  {
    Icon: CgDatabase,
    title: "Desarrollo Backend",
    about:
      "Experto en desarrollo del lado del servidor, manejo de bases de datos y construcción de APIs usando <b>PHP</b> (Laravel, Symfony) y <b>MySQL</b>.",
  },
  {
    Icon: AiOutlineApi,
    title: "Desarrollo de APIs",
    about:
      "Competente en el desarrollo de APIs RESTful escalables usando <b>Node.js</b> y frameworks de <b>PHP</b>.",
  },
  {
    Icon: DiPhp,
    title: "Desarrollador Full Stack PHP",
    about:
      "Experiencia en construir y mantener aplicaciones full stack robustas con <b>PHP</b> y <b>React.js</b>.",
  },
  {
    Icon: FaDocker,
    title: "Habilidades en DevOps",
    about:
      "Experto en la containerización y orquestación usando <b>Docker</b> y <b>Kubernetes</b>, así como en pipelines de CI/CD.",
  },
  {
    Icon: GiBrain,
    title: "Soluciones de Negocio",
    about:
      "Tengo la habilidad de comprender los problemas de negocio y transformarlos en soluciones de código que faciliten el trabajo, mejorando la eficiencia y efectividad en los procesos.",
  },
];

export const studies: Studies[] = [
  {
    institution: "ParqueSoft TI",
    title: "Curso de 542 horas en Desarrollo de Software",
    years: "2020",
  },
  {
    institution: "Servicio nacional aprendizaje - SENA",
    title: "Tecnología en Análisis y Desarrollo de Sistemas de Información",
    years: "2012 - 2015"
  },
]

export const experiences: Experience[] = [
  // company, position, description, languages, date
  {
    company: "FREELANCE",
    position: "Python Developer (Selenium)",
    description: "Cree una herramienta en Python que permitiría el Crawling de algunas de las páginas de una lista de URLS que me proporcionó a través de un CSV. Implementé una solución usando Django y MongoDB para permitir el Crawling de cada uno de los sitios que el usuario requería.",
    languages: ["Python", "Selenium", "Mongo DB"],
    date: "Dic 2023 – Abr 2024",
  },
  {
    company: "KUEPA EDU TECH, Bogotá D.C. (En Remoto)",
    position: "Desarrollador Full Stack",
    description: "Estuve vinculado a la compañía como soporte a aplicaciones antiguas y modernas; Por motivos de la compañía aun se venía utilizando un sistema de gestión de pagos por algunos que estudiantes que no habían culminado sus estudios en la plataforma antigua a los que había que brindarles el soporte adecuado, entre otras funciones tenía estrecha colaboración con equipos interdisciplinarios para desarrollar nuevas funcionalidades y resolver errores con lo que se tenía de momento en producción, Rediseño y optimización de sitios web para mejorar la carga, el rendimiento y la navegación.",
    languages: ["PHP","React","Laravel","Symfony","Mongo DB"],
    phone: "6019177888",
    date: "Dic 2021 – Jun 2023",
  },{
    company: "Moda de Colombia S.A.S., Santiago de Cali",
    position: "Full Stack Developer / Jefe de Sistemas",
    description: "En esta compañía inicié como Auxiliar de Sistemas en 2015, por mi buen desempeño fui promovido a coordinar el equipo de desarrollo de la compañía. Entre otros las funciones fueron:<br /><ul><li>Resolución de problemas técnicos y de rendimiento de los sistemas.</li><li>Implementación de soluciones tecnológicas para la empresa.</li><li>Gestión del equipo de tecnologías de la información así como cumplimiento en las entregas de las tareas asignadas y sus plazos.</li><li>Supervisión de redes y seguridad informática.</li><li>Diseño de interfaces amigables con el usuario y estéticamente atractivas.</li><li>Colaboración con los diferentes departamentos de la empresa.</li></ul>",
    languages: ["Jira","GitLab","Symfony","Prestashop","MySQL","Laravel","DevOps"],
    phone: "6025141406",
    date: "Jul 2015 - Dic 2021",
  },/*
  {
    company: "",
    position: "",
    description: "",
    languages: [],
    phone: "",
    date: "",
  },*/
]

export const languages: Skill[] = [
  {
    Icon: FaPhp,
    name: "PHP",
    level: "85",
  },
  {
    Icon: SiLaravel,
    name: "Laravel",
    level: "75",
  },
  {
    Icon: TbBrandPython,
    name: "Python",
    level: "65",
  },
  {
    Icon: TbBrandDjango,
    name: "Django",
    level: "50",
  },
  {
    Icon: RiJavascriptLine,
    name: "Java Script",
    level: "60",
  },
  {
    Icon: FaReact,
    name: "React",
    level: "80",
  },
  {
    Icon: SiCreatereactapp,
    name: "React Native",
    level: "70",
  },
  {
    Icon: TbBrandBootstrap,
    name: "Bootstrap",
    level: "80",
  },
];

export const tools: Skill[] = [
  {
    Icon: SiSelenium,
    name: "Selenium",
    level: "85",
  },
  {
    Icon: SiFigma,
    name: "Figma",
    level: "65",
  },
  {
    Icon: SiVisualstudio,
    name: "Visual Studio Code",
    level: "90",
  },
  {
    Icon: SiDocker,
    name: "Docker",
    level: "60",
  },
  {
    Icon: GrMysql,
    name: "MySql",
    level: "80",
  },
  {
    Icon: SiJira ,
    name: "Jira",
    level: "75",
  },
];

export const projects: IProject[] = [
  { 
    name: "COVID Tracker",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/covid.jpg",
    deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
    github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
    category: ["react"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    name: "Algorithm Visualizer",
    image_path: "/images/algoVisual.png",
    deployed_url: "https://visual-algorithm.web.app/",
    github_url: "https://github.com/Dey-Sumit/algorithm-visualizer",
    category: ["react"],
    description:
      "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
    key_techs: ["React", "firebase", "Framer Motion"],
  },

  {
    name: "Dev Talks",
    image_path: "/images/dev.jpg",
    deployed_url: "https://dev-talks.herokuapp.com/",
    github_url: "https://github.com/Dey-Sumit/Dev-talks",
    category: ["node", "mongo", "react"],
    description:
      "Social Media app for developers who can share project,create posts,etc...",
    key_techs: [
      "React",
      "Redux",
      "Node",
      "Express",
      "Mongo",
      "REST API",
      "Bootstrap",
    ],
  },

  {
    name: "Realtime Chat App",
    image_path: "/images/chatapp.jpg",
    deployed_url: "https://sumit-chat.netlify.app/",
    github_url: "https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
    category: ["node", "react"],
    description:
      "Basic Realtime Chat App where one can create a room can talk to each other",
    key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
  },

  {
    name: "Tweeter Clone",
    image_path: "/images/tweetme.jpg",
    deployed_url: "http://sumaxtweetme.pythonanywhere.com/",
    github_url: "https://github.com/Dey-Sumit/tweetme",
    category: ["django", "react"],
    description:
      "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
    key_techs: ["React", "Django", "Django REST API"],
  },

  {
    name: "Color Classification using tf.js",
    image_path: "/images/color.jpg",
    deployed_url: "!#",
    github_url: "https://github.com/Dey-Sumit/color-classification",
    category: ["express"],
    description:
      "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
    key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
  },
  {
    name: "YouTube using YouTube ",
    image_path: "/images/youtubeClone.png",
    deployed_url: "https://not-utube.web.app/",
    github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
    category: ["express"],
    description:
      'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
    key_techs: [
      "React",
      "Redux",
      "Firebase Auth",
      "YouTube API",
      "Sass",
      "Bootstrap",
    ],
  },
  {
    name: "Football App",
    image_path: "/images/football.png",
    deployed_url: "https://o-my-goal.web.app/",
    github_url: "https://github.com/Dey-Sumit/football-app",
    category: ["react"],
    description:
      "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
    key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
  },
];
