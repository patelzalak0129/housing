/* ==========================================
   Housing Marketplace - Global JS Controller
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initTheme();
  initNavbarScroll();
  initMobileMenu();
  initAuthModals();
  initToastContainer();
  initFavoritesState();
});

/* ==========================================
   1. Loader Animation
   ========================================== */
function initLoader() {
  const loader = document.getElementById('loader');
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
      }, 500); // Small delay for visual pleasure
    });
  }
}

/* ==========================================
   2. Dark Mode Toggle
   ========================================== */
function initTheme() {
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const currentTheme = localStorage.getItem('theme') || 'light';

  // Apply initial theme
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcons(currentTheme);

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcons(newTheme);
      showToast(`Switched to ${newTheme} mode`, 'info');
    });
  });
}

function updateThemeIcons(theme) {
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  themeToggleBtns.forEach(btn => {
    const icon = btn.querySelector('i');
    if (icon) {
      if (theme === 'dark') {
        icon.className = 'fa-solid fa-sun';
      } else {
        icon.className = 'fa-solid fa-moon';
      }
    }
  });
}

/* ==========================================
   3. Navbar Sticky Effect
   ========================================== */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
}

/* ==========================================
   4. Mobile Menu Drawer
   ========================================== */
function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const closeBtn = document.querySelector('.btn-close-drawer');
  const mobileNav = document.querySelector('.mobile-nav');
  const overlay = document.querySelector('.drawer-overlay');

  if (menuBtn && mobileNav && overlay) {
    menuBtn.addEventListener('click', () => {
      mobileNav.classList.add('open');
      overlay.classList.add('active');
    });

    const closeDrawer = () => {
      mobileNav.classList.remove('open');
      overlay.classList.remove('active');
    };

    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    overlay.addEventListener('click', closeDrawer);
  }
}

/* ==========================================
   5. Authentication Modals
   ========================================== */
function initAuthModals() {
  const loginBtns = document.querySelectorAll('.btn-login, .btn-register');
  const authModal = document.getElementById('auth-modal');
  const closeModalBtn = authModal ? authModal.querySelector('.btn-close-modal') : null;
  const overlay = authModal ? authModal.querySelector('.modal-overlay') : null;

  if (authModal && loginBtns.length > 0) {
    loginBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Check if user clicked login or register specifically
        const isRegister = btn.classList.contains('btn-register');
        
        authModal.classList.add('active');
        switchAuthTab(isRegister ? 'register' : 'login');
      });
    });

    const closeModal = () => {
      authModal.classList.remove('active');
    };

    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if (overlay) overlay.addEventListener('click', closeModal);

    // Auth Tabs switcher
    const tabBtns = authModal.querySelectorAll('.auth-tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        switchAuthTab(tab);
      });
    });

    // Form Submissions
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = loginForm.querySelector('[type="email"]').value;
        const password = loginForm.querySelector('[type="password"]').value;

        if (email && password) {
          localStorage.setItem('currentUser', JSON.stringify({ email }));
          showToast('Successfully logged in!', 'success');
          closeModal();
          updateUserNavState();
        }
      });
    }

    if (registerForm) {
      registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = registerForm.querySelector('[type="text"]').value;
        const email = registerForm.querySelector('[type="email"]').value;
        const password = registerForm.querySelector('[type="password"]').value;

        if (name && email && password) {
          localStorage.setItem('currentUser', JSON.stringify({ name, email }));
          showToast('Account created successfully!', 'success');
          closeModal();
          updateUserNavState();
        }
      });
    }

    updateUserNavState();
  }
}

