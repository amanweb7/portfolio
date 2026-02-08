function openContact() {
  // Open email client or navigate to contact section
  window.location.href = "mailto:bhateriyaaman@gmail.com?subject=Website Inquiry";
}

function openDemo(projectType) {
  // In a real scenario, these would link to live client websites
  // For now, we'll just alert
  const messages = {
    'restaurant': 'Restaurant website demo',
    'law-firm': 'Law firm website demo',
    'florist': 'Florist website demo',
    'cleaning': 'Cleaning service website demo'
  };
  
  alert(`View ${messages[projectType] || 'project'} - In production, this would link to the live client site`);
}

// Scroll indicator functionality
document.addEventListener("DOMContentLoaded", function () {
  const projectsScroll = document.getElementById("projectsScroll");
  const scrollProgress = document.getElementById("scrollProgress");

  if (projectsScroll && scrollProgress) {
    projectsScroll.addEventListener("scroll", function () {
      const scrollWidth =
        projectsScroll.scrollWidth - projectsScroll.clientWidth;
      const scrolled = projectsScroll.scrollLeft;
      const progress = (scrolled / scrollWidth) * 100;

      scrollProgress.style.width = progress + "%";
    });
  }
});
