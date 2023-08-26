import instagramIcon from "../assets/instagram.png";
import githubIcon from "../assets/github.png";
import websiteIcon from "../assets/website.png";
import {
  computer,
  desginIcon,
  vedioIcon,
  extensionIcon,
  animationIcon,
  mockupIcon,
  codingIcon,
  homeIcon,
  contactIcon,
  moreIcon,
  uxuiIcon
} from "../assets/index";

export const sideBarLinks = [
  {
    label: "home",
    btnLink: "/",
    iconLink: homeIcon,
    showOnMobile: true,
  },
  {
    label: "home",
    btnLink: "https://contact-website.vercel.app/",
    iconLink: contactIcon,
    showOnMobile: true,
    target:"_blank"
  },
  {
    label: "web development",
    btnLink: "/web-development/tools",
    iconLink: computer,
  },
  {
    label: "Ux Ui",
    btnLink: "/Ux-Ui/tools",
    iconLink: uxuiIcon,
  },
  {
    label: "designing",
    btnLink: "/design/tools",
    iconLink: desginIcon,
  },
  {
    label: "video editing",
    btnLink: "/video-editing/tools",
    iconLink: vedioIcon,
  },
  {
    label: "Animations",
    btnLink: "/animation/tools",
    iconLink: animationIcon,
  },
  {
    label: "Mockups",
    btnLink: "/mockup/tools",
    iconLink: mockupIcon,
  },
  {
    label: "courses",
    btnLink: "/courses/websites",
    iconLink: codingIcon,
  },
  {
    label: "AI Tools",
    btnLink: "/AI/tools",
    iconLink: extensionIcon,
  },
  {
    label: "more tools",
    btnLink: "/more-tools",
    iconLink: moreIcon,
  },
];

export const NavigationBarLink = [
  {
    icon: homeIcon,
    link:"/"
  },
  {
    icon: contactIcon,
    link:"https://contact-website.vercel.app/",
    target:"_blank"
  },

];

export const icons = [
  {
    icon: websiteIcon,
    link: "https://samie-dev.web.app/",
  },
  {
    icon: githubIcon,
    link: "https://github.com/Samie-ub",
  },
  {
    icon: instagramIcon,
    link: "https://www.instagram.com/samieullahbaig_/",
  },
];

export const formData =[
  {
    label:"name",
    inputType:"text"
  },
  {
    label:"email",
    inputType:"email"
  },
  {
    label:"subject",
    inputType:"text"
  },
]