import { FlaskConical, GraduationCap, Rocket, Megaphone, Settings, Handshake, type LucideIcon } from "lucide-react";

/* Données du portfolio Jérémie Imago — source unique de vérité.
   Toute modification éditoriale se fait ici uniquement. */

/* ── Profil ── */
export const profile = {
  name: "Jérémie Imago",
  role: "Formulateur · Formateur · Entrepreneur",
  location: "Douala, Cameroun",
  email: "imagojeremie17@gmail.com",
  linkedin: "https://www.linkedin.com/in/imago-j%C3%A9r%C3%A9mie/",
  facebook: "https://www.facebook.com/imago.jeremie",
  tagline: "Concevoir des formules, transmettre des compétences, créer de la valeur.",
  bio: "Formulateur, formateur et entrepreneur spécialisé dans la cosmétique, les produits d'entretien et la transformation. À travers son expérience pratique, il développe des formulations, accompagne la mise en place de petites unités de production et forme des porteurs de projets aux techniques de fabrication. Délégué du GIC IFTA Cameroun, il s'intéresse particulièrement à la transmission des compétences pratiques, l'innovation et l'entrepreneuriat, avec une approche orientée vers des solutions concrètes, accessibles et adaptées aux réalités du terrain.",
};

/* ── Compétences ── */
export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Formulation",
    icon: FlaskConical,
    items: ["Formulation cosmétique", "Produits d'entretien", "Transformation agroalimentaire", "Conception de formules", "Amélioration produit", "Adaptation formules"],
  },
  {
    title: "Formation & Transmission",
    icon: GraduationCap,
    items: ["Création de formations pratiques", "Animation d'ateliers", "Accompagnement d'apprenants", "Gestion de centre de formation", "Suivi pédagogique"],
  },
  {
    title: "Entrepreneuriat",
    icon: Rocket,
    items: ["Lancement d'activités", "Développement de projets", "Structuration d'entreprises", "Conseil entrepreneurial", "Orientation de porteurs de projets"],
  },
  {
    title: "Marketing & Communication",
    icon: Megaphone,
    items: ["Communication digitale", "Création de contenus", "Campagnes publicitaires", "Promotion de produits/services", "Développement de produits"],
  },
  {
    title: "Gestion & Opérations",
    icon: Settings,
    items: ["Gestion opérationnelle", "Organisation d'équipes", "Gestion budgétaire", "Achats & approvisionnement", "Négociation fournisseurs"],
  },
  {
    title: "Commerce & Vente",
    icon: Handshake,
    items: ["Vente & négociation commerciale", "Gestion de la relation client", "Développement commercial"],
  },
];

/* ── Expériences professionnelles ── */
export type Experience = {
  id: string;
  role: string;
  company: string;
  type: string;
  period: string;
  description: string;
};

export const experiences: Experience[] = [
  {
    id: "die-losung",
    role: "Directeur",
    company: "DIE LOSÜNG ZENTRUM SARL",
    type: "Temps partiel",
    period: "2025 – 2026",
    description: "Direction du centre de formation professionnelle linguistique. Coordination des activités de formation, gestion administrative et accompagnement des apprenants.",
  },
  {
    id: "gic-ifta",
    role: "Délégué",
    company: "GIC IFTA Cameroun",
    type: "Temps partiel",
    period: "2024 – 2026",
    description: "Coordination des activités de recherche et développement, formation et entrepreneuriat. Participation au développement des projets et accompagnement des porteurs de projets.",
  },
  {
    id: "novablooms",
    role: "Formateur & Formulateur cosmétique",
    company: "NOVABLOOMS",
    type: "Temps plein",
    period: "2024 – 2025",
    description: "Formulation de produits cosmétiques, développement de procédés de fabrication et formation pratique sur la fabrication des produits.",
  },
  {
    id: "nadjma-bio",
    role: "Consultant",
    company: "NADJMA BIO",
    type: "Consultation",
    period: "2024 – 2026",
    description: "Accompagnement technique, amélioration des produits capillaires et conseil en communication.",
  },
  {
    id: "club-biotech",
    role: "Président du Club de Biotechnologie",
    company: "Université de Douala",
    type: "Associatif",
    period: "2020 – 2022",
    description: "Coordination des activités du club, organisation d'événements scientifiques et mobilisation des étudiants autour de la biotechnologie.",
  },
  {
    id: "saint-exupery",
    role: "Enseignant",
    company: "Collège Saint-Exupéry, Logbessou, Douala",
    type: "Enseignement",
    period: "2020 – 2022",
    description: "Enseignement des matières : SVT, Éducation à l'environnement, Hygiène & Biotechnologie.",
  },
];

/* ── Formations & Transmission ── */
export type Formation = {
  id: string;
  title: string;
  organisation: string;
  lieu: string;
  year: string;
  shortDescription: string;
  longDescription: string;
  localites?: string[];
};

