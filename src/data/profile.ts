// ============================================================
// ADITYA SINGH – Portfolio Data (Single Source of Truth)
// All content sourced from resume, GitHub, and LinkedIn.
// Nothing fabricated. If it's not here, it doesn't exist.
// ============================================================

export const personalInfo = {
  name: "Aditya Singh",
  firstName: "Aditya",
  lastName: "Singh",
  title: "Full-Stack Developer • Backend Engineer • AI/ML Enthusiast",
  headline: "Full-Stack Developer\nBuilding Systems That Actually Ship.",
  subtitle: "Backend engineering, scalable web systems, and applied AI/ML.",
  status: "Open to Opportunities",
  email: "adityaa07singh@gmail.com",
  portfolio: "vairagyaaa.com",
  github: "https://github.com/Adi96singh",
  linkedin: "https://www.linkedin.com/in/aditya08singh/",
  githubUsername: "Adi96singh",
  profileImage: "/images/profile.png",
  resumePath: "/resume/Aditya_Singh_Resume.pdf",
};

export interface Skill {
  name: string;
  category: string;
  description: string;
}

export const skillCategories = [
  {
    id: "languages",
    label: "Languages",
    color: "#8b5cf6",
    skills: [
      { name: "Java", description: "OOP, data structures, algorithms — the bread and butter" },
      { name: "Python", description: "ML pipelines, scripting, and making things work fast" },
      { name: "JavaScript", description: "Full-stack Swiss Army knife since day one" },
      { name: "TypeScript", description: "JavaScript, but with adult supervision" },
    ],
  },
  {
    id: "backend",
    label: "Backend / Development",
    color: "#3b82f6",
    skills: [
      { name: "Node.js", description: "Runtime of choice for backend services" },
      { name: "Express.js", description: "REST APIs, middleware chains, route handling" },
      { name: "REST APIs", description: "Designing endpoints that developers actually enjoy using" },
      { name: "MVC", description: "Clean architecture — Controller → Service → Repository" },
      { name: "HTML5", description: "Semantic markup that screen readers don't hate" },
      { name: "CSS3", description: "Layouts, animations, and occasional existential crises" },
    ],
  },
  {
    id: "aiml",
    label: "AI / ML",
    color: "#a855f7",
    skills: [
      { name: "Agentic AI", description: "LLM-powered agents that browse, reason, and act" },
      { name: "LLM Workflows", description: "Prompt engineering, chaining, RAG pipelines" },
      { name: "RAG", description: "Retrieval-Augmented Generation for grounded AI responses" },
      { name: "Scikit-learn", description: "Classical ML — the reliable workhorse" },
      { name: "TF-IDF", description: "Text vectorization for NLP classification tasks" },
      { name: "Logistic Regression", description: "When you need a baseline that actually works" },
      { name: "SVM", description: "Support Vector Machines for classification boundaries" },
      { name: "Random Forest", description: "Ensemble learning — many trees, one verdict" },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    color: "#06b6d4",
    skills: [
      { name: "MySQL", description: "Relational data, transactions, indexing done right" },
      { name: "PostgreSQL", description: "Advanced SQL, concurrency control, ACID compliance" },
      { name: "MongoDB", description: "Document store for flexible schemas" },
      { name: "Sequelize ORM", description: "Type-safe database operations without raw SQL headaches" },
    ],
  },
  {
    id: "tools",
    label: "Tools & Platforms",
    color: "#10b981",
    skills: [
      { name: "Git", description: "Version control — because 'final_v3_REAL_final.js' is not a strategy" },
      { name: "AWS", description: "Cloud infrastructure and deployment" },
      { name: "Postman", description: "API testing before things go wrong in production" },
      { name: "Render", description: "Deployment platform for web services" },
      { name: "Redis", description: "In-memory caching for sub-millisecond responses" },
      { name: "BullMQ", description: "Job queues and background task processing" },
      { name: "Socket.IO", description: "Real-time bidirectional event-based communication" },
    ],
  },
];

export const experience = [
  {
    id: "cfi-global",
    company: "CFI Global Pvt. Ltd.",
    role: "Software Development Intern",
    location: "Mohali, Punjab",
    period: "March 2025 – May 2025",
    description: "Built a full-stack multi-level parking management system from scratch. The kind of project where 'it works on my machine' isn't an acceptable deployment strategy.",
    highlights: [
      "Developed a Node.js and Express.js web application for a multi-level parking system managing 1,000 slots",
      "Implemented vehicle entry/exit, slot allocation, pricing, payments, and role-based access control",
      "Implemented PostgreSQL transactions, indexing, and concurrency-safe slot allocation",
      "Prevented duplicate slot assignments during simultaneous requests",
      "Integrated AI-based number plate recognition and parking-slot detection",
      "Connected AI functionality with backend APIs and WebSockets",
      "Enabled real-time occupancy updates and vehicle-to-slot tracking",
    ],
    tech: ["Node.js", "Express.js", "PostgreSQL", "WebSockets", "AI/ML", "REST APIs"],
    visualizationType: "parking" as const,
  },
];

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem?: string;
  solution?: string;
  tech: string[];
  features: string[];
  github: string;
  liveDemo?: string;
  category: "featured" | "secondary";
  icon: string;
  architecture?: {
    layers: string[];
    sideServices?: string[];
  };
}

