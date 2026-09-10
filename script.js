/**
 * Jebilin D.M Portfolio - Core JavaScript
 * Features:
 * - Hardware-accelerated Constellation Particle Canvas
 * - Spotlight Card Hover Tracker
 * - Dual Project Interactive Simulators (TrizenPhotos & StudentSphere)
 * - Animated Metric Counters & Scroll Reveals
 * - Circular Scroll-To-Top Progress Ring
 * - Dark/Light Theme Switching with Persistence
 * - Modals, Toasts, and Mobile Navigation Drawer
 */

document.addEventListener('DOMContentLoaded', () => {
  initParticleCanvas();
  initSpotlightHover();
  initProfileCodeRunner();
  initTrizenSimulator();
  initPortalSimulator();
  initSkillFilters();
  initStatCounters();
  initScrollReveals();
  initScrollProgressAndBackToTop();
  initThemeToggle();
  initTypewriter();
  initMobileNav();
  initHeaderScroll();
  initScrollSpy();
  initModals();
  initCopyButtons();
  initContactForm();
});

/* ==========================================================================
   1. Interactive Particle Constellation Canvas
   ========================================================================== */
let updateCanvasThemeColors = null;

function initParticleCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let animationFrameId;
  let isRunning = true;

  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  resize();

  window.addEventListener('resize', () => {
    resize();
    initParticles();
  });

  const mouse = {
    x: null,
    y: null,
    radius: 140
  };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  let nodeColor = 'rgba(99, 102, 241, 0.45)';
  let lineColor = 'rgba(99, 102, 241, 0.12)';

  function refreshColors() {
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    nodeColor = isDark ? 'rgba(99, 102, 241, 0.45)' : 'rgba(79, 70, 229, 0.3)';
    lineColor = isDark ? 'rgba(99, 102, 241, 0.12)' : 'rgba(79, 70, 229, 0.08)';
  }
  refreshColors();
  updateCanvasThemeColors = refreshColors;

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.7;
      this.vy = (Math.random() - 0.5) * 0.7;
      this.radius = Math.random() * 1.8 + 1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx = -this.vx;
      if (this.y < 0 || this.y > height) this.vy = -this.vy;

      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const fx = (dx / dist) * force * 1.5;
          const fy = (dy / dist) * force * 1.5;
          this.x -= fx;
          this.y -= fy;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = nodeColor;
      ctx.fill();
    }
  }

  let particles = [];
  function initParticles() {
    const count = Math.min(Math.floor((width * height) / 22000), 55);
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  }
  initParticles();

  function animate() {
    if (!isRunning) return;
    ctx.clearRect(0, 0, width, height);

    const maxDist = 125;
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.45;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = lineColor;
          ctx.lineWidth = alpha * 1.2;
          ctx.stroke();
        }
      }
    }

    animationFrameId = requestAnimationFrame(animate);
  }
  animate();

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
    } else {
      isRunning = true;
      animate();
    }
  });
}

/* ==========================================================================
   2. Cursor Spotlight Hover Effect
   ========================================================================== */
function initSpotlightHover() {
  const cards = document.querySelectorAll('.spotlight-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/* ==========================================================================
   3. Interactive Profile Terminal Runner
   ========================================================================== */
function initProfileCodeRunner() {
  const runBtn = document.getElementById('run-code-btn');
  const outputPane = document.getElementById('code-output-pane');
  if (!runBtn || !outputPane) return;

  runBtn.addEventListener('click', () => {
    outputPane.classList.toggle('active');
    if (outputPane.classList.contains('active')) {
      showToast('Executed developer_profile.py successfully!');
    }
  });
}

/* ==========================================================================
   4. TrizenPhotos Simulator
   ========================================================================== */
function initTrizenSimulator() {
  const pills = document.querySelectorAll('.trizen-pill');
  const panels = document.querySelectorAll('.trizen-view-panel');
  if (pills.length === 0 || panels.length === 0) return;

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      const targetView = pill.getAttribute('data-view');

      pills.forEach(p => {
        p.classList.remove('active');
        p.setAttribute('aria-selected', 'false');
      });
      pill.classList.add('active');
      pill.setAttribute('aria-selected', 'true');

      panels.forEach(panel => {
        panel.classList.remove('active');
      });

      const activePanel = document.getElementById(`trizen-view-${targetView}`);
      if (activePanel) {
        activePanel.classList.add('active');
      }

      showToast(`TrizenPhotos: Switched to ${targetView.toUpperCase()} view`);
    });
  });
}

