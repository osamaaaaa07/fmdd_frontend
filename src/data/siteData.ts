export const notifications = [
  { id: 1, text: "📢 Inscriptions ouvertes pour la formation en Développement Durable – Session Mai 2026", link: "#" },
  { id: 2, text: "🌍 Forum Annuel FMDD 2026 : Réservez votre place dès maintenant !", link: "#" },
  { id: 3, text: "📄 Nouveau rapport : L'état du développement durable au Maroc", link: "#" },
  { id: 4, text: "🎓 FMDD Academy lance un certificat en Économie Circulaire", link: "#" },
  { id: 5, text: "💼 50 nouvelles offres d'emploi dans le secteur vert disponibles sur FMDD Job", link: "#" },
];

export const services = [
  {
    id: 1,
    title: "FMDD Academy",
    tagline: "Former – Certifier – Élever vos compétences",
    description: "Des formations certifiantes en développement durable, RSE et économie verte dispensées par des experts reconnus.",
    icon: "🎓",
  },
  {
    id: 2,
    title: "FMDD Job",
    tagline: "Connecter les talents aux opportunités vertes",
    description: "Une plateforme dédiée aux offres d'emploi dans le secteur du développement durable au Maroc et en Afrique.",
    icon: "💼",
  },
  {
    id: 3,
    title: "FMDD Entrepreneuriat",
    tagline: "Accompagner – Financer – Lancer",
    description: "Un programme d'accompagnement pour les porteurs de projets innovants en développement durable.",
    icon: "🚀",
  },
];

export const keyFigures = [
  { id: 1, label: "Formations", value: 150, suffix: "+" },
  { id: 2, label: "Offres d'emploi", value: 300, suffix: "+" },
  { id: 3, label: "Projets entrepreneuriaux", value: 75, suffix: "" },
];

export const testimonials = [
  {
    id: 1,
    name: "Fatima Zahra El Idrissi",
    title: "Directrice RSE, OCP Group",
    quote: "Le FMDD a été un catalyseur pour notre stratégie de développement durable. Les formations proposées sont d'une qualité exceptionnelle.",
    avatar: "FZ",
  },
  {
    id: 2,
    name: "Karim Benchekroun",
    title: "Entrepreneur Social",
    quote: "Grâce au programme d'entrepreneuriat du FMDD, j'ai pu lancer mon projet d'agriculture durable et créer 15 emplois locaux.",
    avatar: "KB",
  },
  {
    id: 3,
    name: "Amina Tazi",
    title: "Consultante Environnement",
    quote: "La certification FMDD Academy a véritablement boosté ma carrière. Une approche pédagogique innovante et pratique.",
    avatar: "AT",
  },
  {
    id: 4,
    name: "Youssef Alaoui",
    title: "Chef de projet, UNDP Maroc",
    quote: "Le Forum Marocain est devenu un acteur incontournable du développement durable. Leur réseau et expertise sont remarquables.",
    avatar: "YA",
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "L'économie circulaire au Maroc : enjeux et perspectives",
    summary: "Découvrez comment le Maroc s'engage dans la transition vers une économie circulaire et les opportunités qui en découlent.",
    date: "15 Mars 2026",
    category: "Économie Verte",
  },
  {
    id: 2,
    title: "COP32 : Les engagements du Maroc pour le climat",
    summary: "Retour sur les engagements pris par le Maroc lors de la dernière Conférence des Parties et leur mise en œuvre.",
    date: "28 Février 2026",
    category: "Climat",
  },
  {
    id: 3,
    title: "Formation en RSE : pourquoi c'est essentiel en 2026",
    summary: "La responsabilité sociétale des entreprises n'est plus une option. Découvrez les compétences clés à acquérir.",
    date: "10 Février 2026",
    category: "Formation",
  },
];

export const galleryItems = [
  { id: 1, title: "Forum Annuel 2025", category: "Événement" },
  { id: 2, title: "Cérémonie de remise des certificats", category: "Academy" },
  { id: 3, title: "Salon de l'Entrepreneuriat Vert", category: "Entrepreneuriat" },
  { id: 4, title: "Conférence Climat & Innovation", category: "Conférence" },
  { id: 5, title: "Atelier RSE pour entreprises", category: "Formation" },
  { id: 6, title: "Rencontre des partenaires internationaux", category: "Partenariat" },
];

export const menuItems = [
  {
    label: "Qui nous sommes",
    children: ["Présentation", "Mot du Président", "Notre équipe"],
  },
  {
    label: "Nos solutions",
    children: ["Academy", "Job", "Entrepreneuriat"],
  },
  {
    label: "Événements",
    children: ["À venir", "Passés"],
  },
  {
    label: "À propos",
    children: ["Galerie", "Témoignages", "Blog", "FAQ", "Centre d'aide", "Presse", "Partenaires"],
  },
  {
    label: "Contactez-nous",
    children: [],
  },
];

export const chatbotResponses: Record<string, string> = {
  brochure: "📄 Vous pouvez télécharger notre brochure ici : [Télécharger la brochure FMDD](https://fmdd.ma/brochure.pdf)",
  contact: "📞 Contactez-nous au +212 5 22 00 00 00 ou par email à contact@fmdd.ma. Nos bureaux sont situés à Casablanca.",
  formation: "🎓 Nous proposons plus de 150 formations certifiantes en développement durable, RSE et économie verte. Visitez FMDD Academy pour en savoir plus !",
  event: "📅 Notre prochain événement est le Forum Annuel FMDD 2026, prévu en juin à Casablanca. Les inscriptions sont ouvertes !",
  evenement: "📅 Notre prochain événement est le Forum Annuel FMDD 2026, prévu en juin à Casablanca. Les inscriptions sont ouvertes !",
  emploi: "💼 Consultez nos 300+ offres d'emploi dans le secteur du développement durable sur FMDD Job.",
  job: "💼 Consultez nos 300+ offres d'emploi dans le secteur du développement durable sur FMDD Job.",
  bonjour: "Bonjour ! 👋 Bienvenue au Forum Marocain pour le Développement Durable. Comment puis-je vous aider ?",
  salut: "Salut ! 👋 Bienvenue au FMDD. Comment puis-je vous aider aujourd'hui ?",
  merci: "Avec plaisir ! N'hésitez pas si vous avez d'autres questions. 😊",
};
