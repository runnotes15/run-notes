    // Hamburger toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks  = document.getElementById('navLinks');
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    // Close menu when a link is tapped (mobile UX)
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });

    // Active filter tab
    document.querySelectorAll('.filter-tabs button').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-tabs button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });