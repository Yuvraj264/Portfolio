import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI" />,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify />,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap />,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java" />,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus />,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino />,
  },
  redis: {
    title: "Redis",
    bg: "black",
    fg: "white",
    icon: <span className="text-red-500 font-bold">RD</span>,
  },
  rabbitmq: {
    title: "RabbitMQ",
    bg: "black",
    fg: "white",
    icon: <span className="text-orange-500 font-bold">RMQ</span>,
  },
  linux: {
    title: "Linux",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap />, // Placeholder for Linux if SiLinux is missing, will use SiBootstrap as a base or just text
  },
  c: {
    title: "C",
    bg: "black",
    fg: "white",
    icon: <span className="text-blue-400 font-bold">C</span>,
  },
  numpy: {
    title: "NumPy",
    bg: "black",
    fg: "white",
    icon: <span className="text-blue-600 font-bold">NP</span>,
  },
  tensorflow: {
    title: "TensorFlow",
    bg: "black",
    fg: "white",
    icon: <span className="text-orange-400 font-bold">TF</span>,
  },
  opencv: {
    title: "OpenCV",
    bg: "black",
    fg: "white",
    icon: <span className="text-green-500 font-bold">CV</span>,
  },
  gemini: {
    title: "Google Gemini",
    bg: "black",
    fg: "white",
    icon: <span className="text-blue-300 font-bold">AI</span>,
  },
};
export type Project = {
  id: string;
  slug: string;
  category: string;
  title: string;
  tagline: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  challenge: string;
  features: string[];
  architecture: string[];
  tags: string[];
  highlights: string[];
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "primebank",
    slug: "primebank-digital-banking",
    category: "FinTech",
    title: "PrimeBank Suite",
    tagline: "Production-grade digital banking platform",
    src: "/assets/projects-screenshots/primebank/1.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png"],
    skills: {
      frontend: [PROJECT_SKILLS.ts, PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.framerMotion],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.mongo, PROJECT_SKILLS.docker, PROJECT_SKILLS.redis, PROJECT_SKILLS.rabbitmq],
    },
    challenge: "PrimeBank solves the problem of insecure and fragmented digital banking systems by providing a unified platform with strong authentication, real-time monitoring, and role-based access.",
    features: [
      "Role-based dashboards (Admin, Employee, Customer)",
      "Secure login using JWT + WebAuthn (biometrics)",
      "Real-time fraud detection system",
      "Fund transfers (NEFT, RTGS, IMPS)",
      "Transaction analytics with risk scoring",
    ],
    architecture: [
      "Microservice-based scalable system",
      "Redis caching for performance",
      "RabbitMQ for async communication",
      "Secure session handling",
    ],
    tags: ["RBAC", "WebAuthn", "Fraud Detection"],
    highlights: [
      "Enterprise-grade banking system",
      "Biometric authentication",
      "Real-time fraud detection",
    ],
    live: "https://primebank.example.com",
    github: "https://github.com/yuvraj/primebank-suite",
  },
  {
    id: "skillkeeper",
    slug: "skill-keeper-ai-learning",
    category: "AI / EdTech",
    title: "Skill Keeper Pro",
    tagline: "AI-powered learning and retention system",
    src: "/assets/projects-screenshots/skillkeeper/1.png",
    screenshots: ["1.png", "2.png", "3.png"],
    skills: {
      frontend: [PROJECT_SKILLS.ts, PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.mongo, PROJECT_SKILLS.gemini],
    },
    challenge: "Learners forget skills over time. This platform solves skill decay using AI insights and spaced repetition techniques.",
    features: [
      "Skill tracking dashboard",
      "AI recommendations using Gemini",
      "Spaced repetition recall system",
      "Interview preparation mode",
      "Analytics dashboard",
    ],
    architecture: [
      "AI-driven recommendation engine",
      "Scheduled recall system (cron jobs)",
      "Modular learning analytics engine",
    ],
    tags: ["AI Powered", "Spaced Repetition", "Analytics"],
    highlights: [
      "AI learning recommendations",
      "Interview preparation mode",
      "Retention analytics",
    ],
    live: "https://skillkeeper.example.com",
    github: "https://github.com/yuvraj/skillkeeper-pro",
  },
  {
    id: "facerecognition",
    slug: "face-recognition-attendance",
    category: "AI / Computer Vision",
    title: "Face Recognition Attendance System",
    tagline: "Real-time attendance using computer vision",
    src: "/assets/projects-screenshots/facerecognition/1.png",
    screenshots: ["1.png", "2.png"],
    skills: {
      frontend: [PROJECT_SKILLS.python, PROJECT_SKILLS.numpy, PROJECT_SKILLS.opencv],
      backend: [],
    },
    challenge: "Manual attendance is inefficient and error-prone. This system automates attendance using real-time face recognition.",
    features: [
      "Real-time webcam detection",
      "Face embedding comparison (cosine similarity)",
      "Automatic CSV attendance logging",
      "Unknown face detection",
      "Low-light enhancement (CLAHE)",
    ],
    architecture: [
      "Frame processing pipeline",
      "Embedding comparison engine",
      "Real-time detection loop",
    ],
    tags: ["Computer Vision", "Real-time", "Deep Learning"],
    highlights: [
      "Real-time detection",
      "High accuracy matching",
      "Auto attendance logging",
    ],
    live: "https://github.com/yuvraj/face-recognition-attendance",
    github: "https://github.com/yuvraj/face-recognition-attendance",
  },
  {
    id: "vdd",
    slug: "virtual-device-driver",
    category: "Systems Programming",
    title: "Virtual Device Driver",
    tagline: "Linux kernel-level driver simulation",
    src: "/assets/projects-screenshots/vdd/1.png",
    screenshots: ["1.png"],
    skills: {
      frontend: [PROJECT_SKILLS.c, PROJECT_SKILLS.linux],
      backend: [],
    },
    challenge: "Understanding kernel-level programming is complex. This project simulates a real device driver for learning and experimentation.",
    features: [
      "Character device operations",
      "IOCTL commands",
      "Sysfs & Procfs interfaces",
      "Interrupt handling",
      "Kernel logging",
    ],
    architecture: [
      "Kernel module design",
      "Device driver abstraction",
      "Interrupt-driven execution",
    ],
    tags: ["Kernel", "IOCTL", "Linux"],
    highlights: [
      "Low-level programming",
      "Interrupt handling",
      "Kernel interfaces",
    ],
    live: "https://github.com/yuvraj/virtual-device-driver",
    github: "https://github.com/yuvraj/virtual-device-driver",
  },
  {
    id: "cybertoolkit",
    slug: "network-security-toolkit",
    category: "Cybersecurity",
    title: "Network Security Toolkit",
    tagline: "Packet sniffing and security analysis system",
    src: "/assets/projects-screenshots/cybertoolkit/1.png",
    screenshots: ["1.png", "2.png"],
    skills: {
      frontend: [PROJECT_SKILLS.python, PROJECT_SKILLS.tensorflow],
      backend: [],
    },
    challenge: "Network security tools are scattered. This toolkit provides an all-in-one solution for monitoring and analysis.",
    features: [
      "Packet sniffing (TCP, UDP, ICMP)",
      "Password strength checker",
      "File integrity monitor (SHA256)",
      "Multi-threaded port scanner",
      "Traffic visualization",
    ],
    architecture: [
      "Multi-threaded scanning engine",
      "ML-based classification",
      "Data visualization pipeline",
    ],
    tags: ["Cybersecurity", "Networking", "ML"],
    highlights: [
      "Packet sniffing",
      "Port scanning",
      "ML-based traffic analysis",
    ],
    live: "https://github.com/yuvraj/network-security-toolkit",
    github: "https://github.com/yuvraj/network-security-toolkit",
  },
];

export default projects;