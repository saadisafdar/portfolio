/**
 * Portfolio Template 4 - Interactive Script
 * Handles tab navigation, skill animations, project filtering, and mobile interactions
 */

document.addEventListener('DOMContentLoaded', function() {

  // ===== Tab Navigation =====
  const navLinks = document.querySelectorAll('.nav-link');
  const contentSections = document.querySelectorAll('.content-section');

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      const targetPage = this.getAttribute('data-nav');

      // Update active nav link
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');

      // Show target section
      contentSections.forEach(section => {
        section.classList.remove('active');
        if (section.getAttribute('data-page') === targetPage) {
          section.classList.add('active');
        }
      });

      // Animate skill bars if resume section is opened
      if (targetPage === 'resume') {
        setTimeout(animateSkillBars, 100);
      }
    });
  });

  // ===== Skill Progress Animation =====
  function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
      const width = bar.getAttribute('data-width');
      bar.style.width = width + '%';
    });
  }

  // Initial animation if resume is active
  const activeSection = document.querySelector('.content-section.active');
  if (activeSection && activeSection.getAttribute('data-page') === 'resume') {
    setTimeout(animateSkillBars, 300);
  }

  // ===== Project Filtering =====
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');

      // Update active filter button
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      // Filter projects
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');

        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden');
          // Add subtle animation
          card.style.animation = 'none';
          card.offsetHeight; // Trigger reflow
          card.style.animation = 'fadeIn 0.4s ease';
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // ===== Mobile Contact Toggle =====
  const infoToggle = document.getElementById('infoToggle');
  const contactInfo = document.getElementById('contactInfo');

  if (infoToggle && contactInfo) {
    infoToggle.addEventListener('click', function() {
      contactInfo.classList.toggle('expanded');
      this.classList.toggle('open');

      const span = this.querySelector('span');
      if (contactInfo.classList.contains('expanded')) {
        span.textContent = 'Hide Contacts';
      } else {
        span.textContent = 'Show Contacts';
      }
    });
  }

  // ===== Contact Form Handler =====
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Show success message (in production, this would submit to a form service)
      const btn = this.querySelector('.submit-btn');
      const originalText = btn.innerHTML;

      btn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>Message Sent!</span>
      `;
      btn.style.background = '#4ade80';

      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
        this.reset();
      }, 3000);
    });
  }

  // ===== Smooth Scroll for Anchor Links =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // ===== Navbar Active State on Scroll (for single page feel) =====
  let lastScrollTop = 0;
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      navbar.style.transform = 'translateY(-100%)';
    } else {
      navbar.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop;
  });

  // Add transition for navbar hide/show
  if (navbar) {
    navbar.style.transition = 'transform 0.3s ease';
  }

  // ===== Intersection Observer for Fade-in Animations =====
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe cards for subtle entrance animations
  document.querySelectorAll('.service-card, .project-card, .contact-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    fadeInObserver.observe(card);
  });

  // Trigger initial visibility check
  setTimeout(() => {
    document.querySelectorAll('.service-card, .project-card, .contact-card').forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }
    });
  }, 100);

});
