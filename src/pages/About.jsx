import { useState } from "react";
import { 
  LuUser,
  LuLightbulb,
  LuBookOpen,
  LuImage,
  LuGraduationCap,
  LuTrophy,
  LuFileCheck
} from "react-icons/lu";
import { FaAward, FaRocket } from "react-icons/fa6";
import { TbTools } from "react-icons/tb";
import { PiStrategyBold } from "react-icons/pi";
import { BiErrorAlt, BiBookBookmark } from "react-icons/bi";
import { certificatesData, educationData, achievementsData, socialLinks } from "../data/about";
import CertificateCard from "../components/CertificateCard";
import Gallery from "../components/Gallery";
import profileImage from "../assets/DoGiaHuy.png";


const About = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const tabs = [
    { id: "overview", label: "Overview", icon: LuUser },
    { id: "education", label: "Education", icon: LuGraduationCap },
    { id: "achievements", label: "Achievements", icon: LuTrophy },
    { id: "certificates", label: "Certificates", icon: LuFileCheck },
    { id: "skills", label: "Skills & Mindset", icon: LuLightbulb },
    { id: "personal", label: "Personal", icon: LuBookOpen },
    { id: "gallery", label: "My Gallery", icon: LuImage },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-14 gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-(--text-primary) flex items-center gap-3">
            <span className="text-(--primary)">01.</span> ABOUT ME
          </h2>
          <div className="hidden sm:flex flex-1 h-px bg-linear-to-r from-(--accent) to-transparent"></div>
          <span className="hidden md:block text-sm text-(--text-secondary) uppercase tracking-widest whitespace-nowrap">
            // Who I Am
          </span>
        </div>

        {/* Tabs */}
        <div className="border-b border-(--border-color) mb-8">
          <div className="flex space-x-3 sm:space-x-4 md:space-x-10 overflow-x-auto tabs-scroll">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col sm:flex-col md:flex-row items-center sm:space-x-0 md:space-x-2 md:gap-0 gap-1 pb-4 border-b-2 px-2 sm:px-3 md:px-0 ${
                    activeTab === tab.id
                      ? "border-(--accent) text-(--accent)"
                      : "border-transparent text-gray-400 hover:text-(--accent)"
                  } transition-colors`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="hidden sm:block text-xs sm:text-sm font-medium">
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          {/* Overview */}
          {activeTab === "overview" && (
            <div className="text-(--text-secondary) space-y-4 grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8">
              <div className="col-span-1">
                <img
                  src={profileImage}
                  alt="Gia Huy"
                  className="md:w-full md:h-auto h-100 rounded-lg border border-gray-600 mb-3 md:mb-0"
                />
              </div>
              <div className="col-span-2">
                <h2 className="text-2xl md:text-3xl font-semibold text-(--text-primary) whitespace-nowrap mb-2">
                  Hello, I'm Do Gia Huy.
                </h2>
                <h2 className="text-1xl md:text-2xl font-semibold text-(--text-secondary) whitespace-nowrap mb-5">
                  AI Student at{" "}
                  <span className="text-red-500">Swinburne University</span>
                </h2>
                <p className="text-(--text-secondary) text-sm md:text-base">
                  I'm a passionate AI student based in Ho Chi Minh City,
                  Vietnam. With a strong foundation in machine learning and data
                  analysis, I am dedicated to building intelligent systems that
                  bridge the gap between complex data and human understanding.
                </p>

                <div className="flex gap-4 my-6">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-(--accent) text-(--accent) transition-all duration-300 ${link.color}`}
                        title={link.label}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>

                <div className="flex-1 h-px my-8 bg-(--border-color)"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6">
                  <div className="mb-4">
                    <h3 className="text-base text-(--text-primary) mb-2 flex items-center">
                      <FaAward className="inline mr-2 text-(--accent)" />{" "}
                      CURRENT STATUS
                    </h3>
                    <p className="text-(--text-primary) mb-2">
                      AI Student at Swinburne University
                    </p>
                    <p className="text-(--text-secondary) text-xs md:text-sm">
                      Currently in my third year, focusing on building a strong
                      foundation in artificial intelligence while applying
                      concepts through coursework and personal projects.
                    </p>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-base text-(--text-primary) mb-2 flex items-center">
                      <FaRocket className="inline mr-2 text-(--accent)" />{" "}
                      CARREER GOALS
                    </h3>
                    <p className="text-(--text-primary) mb-2">
                      Seeking AI-Focused Roles
                    </p>
                    <p className="text-(--text-secondary) text-xs md:text-sm">
                      Looking for internship or entry-level opportunities where
                      I can learn from real-world systems, grow my technical
                      skills, and contribute to meaningful AI-driven solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Education */}
          {activeTab === "education" && (
            <div className="text-(--text-secondary) space-y-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-(--text-primary) whitespace-nowrap mb-8">
                Education Timeline
              </h2>

              {educationData.map((edu, index) => (
                <div key={index} className="relative pl-8 pb-8">
                  <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-(--accent) border-2 border-(--bg-primary)"></div>
                  {index < educationData.length - 1 && (
                    <div className="absolute left-1.5 top-6 bottom-0 w-1 bg-(--accent)"></div>
                  )}

                  <div className="bg-(--card-background) border border-(--border-color) rounded-lg p-6 hover:border-(--accent) transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-(--text-primary)">
                        {edu.degree}
                      </h3>
                      <span className="text-(--accent) font-medium text-sm">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-lg text-(--text-secondary) mb-2 flex items-center">
                      <LuGraduationCap className="mr-2 text-(--accent)" />
                      {edu.school}
                    </p>
                    <p className="text-(--text-secondary) text-sm leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Achievements */}
          {activeTab === "achievements" && (
            <div className="text-(--text-secondary) space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-(--text-primary) whitespace-nowrap mb-8">
                My Achievements
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievementsData.map((achievement, index) => (
                  <div
                    key={index}
                    className="group bg-(--card-background) border border-(--border-color) rounded-lg p-5 hover:border-(--accent) hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-3">
                      <LuTrophy className="w-6 h-6 text-yellow-600 shrink-0" />
                      <p className="text-(--text-primary) font-medium group-hover:text-(--accent) transition-colors">
                        {achievement}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certificates */}
          {activeTab === "certificates" && (
            <div className="text-(--text-secondary) space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-(--text-primary) whitespace-nowrap mb-8">
                Professional Certificates
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {certificatesData.map((cert, index) => (
                  <CertificateCard key={index} cert={cert} />
                ))}
              </div>
            </div>
          )}

          {/* Skills & Mindset */}
          {activeTab === "skills" && (
            <div className="text-(--text-secondary) space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-(--text-primary) whitespace-nowrap mb-2">
                How I Think & Work?
              </h2>
              <p className="mt-4 mb-7">
                I value understanding over memorization. When I learn something
                new, I prefer to implement it from scratch first, even if it's
                slower - because that's where the real learning happens.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-(--card-background) border border-(--border-color) rounded-lg p-5 hover:border-(--accent) transition-colors">
                  <h5 className="mb-3 text-lg flex items-center text-(--text-primary) font-semibold">
                    <BiErrorAlt className="w-6 h-6 mr-2 text-(--accent) pb-1" />
                    Problem-Solving Approach
                  </h5>
                  <p className="text-sm">
                    I decompose complex problems into testable prototypes,
                    iterating based on data and treating setbacks as insights
                    rather than failures.
                  </p>
                </div>
                <div className="bg-(--card-background) border border-(--border-color) rounded-lg p-5 hover:border-(--accent) transition-colors">
                  <h5 className="mb-3 text-lg flex items-center text-(--text-primary) font-semibold">
                    <BiBookBookmark className="w-6 h-6 mr-2 text-(--accent) pb-1" />
                    Learning Philosophy
                  </h5>
                  <p className="text-sm">
                    I learn through hands-on builds and testing, using a Notion-based second brain to document insights and analyze trade-offs.
                  </p>
                </div>
                <div className="bg-(--card-background) border border-(--border-color) rounded-lg p-5 hover:border-(--accent) transition-colors">
                  <h5 className="mb-3 text-lg flex items-center text-(--text-primary) font-semibold">
                    <PiStrategyBold className="w-6 h-6 mr-2 text-(--accent) pb-1" />
                    Data Strategy
                  </h5>
                  <p className="text-sm">
                    Treating raw data as the primary source of truth.
                    Implementing robust pipelines for data integrity and
                    insight.
                  </p>
                </div>
                <div className="bg-(--card-background) border border-(--border-color) rounded-lg p-5 hover:border-(--accent) transition-colors">
                  <h5 className="mb-3 text-lg flex items-center text-(--text-primary) font-semibold">
                    <TbTools className="w-6 h-6 mr-2 text-(--accent) pb-1" />
                    Technical Toolkit
                  </h5>
                  <p className="text-sm">
                    I prioritize solving problems effectively over collecting
                    tools, using Python (PyTorch, scikit-learn, NumPy), Git, and
                    cloud platforms as means to that end.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Personal Hobbies */}
          {activeTab === "personal" && (
            <div className="text-(--text-secondary) space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-(--text-primary) whitespace-nowrap mb-6">
                Beyond the Code.
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-(--text-primary) mb-3">
                    Life in Ho Chi Minh City
                  </h3>
                  <p>
                    I'm based in Ho Chi Minh City, Vietnam - a dynamic and
                    fast-moving environment that constantly pushes me to adapt
                    and improve. Growing up here shaped my resilience,
                    creativity, and ability to think practically when solving
                    problems in both technology and life.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-(--text-primary) mb-3">
                    Passions & Interests
                  </h3>
                  <ul className="space-y-3 ml-4">
                    <li className="flex items-start">
                      <span className="text-(--accent) mr-3 mt-1">▪</span>
                      <span>
                        <strong>Football:</strong> I enjoy watching high-level
                        football matches, especially games featuring Cristiano
                        Ronaldo. I admire his discipline, mindset, and
                        relentless drive for excellence, qualities I try to
                        apply in my own learning journey.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-(--accent) mr-3 mt-1">▪</span>
                      <span>
                        <strong>Music:</strong> Music is my daily companion
                        while coding or relaxing. I often listen to Justin
                        Bieber and Sơn Tùng M-TP - their evolution, creativity,
                        and global influence inspire me to continuously improve
                        and stay original.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-(--accent) mr-3 mt-1">▪</span>
                      <span>
                        <strong>Gaming & Strategy:</strong> I enjoy games that
                        require strategic thinking and decision-making. They
                        sharpen my ability to analyze systems, predict outcomes,
                        and optimize solutions.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-(--accent) mr-3 mt-1">▪</span>
                      <span>
                        <strong>Reading & Self-Development:</strong> I regularly
                        read about technology, productivity, and mindset. I'm
                        particularly interested in topics around AI, complex
                        systems, and decision-making.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-(--text-primary) mb-3">
                    Core Values
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-(--card-background) border-l-2 border-(--accent) pl-4 py-3 rounded">
                      <h4 className="font-semibold text-(--text-primary) mb-1">
                        Discipline
                      </h4>
                      <p className="text-sm">
                        Inspired by elite athletes, I believe consistency and
                        discipline compound into long-term success.
                      </p>
                    </div>
                    <div className="bg-(--card-background) border-l-2 border-(--accent) pl-4 py-3 rounded">
                      <h4 className="font-semibold text-(--text-primary) mb-1">
                        Continuous Learning
                      </h4>
                      <p className="text-sm">
                        Technology evolves fast, I make sure I evolve with it
                        through constant practice and study.
                      </p>
                    </div>
                    <div className="bg-(--card-background) border-l-2 border-(--accent) pl-4 py-3 rounded">
                      <h4 className="font-semibold text-(--text-primary) mb-1">
                        Impact
                      </h4>
                      <p className="text-sm">
                        I aim to build systems that genuinely help people and
                        solve meaningful problems.
                      </p>
                    </div>
                    <div className="bg-(--card-background) border-l-2 border-(--accent) pl-4 py-3 rounded">
                      <h4 className="font-semibold text-(--text-primary) mb-1">
                        Growth Mindset
                      </h4>
                      <p className="text-sm">
                        Every challenge is an opportunity to improve - whether
                        in coding, academics, or personal development.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-(--card-background) border border-(--border-color) rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-(--text-primary) mb-3">
                    Fun Facts
                  </h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="text-(--accent) mr-3">✦</span>
                      <span>
                        I rarely miss big matches when Cristiano Ronaldo plays,
                        match analysis is my version of “studying game
                        strategy.”
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-(--accent) mr-3">✦</span>
                      <span>
                        My coding sessions often come with a Justin Bieber or
                        Sơn Tùng M-TP playlist in the background.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-(--accent) mr-3">✦</span>
                      <span>
                        I like connecting concepts from football strategy and
                        music production to software architecture thinking.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* My Gallery */}
          {activeTab === "gallery" && (
            <div className="text-(--text-secondary) space-y-4">
              <Gallery />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
