// Toggle the side navigation
document.addEventListener('DOMContentLoaded', () => {
  const sidebarToggle = document.querySelectorAll('#sidebarToggle, #sidebarToggleTop');

  sidebarToggle.forEach(toggle => {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('sidebar-toggled');
      const sidebar = document.querySelector('.sidebar');
      sidebar.classList.toggle('toggled');

      if (sidebar.classList.contains('toggled')) {
        const collapses = sidebar.querySelectorAll('.collapse');
        collapses.forEach(collapse => collapse.classList.remove('show'));
      }
    });
  });

  // Close any open menu accordions when window is resized below 768px
  window.addEventListener('resize', () => {
    const sidebar = document.querySelector('.sidebar');

    if (window.innerWidth < 768) {
      const collapses = sidebar.querySelectorAll('.collapse');
      collapses.forEach(collapse => collapse.classList.remove('show'));
    }

    // Toggle the side navigation when window is resized below 480px
    if (window.innerWidth < 480 && !sidebar.classList.contains('toggled')) {
      document.body.classList.add('sidebar-toggled');
      sidebar.classList.add('toggled');

      const collapses = sidebar.querySelectorAll('.collapse');
      collapses.forEach(collapse => collapse.classList.remove('show'));
    }
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation is hovered over
  const fixedNavSidebar = document.querySelector('body.fixed-nav .sidebar');
  if (fixedNavSidebar) {
    fixedNavSidebar.addEventListener('wheel', e => {
      if (window.innerWidth > 768) {
        e.preventDefault();
        fixedNavSidebar.scrollTop += (e.deltaY > 0 ? 1 : -1) * 30;
      }
    });
  }

  // Scroll to top button appear
  document.addEventListener('scroll', () => {
    const scrollDistance = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollToTop = document.querySelector('.scroll-to-top');

    if (scrollDistance > 100) {
      scrollToTop.style.display = 'block';
    } else {
      scrollToTop.style.display = 'none';
    }
  });

  // Smooth scrolling using native JavaScript
  document.querySelectorAll('a.scroll-to-top').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});
