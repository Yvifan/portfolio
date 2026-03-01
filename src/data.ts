import projet1Image from './assets/projects/projet1/projet1.png';
import projet1Screenshot1 from './assets/projects/projet1/trajectoire_reelle_vs_simulee.png';
import projet1Screenshot2 from './assets/projects/projet1/comparaison_energies.png';
import projet1Screenshot3 from './assets/projects/projet1/influence_vitesse_initiale.png';
import projet2Image from './assets/projects/projet2/projet2.png';

export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
  image: string;
  date: string;
  team: string;
  context?: string;
  problematic?: string;
  approach?: string[];
  keyResults?: string[];
  features?: string[];
  screenshots?: { url: string; caption: string }[];
  challenges: string;
  learnings: string;
  improvements?: string[];
  impact?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export const projectsData: Record<"fr" | "en", Project[]> = {
  fr: [
    {
      id: 1,
      title: "Étude cinématique du saut à la perche",
      shortDescription:
        "Modélisation physique et informatique du mouvement d'un perchiste, avec analyse vidéo (Tracker) pour valider le modèle théorique. Étude des transferts d'énergie et de la flexion de la perche.",
      fullDescription:
        "Ce projet s'inscrit dans le cadre d'un TIPE et est né d'un intérêt pour l'optimisation des performances sportives par l'analyse physique et numérique du mouvement. \n\n" +
        "La proximité géographique avec l'un des plus grands centres européens de saut à la perche, situé à Clermont-Ferrand, a renforcé l'intérêt pour cette discipline exigeante. Ce centre nous a fourni les données expérimentales du saut à 6,05m de haut du perchiste Chris Nilsen lors du perche Elite Tour de Rouen (2022). \n\n" +
        "Le saut à la perche est une épreuve historique de l'athlétisme, présente dès les Jeux Olympiques d'Athènes en 1896. Pour améliorer la performance, il est essentiel de comprendre précisément le mouvement du perchiste, les transferts d'énergie en jeu et l'influence des paramètres mécaniques du système athlète–perche.",
      technologies: ["Python", "NumPy", "Matplotlib", "Analyse vidéo (Tracker)", "Modélisation énergétique", "Méthode d'Euler"],
      githubLink: "https://github.com/Yvifan/saut-perche-modelisation",
      image: projet1Image,
      date: "Septembre 2023",
      team: "Équipe de 2 personnes",
      context: "Né d'un intérêt pour l'optimisation sportive par la physique et de la proximité avec le pôle européen de saut à la perche de Clermont-Ferrand.",
      problematic: "Quels paramètres physiques et mécaniques optimisent la performance au saut à la perche ?",
      approach: [
        "Modélisation énergétique complète : Ec (cinétique) + Epp (potentielle) + Epf (élastique)",
        "Simulation numérique en Python avec résolution par méthode d'Euler",
        "Validation expérimentale via analyse vidéo (Tracker) d'un saut à 6,05m",
        "Étude paramétrique : influence de la vitesse initiale et du module d'Young",
      ],
      keyResults: [
        "Vitesse initiale = paramètre #1 de performance (impact direct sur l'énergie disponible)",
        "Module d'Young de la perche : détermine l'efficacité du stockage et restitution d'énergie",
        "Validation réussie : cohérence qualitative entre modèle théorique et trajectoire réelle",
        "Énergie élastique maximale mesurée : ~2740 J lors de la flexion maximale de la perche",
      ],
      screenshots: [
        { url: projet1Screenshot1, caption: "Comparaison entre trajectoire simulée et trajectoire réelle (Chris Nilsen, 6,05m)" },
        { url: projet1Screenshot2, caption: "Évolution des énergies cinétique, potentielle et élastique au cours du saut" },
        { url: projet1Screenshot3, caption: "Impact de la vitesse initiale sur la hauteur maximale atteinte" },
      ],
      challenges: "Simplification d'un système biomécanique complexe (hypothèse d'élasticité linéaire, négligence des rotations). Extraction précise de données depuis l'analyse vidéo. Validation avec des hypothèses simplificatrices assumées et documentées.",
      learnings: "Modélisation physique avancée (mécanique, énergétique), résolution numérique d'équations différentielles, validation théorie/expérience, analyse de données vidéo, identification et documentation des limites d'un modèle scientifique.",
      improvements: [
        "Modélisation non-linéaire de l'élasticité de la perche",
        "Intégration des forces dissipatives (frottements, pertes internes)",
        "Méthode numérique plus précise (Runge-Kutta au lieu d'Euler)",
        "Prise en compte des rotations du perchiste",
      ],
      impact: "Ce projet démontre ma capacité à modéliser un système physique réel complexe, à implémenter une solution numérique, et à valider scientifiquement les résultats par confrontation avec l'expérience.",
    },
    {
      id: 2,
      title: "Application mobile de simulation de remboursements santé",
      shortDescription:
        "Conception et développement d'une application mobile permettant de simuler précisément les remboursements de soins de santé en France (Sécurité sociale + mutuelle), afin d'améliorer la compréhension du reste à charge pour les patients.",
      fullDescription:
        "Ce projet est né d'un constat simple : de nombreux patients renoncent à des soins ou rencontrent des difficultés financières faute de compréhension claire des mécanismes de remboursement du système de santé français. Entre la Base de Remboursement de la Sécurité Sociale (BRSS), les taux de remboursement, les dépassements d'honoraires et les contrats de mutuelle, l'information est souvent complexe et peu lisible.\n\n" +
        "L'objectif de cette application est de fournir un outil pédagogique et pratique permettant à un utilisateur de simuler, avant une consultation ou un acte médical, le montant réellement remboursé et le reste à charge final. Le projet a été mené en équipe de 6 personnes, avec une approche orientée produit, données et conformité réglementaire (RGPD).",
      technologies: ["Flutter (cross-platform mobile)", "Supabase (Backend as a Service)", "PostgreSQL / SQL (modélisation des remboursements)", "Authentification sécurisée", "Conformité RGPD"],
      githubLink: "https://github.com/Pirodax/cap_projet_app",
      image: projet2Image,
      date: "Septembre 2025",
      team: "Équipe de 6 personnes",
      context: "Projet orienté e-santé visant à améliorer l'accès à l'information et la compréhension des remboursements de soins dans le système de santé français.",
      problematic: "Comment rendre compréhensible et accessible le calcul des remboursements de soins de santé afin de réduire le reste à charge imprévu et le renoncement aux soins ?",
      approach: [
        "Analyse fonctionnelle du système de remboursement français (BRSS, taux SS, mutuelles, dépassements)",
        "Conception d'un modèle de données représentant actes médicaux, professionnels de santé et contrats de mutuelle",
        "Implémentation d'un moteur de calcul des remboursements",
        "Développement mobile Flutter avec interface orientée utilisateur non expert",
        "Sécurisation des données et respect des principes RGPD (minimisation, consentement, anonymisation)",
      ],
      keyResults: [
        "Simulation fiable du remboursement Sécurité sociale + mutuelle",
        "Calcul automatique du reste à charge pour l'utilisateur",
        "Interface mobile claire et pédagogique, adaptée à un public non technique",
        "Backend scalable permettant l'ajout futur de nouveaux actes ou contrats",
      ],
      features: [
        "Simulation de remboursement personnalisée selon l'acte médical",
        "Gestion des profils utilisateurs et de leurs contrats de mutuelle",
        "Historique des simulations",
        "Authentification sécurisée",
        "Architecture backend prête pour montée en charge",
      ],
      challenges: "Complexité réglementaire du système de remboursement français. Modélisation correcte des règles métier. Gestion sécurisée de données sensibles et respect du RGPD dans un contexte applicatif.",
      learnings: "Conception d'un système d'information orienté métier, modélisation de données complexes, développement mobile cross-platform, collaboration en équipe, prise en compte des contraintes réglementaires (RGPD, données de santé).",
      improvements: [
        "Intégration d'un comparateur de contrats de mutuelle",
        "Connexion à des référentiels officiels (actes CCAM)",
      ],
      impact: "Ce projet démontre ma capacité à concevoir un produit logiciel utile, orienté utilisateur et données, en tenant compte à la fois des contraintes techniques, métier et réglementaires du domaine de la e-santé.",
    },
  ],
  en: [
    {
      id: 1,
      title: "Kinematic Study of Pole Vaulting",
      shortDescription:
        "Physical and computational modeling of a pole vaulter's movement, with video analysis (Tracker) to validate the theoretical model. Study of energy transfers and pole flexion.",
      fullDescription:
        "This project was carried out as part of a TIPE research initiative, driven by an interest in optimizing athletic performance through physical and numerical motion analysis.\n\n" +
        "The geographical proximity to one of Europe's largest pole vaulting centers, located in Clermont-Ferrand, strengthened the interest in this demanding discipline. The center provided experimental data from Chris Nilsen's 6.05m jump during the Rouen Perche Elite Tour (2022).\n\n" +
        "Pole vaulting is a historic track and field event, present since the Athens Olympics in 1896. To improve performance, it is essential to precisely understand the vaulter's movement, the energy transfers involved, and the influence of the mechanical parameters of the athlete–pole system.",
      technologies: ["Python", "NumPy", "Matplotlib", "Video Analysis (Tracker)", "Energy Modeling", "Euler's Method"],
      githubLink: "https://github.com/Yvifan/saut-perche-modelisation",
      image: projet1Image,
      date: "September 2023",
      team: "Team of 2",
      context: "Born from an interest in sports optimization through physics and the proximity to the European pole vault center in Clermont-Ferrand.",
      problematic: "Which physical and mechanical parameters optimize pole vault performance?",
      approach: [
        "Complete energy modeling: Ek (kinetic) + Epp (potential) + Epf (elastic)",
        "Numerical simulation in Python using Euler's method",
        "Experimental validation via video analysis (Tracker) of a 6.05m jump",
        "Parametric study: influence of initial speed and Young's modulus",
      ],
      keyResults: [
        "Initial speed = #1 performance parameter (direct impact on available energy)",
        "Pole's Young's modulus: determines energy storage and release efficiency",
        "Successful validation: qualitative consistency between theoretical model and real trajectory",
        "Maximum elastic energy measured: ~2740 J during peak pole flexion",
      ],
      screenshots: [
        { url: projet1Screenshot1, caption: "Comparison between simulated and real trajectory (Chris Nilsen, 6.05m)" },
        { url: projet1Screenshot2, caption: "Evolution of kinetic, potential, and elastic energies during the jump" },
        { url: projet1Screenshot3, caption: "Impact of initial speed on maximum height reached" },
      ],
      challenges: "Simplifying a complex biomechanical system (linear elasticity assumption, neglecting rotations). Precise data extraction from video analysis. Validation with documented simplifying assumptions.",
      learnings: "Advanced physics modeling (mechanics, energetics), numerical solving of differential equations, theory/experiment validation, video data analysis, identifying and documenting scientific model limitations.",
      improvements: [
        "Non-linear modeling of pole elasticity",
        "Integration of dissipative forces (friction, internal losses)",
        "More precise numerical method (Runge-Kutta instead of Euler)",
        "Accounting for vaulter rotations",
      ],
      impact: "This project demonstrates my ability to model a complex real-world physical system, implement a numerical solution, and scientifically validate results through comparison with experiment.",
    },
    {
      id: 2,
      title: "Health Insurance Reimbursement Simulation Mobile App",
      shortDescription:
        "Design and development of a mobile application for accurately simulating healthcare reimbursements in France (Social Security + supplemental insurance), to improve patients' understanding of out-of-pocket costs.",
      fullDescription:
        "This project was born from a simple observation: many patients forgo care or face financial difficulties due to a lack of clear understanding of the French healthcare reimbursement system. Between the Social Security Reimbursement Base (BRSS), reimbursement rates, excess fees, and supplemental insurance contracts, the information is often complex and hard to read.\n\n" +
        "The goal of this application is to provide a practical and educational tool allowing users to simulate, before a consultation or medical procedure, the actual amount reimbursed and the final out-of-pocket cost. The project was carried out by a team of 6, with a product-oriented approach focused on data and regulatory compliance (GDPR).",
      technologies: ["Flutter (cross-platform mobile)", "Supabase (Backend as a Service)", "PostgreSQL / SQL (reimbursement modeling)", "Secure Authentication", "GDPR Compliance"],
      githubLink: "https://github.com/Pirodax/cap_projet_app",
      image: projet2Image,
      date: "September 2025",
      team: "Team of 6",
      context: "E-health project aimed at improving access to information and understanding of healthcare reimbursements in the French health system.",
      problematic: "How to make healthcare reimbursement calculations understandable and accessible in order to reduce unexpected out-of-pocket costs and care avoidance?",
      approach: [
        "Functional analysis of the French reimbursement system (BRSS, SS rates, supplemental insurance, excess fees)",
        "Design of a data model representing medical procedures, healthcare professionals, and insurance contracts",
        "Implementation of a reimbursement calculation engine",
        "Flutter mobile development with a UI designed for non-expert users",
        "Data security and GDPR compliance (minimization, consent, anonymization)",
      ],
      keyResults: [
        "Reliable simulation of Social Security + supplemental insurance reimbursement",
        "Automatic calculation of the user's out-of-pocket cost",
        "Clear and educational mobile interface, adapted for a non-technical audience",
        "Scalable backend allowing future addition of new procedures or contracts",
      ],
      features: [
        "Personalized reimbursement simulation based on medical procedure",
        "User profile and insurance contract management",
        "Simulation history",
        "Secure authentication",
        "Backend architecture ready for scaling",
      ],
      challenges: "Regulatory complexity of the French reimbursement system. Correct modeling of business rules. Secure handling of sensitive data and GDPR compliance in an application context.",
      learnings: "Business-oriented information system design, complex data modeling, cross-platform mobile development, team collaboration, accounting for regulatory constraints (GDPR, health data).",
      improvements: [
        "Integration of a supplemental insurance contract comparator",
        "Connection to official reference databases (CCAM procedures)",
      ],
      impact: "This project demonstrates my ability to design a useful, user- and data-oriented software product, while accounting for technical, business, and regulatory constraints in the e-health domain.",
    },
  ],
};

