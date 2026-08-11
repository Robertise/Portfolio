import { useState, useEffect } from "react";
import { 
  LuCode, 
  LuExternalLink, 
  LuLoader, 
  LuWifiOff, 
  LuLock, 
  LuX, 
  LuInfo,
  LuSparkles,
  LuArrowUpRight,
  LuCheck
} from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project) return null;

  const hasCode = project.codeUrl && project.codeUrl.trim() !== "";
  const hasLive = project.liveUrl && project.liveUrl.trim() !== "";
  const isPrivateRepo = project.privateRepo === true;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-black/70 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[90vh] bg-(--card-background) border border-(--border-color) rounded-2xl shadow-2xl overflow-y-auto flex flex-col my-auto text-(--text-primary)"
        >
          {/* Sticky Modal Header */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-(--card-background)/95 backdrop-blur-md border-b border-(--border-color)">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-(--accent)/15 text-(--accent) border border-(--accent)/30">
                {project.type}
              </span>
              <span className="text-xs text-gray-500 font-mono hidden sm:inline">
                {project.duration}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-(--hover-bg) text-(--text-secondary) hover:text-(--text-primary) transition-colors"
              aria-label="Close modal"
            >
              <LuX className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 md:p-8 space-y-8">
            {/* Title & Role Header */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-(--text-primary) leading-snug mb-2">
                {project.title}
              </h2>
              {project.roleName && (
                <p className="text-sm font-medium text-(--accent) flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-(--accent) animate-pulse"></span>
                  Role: {project.roleName}
                </p>
              )}
            </div>

            {/* Project Banner Image */}
            <div className="w-full h-56 md:h-72 rounded-xl overflow-hidden border border-(--border-color) bg-(--bg-primary)">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Key Metrics / Highlights Grid */}
            {project.highlights && project.highlights.length > 0 && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-(--text-secondary) mb-3 flex items-center gap-1.5">
                  <LuSparkles className="w-4 h-4 text-amber-500" />
                  Key Highlights & Results
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {project.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-(--bg-primary) border border-(--border-color) flex flex-col justify-center gap-1"
                    >
                      <span className="text-xs text-(--text-secondary) font-medium">
                        {h.label}
                      </span>
                      <span className="text-sm font-bold text-(--accent)">
                        {h.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Problem & Solution Detailed Section */}
            <div className="space-y-6">
              {/* Problem */}
              <div className="p-5 rounded-xl bg-red-500/5 border border-red-500/20">
                <h3 className="text-sm font-bold text-red-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  The Problem
                </h3>
                <p className="text-sm md:text-base text-(--text-secondary) leading-relaxed">
                  {project.fullProblem || project.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                <h3 className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  The Solution & Architecture
                </h3>
                <p className="text-sm md:text-base text-(--text-secondary) leading-relaxed">
                  {project.fullSolution || project.solution}
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-(--text-secondary) mb-3">
                Technologies & Tools Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-(--bg-primary) text-(--accent) text-xs md:text-sm font-medium rounded-lg border border-(--border-color) flex items-center gap-1.5"
                  >
                    <LuCheck className="w-3.5 h-3.5 opacity-70" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Modal Footer Actions */}
          <div className="sticky bottom-0 z-20 flex items-center justify-between px-6 py-4 bg-(--card-background)/95 backdrop-blur-md border-t border-(--border-color) flex-wrap gap-3">
            <div className="flex items-center gap-3">
              {hasCode ? (
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-(--primary) text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
                >
                  <LuCode className="w-4 h-4" />
                  <span>View Source Code</span>
                  <LuArrowUpRight className="w-3.5 h-3.5" />
                </a>
              ) : isPrivateRepo ? (
                <span className="px-3.5 py-2 bg-purple-500/10 text-purple-400 border border-purple-500/30 rounded-lg text-xs font-semibold flex items-center gap-2">
                  <LuLock className="w-3.5 h-3.5" />
                  <span>Source Code Private (Under Double-Blind Review)</span>
                </span>
              ) : (
                <span className="px-3.5 py-2 bg-amber-500/10 text-amber-500 border border-amber-500/30 rounded-lg text-xs font-semibold flex items-center gap-2">
                  <LuLoader className="w-3.5 h-3.5 animate-spin" />
                  <span>Project in Progress</span>
                </span>
              )}

              {hasLive ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-(--border-color) text-(--text-primary) rounded-lg text-sm font-medium hover:bg-(--hover-bg) transition-colors flex items-center gap-2"
                >
                  <LuExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              ) : (
                <span className="px-3.5 py-2 bg-gray-500/10 text-gray-400 border border-gray-500/20 rounded-lg text-xs font-medium flex items-center gap-1.5">
                  <LuWifiOff className="w-3.5 h-3.5" />
                  <span>No Live Demo</span>
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2 border border-(--border-color) text-(--text-secondary) hover:text-(--text-primary) hover:bg-(--hover-bg) rounded-lg text-sm font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

const ProjectCard = ({ project, onOpenDetails }) => {
  const [flipped, setFlipped] = useState(false);

  const hasCode = project.codeUrl && project.codeUrl.trim() !== "";
  const hasLive = project.liveUrl && project.liveUrl.trim() !== "";
  const isPrivateRepo = project.privateRepo === true;

  return (
    <div
      className="relative h-112 md:h-120 cursor-pointer group"
      style={{ perspective: "1000px" }}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 bg-(--card-background) border border-(--border-color) rounded-xl overflow-hidden flex flex-col hover:border-(--accent) hover:shadow-xl transition-all duration-300"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Image */}
          <div className="w-full h-40 overflow-hidden shrink-0 relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Project type badge */}
            <span className="absolute top-2.5 right-2.5 text-xs font-semibold text-white bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10">
              {project.type}
            </span>
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 p-5 pb-3 gap-2">
            <div>
              <h3 className="text-base md:text-lg font-bold text-(--text-primary) line-clamp-2 leading-snug">
                {project.title}
              </h3>
              <p className="text-xs text-gray-500 font-medium mt-1">
                {project.duration}
              </p>
            </div>

            {/* Short Problem Summary */}
            <div>
              <h4 className="text-[11px] font-bold text-red-500 uppercase tracking-wider mb-1">
                Problem
              </h4>
              <p className="text-xs text-(--text-secondary) leading-relaxed line-clamp-3">
                {project.problem}
              </p>
            </div>

            {/* Tags & Action Bar */}
            <div className="mt-auto flex items-center justify-between gap-2">
              <div className="flex flex-wrap gap-1">
                {project.tags.slice(0, 3).map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 bg-(--bg-primary) text-(--accent) text-[11px] font-medium rounded border border-(--border-color)"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 2 && (
                  <span className="px-1.5 py-0.5 text-[11px] text-(--text-secondary)">
                    +{project.tags.length - 2}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Horizontal Line with Margin */}
          <div className="mx-5 border-t border-(--border-color)/60" />

          {/* Flip hint */}
          <div className="px-5 pt-2 pb-4 flex items-center justify-between text-[11px] text-(--text-secondary) opacity-60">
            <span className="flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Click card to flip
            </span>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 bg-(--card-background) border border-(--accent) rounded-xl flex flex-col p-5 pb-3 gap-3"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <h3 className="text-base md:text-lg font-bold text-(--text-primary) leading-snug">
            {project.title}
          </h3>

          {/* Duration + Role name tag */}
          <div className="flex items-center gap-2 flex-wrap">
            <p className="text-xs text-gray-500 font-medium">{project.duration}</p>
            {project.roleName && (
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-(--accent)/10 text-(--accent) border border-(--accent)/30">
                {project.roleName}
              </span>
            )}
          </div>

          {/* Short Solution / Approach Summary */}
          <div>
            <h4 className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">
              Solution & Approach
            </h4>
            <p className="text-xs text-(--text-secondary) leading-relaxed line-clamp-4">
              {project.solution}
            </p>
          </div>

          {/* All Tags */}
          <div className="flex flex-wrap gap-1 mt-auto">
            {project.tags.slice(0, 4).map((tag, i) => (
              <span
                key={i}
                className="px-2 py-0.5 bg-(--bg-primary) text-(--accent) text-[11px] font-medium rounded border border-(--border-color)"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="px-1.5 py-0.5 text-[11px] text-(--text-secondary)">
                +{project.tags.length - 4}
              </span>
            )}
          </div>

          {/* Horizontal Line with Margin */}
          <div className="border-t border-(--border-color)/60" />

          {/* Action Links & Details */}
          <div className="flex items-center justify-between gap-2 pt-0.5">
            <div className="flex gap-2">
              {/* Code button */}
              {hasCode ? (
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 rounded-md border border-(--border-color) text-(--text-secondary) hover:text-yellow-600 hover:bg-(--hover-bg) transition-all duration-200"
                  title="View code"
                >
                  <LuCode className="w-4 h-4" />
                </a>
              ) : isPrivateRepo ? (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 rounded-md border border-dashed border-purple-400 text-purple-400 cursor-default opacity-80"
                  title="Private — source code available upon request"
                >
                  <LuLock className="w-4 h-4" />
                </div>
              ) : (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 rounded-md border border-dashed border-amber-400 text-amber-400 cursor-default opacity-80"
                  title="Project in progress"
                >
                  <LuLoader className="w-4 h-4 animate-spin" />
                </div>
              )}

              {/* Live URL button */}
              {hasLive ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 rounded-md border border-(--border-color) text-(--text-secondary) hover:text-green-700 hover:bg-(--hover-bg) transition-all duration-200"
                  title="Visit project"
                >
                  <LuExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 rounded-md border border-dashed border-gray-400 text-gray-400 cursor-default opacity-80"
                  title="Live site not available"
                >
                  <LuWifiOff className="w-4 h-4" />
                </div>
              )}
            </div>

            {/* Details Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenDetails(project);
              }}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-(--primary) text-white hover:opacity-90 transition-opacity flex items-center gap-1"
            >
              <LuInfo className="w-3.5 h-3.5" />
              <span>Full Details</span>
            </button>
          </div>

          {/* Flip back hint */}
          <div className="pt-0.5 pb-1 text-[11px] text-(--text-secondary) opacity-60 flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Click to go back
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="py-12 sm:py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-14 gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-(--text-primary) flex items-center gap-3">
            <span className="text-(--primary)">03.</span> PROJECTS
          </h2>
          <div className="hidden sm:flex flex-1 h-px bg-linear-to-r from-(--accent) to-transparent"></div>
          <span className="hidden md:block text-sm text-(--text-secondary) uppercase tracking-widest whitespace-nowrap">
            // Case Studies
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id || index} 
              project={project} 
              onOpenDetails={(p) => setSelectedProject(p)} 
            />
          ))}
        </div>
      </div>

      {/* Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;