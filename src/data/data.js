import acadevaImg from "../assets/images/projects/acadeva.png";
import bookbenchImg from "../assets/images/projects/bookbench.png";
import browserideImg from "../assets/images/projects/browseride.png";
import caturaImg from "../assets/images/projects/catura.png";
import cvvdImg from "../assets/images/projects/cvvd.png";
import efikHymnsImg from "../assets/images/projects/efik-hymns.png";
import kyggerImg from "../assets/images/projects/kygger.png";
import lawdamImg from "../assets/images/projects/lawdam.png";
import modoolsImg from "../assets/images/projects/modools.png";
import nairestatsImg from "../assets/images/projects/nairestats.png";
import tiptapBlogImg from "../assets/images/projects/tiptap-blog.png";
import voysaImg from "../assets/images/projects/voysa.png";

// Main products - shown on site
export const projects = [
  {
    name: "Modools",
    desc: "Higher-education LMS with AI-assisted course generation, automated essay grading, and multi-tenant university workflows. One of the core products I help build at Applift.",
    lang: "Next.js + NestJS + AI + PostgreSQL",
    link: "https://modools.applift.xyz",
    image: modoolsImg,
    tag: "Flagship",
  },
  {
    name: "Catura",
    desc: "Automated rider dispatch and merchant operations platform with WebSocket telemetry, errands lifecycle, invoicing, and a multi-tenant wallet ledger.",
    lang: "NestJS + WebSockets + PostgreSQL",
    link: "https://catura.co/",
    image: caturaImg,
    tag: "Flagship",
  },
  {
    name: "Acadeva",
    desc: "Academic resource repository and study platform with fast search, in-browser document previews, and a low-bandwidth experience built for students.",
    lang: "Next.js + TypeScript + Search",
    link: "https://acadeva.xyz/",
    image: acadevaImg,
    tag: "Flagship",
  },
  {
    name: "LawdAm",
    desc: "Anonymous social messaging platform with real-time group chats, direct messages, presence, and fluid identity switching across conversations.",
    lang: "React + Real-time + PWA",
    link: "https://lawdam.xyz",
    image: lawdamImg,
    tag: "Flagship",
  },
  {
    name: "Kygger",
    desc: "CLI that turns OpenAPI and Swagger specs into type-safe ky clients with Zod contracts, so API integrations start from real types.",
    lang: "TypeScript + CLI + OpenAPI",
    link: "https://github.com/mikelneonedwin/kygger",
    image: kyggerImg,
  },
  {
    name: "Cvvd",
    desc: "Clean, living profiles and a publication-grade printable CV engine inspired by read.cv, built for people who want their work to read well on screen and on paper.",
    lang: "TypeScript + Next.js + Print CSS",
    link: "https://cvvd.vercel.app/u/mikelneonedwin",
    image: cvvdImg,
  },
  {
    name: "Voysa",
    desc: "Sui ecosystem project discovery and on-chain analytics platform. Winner of the Sui Hackathon at Uniuyo, May 2025.",
    lang: "Sui + TypeScript + Web3",
    link: "https://voysa.vercel.app/",
    image: voysaImg,
    tag: "Hackathon Winner",
  },
];

// Side projects and experiments
export const sideProjects = [
  {
    name: "Wape",
    desc: "WhatsApp Phone Extractor, Room Manager, and List Aggregator CLI toolkit for cleaning up, organizing, and working with WhatsApp contact data.",
    lang: "TypeScript + CLI + WhatsApp",
    link: "https://github.com/mikelneonedwin/wape",
    icon: "terminal",
    tag: "CLI",
  },
  {
    name: "Nairestats",
    desc: "Harness, model, and lab token usage stats dashboard for Tokenaires, built to make AI usage visible and easy to understand at a glance.",
    lang: "TypeScript + Next.js + Dashboard",
    link: "https://nairestats.vercel.app",
    image: nairestatsImg,
  },
  {
    name: "Bookbench",
    desc: "An empirical benchmark across Rust, Typst, MuPDF, and TypeScript, built to settle a real tech debt question in manualbook.",
    lang: "Rust + TypeScript + Benchmarking",
    link: "https://bookbench-bay.vercel.app",
    image: bookbenchImg,
  },
  {
    name: "BrowserIDE",
    desc: "In-browser code editor and client-side execution environment supporting HTML/CSS, JS, TS, and Python through Pyodide WASM.",
    lang: "TypeScript + WASM + Pyodide",
    link: "https://ide-two-ecru.vercel.app",
    image: browserideImg,
  },
  {
    name: "Efik Hymns",
    desc: "A digital Efik hymn book SPA for church projections and easy access, built to keep a cultural collection close at hand.",
    lang: "TypeScript + SPA",
    link: "https://efik-hymns.vercel.app",
    image: efikHymnsImg,
  },
  {
    name: "roidfs",
    desc: "A TUI disk visualizer for Linux and Android ADB, built for quickly understanding where storage actually went.",
    lang: "Go + TUI + Linux",
    link: "https://github.com/mikelneonedwin/roidfs",
    icon: "roidfs",
  },
  {
    name: "Tiptap Blog",
    desc: "A headless rich-text blog template powered by Tiptap, built as a clean starting point for content-heavy apps.",
    lang: "Next.js + Tiptap + TypeScript",
    link: "https://tiptap-blog-demo.vercel.app",
    image: tiptapBlogImg,
  },
];

export const experienceData = [
  {
    role: "Full Stack Developer",
    span: "2025 - till date",
    comp: "Applift Labs",
    desc: "Working across web products and backend services, from LMS platforms to payment infrastructure and internal tooling.",
  },
];

export const skills = [
  { id: 0, title: "TypeScript" },
  { id: 1, title: "React" },
  { id: 2, title: "Next.js" },
  { id: 3, title: "Node.js" },
  { id: 4, title: "NestJS" },
  { id: 5, title: "PostgreSQL" },
  { id: 6, title: "TailwindCSS" },
  { id: 7, title: "Docker" },
  { id: 8, title: "Git" },
  { id: 9, title: "Linux" },
  { id: 10, title: "Redis" },
  { id: 11, title: "Go" },
];
