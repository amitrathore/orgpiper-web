const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const nav = document.getElementById("nav");
const syncNav = () => nav?.classList.toggle("scrolled", window.scrollY > 24);
syncNav();
window.addEventListener("scroll", syncNav, { passive: true });
