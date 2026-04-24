/* ===== ChainCacao — main.js ===== */

// ── Nav active link on scroll ──────────────────────────────────────────────
const sections = document.querySelectorAll("main section[id]");
const allNavLinks = document.querySelectorAll("nav a, .mobile-menu a");

function updateActiveLink() {
    let currentId = "";
    sections.forEach(section => {
        const top = section.offsetTop - 90;
        if (window.scrollY >= top) {
            currentId = section.getAttribute("id");
        }
    });

    allNavLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentId}`) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveLink, { passive: true });

// ── Header shadow on scroll ────────────────────────────────────────────────
const header = document.getElementById("en-tete");
window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 20);
}, { passive: true });

// ── Hamburger menu ─────────────────────────────────────────────────────────
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    hamburger.classList.toggle("open");
    mobileMenu.classList.toggle("open");
});

// Close on link click
mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("open");
        mobileMenu.classList.remove("open");
    });
});

// Close on outside click
document.addEventListener("click", (e) => {
    if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove("open");
        mobileMenu.classList.remove("open");
    }
});

// ── Scroll reveal animation ────────────────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            // Staggered delay based on sibling index
            const siblings = [...entry.target.parentElement.children];
            const index = siblings.indexOf(entry.target);
            entry.target.style.transitionDelay = `${index * 80}ms`;
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
