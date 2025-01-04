import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aadarsh Soni",
  initials: "AS",
  url: "https://portfolio2025-nine.vercel.app/",
  location: "Chhattisgarh, India",  
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "Frontend Developer. I love building things and helping people. Very active on LinkedIn.",
  summary:
    "At the end of 2024, I ventured fully into honing my technical skills and building impactful software projects. Currently I'm pursued a B.Tech in Computer Science with a strong GPA, worked as an intern at startups where I contributed to UI/UX design and full-stack development, and participated in multiple hackathons, earning finalist and winner positions. I’ve also had the privilege of working on diverse projects, including an AI-based IT training system and a Alumni association web app , showcasing my expertise in React Native, Node.js, and Figma for user-centric designs.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "React Native",
    "Figma",
    "Node.js",
    "TailwindCSS",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "aadarshsoni.dev@gmail.com",
    tel: "+9090909090",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Aadarsh-soni",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aadarshsoni/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Figma: {
        name: "Figma Designs",
        url: "https://www.figma.com/design/LOFDuwSzOKEY4UQT5tuACn/projects?node-id=7-141&t=B8P78fkxpfSR9Hgr-1",
        icon: Icons.Figma,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:aadarshsoni.dev@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Binimise Labs pvt.ltd.",
      href: "https://binimise.com/",
      badges: [],
      location: "Bangalore, India",
      title: "Frontend Developer",
      logoUrl: "/atomic.png",
      start: "Nov 2024",
      end: "Current",
      description:
        "I'm excited to embark currently on this journey of growth and discovery, honing my design skills, and gaining hands-on experience in the ever-evolving field of UI/UX. With a passion for creativity and a dedication to user-centric design, I'm eager to make meaningful contributions to the team and create impactful user experiences.",
    },
    {
      company: "Roadlyne pvt.ltd.",
      badges: [],
      href: "https://roadlyne.com/",
      location: "Raipur, India",
      title: "UI Developer",
      logoUrl: "/shopify.png",
      start: "Aug 2024",
      end: "Nov 2024",
      description:
        "I'm excited to embark on this journey of growth and discovery, honing my design skills, and gaining hands-on experience in the ever-evolving field of UI/UX. With a passion for creativity and a dedication to user-centric design, I'm eager to make meaningful contributions to the team and create impactful user experiences.",
    },
    {
      company: "Bridge Healthcare pvt.ltd.",
      href: "https://www.bridgehealth.care/",
      badges: [],
      location: "Chennai, India",
      title: "UI Developer",
      logoUrl: "/nvidia.png",
      start: "May 20204",
      end: "July 2024",
      description:
        "I'm excited to embark on this journey of growth and discovery, honing my design skills, and gaining hands-on experience in the ever-evolving field of UI/UX. With a passion for creativity and a dedication to user-centric design, I'm eager to make meaningful contributions to the team and create impactful user experiences.",
    },
    {
      company: "Ainrion",
      href: "https://ainrion.com/",
      badges: [],
      location: "Delhi, India",
      title: "UI/UX Designer",
      logoUrl: "/splunk.png",
      start: "April 2024",
      end: "June 2024",
      description:
        "I'm excited to embark on this journey of growth and discovery, honing my design skills, and gaining hands-on experience in the ever-evolving field of UI/UX. With a passion for creativity and a dedication to user-centric design, I'm eager to make meaningful contributions to the team and create impactful user experiences.",
    },
    {
      company: "Bharat Intern",
      href: "https://bharatintern.live/",
      badges: [],
      location: "Remote",
      title: "Web Developer Intern",
      logoUrl: "/lime.png",
      start: "Sept 2023",
      end: "Oct 2023",
      description:
        "I'm excited to embark on this journey of growth and discovery, honing my design skills, and gaining hands-on experience in the ever-evolving field of UI/UX. With a passion for creativity and a dedication to user-centric design, I'm eager to make meaningful contributions to the team and create impactful user experiences.",
    },
    
  ],
  education: [
    {
      school: "Op Jindal University",
      href: "https://www.opju.ac.in/",
      degree: "Persuing B.Tech in Computer Science",
      logoUrl: "/buildspace.png",
      start: "2022",
      end: "persuing",
    },
    {
      school: "Op Jindal School",
      href: "https://www.opjsrgh.in/",
      degree: "Higher & Secondary School",
      logoUrl: "/waterloo.png",
      start: "2008",
      end: "2022",
    },
    
  ],
  projects: [
    {
      title: "Alumini Association Platform",
      href: "https://n-square.vercel.app/",
      dates: "Nov 2024 - Dec 2024",
      active: true,
      description:
        "Development: A website for Alumni Association using React, hosted on Vercel.",
      technologies: [
        "Node js",
        "TailwindCSS",
        "React",
        "MongoDB",
        "PostgreSQL",
        "Postman",
        "Figma"
      ],
      links: [
        {
          type: "Website",
          href: "https://n-square.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Aadarsh-soni/N-Square_SIH-2024",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/nsquare.png",
    },
    {
      title: "AI Based IT Training System",
      href: "https://e-krishak-website.vercel.app/",
      dates: "Oct 2023 - Dec 2023",
      active: true,
      description:
        "Designed, developed an App for IT Training using React Native, Node.js, and Figma.",
      technologies: [
        "React Native",
        "Node.js",
        "Figma",
        "Android Studio",
        "Java"
      ],
      links: [
        {
          type: "Website",
          href: "https://e-krishak-website.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Aadarsh-soni/Ai-based-IT-Training-System",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/it.png",
    },
    {
      title: "Tech-Learner App",
      href: "https://github.com/Aadarsh-soni/Ai-based-IT-Training-System/tree/main/Tech_Learner(App%20-Frontend)",
      dates: "Oct 2023 - Dec 2023",
      active: true,
      description:
        "Designed, developed an App for IT Training using React Native, Node.js, and Figma.",
      technologies: [
        "React Native",
        "Node.js",
        "Figma",
        "Android Studio",
        "Java"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Aadarsh-soni/Ai-based-IT-Training-System/tree/main/Tech_Learner(App%20-Frontend)",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/app.png",
      
    },
    {
      title: "Habit Tracker App",
      href: "https://github.com/Aadarsh-soni/Habit_tracker",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed a Ai Based Habit Tracker App using React Native, Node.js, and Figma.",
      technologies: [
        "React Native",
        "Node.js",
        "TailwindCSS",
        "Figma",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Aadarsh-soni/Habit_tracker",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/habit.png",
    },
  ],
  hackathons: [
    {
      title: "Smart India Hackathon",
      dates: "December 11th - 12th, 2024",
      location: "Gujrat, India",
      description:
        "Developed a Web Application which allows college Alumini to connect with each other and students of there college.",
      image:
        "https://static.wixstatic.com/media/b49d96_c2029acf7fa8411e8122eb976a1e7aeb~mv2.webp/v1/fill/w_979,h_552,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b49d96_c2029acf7fa8411e8122eb976a1e7aeb~mv2.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Smart India Hackathon",
      dates: "December 19th - 20th, 2023",
      location: "vishakapatnam, India",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://static.wixstatic.com/media/b49d96_c2029acf7fa8411e8122eb976a1e7aeb~mv2.webp/v1/fill/w_979,h_552,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b49d96_c2029acf7fa8411e8122eb976a1e7aeb~mv2.webp",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    
    {
      title: "YIC 2.0",
      dates: "February 17th 2024",
      location: "Varanasi, India",
      description:
        "Startup challange to showcase our product and Application.",
      image:
        "https://innovelec.co.uk/wp-content/uploads/2019/10/YICSquare.jpg",
      links: [],
    },
  ],
} as const;
