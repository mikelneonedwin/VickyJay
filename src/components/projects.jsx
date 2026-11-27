import { motion } from "framer-motion";
import { BsTerminalFill } from "react-icons/bs";
import { FcAndroidOs, FcLinux } from "react-icons/fc";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";
import { Arrow } from "./svgs";
import { projects, sideProjects } from "../data/data";

const PLACEHOLDER_GRADIENTS = [
  "from-mint/30 via-card to-ice/10",
  "from-ice/20 via-card to-mint/20",
  "from-[#0fa858]/40 via-card to-card",
  "from-ice/10 via-mint/10 to-card",
];

const hostOf = (link) => {
  try {
    return new URL(link).hostname.replace(/^www\./, "");
  } catch {
    return link;
  }
};

const Thumb = ({ project, index }) => {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`${project.name} preview`}
        loading="lazy"
        draggable={false}
        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
      />
    );
  }
  if (project.icon === "terminal") {
    return (
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#071a1e]">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background:
              "linear-gradient(120deg, rgba(30,215,96,0.28), rgba(7,26,30,0.2), rgba(207,250,255,0.22), rgba(30,215,96,0.18))",
            backgroundSize: "220% 220%",
            animation: "terminal-shift 8s ease infinite",
          }}
        />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(207,250,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(207,250,255,0.12)_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-mint/20 blur-2xl" />
        <div className="absolute -bottom-12 -right-8 h-36 w-36 rounded-full bg-ice/15 blur-2xl" />
        <div className="relative flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
          <div className="relative flex h-20 w-24 items-center justify-center rounded-2xl border border-mint/30 bg-ink/60 text-mint shadow-glow backdrop-blur-sm">
            <BsTerminalFill className="h-10 w-10" />
          </div>
          <div className="absolute -bottom-3 -right-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#25D366]/40 bg-[#071a1e] shadow-lg ring-2 ring-[#071a1e]">
            <svg viewBox="0 0 24 24" className="h-7 w-7 fill-[#25D366]" aria-hidden="true">
              <path d="M20.52 3.48A11.94 11.94 0 0 0 12.02 0C5.4 0 .02 5.37.02 12c0 2.12.55 4.19 1.6 6.02L0 24l6.15-1.61A11.95 11.95 0 0 0 12.02 24C18.63 24 24 18.63 24 12c0-3.2-1.25-6.21-3.48-8.52ZM12.02 21.98c-1.86 0-3.68-.5-5.27-1.44l-.38-.23-3.65.96.98-3.56-.25-.37A9.94 9.94 0 0 1 2.02 12c0-5.52 4.49-10 10-10 2.67 0 5.18 1.04 7.07 2.93A9.93 9.93 0 0 1 22.02 12c0 5.52-4.48 9.98-10 9.98Zm5.49-7.48c-.3-.15-1.77-.88-2.05-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.17.2-.35.23-.65.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.58c-.2 0-.53.07-.8.37-.28.3-1.06 1.04-1.06 2.54s1.09 2.95 1.24 3.15c.15.2 2.14 3.27 5.18 4.59.72.31 1.29.5 1.73.64.73.23 1.4.2 1.93.12.59-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (project.icon === "roidfs") {
    return (
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#071a1e]">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background:
              "linear-gradient(120deg, rgba(30,215,96,0.22), rgba(7,26,30,0.2), rgba(207,250,255,0.2), rgba(30,215,96,0.16))",
            backgroundSize: "220% 220%",
            animation: "terminal-shift 8s ease infinite",
          }}
        />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(207,250,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(207,250,255,0.12)_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-mint/20 blur-2xl" />
        <div className="absolute -bottom-12 -right-8 h-36 w-36 rounded-full bg-ice/15 blur-2xl" />
        <div className="relative flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
          <div className="absolute -left-8 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-ice/20 bg-[#071a1e] shadow-lg ring-2 ring-[#071a1e]">
            <FcLinux className="h-7 w-7" />
          </div>
          <div className="relative z-10 flex h-20 w-24 items-center justify-center rounded-2xl border border-mint/30 bg-ink/60 text-mint shadow-glow backdrop-blur-sm">
            <BsTerminalFill className="h-10 w-10" />
          </div>
          <div className="absolute -right-8 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-[#3DDC84]/35 bg-[#071a1e] shadow-lg ring-2 ring-[#071a1e]">
            <FcAndroidOs className="h-7 w-7" />
          </div>
        </div>
      </div>
    );
  }
  const g = PLACEHOLDER_GRADIENTS[index % PLACEHOLDER_GRADIENTS.length];
  return (
    <div className={`relative flex h-full w-full items-center justify-center bg-gradient-to-br ${g}`}>
      <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(207,250,255,0.18)_1px,transparent_1px)] [background-size:18px_18px]" />
      <span className="relative font-clashbold text-[64px] font-semibold leading-none text-white/90 transition-transform duration-700 group-hover:scale-110">
        {project.name.charAt(0)}
      </span>
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  const hasLink = Boolean(project.link);
  const Wrapper = hasLink ? motion.a : motion.div;
  const linkProps = hasLink
    ? { href: project.link, target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <Wrapper
      {...linkProps}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="card card-hover group flex h-full flex-col overflow-hidden"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line">
        <Thumb project={project} index={index} />
        {project.tag && (
          <span className="absolute left-3 top-3 rounded-full border border-mint/40 bg-ink/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-mint backdrop-blur">
            {project.tag}
          </span>
        )}
        {hasLink && (
          <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-ice/15 bg-ink/70 text-ice backdrop-blur transition-all duration-300 group-hover:border-mint group-hover:bg-mint group-hover:[&_path]:stroke-ink">
            <Arrow className="h-4 w-4" />
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="min-w-0 font-clashbold text-[20px] font-semibold text-white md:text-[22px]">
            {project.name}
          </h3>
          <span className="max-w-[45%] shrink-0 truncate font-mono text-[11px] text-ice/40">
            {hostOf(project.link)}
          </span>
        </div>
        <p className="mt-2 line-clamp-2 font-pop text-[14px] leading-relaxed text-ice/65 md:text-[15px]">
          {project.desc}
        </p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
          {project.lang.split("+").map((t) => (
            <span key={t.trim()} className="chip">
              {t.trim()}
            </span>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-x mt-28 scroll-mt-28 lg:mt-40">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Selected work"
          title="Things I've built"
          emoji="👨‍🍳"
          sub="Real products for real users, across Africa and beyond. More cooking."
        />
        <Reveal delay={0.1}>
          <a
            href="https://github.com/mikelneonedwin"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            More on GitHub
            <Arrow className="h-4 w-4" />
          </a>
        </Reveal>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={(index % 3) * 0.08} className="h-full">
            <ProjectCard project={project} index={index} />
          </Reveal>
        ))}
      </div>

      <div className="mt-20">
        <SectionHeading
          eyebrow="Side quests"
          title="Games & experiments"
          emoji="🎮"
          sub="Smaller builds, experiments, and tools I made along the way."
        />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {sideProjects.map((project, index) => (
            <Reveal key={project.name} delay={(index % 3) * 0.08} className="h-full">
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
