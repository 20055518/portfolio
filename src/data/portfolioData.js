export const portfolioData = {
  personal: {
    name: "JEBILIN D.M",
    role: "Software Developer",
    status: "Final-Year B.E. CSE • Anand Institute of Higher Technology",
    headline: "Building Digital Experiences Through Code and Problem Solving.",
    subheadline:
      "Final-year Computer Science and Engineering student focused on full-stack development, backend engineering, and practical machine learning applications.",
    email: "dmjebilin@gmail.com",
    phone: "+91 9080510225",
    phoneDisplay: "+91 90805 10225",
    location: "Chennai, India",
    degree: "B.E. Computer Science and Engineering (2023 – Expected 2027)",
    college: "Anand Institute of Higher Technology",
    github: "https://github.com/20055518",
    githubDisplay: "github.com/20055518",
    linkedin: "https://linkedin.com/in/jebilin7",
    linkedinDisplay: "linkedin.com/in/jebilin7",
    resumeUrl: "/resume.pdf",
    summary:
      "Final-year Computer Science and Engineering undergraduate (2023–2027) with a strong foundation in Python, SQL, and full-stack web engineering. Experienced in architecting and shipping production platforms—including hospital queue prediction with machine learning (CARE+), role-based institutional management (StudentSphere), and event photography delivery with async REST APIs (TrizenPhotos). Employs prompt-driven AI workflows for structured requirement decomposition and rapid code scaffolding, backed by rigorous manual inspection, debugging, and verification to deliver reliable software."
  },

  skills: {
    groups: [
      {
        category: "Programming & Web",
        description: "Core language fundamentals, scripting, structured querying, and modern semantic markup.",
        items: [
          { name: "Python", detail: "OOP, Data Structures, File I/O, Exceptions" },
          { name: "JavaScript", detail: "ES6+, Async/Await, DOM, Event Handling" },
          { name: "HTML5", detail: "Semantic Architecture, Accessibility (a11y)" },
          { name: "CSS3", detail: "Flexbox, CSS Grid, Custom Properties, Responsive Layouts" },
          { name: "SQL", detail: "DDL, DML, DQL, DCL, TCL, Relational Joins" }
        ]
      },
      {
        category: "Frameworks & Database",
        description: "Component-driven frontend interfaces, high-throughput asynchronous backend APIs, and scalable document storage.",
        items: [
          { name: "React.js", detail: "Hooks, Component Hierarchy, State Management" },
          { name: "FastAPI", detail: "Asynchronous Endpoints, Pydantic, Swagger Documentation" },
          { name: "MongoDB", detail: "Document Modeling, Indexing, Aggregation Pipelines" },
          { name: "MongoDB Atlas", detail: "Cloud Clusters, Connection Pooling, Security Rules" }
        ]
      },
      {
        category: "AI & Machine Learning",
        description: "Practical statistical modeling, predictive algorithms, and disciplined AI-assisted engineering.",
        items: [
          { name: "Linear Regression", detail: "Continuous Variable Waiting-Time Prediction" },
          { name: "Probability Analysis", detail: "Stochastic Patient Flow & Arrival Modeling" },
          { name: "Bayesian Updating", detail: "Dynamic Prior/Posterior Queue Calibration" },
          { name: "AI-Assisted Coding", detail: "Context-Rich Scaffolding & Defect Isolation" },
          { name: "Prompt-Driven Development", detail: "Requirement Decomposition & Architecture Planning" }
        ]
      },
      {
        category: "Tools & Deployment",
        description: "Source code version tracking, continuous integration, and managed cloud runtime infrastructure.",
        items: [
          { name: "Git", detail: "Branching, Rebase, Commit Discipline, Conflict Resolution" },
          { name: "GitHub", detail: "Remote Repository Hosting, PR Reviews, Issues" },
          { name: "Vercel", detail: "Frontend Edge Deployment, Build Optimization" },
          { name: "Render", detail: "Async Python Web Service & Worker Hosting" }
        ]
      }
    ]
  },

  projects: [
    {
      id: "care-plus",
      number: "01",
      title: "CARE+",
      subtitle: "Smart QR-Based Hospital Queue and Waiting-Time Prediction System",
      category: "Healthcare Technology | Full-Stack Development | Machine Learning",
      status: "Flagship Research & Engineering Project",
      technologies: [
        "React.js",
        "Python",
        "FastAPI",
        "MongoDB",
        "Linear Regression",
        "Probability Analysis",
        "Bayesian Updating"
      ],
      description:
        "CARE+ is a comprehensive, QR-enabled patient journey and hospital queue-management platform architected to eliminate chaotic hospital waiting rooms and replace arbitrary waiting estimates with mathematically grounded predictions.",
      architectureSummary:
        "Patients scan departmental QR codes upon arrival, instantly entering a digital queue stream. A Python/FastAPI backend captures stage transitions across 5 dedicated stakeholder portals (Patient, Reception, Nurse, Doctor, Admin). As queue density shifts, a Bayesian Updating engine recalibrates base Linear Regression estimates in real-time, factoring in arrival variance and doctor consultation distributions.",
      keyFeatures: [
        {
          title: "QR-Enabled Patient Journey",
          description:
            "Instant digital token generation through smartphone camera scanning—no physical kiosk lines or dedicated hardware required."
        },
        {
          title: "5 Role-Based Operational Portals",
          description:
            "Custom interfaces tailored for Patient tracking, Reception registration, Triage Nurse intake, Doctor consultation, and Administrative auditing."
        },
        {
          title: "Linear Regression Prediction Engine",
          description:
            "Analyzes historical check-in timestamps, appointment types, and consultation durations to establish baseline waiting curves."
        },
        {
          title: "Bayesian Queue Updating",
          description:
            "Dynamically incorporates incoming emergency loads, doctor delay priors, and real-time variance to update predicted wait times for waiting patients."
        },
        {
          title: "Full-Stack Data Synchronization",
          description:
            "FastAPI async routes persist patient records, clinical notes, and triage priorities to a structured MongoDB cluster."
        }
      ],
      contributions: [
        "Designed and implemented the full-stack application architecture combining React frontend views with FastAPI async endpoints and MongoDB persistence.",
        "Engineered the predictive waiting-time module by implementing Linear Regression modeling, probability-based queue curves, and real-time Bayesian state updating.",
        "Employed an AI coding assistant for structured requirement breakdown, code scaffolding, and debugging; personally reviewed, tested, and validated all generated logic before production integration."
      ],
      workflowDiagram: [
        { step: "01", label: "Patient QR Scan", detail: "Zero-contact digital token generation & department selection" },
        { step: "02", label: "Triage Intake", detail: "Nurse records vitals; queue slot assigned with baseline Linear Regression estimate" },
        { step: "03", label: "Bayesian Updating", detail: "FastAPI recalibrates wait times dynamically against doctor consultation priors" },
        { step: "04", label: "Consultation & Audit", detail: "Doctor reviews history; Admin portal audits turnaround time metrics" }
      ],
      liveUrl: null,
      githubUrl: null
    },
    {
      id: "studentsphere",
      number: "02",
      title: "StudentSphere",
      subtitle: "Comprehensive College Management Platform with Triple-Role Architecture",
      category: "Education Technology | Full-Stack Web Development",
      status: "Production Deployment • Live Prototype",
      technologies: ["React.js", "Python", "MongoDB", "Role-Based Access Control", "Git", "Vercel"],
      description:
        "A multi-tenant college management web platform engineered to consolidate academic governance, course tracking, continuous assessment scoring, and campus-wide communications into three secure, role-segregated portals.",
      architectureSummary:
        "The system segregates data access across Admin, Teacher, and Student roles using permission middleware. The React frontend presents clean dashboards for attendance calculations, internal assessment grade entry, and institutional circular broadcasts, backed by Python API services and a normalized MongoDB schema.",
      keyFeatures: [
        {
          title: "Three Distinct Role Portals",
          description:
            "Strict authorization guards separating administrative oversight, faculty academic controls, and student grade/attendance monitoring."
        },
        {
          title: "Automated Attendance Engine",
          description:
            "Calculates cumulative percentage thresholds, flagging student attendance below statutory 75% requirements automatically."
        },
        {
          title: "Internal Assessment Mark Management",
          description:
            "Faculty marks entry with subject-level breakdown, average computation, and tamper-resistant gradebook recording."
        },
        {
          title: "Campus Notice & Circular Dispatcher",
          description:
            "Administrative announcements broadcasted instantly across department filters with real-time student notification alerts."
        }
      ],
      contributions: [
        "Architected the triple-portal React.js client hierarchy and integrated Python backend micro-services with MongoDB.",
        "Employed prompt-driven AI workflows to scaffold state machines and API request handlers, systematically verifying and debugging code for production reliability.",
        "Managed repository lifecycle through disciplined Git branching, resolved edge-case state desynchronizations, and deployed the live platform to Vercel."
      ],
      workflowDiagram: [
        { step: "01", label: "Role Auth", detail: "JWT token validation & role-gated routing (Admin / Teacher / Student)" },
        { step: "02", label: "Faculty Input", detail: "Teacher logs daily attendance & enters internal examination marks" },
        { step: "03", label: "Automated Engine", detail: "System computes attendance safety percentages & grade aggregations" },
        { step: "04", label: "Student & Admin View", detail: "Students track academic progress; Admin oversees institutional metrics" }
      ],
      screenshots: [
        { url: "/assets/studentsphere/home.png", title: "Landing Page", caption: "Public Portal & Campus Overview" },
        { url: "/assets/studentsphere/login.png", title: "Triple-Portal Login", caption: "Role-gated Auth (Admin / Teacher / Student)" },
        { url: "/assets/studentsphere/about.png", title: "About Section", caption: "System Architecture & Mission" },
        { url: "/assets/studentsphere/contact.png", title: "Support & Helpdesk", caption: "Direct Campus Inquiry Portal" }
      ],
      liveUrl: "https://web-service-lake.vercel.app/",
      githubUrl: "https://github.com/20055518"
    },
    {
      id: "trizenphotos",
      number: "03",
      title: "TrizenPhotos",
      subtitle: "Full-Stack Photography & Gallery Platform with Frictionless PIN Portals",
      category: "Web Application | Backend Development | API Engineering",
      status: "Production Deployment • Live on Vercel & Render",
      technologies: [
        "React 19",
        "TypeScript",
        "FastAPI",
        "Python",
        "MongoDB Atlas",
        "JWT",
        "Pillow",
        "Vercel",
        "Render"
      ],
      description:
        "A high-performance event photography delivery platform built to streamline the workflow from photographer camera uploads to guest mobile devices without forcing end users through tedious registration hurdles.",
      architectureSummary:
        "Photographers upload high-resolution event media via JWT-authenticated dashboards. A FastAPI async backend processes files concurrently, triggering Python Pillow routines to generate optimized WebP thumbnails. Guests access private event galleries instantaneously through slug-routed URLs protected by 6-digit numeric PINs.",
      keyFeatures: [
        {
          title: "Zero-Friction Client PIN Access",
          description:
            "Guests access private event galleries via clean slug routes (e.g. /gallery/anand-annual) and a 6-digit access PIN (Live Demo: 482917) without creating accounts."
        },
        {
          title: "Asynchronous REST APIs",
          description:
            "Engineered with FastAPI to support concurrent non-blocking file streaming, multipart uploads, and structured JSON payloads."
        },
        {
          title: "Automated Pillow Image Pipeline",
          description:
            "Server-side thumbnail rendering compresses raw captures to lightweight WebP formats, slashing bandwidth and load times by over 80%."
        },
        {
          title: "Team Curation & JWT Authentication",
          description:
            "Photographers and editors curate galleries, approve edits, and manage download permissions through role-secured sessions."
        }
      ],
      contributions: [
        "Developed FastAPI REST endpoints handling authentication, photo streaming, and event metadata persistence on MongoDB Atlas.",
        "Built the client-facing React 19 interface with TypeScript typing, masonry layout, and responsive mobile viewing.",
        "Integrated the automated Pillow compression engine, resolved CORS and environment boundaries, and orchestrated deployments across Vercel and Render."
      ],
      workflowDiagram: [
        { step: "01", label: "Photographer Upload", detail: "Team uploads event captures via JWT-authenticated studio dashboard" },
        { step: "02", label: "Pillow Compression", detail: "FastAPI generates responsive WebP thumbnails & extracts EXIF metadata" },
        { step: "03", label: "Atlas Persistence", detail: "Image pointers, event slugs, and access PINs stored in MongoDB Atlas" },
        { step: "04", label: "Guest PIN Retrieval", detail: "Guests input 6-digit PIN (482917) for instantaneous gallery delivery" }
      ],
      liveUrl: "https://trizenphotos.vercel.app/",
      accessPin: "482917",
      githubUrl: "https://github.com/20055518"
    }
  ],

  internships: [
    {
      role: "Junior Python Software Developer Intern",
      company: "Judah Code Technologies",
      period: "May 25, 2026 – June 25, 2026",
      type: "Part-Time Virtual Internship",
      summary:
        "Applied core Python concepts and object-oriented paradigms to solve assigned computational problems, write defensive scripts, and master defect tracing.",
      contributions: [
        "Applied Core Python programming concepts including data structures (lists, dictionaries, sets, tuples), conditional logic, and modular functions.",
        "Developed structured programs for assigned software problem statements within strict project timelines.",
        "Practiced defensive programming with comprehensive exception handling, edge-case coverage, and file I/O operations.",
        "Identified, isolated, and resolved logical defects through methodical debugging exercises."
      ],
      technologies: ["Python", "OOP", "Data Structures", "File Handling", "Debugging"]
    },
    {
      role: "Python Developer Intern",
      company: "Intern Infobyte",
      period: "June 10, 2026 – July 10, 2026",
      type: "Part-Time Virtual Internship",
      award: "Recognized for Outstanding Performance & Dedication",
      summary:
        "Completed a four-week intensive Python programming internship, successfully executing practical software tasks while concurrently balancing academic commitments.",
      contributions: [
        "Executed practical Python programming tasks focused on algorithmic problem-solving, data manipulation, and task automation.",
        "Strengthened hands-on debugging, algorithmic efficiency, and code maintainability under scheduled review cycles.",
        "Earned formal recognition for dedication, proactive problem solving, and timely task execution throughout the internship duration.",
        "Demonstrated disciplined time management by successfully managing overlapping project deadlines."
      ],
      technologies: ["Python", "Algorithm Design", "Code Optimization", "Problem Solving", "Time Management"]
    }
  ],

  education: {
    degree: "Bachelor of Engineering (B.E.)",
    field: "Computer Science and Engineering",
    institution: "Anand Institute of Higher Technology",
    period: "2023 – Expected 2027",
    location: "Chennai, Tamil Nadu, India",
    coursework: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Web Technologies & Architectures",
      "Software Engineering Methodologies",
      "Computer Networks & Operating Systems"
    ],
    languages: [
      { name: "Tamil", level: "Native Proficiency" },
      { name: "English", level: "Professional Working Proficiency" }
    ]
  },

  aiPhilosophy: {
    title: "AI-Assisted Development with Manual Verification",
    lead:
      "Modern software engineering is evolving. I leverage AI coding assistants not as a crutch, but as an advanced cognitive force multiplier to accelerate requirements decomposition, explore design trade-offs, and eliminate boilerplate friction—while retaining rigorous manual ownership of every line shipped.",
    pillars: [
      {
        title: "Requirement Decomposition",
        description:
          "Translating complex user workflows into granular architectural specifications, domain models, and precise prompt sequences before touching code."
      },
      {
        title: "Prompt-Driven Development",
        description:
          "Formulating context-rich, constraint-bounded prompts that generate idiomatic React components, FastAPI route definitions, and MongoDB aggregation pipelines."
      },
      {
        title: "Code-Generation Assistance",
        description:
          "Using AI tools to rapidly scaffold repetitive structures, boilerplate schema validators, and draft logic for subsequent human refinement."
      },
      {
        title: "Debugging Support",
        description:
          "Accelerating root-cause hypothesis generation for complex stack traces, asynchronous race conditions, and cross-origin resource sharing (CORS) exceptions."
      },
      {
        title: "Frontend-Backend Integration",
        description:
          "Aligning API response contracts between React client components and FastAPI routes with strict type safety and error boundary coverage."
      },
      {
        title: "Manual Testing & Validation",
        description:
          "Critically reviewing, profiling, and testing every generated artifact. I never commit unchecked AI outputs; all logic is verified against real constraints."
      }
    ]
  }
};
