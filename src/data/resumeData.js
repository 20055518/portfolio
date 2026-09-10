export const resumeData = {
  personal: {
    name: "JEBILIN D.M",
    phone: "+91 9080510225",
    email: "dmjebilin@gmail.com",
    linkedin: "https://linkedin.com/in/jebilin7",
    linkedinDisplay: "linkedin.com/in/jebilin7",
    location: "Chennai, India",
    degree: "B.E., Computer Science and Engineering (2023–2027)",
    college: "Anand Institute of Higher Technology",
    summary:
      "Final-year Computer Science and Engineering undergraduate (2023–2027) with a foundation in Python, HTML, and CSS. Independently built full-stack web platforms—TrizenPhotos and StudentSphere—using AI-assisted development tools to handle requirements, coding, and integration. Completed two Python development internships, strengthening core programming and debugging skills through hands-on tasks. Quick learner with strong problem-solving and communication skills, seeking an entry-level Software Development role.",
    languagesKnown: ["Tamil (Native)", "English (Professional Working)"]
  },

  skills: {
    categories: [
      { id: "all", label: "All Skills" },
      { id: "core", label: "Languages & Core" },
      { id: "ai-dev", label: "AI-Assisted Dev" },
      { id: "workflow", label: "Workflow & Tools" },
      { id: "soft", label: "Soft Skills" }
    ],
    items: [
      {
        name: "Python (Core Programming)",
        category: "core",
        tag: "Strong Foundation",
        level: 90,
        subtext: "Data types, conditionals, loops, functions, file handling, and exception handling applied across dual internships."
      },
      {
        name: "Python (OOP Concepts)",
        category: "core",
        tag: "Object-Oriented",
        level: 86,
        subtext: "Classes, objects, encapsulation, inheritance, modular program organization, and algorithmic problem-solving."
      },
      {
        name: "SQL (Database Fundamentals)",
        category: "core",
        tag: "DDL • DML • DQL • DCL • TCL",
        level: 85,
        subtext: "Data Definition (CREATE, ALTER, DROP), Data Manipulation (INSERT, UPDATE, DELETE), querying with DQL (SELECT, filtering, joins), and transaction controls."
      },
      {
        name: "HTML5 & CSS3",
        category: "core",
        tag: "Semantic & Responsive",
        level: 90,
        subtext: "Semantic page architecture, CSS Grid, Flexbox, custom properties, responsive viewports, and mobile accessibility."
      },
      {
        name: "Full-Stack Feature Engineering",
        category: "ai-dev",
        tag: "React 19 & FastAPI",
        level: 94,
        subtext: "Directed AI coding tools to implement React.js / React 19 frontend views, async FastAPI REST endpoints, and MongoDB Atlas persistence."
      },
      {
        name: "Code Verification & Debugging",
        category: "ai-dev",
        tag: "Quality Control",
        level: 90,
        subtext: "Meticulously inspecting and testing AI-generated code, solving runtime exceptions, fixing CORS/API routes, and verifying 100% test passes."
      },
      {
        name: "Authentication & Security Scaffolding",
        category: "ai-dev",
        tag: "JWT & PIN Portals",
        level: 88,
        subtext: "Designed secure, zero-friction client PIN access with slug routing, plus JWT token authentication for team curation workflows."
      },
      {
        name: "Pillow & Media Pipeline Integration",
        category: "ai-dev",
        tag: "Async Processing",
        level: 86,
        subtext: "Constructed automated image resizing and thumbnail generation routines using Python Pillow for fast gallery loading."
      },
      {
        name: "Prompt-Driven Development Workflow",
        category: "workflow",
        tag: "Prompt Engineering",
        level: 95,
        subtext: "Formulating structured, contextual prompts to generate clean architectural components, database schemas, and API handlers."
      },
      {
        name: "Git & GitHub",
        category: "workflow",
        tag: "Version Control",
        level: 88,
        subtext: "Branching, commit history discipline, managing project repositories, and linking remote repos to cloud hosts."
      },
      {
        name: "Cloud Deployment (Vercel & Render)",
        category: "workflow",
        tag: "DevOps Basics",
        level: 87,
        subtext: "Configuring environment variables, build scripts, and live production deployments for frontend (Vercel) and backend (Render)."
      },
      {
        name: "Debugging Fundamentals",
        category: "workflow",
        tag: "Diagnostic",
        level: 89,
        subtext: "Stack trace analysis, HTTP request inspection, console tracing, and systematic defect isolation."
      }
    ],
    softSkills: [
      { name: "Problem-Solving", sub: "Root cause tracing", icon: "🎯" },
      { name: "Communication", sub: "Clear & collaborative", icon: "💬" },
      { name: "Time Management", sub: "Met 100% of deadlines", icon: "⏱️" },
      { name: "Adaptability", sub: "Fast workflow adoption", icon: "🔄" },
      { name: "Leadership", sub: "Dual project ownership", icon: "👥" },
      { name: "Quick Learner", sub: "Rapid tool onboarding", icon: "⚡" }
    ]
  },

  projects: [
    {
      id: "trizen",
      name: "TrizenPhotos – Full-Stack Photography & Gallery Platform",
      badge: "⭐ Latest Production Release",
      tagline: "An event photo delivery platform featuring real-time photo upload, team curation, and client delivery with friction-free PIN portals.",
      liveUrl: "https://trizenphotos.vercel.app",
      displayUrl: "trizenphotos.vercel.app",
      technologies: ["React 19", "TypeScript", "FastAPI", "Python", "MongoDB Atlas", "JWT", "Vercel", "Render"],
      highlights: [
        "Directed AI-assisted tools to engineer an event photo delivery system with real-time upload, team curation, and client delivery.",
        "Designed secure, PIN-protected client portals with slug routing, removing account creation friction for end users.",
        "Built async REST APIs with FastAPI, covering JWT authentication, role-based workflows, and Pillow-based thumbnail generation.",
        "Automated deployment across Vercel and Render, verifying 100% passing integration and unit tests."
      ]
    },
    {
      id: "studentsphere",
      name: "StudentSphere – College Management Website",
      badge: "⭐ Institutional Platform",
      tagline: "A comprehensive college management web platform featuring 3 distinct role-based portals for institutional workflows.",
      liveUrl: "https://web-service-lake.vercel.app",
      displayUrl: "web-service-lake.vercel.app",
      technologies: ["React.js", "Python", "MongoDB", "Role Portals", "Git", "Vercel"],
      highlights: [
        "Independently designed and built a full-stack college management website with 3 role-based portals: Admin, Teacher, and Student.",
        "Directed AI-assisted coding tools to implement the React.js frontend, Python backend, and MongoDB database, managing prompts, testing, and integration.",
        "Structured attendance, marks, and notice modules across all 3 portals, verifying and debugging AI-generated code before deployment.",
        "Tracked all changes using Git and delivered a working, publicly hosted prototype end-to-end."
      ]
    }
  ],

  internships: [
    {
      role: "Junior Python Software Developer Intern",
      company: "Judah Code Technologies",
      type: "Virtual Internship",
      period: "May 25 – Jun 25, 2026",
      summary: "Completed a 1-month, part-time virtual internship applying Core Python fundamentals to real-world software assignments.",
      bullets: [
        "Mastered essential language features including data structures (lists, dicts, tuples), conditional branching, iterative loops, functions, and file I/O operations.",
        "Implemented defensive programming principles through comprehensive exception handling and edge-case management.",
        "Wrote and debugged Python programs, solving assigned problem statements and meeting every deadline across the internship."
      ],
      tags: ["Core Python", "OOP Concepts", "File Handling", "Exception Handling", "Debugging"]
    },
    {
      role: "Python Developer Intern",
      company: "Intern Infobyte",
      type: "Virtual Internship",
      period: "Jun 10 – Jul 10, 2026",
      highlight: "★ Outstanding Performance",
      summary: "Completed a 4-week, part-time internship (overlapping the final 2 weeks at Judah Code Technologies), demonstrating strong time management and technical discipline.",
      bullets: [
        "Resolved real-world Python tasks, sharpening debugging, algorithm design, and problem-solving within set deadlines.",
        "Recognized for outstanding performance and dedication throughout the internship."
      ],
      tags: ["Python", "Problem Solving", "Code Optimization", "Task Execution", "Time Management"]
    }
  ],

  education: {
    degree: "Bachelor of Engineering (B.E.)",
    field: "Computer Science and Engineering",
    institution: "Anand Institute of Higher Technology",
    period: "2023 – Expected 2027",
    location: "Chennai, Tamil Nadu",
    desc: "Coursework covering data structures, algorithms, object-oriented concepts, relational database systems, and web technologies."
  },

  certifications: [
    {
      title: "Junior Python Software Developer Intern",
      issuer: "Judah Code Technologies",
      period: "May 25 – Jun 25, 2026",
      type: "Virtual Internship",
      desc: "Certified for completing virtual internship modules in Core Python, loops, functions, file handling, and error handling."
    },
    {
      title: "Python Developer Intern",
      issuer: "Intern Infobyte",
      period: "Jun 10 – Jul 10, 2026",
      type: "Virtual Internship",
      highlight: "Outstanding Performance",
      desc: "Certified for completing real-world Python programming tasks, recognized for outstanding dedication and technical execution."
    }
  ]
};
