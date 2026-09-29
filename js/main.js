(() => {
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReduced) {
    document.querySelectorAll(".reveal").forEach((el) => {
      el.classList.add("is-in");
    });
    return;
  }

  const reveals = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || reveals.length === 0) {
    reveals.forEach((el) => el.classList.add("is-in"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -6% 0px" }
  );

  reveals.forEach((el) => observer.observe(el));
})();
