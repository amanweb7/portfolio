function openContact() {
  // Open email client or navigate to contact section
  window.location.href = "mailto:bhateriyaaman@gmail.com?subject=Website Inquiry";
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
