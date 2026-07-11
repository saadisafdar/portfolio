/**
 * Portfolio - Vanilla JavaScript
 * Recreates bchiang7/v4 functionality
 */

// ============================================
// LOADER ANIMATION
// ============================================
function initLoader() {
  const loader = document.getElementById('loader');
  const logo = document.getElementById('logo');
  const logoPathA = document.getElementById('logo-path-a');
  const logoPathB = document.getElementById('logo-path-b');
  const body = document.body;

  if (!loader || !logo) return;

  // Show logo
  setTimeout(() => {
    logo.classList.add('visible');
  }, 10);

  // Animate path A (drawing)
  setTimeout(() => {
    if (logoPathA) {
      logoPathA.style.transition = 'stroke-dashoffset 1.5s ease-in-out';
      logoPathA.style.strokeDashoffset = '0';
    }
  }, 300);

  // Animate path B (fade in)
  setTimeout(() => {
    if (logoPathB) {
      logoPathB.style.transition = 'opacity 0.7s ease-in-out';
      logoPathB.style.opacity = '1';
    }
  }, 1500);

  // Hide loader
  setTimeout(() => {
    loader.classList.add('hidden');
    body.classList.remove('hidden');
    initAnimations();
  }, 2500);
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll('.fade, .fade-up, .fade-down');
  animatedElements.forEach(el => {
    observer.observe(el);
  });
}

// ============================================
// NAV SCROLL EFFECTS
// ============================================
function initNav() {
  const header = document.getElementById('header');
  let lastScroll = 0;
  let ticking = false;

  if (!header) return;

  function updateNav() {
    const scroll = window.pageYOffset;

    if (scroll > 50) {
      if (scroll > lastScroll) {
        header.classList.add('scrolled-down');
        header.classList.remove('scrolled-up');
      } else {
        header.classList.add('scrolled-up');
        header.classList.remove('scrolled-down');
      }
    } else {
      header.classList.remove('scrolled-down', 'scrolled-up');
    }

    lastScroll = scroll;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateNav);
      ticking = true;
    }
  }, { passive: true });
}

// ============================================
// HAMBURGER MENU
// ============================================
function initMenu() {
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  const body = document.body;

  if (!hamburger || !sidebar) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('menu-open');
    sidebar.classList.toggle('menu-open');
    sidebar.setAttribute('aria-hidden', sidebar.classList.contains('menu-open') ? 'false' : 'true');
    sidebar.tabIndex = sidebar.classList.contains('menu-open') ? 1 : -1;
    body.classList.toggle('blur');
  });

  // Close on link click
  sidebar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('menu-open');
      sidebar.classList.remove('menu-open');
      sidebar.setAttribute('aria-hidden', 'true');
      sidebar.tabIndex = -1;
      body.classList.remove('blur');
    });
  });

  // Close on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('menu-open')) {
      hamburger.classList.remove('menu-open');
      sidebar.classList.remove('menu-open');
      sidebar.setAttribute('aria-hidden', 'true');
      sidebar.tabIndex = -1;
      body.classList.remove('blur');
    }
  });
}

// ============================================
// JOBS TABS
// ============================================
function initJobsTabs() {
  const tabs = document.querySelectorAll('.jobs-tab-btn');
  const panels = document.querySelectorAll('.jobs-panel');
  const highlight = document.getElementById('jobs-highlight');

  if (!tabs.length || !panels.length || !highlight) return;

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      panels[index].classList.add('active');
      highlight.style.setProperty('--active-tab-id', index);
    });
  });
}

// ============================================
// SMOOTH SCROLL
// ============================================
function initSmoothScroll() {
  const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 100;

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        const targetPosition = target.offsetTop - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ============================================
// ACTIVE NAV LINK
// ============================================
function initActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a, .sidebar a');

  if (!sections.length || !navLinks.length) return;

  const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 100;

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - navHeight - 100;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initNav();
  initMenu();
  initJobsTabs();
  initSmoothScroll();
  initActiveNavLink();
});

// Close menu on resize
window.addEventListener('resize', () => {
  const sidebar = document.getElementById('sidebar');
  const hamburger = document.getElementById('hamburger');
  const body = document.body;

  if (window.innerWidth > 768 && sidebar && hamburger) {
    sidebar.classList.remove('menu-open');
    hamburger.classList.remove('menu-open');
    sidebar.setAttribute('aria-hidden', 'true');
    sidebar.tabIndex = -1;
    body.classList.remove('blur');
  }
});