export const projects: Project[] = [
  {
    id: "solveit",
    title: "SolveIt",
    tagline: "Smart Complaint Resolution Platform",
    description: "A production-grade complaint management system with AI-powered classification, automated escalation, and real-time updates. Because manually routing complaints is so 2019.",
    problem: "Complaint systems drown in noise — duplicates, mis-prioritized tickets, and staff drowning in manual triage.",
    solution: "AI-driven classification + SLA-based escalation + real-time notifications. Complaints get routed, prioritized, and resolved without human bottlenecks.",
    tech: ["Node.js", "Express.js", "MySQL", "Sequelize", "Redis", "BullMQ", "Gemini API", "Socket.IO", "JWT"],
    features: [
      "MVC backend with clean Controller → Service → Repository layering",
      "JWT authentication with email-based password recovery",
      "AI-powered complaint classification and priority estimation",
      "Duplicate detection using Gemini API",
      "SLA-based escalation with automated staff assignment",
      "Redis caching for frequently accessed data",
      "BullMQ workers for background job processing",
      "Socket.IO for real-time complaint status updates",
      "Audit logging and centralized error handling",
      "Cron-based SLA monitoring and escalation triggers",
    ],
    github: "https://github.com/Adi96singh/SolveIt",
    category: "featured",
    icon: "shield",
    architecture: {
      layers: ["REST API", "Controllers", "Services", "Repositories", "MySQL"],
      sideServices: ["Gemini API", "Redis Cache", "BullMQ Workers", "Socket.IO", "Cron Jobs"],
    },
  },
  {
    id: "expensia",
    title: "Expensia",
    tagline: "Your Pocket Friend",
    description: "A smart expense tracking platform that uses AI to predict categories, generate financial insights, and serve as a conversational money assistant. Your wallet's new best friend.",
    problem: "People track expenses in spreadsheets or not at all. Neither approach scales.",
    solution: "Automated categorization, AI-driven insights, and a conversational assistant that understands your spending patterns.",
    tech: ["Node.js", "Express.js", "MySQL", "Sequelize", "JWT", "Gemini AI", "Cashfree"],
    features: [
      "MVC architecture with Route → Controller → Service → Repository layering",
      "Transactional MySQL writes with Sequelize ORM",
      "JWT/bcrypt authentication and authorization",
      "Cashfree payment gateway integration",
      "Gemini AI for expense category prediction",
      "AI-generated financial insights and spending analysis",
      "Conversational AI assistant for financial queries",
    ],
    github: "https://github.com/Adi96singh/Expensia--Your-Pocket-friend",
    liveDemo: "https://expensia-your-pocket-friend.vercel.app",
    category: "featured",
    icon: "wallet",
    architecture: {
      layers: ["Frontend", "REST API", "Controllers", "Services", "Repositories", "MySQL"],
      sideServices: ["Gemini AI", "Cashfree Gateway", "JWT Auth"],
    },
  },
  {
    id: "fake-review",
    title: "Fake Review Identifier",
    tagline: "NLP-Powered Review Authenticity Detector",
    description: "An ML pipeline that sniffs out fake product reviews using NLP and serves predictions through a Flask API + browser extension. Trust, but verify.",
    problem: "Fake reviews pollute e-commerce platforms. Consumers can't distinguish genuine feedback from planted ones.",
    solution: "TF-IDF vectorization + classifier ensemble (Logistic Regression, SVM) + browser extension for real-time detection.",
    tech: ["Python", "Scikit-learn", "TF-IDF", "Logistic Regression", "SVM", "Flask", "REST API"],
    features: [
      "Text preprocessing and TF-IDF vectorization pipeline",
      "Multiple classifier comparison (Logistic Regression, SVM)",
      "Flask REST API for prediction serving",
      "Browser extension for real-time review analysis",
      "Model evaluation with precision, recall, F1 metrics",
    ],
    github: "https://github.com/Adi96singh/FakeReviewIdentifier",
    category: "featured",
    icon: "search",
    architecture: {
      layers: ["Review Text", "Preprocessing", "TF-IDF Vectorization", "Classifier", "Prediction"],
      sideServices: ["Flask API", "Browser Extension"],
    },
  },
  {
    id: "churn-prediction",
    title: "Customer Churn Prediction",
    tagline: "ML Pipeline for Retention Analytics",
    description: "End-to-end machine learning pipeline comparing classical ML models and neural networks for predicting customer churn. Because losing customers shouldn't be a surprise.",
    problem: "Businesses lose customers without understanding why or when it's about to happen.",
    solution: "Feature engineering (VIF, PCA) + model comparison (Random Forest, XGBoost, SVM, KNN, Neural Network) for accurate churn prediction.",
    tech: ["Python", "Scikit-learn", "TensorFlow", "Keras", "Pandas", "Jupyter"],
    features: [
      "Comprehensive feature analysis with VIF and PCA",
      "Classical ML models: Random Forest, XGBoost, SVM, KNN",
      "Deep learning with TensorFlow/Keras neural network",
      "Model evaluation and comparison metrics",
      "Data visualization and exploratory analysis",
    ],
    github: "https://github.com/Adi96singh/Customer_Churn_prediction",
    category: "featured",
    icon: "trendingDown",
    architecture: {
      layers: ["Raw Data", "Feature Engineering", "VIF / PCA", "Model Training", "Evaluation"],
      sideServices: ["Random Forest", "XGBoost", "SVM", "KNN", "Neural Network"],
    },
  },
  {
    id: "llm-browser-agent",
    title: "LLM-Powered Browser Agent",
    tagline: "AI Agent That Browses the Web",
    description: "An autonomous browser agent powered by large language models that can navigate, interact with, and extract information from web pages.",
    tech: ["Python", "LLM", "Agentic AI", "Browser Automation"],
    features: [
      "LLM-driven web navigation and interaction",
      "Autonomous task completion on web pages",
      "Natural language instruction processing",
    ],
    github: "https://github.com/Adi96singh/LLM-Powered-Browser-Agent",
    category: "secondary",
    icon: "globe",
  },
  {
    id: "team-task-manager",
    title: "TeamTaskManager",
    tagline: "Collaborative Task Management",
    description: "A team task management tool for organizing, assigning, and tracking tasks with real-time collaboration.",
    tech: ["JavaScript", "Node.js"],
    features: [
      "Real-time task collaboration",
      "Task assignment and deadline management",
      "Progress monitoring and team coordination",
    ],
    github: "https://github.com/Adi96singh/TeamTaskManager",
    liveDemo: "https://team-task-manager-seven-xi.vercel.app",
    category: "secondary",
    icon: "users",
  },
  {
    id: "attendance-management",
    title: "Attendance Management",
    tagline: "Automated Attendance System",
    description: "A web-based attendance management system for tracking and managing attendance records.",
    tech: ["JavaScript", "Node.js"],
    features: [
      "Attendance tracking and record management",
      "Reporting and analytics",
    ],
    github: "https://github.com/Adi96singh/Attendance-management",
    category: "secondary",
    icon: "clipboardCheck",
  },
  {
    id: "inventory-management",
    title: "Inventory Management",
    tagline: "Inventory Tracking System",
    description: "An inventory management system for tracking stock, orders, and supply chain data.",
    tech: ["JavaScript", "Node.js"],
    features: [
      "Inventory tracking and stock management",
      "Order processing workflows",
    ],
    github: "https://github.com/Adi96singh/InventoryManagement",
    category: "secondary",
    icon: "package",
  },
  {
    id: "url-shortener",
    title: "URL Shortener",
    tagline: "Link Shortening Service",
    description: "A URL shortening service for creating short, shareable links.",
    tech: ["JavaScript", "Node.js"],
    features: [
      "URL shortening and redirection",
      "Link tracking",
    ],
    github: "https://github.com/Adi96singh/url-shortener",
    category: "secondary",
    icon: "link",
  },
];

