import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaSass, FaFigma, FaPhoneAlt, FaUser,FaLaravel, FaWordpress , FaJs, FaMapMarkerAlt, FaPaperPlane, FaDribbble, FaInstagram, FaLinkedin } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { BsMedium } from "react-icons/bs";

import category1 from "./assets/B100souris.png";
import category2 from "./assets/m111w.jpg";
import category3 from "./assets/vapp.jpg";
import category4 from "./assets/vapp.jpg";


import work1 from "../src/assets/Houssam_El_issioui.jpeg";
import work2 from "../src/assets/Houssam_El_issioui.jpeg";
import work3 from "../src/assets/Houssam_El_issioui.jpeg";
import work4 from "../src/assets/Houssam_El_issioui.jpeg";
import work5 from "../src/assets/Houssam_El_issioui.jpeg";
import work6 from "../src/assets/Houssam_El_issioui.jpeg";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [
  <FaDribbble />,
  <FaInstagram />,
  <FaLinkedin />,
  <BsMedium />
]



 export const categories = [
    {
      id: 1,
      image: category1,
      title: "Souris Logitech B100",
      description: "🖱️ Découvrez la souris Logitech B100, simple et efficace ! ✨ Caractéristiques principales : Souris optique fiable pour une navigation fluide Conception ambidextre pour droitiers et gauchers Prise en charge USB plug-and-play 💰 Prix exceptionnel : 95 MAD seulement ! 🔹 État : Produit neuf dans son emballage d’origine  🔹 Garantie : 1 an",
      video: "",
    },
    {
      id: 2,
      image: category2,
      title: "HP LaserJet M111w",
      description: "🖨️ Imprimante Laser Monochrome HP LaserJet M111w (7MD68A)🚀 Caractéristiques principales :Vitesse d'impression noir : 20 pages par minute (norme ISO)Qualité d'impression noire : Jusqu'à 600 x 600 pppVolume de pages mensuel recommandé : 100 à 1000Impression recto/verso : NonFonctionne avec : 1 cartouche d'encre noire",
      video :"",
    },
    
    
  ];


export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Abeezarar"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+959883271929"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "abee02@gmail.com"
  }
]

export const icons = [<FaHtml5 />, <FaCss3 />, <FaJs />,<FaLaravel/> , <FaReact />, <FaNodeJs />, <FaSass />, <FaWordpress/>]

export const experiences = [
  {
    id: 1,
    year: "2023",
    position: "Lorem ipsum is a dummy text without any sense. It is a sequence of Latin words",
    company: ""
  },
  {
    di: 2,
    year: "2022",
    position: "Lorem ipsum is a dummy text without any sense. It is a sequence of Latin words ",
    company: ""
  },
  {
    id: 3,
    year: "2021",
    position: "Lorem ipsum is a dummy text without any sense. It is a sequence of Latin words",
    company: ""
  }
]

export const certification = [
  {
    id: 1,
    year: '2022',
    position: "Lorem ipsum is a dummy text without any sense. It is a sequence of Latin words"
  },
  {
    id: 2,
    year: "",
    position: "Lorem ipsum is a dummy text without any sense. It is a sequence of Latin words"
  },
  {
    id: 3,
    year: "2021",
    position: "Lorem ipsum is a dummy text without any sense. It is a sequence of Latin words"
  },
  {
    id: 4,
    year: "",
    position: ""
  }
]
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "web"
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "web"
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "web"
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "app"
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    category: 'app'
  },
  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "design"
  }
]


export const workNavs = [
  "All", "Web", "App", "Design"
]

export const contacts = [
  
  {
    id: 1,
    icon: <FaPaperPlane />,
    infoText: "enajdinfotechnologie@gmail.com"
  },
   
]