export const skillsData: Record<"fr" | "en", SkillGroup[]> = {
  fr: [
    { category: "Développement Frontend", items: ["React", "Angular", "TypeScript", "JavaScript", "Tailwind CSS"] },
    { category: "Développement Backend", items: ["Node.js", "Python", "SQL"] },
    { category: "Data & Analyse", items: ["Pandas", "NumPy", "BigQuery (Certification GCP Data Analyst – en cours)", "Looker (Certification GCP Data Analyst – en cours)"] },
    { category: "Outils", items: ["Git", "Linux", "Figma", "Jira"] },
    { category: "Langues", items: ["Français : natif", "Anglais : C1 (TOEIC : 940, Duolingo English test : 125)", "Espagnol : B1"] },
    { category: "Soft Skills", items: ["Travail d'équipe", "Communication", "Gestion de projet", "Adaptable", "Curieux", "Rigoureux", "Persévérant", "Bienveillant", "Attentif"] },
  ],
  en: [
    { category: "Frontend Development", items: ["React", "Angular", "TypeScript", "JavaScript", "Tailwind CSS"] },
    { category: "Backend Development", items: ["Node.js", "Python", "SQL"] },
    { category: "Data & Analytics", items: ["Pandas", "NumPy", "BigQuery (GCP Data Analyst Certification – in progress)", "Looker (GCP Data Analyst Certification – in progress)"] },
    { category: "Tools", items: ["Git", "Linux", "Figma", "Jira"] },
    { category: "Languages", items: ["French: Native", "English: Fluent (TOEIC: 940, Duolingo English test: 125)", "Spanish: Conversational"] },
    { category: "Soft Skills", items: ["Teamwork", "Communication", "Project Management", "Adaptable", "Curious", "Rigorous", "Persistent", "Caring", "Attentive"] },
  ],
};