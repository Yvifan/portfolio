import { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, ArrowLeft, Calendar, Users, Lightbulb } from 'lucide-react';
import { translations } from './translations';
import type { Lang } from './translations';
import { projectsData, skillsData } from './data';
import type { Project } from './data';

// Toggle FR / EN
const LangToggle = ({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) => (
  <button
    onClick={() => setLang(lang === "fr" ? "en" : "fr")}
    className="flex items-center bg-slate-800/80 border border-blue-700/40 rounded-full p-0.5 transition-all hover:border-blue-500/60"
    aria-label="Toggle language"
  >
    <span className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all duration-300 ${lang === "fr" ? "bg-blue-600 text-white shadow-md" : "text-blue-300/60"}`}>FR</span>
    <span className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all duration-300 ${lang === "en" ? "bg-blue-600 text-white shadow-md" : "text-blue-300/60"}`}>EN</span>
  </button>
);

// App
const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [lang, setLang] = useState<Lang>("fr");

  const t = translations[lang];
  const projects = projectsData[lang];
  const skills = skillsData[lang];

  const openProject = (project: Project) => {
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeProject = () => setSelectedProject(null);

  // Project detail view
  if (selectedProject) {
    // keeps the project data up-to-date with the current language in case of switch while viewing
    const project = projectsData[lang].find(p => p.id === selectedProject.id) ?? selectedProject;

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-sm z-50 border-b border-blue-500/20">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <button onClick={closeProject} className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition">
              <ArrowLeft size={24} />
              <span className="font-semibold">{t.projects.back}</span>
            </button>
            <LangToggle lang={lang} setLang={setLang} />
          </div>
        </nav>

        <div className="pt-24 pb-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 rounded-xl overflow-hidden shadow-2xl">
              <img src={project.image} alt={project.title} className="w-full h-96 object-cover" />
            </div>

            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

            <div className="flex flex-wrap gap-4 mb-6 text-sm text-blue-200">
              <div className="flex items-center gap-2"><Calendar size={18} className="text-blue-400" />{project.date}</div>
              <div className="flex items-center gap-2"><Users size={18} className="text-blue-400" />{project.team}</div>
            </div>

            {project.context && (
              <div className="mb-8 bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <p className="text-blue-100 leading-relaxed italic">{project.context}</p>
              </div>
            )}

            {project.problematic && (
              <div className="mb-8 bg-slate-800/50 p-6 rounded-lg border border-blue-500/30">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">{t.projects.problematic}</h3>
                <p className="text-blue-100 leading-relaxed text-lg font-medium">{project.problematic}</p>
              </div>
            )}

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">{t.projects.techUsed}</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-blue-900/50 px-4 py-2 rounded-lg text-sm border border-blue-700/30">{tech}</span>
                ))}
              </div>
            </div>

            <div className="mb-8 bg-slate-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">{t.projects.aboutProject}</h3>
              <p className="text-blue-100 leading-relaxed whitespace-pre-line">{project.fullDescription}</p>
            </div>

            {project.approach && (
              <div className="mb-8 bg-blue-900/30 p-6 rounded-lg border border-blue-500/20">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Lightbulb size={24} className="text-blue-400" />{t.projects.approach}
                </h3>
                <ul className="space-y-3">
                  {project.approach.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-blue-400 font-bold mt-1">{i + 1}.</span>
                      <span className="text-blue-100">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.keyResults && (
              <div className="mb-8 bg-gradient-to-r from-blue-900/40 to-slate-800/40 p-6 rounded-lg border border-blue-500/30">
                <h3 className="text-xl font-semibold mb-4">📊 {t.projects.keyResults}</h3>
                <div className="space-y-3">
                  {project.keyResults.map((result, i) => (
                    <div key={i} className="flex items-start gap-3 bg-slate-900/50 p-3 rounded-lg">
                      <span className="text-blue-400 text-xl">✓</span>
                      <span className="text-blue-100">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.screenshots && project.screenshots.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">{t.projects.visuals}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.screenshots.map((screenshot, i) => (
                    <div key={i} className="bg-slate-800/50 rounded-lg overflow-hidden border border-blue-500/20">
                      <img
                        src={screenshot.url}
                        alt={screenshot.caption}
                        className="w-full h-64 object-contain cursor-pointer hover:opacity-90"
                        onClick={() => setSelectedImage(screenshot.url)}
                      />
                      <p className="p-4 text-sm text-blue-200">{screenshot.caption}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedImage && (
              <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center" onClick={() => setSelectedImage(null)}>
                <img src={selectedImage} className="max-w-[90vw] max-h-[90vh] object-contain" onClick={(e) => e.stopPropagation()} />
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20">
                <h3 className="text-lg font-semibold mb-3">⚠️ {t.projects.challenges}</h3>
                <p className="text-blue-100 text-sm leading-relaxed whitespace-pre-line">{project.challenges}</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20">
                <h3 className="text-lg font-semibold mb-3">💡 {t.projects.learnings}</h3>
                <p className="text-blue-100 text-sm leading-relaxed whitespace-pre-line">{project.learnings}</p>
              </div>
            </div>

            {project.improvements && (
              <div className="mb-8 bg-slate-800/50 p-6 rounded-lg border border-blue-500/20">
                <h3 className="text-xl font-semibold mb-4">{t.projects.improvements}</h3>
                <ul className="space-y-2">
                  {project.improvements.map((imp, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1">→</span>
                      <span className="text-blue-100 text-sm">{imp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.impact && (
              <div className="mb-8 bg-gradient-to-r from-blue-600/20 to-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">{t.projects.impact}</h3>
                <p className="text-blue-100 leading-relaxed">{project.impact}</p>
              </div>
            )}

            <div className="flex flex-wrap gap-4">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition font-semibold shadow-lg">
                <Github size={20} />{t.projects.viewGithub}
              </a>
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 border-2 border-blue-500 hover:bg-blue-900/30 px-6 py-3 rounded-lg transition font-semibold">
                  <ExternalLink size={20} />{t.projects.viewSite}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main portfolio view
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-sm z-50 border-b border-blue-500/20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-pink-600 bg-clip-text text-transparent">
            Yvan Jiang
          </h1>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="hover:text-blue-400 transition">{t.nav.about}</a>
            <a href="#projects" className="hover:text-blue-400 transition">{t.nav.projects}</a>
            <a href="#skills" className="hover:text-blue-400 transition">{t.nav.skills}</a>
            <a href="#contact" className="hover:text-blue-400 transition">{t.nav.contact}</a>
            <LangToggle lang={lang} setLang={setLang} />
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-3">
            <LangToggle lang={lang} setLang={setLang} />
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-blue-500/20">
            <div className="flex flex-col p-4 gap-3">
              <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition">{t.nav.about}</a>
              <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition">{t.nav.projects}</a>
              <a href="#skills" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition">{t.nav.skills}</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition">{t.nav.contact}</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-pink-600 flex items-center justify-center text-4xl font-bold">
            Yvan
          </div>
          <h2 className="text-5xl font-bold mb-4">{t.hero.title}</h2>
          <p className="text-xl text-blue-200 mb-8">{t.hero.subtitle}</p>
          <div className="flex gap-4 justify-center">
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition">{t.hero.cta}</a>
            <a href="#projects" className="border border-blue-400 hover:bg-blue-900/30 px-6 py-3 rounded-lg font-semibold transition">{t.hero.cta2}</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">{t.about.heading}</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-blue-100 mb-4">{t.about.bio1}</p>
              <p className="text-blue-100">{t.about.bio2}</p>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-400 mb-2">{t.about.education}</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm">{t.about.edu1}</p>
                    <p className="text-sm text-blue-200">{t.about.edu1Date}</p>
                  </div>
                  <div className="border-t border-blue-500/20 pt-3">
                    <p className="text-sm">{t.about.edu2}</p>
                    <p className="text-sm text-blue-200">{t.about.edu2Date}</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-400 mb-2">{t.about.objective}</h4>
                <p className="text-sm">{t.about.objectiveDetail}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">{t.projects.heading}</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.map((project) => (
              <div key={project.id} onClick={() => openProject(project)}
                className="bg-slate-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition cursor-pointer">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                  <p className="text-blue-200 text-sm mb-4">{project.shortDescription}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-blue-900/50 px-3 py-1 rounded-full text-xs">{tech}</span>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition font-semibold">
                    {t.projects.learnMore} <ExternalLink size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">{t.skills.heading}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-slate-900/50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4 text-blue-400">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span key={i} className="bg-blue-900/30 border border-blue-500/30 px-4 py-2 rounded-lg text-sm">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">{t.contact.heading}</h3>
          <p className="text-blue-200 mb-8">{t.contact.subtitle}</p>
          <div className="flex justify-center gap-6">
            <a href="mailto:yvanjiangyi@gmail.com" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition">
              <Mail size={20} /> Email
            </a>
            <a href="https://github.com/Yvifan" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg transition">
              <Github size={20} /> GitHub
            </a>
            <a href="https://linkedin.com/in/yvan-jiang" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg transition">
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 text-center text-blue-200 border-t border-blue-500/20">
        <p>{t.footer}</p>
      </footer>
    </div>
  );
};

export default Portfolio;