document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initActiveNavObserver();
  initEmailCopy();
});

/**
 * Mobile Navigation Menu Toggle
 */
function initMobileNav() {
  const toggleBtn = document.getElementById('nav-toggle');
  const primaryNav = document.getElementById('primary-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!toggleBtn || !primaryNav) return;

  // Toggle drawer open/close
  toggleBtn.addEventListener('click', () => {
    const isOpen = primaryNav.classList.contains('active');
    
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close menu when clicking navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close menu if clicking outside of it while open
  document.addEventListener('click', (e) => {
    if (
      primaryNav.classList.contains('active') && 
      !primaryNav.contains(e.target) && 
      !toggleBtn.contains(e.target)
    ) {
      closeMenu();
    }
  });

  function openMenu() {
    primaryNav.classList.add('active');
    toggleBtn.classList.add('open');
    toggleBtn.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    primaryNav.classList.remove('active');
    toggleBtn.classList.remove('open');
    toggleBtn.setAttribute('aria-expanded', 'false');
  }
}

/**
 * High-performance Active Navigation Link highlighting using IntersectionObserver
 */
function initActiveNavObserver() {
  const sections = document.querySelectorAll('section, footer');
  const navLinks = document.querySelectorAll('.nav-link');
  
  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    // Triggers when a section covers 40% of the viewport (adjustable)
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        // Remove active class from all links
        navLinks.forEach(link => {
          link.classList.remove('active');
          
          // Add active class to corresponding nav link
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/**
 * Click-to-Copy Email Feature with Tooltip State Change
 */
function initEmailCopy() {
  const emailBtn = document.getElementById('email-btn');
  const emailTooltip = document.getElementById('email-tooltip');
  const emailAddress = "creatorsavya@gmail.com";

  if (!emailBtn || !emailTooltip) return;

  emailBtn.addEventListener('click', () => {
    // Attempt copying to clipboard using modern Clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(emailAddress)
        .then(() => showSuccessState())
        .catch(err => {
          console.error("Failed to copy email automatically:", err);
          fallbackCopyText(emailAddress);
        });
    } else {
      fallbackCopyText(emailAddress);
    }
  });

  function showSuccessState() {
    emailTooltip.textContent = "Copied!";
    emailBtn.classList.add('copied');
    
    // Reset tooltip text after 2 seconds
    setTimeout(() => {
      emailTooltip.textContent = "Click to copy";
      emailBtn.classList.remove('copied');
    }, 2000);
  }

  // Fallback for browsers that don't support navigator.clipboard.writeText
  function fallbackCopyText(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    // Keep it invisible
    textArea.style.position = "fixed";
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.width = "2em";
    textArea.style.height = "2em";
    textArea.style.padding = "0";
    textArea.style.border = "none";
    textArea.style.outline = "none";
    textArea.style.boxShadow = "none";
    textArea.style.background = "transparent";
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand('copy');
      if (successful) {
        showSuccessState();
      } else {
        emailTooltip.textContent = "Press Ctrl+C to copy";
      }
    } catch (err) {
      emailTooltip.textContent = "Failed to copy";
    }

    document.body.removeChild(textArea);
  }
}
