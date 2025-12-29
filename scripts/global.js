document.addEventListener("DOMContentLoaded", () => {

  /* Scroll reveal */
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15}
  );

  elements.forEach(el => observer.observe(el));

  /* Form submit (fake) */
  const form = document.getElementById("appointment-form");

  if (form) {
    const success = form.querySelector(".success");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      form.reset();
      success.hidden = false;

      setTimeout(() => {
        success.hidden = true;
      }, 4000);
    });
  }
});
