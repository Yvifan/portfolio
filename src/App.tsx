import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, ArrowLeft, Calendar, Users, Lightbulb } from 'lucide-react';

import projet1Image from './assets/projects/projet1/projet1.png';
import projet1Screenshot1 from './assets/projects/projet1/trajectoire_reelle_vs_simulee.png';
import projet1Screenshot2 from './assets/projects/projet1/comparaison_energies.png';
import projet1Screenshot3 from './assets/projects/projet1/influence_vitesse_initiale.png';

import projet2Image from './assets/projects/projet2/projet2.png';

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      id: 1,
      title: "Étude cinématique du saut à la perche",
      shortDescription: 
        "Modélisation physique et informatique du mouvement d'un perchiste, avec analyse vidéo (Tracker) pour valider le modèle théorique. Étude des transferts d'énergie et de la flexion de la perche.",
      fullDescription: 
        "Ce projet s’inscrit dans le cadre d’un TIPE et est né d’un intérêt pour l’optimisation des performances sportives par l’analyse physique et numérique du mouvement. \n\n" + 
        "La proximité géographique avec l’un des plus grands centres européens de saut à la perche, situé à Clermont-Ferrand, a renforcé l’intérêt pour cette discipline exigeante. Ce centre nous a fourni les données expérimentales du saut à 6,05m de haut du perchiste Chris Nilsen lors du perche Elite Tour de Rouen (2022). \n\n" +
        "Le saut à la perche est une épreuve historique de l’athlétisme, présente dès les Jeux Olympiques d’Athènes en 1896. Pour améliorer la performance, il est essentiel de comprendre précisément le mouvement du perchiste, les transferts d’énergie en jeu et l’influence des paramètres mécaniques du système athlète–perche.",
      technologies: ["Python", "NumPy", "Matplotlib", "Analyse vidéo (Tracker)", "Modélisation énergétique", "Méthode d'Euler"],
      githubLink: "https://github.com/Yvifan/saut-perche-modelisation",
      image: projet1Image,
      date: "Septembre 2023",
      team: "Équipe de 2 personnes",
      context: 
        "Né d'un intérêt pour l'optimisation sportive par la physique et de la proximité avec le pôle européen de saut à la perche de Clermont-Ferrand.",
      problematic: 
        "Quels paramètres physiques et mécaniques optimisent la performance au saut à la perche ?",
      approach: [
        "Modélisation énergétique complète : Ec (cinétique) + Epp (potentielle) + Epf (élastique)",
        "Simulation numérique en Python avec résolution par méthode d'Euler",
        "Validation expérimentale via analyse vidéo (Tracker) d'un saut à 6,05m",
        "Étude paramétrique : influence de la vitesse initiale et du module d'Young"
      ],
      keyResults: [
          "Vitesse initiale = paramètre #1 de performance (impact direct sur l'énergie disponible)",
          "Module d'Young de la perche : détermine l'efficacité du stockage et restitution d'énergie",
          "Validation réussie : cohérence qualitative entre modèle théorique et trajectoire réelle",
          "Énergie élastique maximale mesurée : ~2740 J lors de la flexion maximale de la perche"
      ],
      screenshots: [
        { 
          url: projet1Screenshot1, 
          caption: "Comparaison entre trajectoire simulée et trajectoire réelle (Chris Nilsen, 6,05m)" 
        },
        { 
          url: projet1Screenshot2, 
          caption: "Évolution des énergies cinétique, potentielle et élastique au cours du saut" 
        },
        { 
          url: projet1Screenshot3, 
          caption: "Impact de la vitesse initiale sur la hauteur maximale atteinte" 
        }
      ],
      challenges: 
        "Simplification d'un système biomécanique complexe (hypothèse d'élasticité linéaire, négligence des rotations). Extraction précise de données depuis l'analyse vidéo. Validation avec des hypothèses simplificatrices assumées et documentées.",
      learnings: 
        "Modélisation physique avancée (mécanique, énergétique), résolution numérique d'équations différentielles, validation théorie/expérience, analyse de données vidéo, identification et documentation des limites d'un modèle scientifique.",
      improvements: [
        "Modélisation non-linéaire de l'élasticité de la perche",
        "Intégration des forces dissipatives (frottements, pertes internes)",
        "Méthode numérique plus précise (Runge-Kutta au lieu d'Euler)",
        "Prise en compte des rotations du perchiste"
      ],
      impact: 
        "Ce projet démontre ma capacité à modéliser un système physique réel complexe, à implémenter une solution numérique, et à valider scientifiquement les résultats par confrontation avec l'expérience."
    },

    {
      id: 2,
      title: "Application mobile de simulation de remboursements santé",
      shortDescription: 
        "Conception et développement d’une application mobile permettant de simuler précisément les remboursements de soins de santé en France (Sécurité sociale + mutuelle), afin d’améliorer la compréhension du reste à charge pour les patients.",
      fullDescription: 
        "Ce projet est né d’un constat simple : de nombreux patients renoncent à des soins ou rencontrent des difficultés financières faute de compréhension claire des mécanismes de remboursement du système de santé français. Entre la Base de Remboursement de la Sécurité Sociale (BRSS), les taux de remboursement, les dépassements d’honoraires et les contrats de mutuelle, l’information est souvent complexe et peu lisible.\n\n" +
        "L’objectif de cette application est de fournir un outil pédagogique et pratique permettant à un utilisateur de simuler, avant une consultation ou un acte médical, le montant réellement remboursé et le reste à charge final. Le projet a été mené en équipe de 6 personnes, avec une approche orientée produit, données et conformité réglementaire (RGPD).",
      technologies: ["Flutter (cross-platform mobile)", "Supabase (Backend as a Service)", "PostgreSQL / SQL (modélisation des remboursements)", "Authentification sécurisée", "Conformité RGPD"],
      githubLink: "https://github.com/Pirodax/cap_projet_app",
      image: projet2Image,
      date: "Septembre 2025",
      team: "Équipe de 6 personnes",
      context: 
        "Projet orienté e-santé visant à améliorer l’accès à l’information et la compréhension des remboursements de soins dans le système de santé français.",
      problematic: 
        "Comment rendre compréhensible et accessible le calcul des remboursements de soins de santé afin de réduire le reste à charge imprévu et le renoncement aux soins ?",
      approach: [
        "Analyse fonctionnelle du système de remboursement français (BRSS, taux SS, mutuelles, dépassements)",
        "Conception d’un modèle de données représentant actes médicaux, professionnels de santé et contrats de mutuelle",
        "Implémentation d’un moteur de calcul des remboursements",
        "Développement mobile Flutter avec interface orientée utilisateur non expert",
        "Sécurisation des données et respect des principes RGPD (minimisation, consentement, anonymisation)"
      ],
      keyResults: [
        "Simulation fiable du remboursement Sécurité sociale + mutuelle",
        "Calcul automatique du reste à charge pour l’utilisateur",
        "Interface mobile claire et pédagogique, adaptée à un public non technique",
        "Backend scalable permettant l’ajout futur de nouveaux actes ou contrats"
      ],
      features: [
        "Simulation de remboursement personnalisée selon l’acte médical",
        "Gestion des profils utilisateurs et de leurs contrats de mutuelle",
        "Historique des simulations",
        "Authentification sécurisée",
        "Architecture backend prête pour montée en charge"
      ],
      challenges: 
        "Complexité réglementaire du système de remboursement français. Modélisation correcte des règles métier. Gestion sécurisée de données sensibles et respect du RGPD dans un contexte applicatif.",
      learnings: 
        "Conception d’un système d’information orienté métier, modélisation de données complexes, développement mobile cross-platform, collaboration en équipe, prise en compte des contraintes réglementaires (RGPD, données de santé).",
      improvements: [
        "Intégration d’un comparateur de contrats de mutuelle",
        "Connexion à des référentiels officiels (actes CCAM)"
      ],
      impact: 
        "Ce projet démontre ma capacité à concevoir un produit logiciel utile, orienté utilisateur et données, en tenant compte à la fois des contraintes techniques, métier et réglementaires du domaine de la e-santé."
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "Angular", "TypeScript", "JavaScript", "Tailwind"] },
    { category: "Backend", items: ["Node.js", "Python", "SQL"] },
    { category: "Data & Analyse", items: ["Pandas", "NumPy"] },
    { category: "Outils", items: ["Git", "Linux", "Figma", "Jira"] },
    { category: "Langues", items: ["Français C1", "Anglais B2 (TOEIC 940)", "Espagnol B1", "Chinois B1"] },
    { category: "Soft Skills", items: ["Travail d'équipe", "Communication", "Gestion de projet", "Adaptable","Curieux", "Rigoureux", "Persévérant", "Bienveillant", "Attentif"] }
  ];

  const openProject = (project) => {
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  if (selectedProject) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-sm z-50 border-b border-blue-500/20">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4">
            <button 
              onClick={closeProject}
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
            >
              <ArrowLeft size={24} />
              <span className="font-semibold">Retour</span>
            </button>
          </div>
        </nav>

        <div className="pt-24 pb-20 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Image principale */}
            <div className="mb-8 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Titre */}
            <h1 className="text-4xl font-bold mb-4">{selectedProject.title}</h1>
            
            {/* Date et équipe */}
            <div className="flex flex-wrap gap-4 mb-6 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-blue-400" />
                {selectedProject.date}
              </div>
              <div className="flex items-center gap-2">
                <Users size={18} className="text-blue-400" />
                {selectedProject.team}
              </div>
            </div>

            {/* Contexte */}
            {selectedProject.context && (
              <div className="mb-8 bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <p className="text-blue-100 leading-relaxed italic">{selectedProject.context}</p>
              </div>
            )}

            {/* Problématique */}
            {selectedProject.problematic && (
              <div className="mb-8 bg-slate-800/50 p-6 rounded-lg border border-blue-500/30">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Problématique</h3>
                <p className="text-blue-100 leading-relaxed text-lg font-medium">{selectedProject.problematic}</p>
              </div>
            )}

            {/* Technologies */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Technologies utilisées</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, i) => (
                  <span key={i} className="bg-blue-900/50 px-4 py-2 rounded-lg text-sm border border-blue-700/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Description complète */}
            <div className="mb-8 bg-slate-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">À propos du projet</h3>
              <p className="text-blue-100 leading-relaxed whitespace-pre-line">{selectedProject.fullDescription}</p>
            </div>

            {/* Approche scientifique (remplace ou complète features) */}
            {selectedProject.approach && (
              <div className="mb-8 bg-blue-900/30 p-6 rounded-lg border border-blue-500/20">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Lightbulb size={24} className="text-blue-400" />
                  Approche méthodologique
                </h3>
                <ul className="space-y-3">
                  {selectedProject.approach.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-blue-400 font-bold mt-1">{i + 1}.</span>
                      <span className="text-blue-100">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Résultats clés */}
            {selectedProject.keyResults && (
              <div className="mb-8 bg-gradient-to-r from-blue-900/40 to-slate-800/40 p-6 rounded-lg border border-blue-500/30">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  📊 Résultats clés
                </h3>
                <div className="space-y-3">
                  {selectedProject.keyResults.map((result, i) => (
                    <div key={i} className="flex items-start gap-3 bg-slate-900/50 p-3 rounded-lg">
                      <span className="text-blue-400 text-xl">✓</span>
                      <span className="text-blue-100">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Screenshots/Visuels */}
            {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Visuels du projet</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {selectedProject.screenshots.map((screenshot, i) => (
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
                  <div
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
                    onClick={() => setSelectedImage(null)}
                  >
                    <img
                      src={selectedImage}
                      className="max-w-[90vw] max-h-[90vh] object-contain"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
            )}

            {/* Défis et Apprentissages */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  ⚠️ Défis rencontrés
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed whitespace-pre-line">{selectedProject.challenges}</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  💡 Apprentissages
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed whitespace-pre-line">{selectedProject.learnings}</p>
              </div>
            </div>

            {/* Perspectives d'amélioration */}
            {selectedProject.improvements && (
              <div className="mb-8 bg-slate-800/50 p-6 rounded-lg border border-blue-500/20">
                <h3 className="text-xl font-semibold mb-4">Perspectives d'amélioration</h3>
                <ul className="space-y-2">
                  {selectedProject.improvements.map((improvement, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1">→</span>
                      <span className="text-blue-100 text-sm">{improvement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Impact/Message clé */}
            {selectedProject.impact && (
              <div className="mb-8 bg-gradient-to-r from-blue-600/20 to-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Impact & Compétences démontrées</h3>
                <p className="text-blue-100 leading-relaxed">{selectedProject.impact}</p>
              </div>
            )}

            {/* Boutons d'action */}
            <div className="flex flex-wrap gap-4">
              <a 
                href={selectedProject.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition font-semibold shadow-lg"
              >
                <Github size={20} />
                Voir sur GitHub
              </a>
              {selectedProject.liveLink && (
                <a 
                  href={selectedProject.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border-2 border-blue-500 hover:bg-blue-900/30 px-6 py-3 rounded-lg transition font-semibold"
                >
                  <ExternalLink size={20} />
                  Voir le site
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-sm z-50 border-b border-blue-500/20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-pink-600 bg-clip-text text-transparent">
            Yvan Jiang
          </h1>
          
          {/* Menu desktop */}
          <div className="hidden md:flex gap-6">
            <a href="#about" className="hover:text-blue-400 transition">À propos</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projets</a>
            <a href="#skills" className="hover:text-blue-400 transition">Compétences</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>

          {/* Menu mobile */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu mobile déroulant */}
        {menuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-blue-500/20">
            <div className="flex flex-col p-4 gap-3">
              <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition">À propos</a>
              <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition">Projets</a>
              <a href="#skills" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition">Compétences</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-pink-600 flex items-center justify-center text-4xl font-bold">
            Yvan
          </div>
          <h2 className="text-5xl font-bold mb-4">
            Étudiant à ESIEA
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Bonjour !
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition">
              Me contacter
            </a>
            <a href="#projects" className="border border-blue-400 hover:bg-blue-900/30 px-6 py-3 rounded-lg font-semibold transition">
              Voir mes projets
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">À propos de moi</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-blue-100 mb-4">
                Étudiant ingénieur en 4ème année dans le numérique, j'ai une forte appétence pour les données et le développement logiciel, doté d’un esprit analytique, de rigueur et d’une grande capacité d’adaptation.
                Je suis motivé à contribuer à des projets data mobilisant manipulation, analyse et structuration de données, dans un environnement technique exigeant.
              </p>
              <p className="text-blue-100">
                J'aime relever des défis techniques et créer des solutions qui ont un impact réel.
                Mon objectif est de rejoindre une équipe dynamique où je pourrai continuer à apprendre et contribuer à des projets innovants.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-400 mb-2">Formation</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm">Esiea - École d'ingénieurs en informatique et technologies du numérique</p>
                    <p className="text-sm text-blue-200">2024 - aujourd'hui</p>
                  </div>

                  <div className="border-t border-blue-500/20 pt-3">
                    <p className="text-sm">CPGE PC</p>
                    <p className="text-sm text-blue-200">2021 - 2024</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-400 mb-2">Objectif</h4>
                <p className="text-sm">Data Scientist / Data Engineer / Développeur Full Stack / Frontend Developer / Backend Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">Mes Projets</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.map((project) => (
              <div 
                key={project.id} 
                onClick={() => openProject(project)}
                className="bg-slate-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition cursor-pointer"
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                  <p className="text-blue-200 text-sm mb-4">{project.shortDescription}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-blue-900/50 px-3 py-1 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition font-semibold">
                    En savoir plus <ExternalLink size={16} />
                  </div>    
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">Compétences</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-slate-900/50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4 text-blue-400">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span key={i} className="bg-blue-900/30 border border-blue-500/30 px-4 py-2 rounded-lg text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Contact</h3>
          <p className="text-blue-200 mb-8">
            N'hésitez pas à me contacter !
          </p>
          <div className="flex justify-center gap-6">
            <a 
              href="mailto:yvanjiangyi@gmail.com" 
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition"
            >
              <Mail size={20} /> Email
            </a>
            <a 
              href="https://github.com/Yvifan" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg transition"
            >
              <Github size={20} /> GitHub
            </a>
            <a 
              href="https://linkedin.com/in/yvan-jiang" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg transition"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 text-center text-blue-200 border-t border-blue-500/20">
        <p>© 2025 Jiang. Tous droits réservés.</p>
      </footer> 
    </div>
  );
};

export default Portfolio;