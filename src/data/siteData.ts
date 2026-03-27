export const notifications = [
  { id: 1, text: "📢 Inscriptions ouvertes – Formation Développement Durable, Session Mai 2026", link: "#" },
  { id: 2, text: "🎓 +50 nouveaux cours disponibles sur FMDD Academy", link: "#" },
  { id: 3, text: "💼 87% de taux d'insertion professionnelle pour nos diplômés", link: "#" },
  { id: 4, text: "🌍 15 000+ jeunes accompagnés à travers tout le Maroc", link: "#" },
];

export const services = [
  {
    id: 1,
    title: "FMDD Academy",
    tagline: "Formation professionnelle",
    description: "Développez vos compétences avec nos formations certifiantes en développement durable, compétences numériques et soft skills.",
    features: ["Certifications reconnues par l'État", "Formateurs experts marocains", "Apprentissage en ligne flexible", "Attestations et diplômes officiels"],
    link: "/academy",
  },
  {
    id: 2,
    title: "FMDD Job",
    tagline: "Emploi et carrière",
    description: "Accédez aux meilleures opportunités d'emploi au Maroc. Notre plateforme met en relation les jeunes talents avec les entreprises.",
    features: ["Matching intelligent candidat-emploi", "Offres dans toutes les régions", "Accompagnement personnalisé", "Partenariat avec 150+ entreprises"],
    link: "/insertion",
  },
  {
    id: 3,
    title: "FMDD Entrepreneuriat",
    tagline: "Création d'entreprise",
    description: "Concrétisez vos projets entrepreneuriaux au Maroc. Bénéficiez d'un accompagnement complet : incubation, mentorat, financement.",
    features: ["Programme d'incubation complet", "Accès au financement", "Mentorat par des entrepreneurs", "Networking et événements"],
    link: "/projets",
  },
];

export const keyFigures = [
  { id: 1, label: "Jeunes accompagnés", value: 15000, suffix: "+", description: "Bénéficiaires de nos programmes" },
  { id: 2, label: "Formations certifiantes", value: 200, suffix: "+", description: "Disponibles sur notre plateforme" },
  { id: 3, label: "Taux d'insertion", value: 87, suffix: "%", description: "De nos diplômés en emploi" },
  { id: 4, label: "Entreprises partenaires", value: 150, suffix: "+", description: "Qui recrutent nos talents" },
];

export const missionPillars = [
  "Orientation", "Formation", "Accompagnement", "Financement", "Workshop", "Coaching", "Durabilité",
];

export const testimonials = [
  {
    id: 1,
    name: "Fatima Zahra El Amrani",
    title: "Développeuse Web • TechCorp Maroc",
    quote: "Grâce à FMDD Academy, j'ai pu me former au développement web et décrocher mon premier emploi en seulement 6 mois.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Youssef Benali",
    title: "Entrepreneur • GreenTech Solutions",
    quote: "Le programme 'Lancer un Projet' m'a permis de transformer mon idée en startup. Aujourd'hui, nous employons 12 personnes.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Amina Tazi",
    title: "Chargée de Marketing • Digital Agency",
    quote: "Insertion Pro m'a mise en relation avec des recruteurs qui cherchaient exactement mon profil. Très efficace !",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
];

export const partners = ["ME", "UM5", "OFPPT", "CGEM", "AWB", "OCP", "IAM", "RAM"];

export const menuItems = [
  { label: "Accueil", children: [], href: "#" },
  {
    label: "Nos Solutions",
    children: ["FMDD Academy", "FMDD Job", "FMDD Entrepreneuriat"],
    href: "#services",
  },
  {
    label: "Contenu",
    children: ["Blog", "Témoignages", "Galerie", "FAQ"],
    href: "#",
  },
  { label: "Qui sommes-nous", children: [], href: "#about" },
  { label: "Nous contacter", children: [], href: "#contact" },
];

export const chatbotResponses: Record<string, string> = {
  brochure: "📄 Vous pouvez télécharger notre brochure ici : [Télécharger la brochure FMDD](https://fmdd.ma/brochure.pdf)",
  contact: "📞 Contactez-nous au +212 645 466 188 ou par email à contact@fmdd.ma",
  formation: "🎓 Nous proposons plus de 200 formations certifiantes. Visitez FMDD Academy pour en savoir plus !",
  academy: "🎓 FMDD Academy propose des formations certifiantes en développement durable, compétences numériques et soft skills.",
  event: "📅 Consultez nos événements à venir sur la page Événements du site.",
  evenement: "📅 Consultez nos événements à venir sur la page Événements du site.",
  emploi: "💼 Consultez nos offres d'emploi sur FMDD Job. 87% de taux d'insertion !",
  job: "💼 FMDD Job met en relation les jeunes talents avec plus de 150 entreprises partenaires.",
  entrepreneuriat: "🚀 Le programme FMDD Entrepreneuriat offre incubation, mentorat et financement pour vos projets.",
  inscription: "✅ Inscrivez-vous gratuitement sur fmdd.ma/register pour accéder à tous nos services.",
  bonjour: "Bonjour ! 👋 Bienvenue au FMDD. Comment puis-je vous aider ?",
  salut: "Salut ! 👋 Comment puis-je vous aider aujourd'hui ?",
  merci: "Avec plaisir ! N'hésitez pas si vous avez d'autres questions. 😊",
};