/* ==========================================================================
   5. StudentSphere Portal Simulator
   ========================================================================== */
function initPortalSimulator() {
  const portalPills = document.querySelectorAll('.portal-pill');
  const portalViews = document.querySelectorAll('.portal-view-panel');
  if (portalPills.length === 0 || portalViews.length === 0) return;

  portalPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const targetPortal = pill.getAttribute('data-portal');

      portalPills.forEach(p => {
        p.classList.remove('active');
        p.setAttribute('aria-selected', 'false');
      });
      pill.classList.add('active');
      pill.setAttribute('aria-selected', 'true');

      portalViews.forEach(view => {
        view.classList.remove('active');
      });
      const activeView = document.getElementById(`portal-view-${targetPortal}`);
      if (activeView) {
        activeView.classList.add('active');
      }

      showToast(`StudentSphere: Switched to ${targetPortal.toUpperCase()} Portal`);
    });
  });
}

/* ==========================================================================
   6. Skill Category Filtering
   ========================================================================== */
function initSkillFilters() {
  const filterTabs = document.querySelectorAll('.skill-tab');
  const categoryCards = document.querySelectorAll('.skill-category-card');
  if (filterTabs.length === 0 || categoryCards.length === 0) return;

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const filter = tab.getAttribute('data-filter');

      filterTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      categoryCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/* ==========================================================================
   7. Animated Stat Counters
   ========================================================================== */
function initStatCounters() {
  const counters = document.querySelectorAll('.counter');
  if (counters.length === 0) return;

  let hasAnimated = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;

        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'), 10);
          const duration = 1600;
          const startTime = performance.now();

          function updateNumber(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easeOut * target);

            counter.textContent = current.toLocaleString();

            if (progress < 1) {
              requestAnimationFrame(updateNumber);
            } else {
              counter.textContent = target.toLocaleString();
            }
          }

          requestAnimationFrame(updateNumber);
        });
      }
    });
  }, { threshold: 0.35 });

  const metricsGrid = document.querySelector('.about-metrics-grid');
  if (metricsGrid) {
    observer.observe(metricsGrid);
  }
}

/* ==========================================================================
   8. Scroll-Driven Reveal Animations
   ========================================================================== */
function initScrollReveals() {
  const revealItems = document.querySelectorAll('.reveal-item');
  if (revealItems.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealItems.forEach(item => observer.observe(item));
}

/* ==========================================================================
   9. Scroll-To-Top Floating Button & Circular Progress Ring
   ========================================================================== */
function initScrollProgressAndBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  const progressCircle = document.getElementById('progress-indicator');
  if (!backToTopBtn || !progressCircle) return;

  const circumference = 2 * Math.PI * 18; // ~113.097

  function updateScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    if (scrollTop > 350) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }

    if (docHeight > 0) {
      const scrollPercent = Math.min(scrollTop / docHeight, 1);
      const offset = circumference - (scrollPercent * circumference);
      progressCircle.style.strokeDashoffset = offset;
    }
  }

  window.addEventListener('scroll', updateScroll, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   10. Dark & Light Mode Theme Toggle
   ========================================================================== */
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('jebilin-theme', newTheme);

    if (typeof updateCanvasThemeColors === 'function') {
      updateCanvasThemeColors();
    }
    showToast(`Switched to ${newTheme.toUpperCase()} mode`);
  });

  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('jebilin-theme')) {
        const theme = e.matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        if (typeof updateCanvasThemeColors === 'function') {
          updateCanvasThemeColors();
        }
      }
    });
  }
}

/* ==========================================================================
   11. Hero Section Typewriter Effect
   ========================================================================== */
function initTypewriter() {
  const typewriterElem = document.getElementById('typewriter-text');
  if (!typewriterElem) return;

  const roles = [
    'Computer Science Undergraduate',
    'Aspiring Software Developer',
    'Python & FastAPI Developer',
    'AI-Assisted Web Builder',
    'Quick Learner & Problem Solver'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeSpeed = 70;
  const deleteSpeed = 35;
  const pauseBetweenRoles = 2000;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typewriterElem.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typewriterElem.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    let speed = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === currentRole.length) {
      speed = pauseBetweenRoles;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      speed = 300;
    }

    setTimeout(type, speed);
  }

  type();
}