export const education = [
  {
    id: "chandigarh-university",
    institution: "Chandigarh University",
    degree: "B.E. in Computer Science",
    location: "Mohali, India",
    period: "August 2022 – June 2026",
    icon: "graduation",
  },
  {
    id: "dav-public-school",
    institution: "D.A.V. Public School",
    degree: "12th – Science Stream",
    grade: "90.8%",
    location: "Kashipur, India",
    period: "2021",
    icon: "school",
  },
];

export const research = [
  {
    id: "project-buddy",
    title: "ProjectBuddy: A Guided Learning Platform for Student Projects",
    date: "May 2025",
    journal: "International Journal of Scientific Research in Engineering and Management (IJSREM)",
    volume: "Vol. 09, Issue 05, Special Edition",
    doi: "10.55041/IJSREM43773",
    doiUrl: "https://doi.org/10.55041/IJSREM43773",
    description: "A platform that guides students through project development with structured learning paths and mentorship tools.",
  },
];

export const leadership = [
  {
    id: "ieee-vice-chair",
    role: "Vice Chairperson",
    organization: "IEEE Computational Intelligence Society (CIS) Student Branch",
    institution: "Chandigarh University",
    period: "May 2023 – May 2024",
    description: "Led the student branch, coordinated technical events, and managed team operations.",
  },
  {
    id: "ieee-webmaster",
    role: "Webmaster",
    organization: "IEEE Computational Intelligence Society (CIS) Student Branch",
    institution: "Chandigarh University",
    period: "Jan 2023 – May 2023",
    description: "Managed the web presence and digital communications for the student branch.",
  },
];

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "leadership", label: "Leadership" },
  { id: "contact", label: "Contact" },
];
