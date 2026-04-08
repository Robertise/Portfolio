import { LuBrain, LuCode, LuWrench, LuGlobe } from "react-icons/lu";

export const skillCategories = [
  {
    icon: <LuBrain className="w-6 h-6 text-green-500" />,
    title: "Artificial Intelligence",
    subtitle: "ML & LLM Systems",
    proficient: ["Python", "LSTM", "GRU"],
    learning: ["TensorFlow", "PyTorch", "Retrieval-Augmented Generation (RAG)", "LangChain", "Search Algorithms"],
  },
  {
    icon: <LuCode className="w-6 h-6 text-purple-500" />,
    title: "Languages",
    subtitle: "Programming",
    proficient: ["Python", "Kotlin", "SQL"],
    learning: ["C#", "JavaScript"],
  },
  {
    icon: <LuGlobe className="w-6 h-6 text-blue-400" />,
    title: "Web Development & System Architecture",
    subtitle: "Frontend & Backend",
    proficient: ["HTML", "CSS", "React", "Tailwind CSS"],
    learning: ["Next.js", "Vue.js", "Node.js", "PostgreSQL", "System Architecture & Design"],
  },
  {
    icon: <LuWrench className="w-6 h-6 text-yellow-500" />,
    title: "Development Tools",
    subtitle: "Workflow & Data",
    proficient: ["Git", "GitHub", "REST APIs"],
    learning: [ "Jupyter Notebook", "Database Design"],
  },
];