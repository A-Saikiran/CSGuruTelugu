/* ==========================================================
   CS GURU TELUGU
   APP.JS
========================================================== */

// ==========================================================
// LOADER
// ==========================================================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {

        setTimeout(() => {

            loader.classList.add("hide");

        }, 700);

    }

});

// ==========================================================
// THEME TOGGLE
// ==========================================================

function updateThemeIcon() {

    const btn = document.getElementById("themeBtn");

    if (!btn) return;

    btn.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";

}

function toggleTheme() {

    document.body.classList.toggle("light");

    const mode = document.body.classList.contains("light")
        ? "light"
        : "dark";

    localStorage.setItem("theme", mode);

    updateThemeIcon();

}

window.addEventListener("DOMContentLoaded", () => {

    const theme = localStorage.getItem("theme");

    if (theme === "light") {

        document.body.classList.add("light");

    }

    updateThemeIcon();

});

// ==========================================================
// LIVE DATE & TIME (navbar clock)
// ==========================================================

function tickClock() {

    const el = document.getElementById("navClock");

    if (!el) return;

    const now = new Date();

    const options = {
        weekday: "short",
        day: "2-digit",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata"
    };

    el.textContent = now.toLocaleString("en-IN", options) + " IST";

}

tickClock();
setInterval(tickClock, 1000);

// ==========================================================
// MOBILE NAV TOGGLE
// ==========================================================

window.addEventListener("DOMContentLoaded", () => {

    const toggleBtn = document.getElementById("navToggle");
    const nav = document.getElementById("mainNav");

    if (!toggleBtn || !nav) return;

    toggleBtn.addEventListener("click", () => {

        nav.classList.toggle("open");
        toggleBtn.classList.toggle("is-open");

    });

    nav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");
            toggleBtn.classList.remove("is-open");

        });

    });

});

// ==========================================================
// NEWSLETTER FORM (no backend — friendly inline confirmation)
// ==========================================================

window.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector(".newsletter");

    if (!form) return;

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const input = form.querySelector("input[type=email]");

        let note = form.parentElement.querySelector(".newsletter-note");

        if (!note) {

            note = document.createElement("p");
            note.className = "newsletter-note";
            form.parentElement.appendChild(note);

        }

        if (input && input.value) {

            note.textContent = "✅ Thanks! We'll notify " + input.value + " about new updates.";
            input.value = "";

        }

    });

});

// ==========================================================
// SCROLL PROGRESS BAR
// ==========================================================

window.addEventListener("scroll", () => {

    const progress = document.querySelector(".progress-bar");

    if (!progress) return;

    const scrollTop = document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const percent = (scrollTop / height) * 100;

    progress.style.width = percent + "%";

});

// ==========================================================
// BACK TO TOP BUTTON
// ==========================================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 400) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

// ==========================================================
// MOUSE GLOW
// ==========================================================

const glow = document.querySelector(".mouse-glow");

document.addEventListener("mousemove", (e) => {

    if (!glow) return;

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});

// ==========================================================
// FADE-IN ANIMATION
// ==========================================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll(
    ".fade-in,.fade-scale,.course-card,.road-step"
).forEach(el => {

    observer.observe(el);

});

// ==========================================================
// SIMPLE COUNTER (animates when scrolled into view)
// ==========================================================

const counters = document.querySelectorAll(".stats h2");

function animateCounter(counter) {

    if (counter.dataset.counted) return;
    counter.dataset.counted = "true";

    const value = counter.innerText;

    const number = parseInt(value);

    if (isNaN(number)) return;

    const suffix = value.replace(String(number), "");

    counter.innerText = "0" + suffix;

    let current = 0;

    const increment = Math.ceil(number / 50) || 1;

    const timer = setInterval(() => {

        current += increment;

        if (current >= number) {

            counter.innerText = number + suffix;

            clearInterval(timer);

        } else {

            counter.innerText = current + suffix;

        }

    }, 25);

}

if ("IntersectionObserver" in window && counters.length) {

    const counterObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);

            }

        });

    }, { threshold: 0.4 });

    counters.forEach(counter => counterObserver.observe(counter));

} else {

    counters.forEach(animateCounter);

}

// ==========================================================
// NAVBAR SHADOW
// ==========================================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 30) {

        navbar.style.boxShadow =
            "0 15px 45px rgba(0,0,0,.45)";

    } else {

        navbar.style.boxShadow =
            "0 8px 25px rgba(0,0,0,.25)";

    }

});
// ==========================================================
// SCROLLSPY — highlight the nav link for the section in view
// ==========================================================

(function () {

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".navbar nav a[href^='#']");

    if (!sections.length || !navLinks.length || !("IntersectionObserver" in window)) return;

    const spy = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const id = entry.target.getAttribute("id");

                navLinks.forEach(link => {

                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") === "#" + id
                    );

                });

            }

        });

    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

    sections.forEach(section => spy.observe(section));

})();

// ==========================================================
// CARD STAGGER — cascading reveal delay per card in a grid
// ==========================================================

document.querySelectorAll(".card-grid").forEach(grid => {

    [...grid.children].forEach((card, i) => {

        card.style.setProperty("--stagger", i % 6);

    });

});