function switchAuthTab(tabName) {
  const authModal = document.getElementById('auth-modal');
  if (!authModal) return;

  const tabBtns = authModal.querySelectorAll('.auth-tab-btn');
  const panels = authModal.querySelectorAll('.auth-panel');

  tabBtns.forEach(btn => {
    if (btn.dataset.tab === tabName) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  panels.forEach(panel => {
    if (panel.id === `${tabName}-panel`) {
      panel.classList.add('active');
    } else {
      panel.classList.remove('active');
    }
  });
}

function updateUserNavState() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const userActions = document.querySelectorAll('.nav-actions, .mobile-nav-actions');

  userActions.forEach(container => {
    const loginBtn = container.querySelector('.btn-login');
    if (!loginBtn) return;

    if (currentUser) {
      // User is logged in, show username and logout
      const displayEmail = currentUser.name || currentUser.email.split('@')[0];
      loginBtn.innerHTML = `<i class="fa-solid fa-user"></i> ${displayEmail}`;
      loginBtn.classList.remove('btn-primary');
      loginBtn.classList.add('btn-outline');
      
      // Prevent standard open modal on click, instead add dropdown or logout option
      // For simplicity, double click or structured click logs out
      loginBtn.onclick = (e) => {
        e.preventDefault();
        if (confirm('Do you want to log out?')) {
          localStorage.removeItem('currentUser');
          showToast('Logged out successfully', 'info');
          setTimeout(() => window.location.reload(), 500);
        }
      };
    } else {
      // User logged out, restore default login button behavior
      loginBtn.innerHTML = `<i class="fa-solid fa-right-to-bracket"></i> Login`;
      loginBtn.className = 'btn btn-primary btn-login';
      loginBtn.onclick = null;
    }
  });
}

/* ==========================================
   6. Favorites Management
   ========================================== */
function initFavoritesState() {
  if (!localStorage.getItem('favorites')) {
    localStorage.setItem('favorites', JSON.stringify([]));
  }
}

function toggleFavorite(id) {
  let favs = JSON.parse(localStorage.getItem('favorites')) || [];
  const idx = favs.indexOf(parseInt(id));
  let added = false;

  if (idx === -1) {
    favs.push(parseInt(id));
    added = true;
    showToast('Added to Favorites', 'success');
  } else {
    favs.splice(idx, 1);
    showToast('Removed from Favorites', 'info');
  }

  localStorage.setItem('favorites', JSON.stringify(favs));
  updateFavoriteIcons();
  
  // Trigger event for list page updates if necessary
  window.dispatchEvent(new CustomEvent('favoritesUpdated', { detail: { id, added } }));
}

function updateFavoriteIcons() {
  const favs = JSON.parse(localStorage.getItem('favorites')) || [];
  const favButtons = document.querySelectorAll('.btn-fav');

  favButtons.forEach(btn => {
    const id = parseInt(btn.dataset.id);
    if (favs.includes(id)) {
      btn.classList.add('active');
      const icon = btn.querySelector('i');
      if (icon) icon.className = 'fa-solid fa-heart';
    } else {
      btn.classList.remove('active');
      const icon = btn.querySelector('i');
      if (icon) icon.className = 'fa-regular fa-heart';
    }
  });
}

/* ==========================================
   7. Toast Notifications
   ========================================== */
let toastContainer;

function initToastContainer() {
  toastContainer = document.querySelector('.toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }
}

function showToast(message, type = 'info') {
  if (!toastContainer) initToastContainer();

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  let iconClass = 'fa-info-circle';
  if (type === 'success') iconClass = 'fa-circle-check';
  if (type === 'error') iconClass = 'fa-circle-exclamation';

  toast.innerHTML = `
    <i class="toast-icon fa-solid ${iconClass}"></i>
    <span class="toast-message">${message}</span>
    <i class="toast-close fa-solid fa-xmark"></i>
  `;

  toastContainer.appendChild(toast);

  // Close handler
  toast.querySelector('.toast-close').addEventListener('click', () => {
    toast.style.animation = 'fadeOut 0.3s forwards';
    setTimeout(() => toast.remove(), 300);
  });

  // Auto remove
  setTimeout(() => {
    if (toast.parentNode) {
      toast.style.animation = 'fadeOut 0.3s forwards';
      setTimeout(() => toast.remove(), 300);
    }
  }, 4000);
}
