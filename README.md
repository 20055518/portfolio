# 🚀 Jebilin D.M — React Developer Portfolio Website

A personal developer portfolio designed and built in **React 18 & Vite** for **Jebilin D.M**, based directly on his updated resume as a final-year Computer Science and Engineering undergraduate (2023–2027) at **Anand Institute of Higher Technology**, Chennai.

---

## 🌟 Highlights & Key Features

- **Built with Pure React & Vite**:
  - Modular component hierarchy (`Hero`, `About`, `Skills`, `Projects`, `Experience`, `Education`, `Contact`, `Modals`, `BackgroundCanvas`, `Navbar`, `Footer`, `BackToTop`).
  - Strict adherence to modern React state management, hooks (`useState`, `useEffect`, `useRef`), and centralized resume data store in `src/data/resumeData.js`.

- **Personal Brand & Hero Section**:
  - Dynamic typewriter effect showcasing core roles (*Aspiring Software Developer*, *Python & SQL Developer*, *AI-Assisted Web Builder*, *TrizenPhotos & StudentSphere Creator*).
  - Status badge indicating availability for entry-level Software Development roles.
  - Interactive Python terminal code runner (`developer_profile.py`) with a live "▶ Run" button that executes and verifies profile instantiation.
  - One-click copy buttons for email (`dmjebilin@gmail.com`) and phone (`+91 9080510225`) with toast notifications.
  - Direct link to LinkedIn (`https://linkedin.com/in/jebilin7`).

- **Dual Star Projects Spotlight**:
  1. **TrizenPhotos – Full-Stack Photography & Gallery Platform** (`https://trizenphotos.vercel.app`):
     - Engineered with **React 19, TypeScript, FastAPI, Python, MongoDB Atlas, JWT, Pillow, Vercel, Render**.
     - Real-time photo upload, team curation, and PIN-protected client portals with slug routing.
     - Async REST APIs with Pillow-based thumbnail generation.
     - Interactive preview tabs: *PIN Access*, *Client Gallery*, *FastAPI Routes*.
  2. **StudentSphere – College Management Website** (`https://web-service-lake.vercel.app`):
     - Built with **React.js, Python, MongoDB, Role-Based Access, Git, Vercel**.
     - 3 role-based portals (**Admin**, **Teacher**, and **Student**) with attendance, marks, and notice modules.
     - Interactive preview switcher between the 3 portals.

- **Internship Experience Timeline**:
  - **Junior Python Software Developer Intern** @ Judah Code Technologies (May 25 – Jun 25, 2026)
  - **Python Developer Intern** @ Intern Infobyte (Jun 10 – Jul 10, 2026) — recognized with *Outstanding Performance*.

- **Skills & Tooling Matrix**:
  - Filterable by: *All Skills*, *Languages & Core*, *AI-Assisted Dev*, *Workflow & Tools*, *Soft Skills*.
  - **Languages & Core**: Python (basic, incl. OOP concepts), HTML5, CSS3, SQL (basic – DDL, DML, DQL, DCL, TCL).
  - **AI-Assisted Development**: Directing AI coding tools for full-stack implementation, schema structuring, and rigorous code verification/debugging.
  - **Workflow & Tools**: Prompt-Driven Development workflow, Debugging fundamentals, Git & GitHub, Vercel & Render cloud deployments.
  - **Professional & Soft Skills**: Problem-Solving, Communication, Time Management, Adaptability, Leadership, Quick Learner.

- **Education & Verified Certifications**:
  - B.E. Computer Science and Engineering (2023–2027) at Anand Institute of Higher Technology.
  - Verified internship completion certificate badges.

- **Interactive Resume Modal with Print/PDF Export**:
  - Dedicated full-view modal containing a clean, 1-to-1 formatted resume matching your official PDF.
  - One-click **"Print / Save as PDF"** button with clean `@media print` layout.

- **Design System & Dark/Light Theme**:
  - Hardware-accelerated constellation particle canvas background that gently responds to cursor proximity.
  - Spotlight hover effect on cards.
  - Smooth dark/light theme switching with `localStorage` persistence.
  - Fully responsive across mobile (320px+), tablet, and desktop viewports.

---

## 📁 Project Structure

```
C:\Users\dmjeb\Videos\portfolio\
├── index.html                  # Vite HTML entrypoint with font imports
├── vite.config.js              # Vite React configuration
├── package.json                # React 18, React DOM, Vite dependencies
├── netlify.toml                # Netlify build configuration & SPA rewrite rules
├── .gitignore                  # Git ignore rules for node_modules and dist
├── dist/                       # Production build output
└── src/
    ├── main.jsx                # React root entrypoint
    ├── App.jsx                 # Master application component & layout state
    ├── index.css               # Complete responsive CSS design system
    ├── data/
    │   └── resumeData.js       # Centralized resume data store
    └── components/
        ├── BackgroundCanvas.jsx# Particle constellation background
        ├── Navbar.jsx          # Sticky navbar with mobile drawer & theme switcher
        ├── Hero.jsx            # Hero banner, typewriter, and Python runner
        ├── About.jsx           # Background, AI-assisted philosophy, metrics
        ├── Skills.jsx          # Filterable skills & soft skills grid
        ├── Projects.jsx        # Dual project showcase with interactive tabs
        ├── Experience.jsx      # Internship timeline
        ├── Education.jsx       # Degree coursework and credentials
        ├── Contact.jsx         # Direct contact cards and pre-filled email form
        ├── Footer.jsx          # Footer credits & status
        ├── Modals.jsx          # Architecture modals and 1-to-1 printable resume
        └── BackToTop.jsx       # Circular SVG scroll progress indicator
```

---

## 🛠️ Development & Build Commands

Inside `C:\Users\dmjeb\Videos\portfolio`:

```bash
# 1. Install dependencies
npm install

# 2. Start local development server (with hot module reload)
npm run dev

# 3. Create optimized production build
npm run build

# 4. Preview the production build locally
npm run preview
```

---

## 🚀 How to Deploy on Netlify

### Option 1: Netlify Git Integration (Recommended)
1. Push this repository to your GitHub account (`github.com/your-username/portfolio`).
2. Log in to [Netlify](https://app.netlify.com).
3. Click **"Add new site"** > **"Import an existing project"** > Choose **GitHub**.
4. Select your portfolio repository. Netlify will automatically detect `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **"Deploy site"**!

### Option 2: Netlify Drop (Instant Drag-and-Drop)
1. Run `npm run build` to generate the `dist/` folder.
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
3. Drag and drop the `dist/` folder directly into the browser.
4. Your React portfolio will be live on the web in seconds!