/* ==========================================================================
   12. Mobile Navigation Drawer
   ========================================================================== */
function initMobileNav() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navDrawer = document.getElementById('mobile-nav-drawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !navDrawer) return;

  function toggleMenu() {
    const isOpen = navDrawer.classList.contains('open');
    if (isOpen) {
      navDrawer.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
      navDrawer.setAttribute('aria-hidden', 'true');
    } else {
      navDrawer.classList.add('open');
      menuBtn.setAttribute('aria-expanded', 'true');
      navDrawer.setAttribute('aria-hidden', 'false');
    }
  }

  menuBtn.addEventListener('click', toggleMenu);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      navDrawer.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
      navDrawer.setAttribute('aria-hidden', 'true');
    });
  });

  document.addEventListener('click', (e) => {
    if (navDrawer.classList.contains('open') && !navDrawer.contains(e.target) && !menuBtn.contains(e.target)) {
      navDrawer.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
      navDrawer.setAttribute('aria-hidden', 'true');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navDrawer.classList.contains('open')) {
      navDrawer.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
      navDrawer.setAttribute('aria-hidden', 'true');
    }
  });
}

/* ==========================================================================
   13. Header Scroll State
   ========================================================================== */
function initHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ==========================================================================
   14. ScrollSpy (Active Navigation Highlighting)
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

  if (sections.length === 0 || navLinks.length === 0) return;

  window.addEventListener('scroll', () => {
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 130;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

/* ==========================================================================
   15. Modals Management (TrizenPhotos, StudentSphere & Resume)
   ========================================================================== */
function initModals() {
  const trizenModal = document.getElementById('trizen-modal');
  const archModal = document.getElementById('arch-modal');
  const resumeModal = document.getElementById('resume-modal');

  const openTrizenBtn = document.getElementById('view-trizen-btn');
  const openArchBtn = document.getElementById('view-arch-btn');
  const openResumeBtn = document.getElementById('open-resume-btn');
  const heroResumeBtn = document.getElementById('hero-resume-trigger');
  const mobileResumeBtn = document.getElementById('mobile-resume-btn');
  const printResumeBtn = document.getElementById('print-resume-btn');

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (openTrizenBtn) {
    openTrizenBtn.addEventListener('click', () => openModal(trizenModal));
  }

  if (openArchBtn) {
    openArchBtn.addEventListener('click', () => openModal(archModal));
  }

  [openResumeBtn, heroResumeBtn, mobileResumeBtn].forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        const navDrawer = document.getElementById('mobile-nav-drawer');
        if (navDrawer) navDrawer.classList.remove('open');
        openModal(resumeModal);
      });
    }
  });

  if (printResumeBtn) {
    printResumeBtn.addEventListener('click', () => {
      window.print();
    });
  }

  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const parentModal = e.target.closest('.modal-backdrop');
      closeModal(parentModal);
    });
  });

  [trizenModal, archModal, resumeModal].forEach(modal => {
    if (!modal) return;
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal(trizenModal);
      closeModal(archModal);
      closeModal(resumeModal);
    }
  });
}

/* ==========================================================================
   16. Copy to Clipboard
   ========================================================================== */
function initCopyButtons() {
  const copyButtons = document.querySelectorAll('[data-copy]');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(textToCopy);
        } else {
          const tempInput = document.createElement('textarea');
          tempInput.value = textToCopy;
          tempInput.style.position = 'fixed';
          tempInput.style.opacity = '0';
          document.body.appendChild(tempInput);
          tempInput.focus();
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
        }
        showToast(`Copied to clipboard: ${textToCopy}`);
      } catch (err) {
        showToast(`Copied: ${textToCopy}`);
      }
    });
  });
}

/* ==========================================================================
   17. Contact Form Simulation (Direct Mailto)
   ========================================================================== */
function initContactForm() {
  const contactForm = document.getElementById('portfolio-contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject} - from ${name}`);
    const mailtoBody = encodeURIComponent(`Hi Jebilin,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`);
    const mailtoUrl = `mailto:dmjebilin@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    showToast('Opening default email client with your message...');
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 600);
  });
}

/* ==========================================================================
   Toast Notification Helper
   ========================================================================== */
let toastTimeout = null;
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  if (toastTimeout) {
    clearTimeout(toastTimeout);
  }

  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}
