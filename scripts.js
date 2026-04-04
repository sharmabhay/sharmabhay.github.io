"use strict";
const NAV_SHRINK_AT = 100;
const SCROLL_SPY_OFFSET = 120;
const SCROLL_ANCHOR_OFFSET = 70;
const SECTION_IDS = ["about", "experience", "projects", "contact"];
function getPageY(el) {
    return el.getBoundingClientRect().top + window.scrollY;
}
function hideNavbarCollapse() {
    const $ = window.jQuery;
    if ($) {
        $(".navbar-collapse").collapse("hide");
        return;
    }
    document.getElementById("navbarResponsive")?.classList.remove("show");
}
function updateNavbarShrink() {
    const nav = document.getElementById("mainNav");
    if (!nav) {
        return;
    }
    nav.classList.toggle("navbar-shrink", window.scrollY > NAV_SHRINK_AT);
}
function updateScrollSpy() {
    const scrollPos = window.scrollY + SCROLL_SPY_OFFSET;
    let activeId = null;
    for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && getPageY(el) <= scrollPos) {
            activeId = id;
        }
    }
    const links = document.querySelectorAll("#mainNav .nav-link.js-scroll-trigger");
    links.forEach((link) => {
        const href = link.getAttribute("href");
        const id = href && href.startsWith("#") ? href.slice(1) : "";
        if (id === "resume" || id === "contact") {
            link.classList.toggle("active", activeId === "contact");
        }
        else {
            link.classList.toggle("active", SECTION_IDS.includes(id) && id === activeId);
        }
    });
}
function scrollToAnchor(hash) {
    if (hash === "#page-top" || hash === "#") {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        return;
    }
    const target = document.querySelector(hash);
    if (!target) {
        return;
    }
    const top = target.getBoundingClientRect().top + window.pageYOffset - SCROLL_ANCHOR_OFFSET;
    window.scrollTo({ top, left: 0, behavior: "smooth" });
}
function initScrollTriggers() {
    document.querySelectorAll("a.js-scroll-trigger[href^='#']").forEach((anchor) => {
        anchor.addEventListener("click", (event) => {
            const href = anchor.getAttribute("href");
            if (!href || href === "#") {
                return;
            }
            event.preventDefault();
            scrollToAnchor(href);
            hideNavbarCollapse();
        });
    });
}
function initScrollListeners() {
    const onScroll = () => {
        updateNavbarShrink();
        updateScrollSpy();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
}
function initTopButton() {
    const topButton = document.getElementById("topButton");
    if (topButton) {
        topButton.addEventListener("click", () => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        });
    }
}
function initYear() {
    const yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.textContent = String(new Date().getFullYear());
    }
}
function init() {
    initYear();
    initTopButton();
    initScrollTriggers();
    initScrollListeners();
}
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
}
else {
    init();
}