export const formations: Formation[] = [
  {
    id: "tph-2025-2026",
    title: "Formations pratiques et accompagnement des étudiantes TPH",
    organisation: "Programme TPH",
    lieu: "Cameroun",
    year: "2025 – 2026",
    shortDescription: "Accompagnement pratique des étudiantes en Technologie et Pratiques Hygiéniques.",
    longDescription: "Formation et accompagnement pratique d'étudiantes dans le domaine des Technologie et Pratiques Hygiéniques. Sessions alliant théorie et pratique pour renforcer les compétences techniques et professionnelles.",
  },
  {
    id: "bankim-2e-edition",
    title: "2e édition — Formation en entrepreneuriat et transformation des matières premières locales",
    organisation: "Programme GIC IFTA",
    lieu: "Commune de Bankim, Mayo-Banyo, Adamaoua",
    year: "Février 2025",
    shortDescription: "Formation des communautés rurales à l'entrepreneuriat et à la transformation des ressources locales.",
    longDescription: "Deuxième édition du programme de formation en entrepreneuriat et transformation des matières premières locales dans la commune de Bankim, département du Mayo-Banyo, région de l'Adamaoua. Programme destiné à renforcer les capacités entrepreneuriales des bénéficiaires en valorisant les ressources disponibles localement.",
    localites: ["Nyambouya", "Yimbéré"],
  },
  {
    id: "bankim-3e-edition",
    title: "3e édition — Formation en entrepreneuriat et transformation des matières premières locales",
    organisation: "Programme GIC IFTA",
    lieu: "Commune de Bankim, Mayo-Banyo, Adamaoua",
    year: "Février 2026",
    shortDescription: "Troisième édition du programme d'autonomisation entrepreneuriale en milieu rural.",
    longDescription: "Troisième édition du programme de formation en entrepreneuriat et transformation des matières premières locales dans la commune de Bankim, département du Mayo-Banyo, région de l'Adamaoua. Poursuite de l'effort de transmission des savoir-faire pratiques pour permettre aux bénéficiaires de créer et développer des activités génératrices de revenus.",
    localites: ["Somie", "Songokong"],
  },
  {
    id: "novablooms-formation",
    title: "Formateur & Formulateur cosmétique",
    organisation: "NOVABLOOMS",
    lieu: "Cameroun",
    year: "2024 – 2025",
    shortDescription: "Formation pratique à la formulation et la fabrication de produits cosmétiques.",
    longDescription: "Animation de formations pratiques sur la formulation et la fabrication de produits cosmétiques au sein de NOVABLOOMS. Transmission des compétences techniques en développement de produits, procédés de fabrication et contrôle qualité.",
  },
  {
    id: "ifta-orphelinats",
    title: "Formations dans les orphelinats",
    organisation: "IFTA Academy & Un enfant, Un avenir",
    lieu: "Cameroun",
    year: "2023 – 2024",
    shortDescription: "Transmission de savoir-faire pratiques aux jeunes en orphelinat dans le cadre d'un programme d'insertion.",
    longDescription: "Formateur bénévole dans des orphelinats pour le compte de la communauté IFTA Academy et du projet « Un enfant, Un avenir ». Formation pratique aux techniques de fabrication permettant aux jeunes d'acquérir des compétences professionnalisantes.",
  },
  {
    id: "ascom-academy",
    title: "Fabrication des produits d'entretien",
    organisation: "ASCOM Academy",
    lieu: "Cameroun",
    year: "2022 – 2023",
    shortDescription: "Formation à la fabrication artisanale et semi-industrielle des produits d'entretien.",
    longDescription: "Formation pratique dédiée à la fabrication des produits d'entretien chez ASCOM Academy. Transmission des techniques de formulation, des normes de qualité et des procédures de production pour permettre aux apprenants de se lancer en autonomie.",
  },
];

/* ── Projets & Réalisations ── */
export type Projet = {
  id: string;
  title: string;
  category: string;
  year: string;
  shortDescription: string;
  longDescription: string;
  role: string;
  tags: string[];
};

export const projets: Projet[] = [
  {
    id: "savon-noir-charbon",
    title: "Savon noir au charbon activé",
    category: "Formulation & Production",
    year: "2023 – 2024",
    shortDescription: "Responsable projet et production d'un savon de toilette à base de charbon activé.",
    longDescription: "Conception, formulation et supervision de la production d'un savon noir de toilette enrichi au charbon activé. Projet mené de la conception de la formule jusqu'à la production en série, en assurant le respect des bonnes pratiques de fabrication, la qualité du produit fini et la mise en place d'une chaîne de production opérationnelle.",
    role: "Responsable projet & production",
    tags: ["Cosmétique", "Charbon activé", "Formulation", "Production"],
  },
  {
    id: "jus-naturels",
    title: "Production de jus naturels",
    category: "Transformation agroalimentaire",
    year: "2023",
    shortDescription: "Participation à la production de jus naturels multisaveurs, de la préparation au conditionnement.",
    longDescription: "Participation active à la production de jus naturels aux différentes saveurs. Prise en charge des étapes allant de la préparation des matières premières au conditionnement du produit fini, en veillant au respect des bonnes pratiques de production (BPP) et à la qualité constante du produit livré au marché.",
    role: "Producteur — préparation à conditionnement",
    tags: ["Agroalimentaire", "Jus naturels", "BPP", "Conditionnement"],
  },
  {
    id: "charbon-active",
    title: "Production de charbon activé",
    category: "Transformation",
    year: "2022 – 2023",
    shortDescription: "Participation au processus de production de charbon activé, de la matière première au produit final.",
    longDescription: "Implication dans le processus complet de production de charbon activé : préparation des matières premières, traitement thermique, activation et contrôle des différentes étapes de transformation jusqu'à l'obtention du produit final conforme aux spécifications. Expérience qui a nourri l'expertise en formulation de produits intégrant le charbon activé.",
    role: "Opérateur de production",
    tags: ["Charbon activé", "Transformation", "Matières premières"],
  },
];
