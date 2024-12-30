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
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,

        navbar: false,
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
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
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
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://static.wixstatic.com/media/b49d96_c2029acf7fa8411e8122eb976a1e7aeb~mv2.webp/v1/fill/w_979,h_552,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b49d96_c2029acf7fa8411e8122eb976a1e7aeb~mv2.webp",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
