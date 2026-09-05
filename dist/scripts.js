"use strict";
const NAV_SHRINK_AT = 100;
const SCROLL_SPY_OFFSET = 120;
const SCROLL_ANCHOR_OFFSET = 70;
const SECTION_IDS = ["about", "experience", "projects", "resume", "contact"];
let currentHash = window.location.hash || "";
function getPageY(el) {
    return el.getBoundingClientRect().top + window.scrollY;
}
function hideNavbarCollapse() {
    var _a;
    const $ = window.jQuery;
    if ($) {
        $(".navbar-collapse").collapse("hide");
        return;
    }
    (_a = document.getElementById("navbarResponsive")) === null || _a === void 0 ? void 0 : _a.classList.remove("show");
}
function updateNavbarShrink() {
    const nav = document.getElementById("mainNav");
    if (!nav) {
        return;
    }
    nav.classList.toggle("navbar-shrink", window.scrollY > NAV_SHRINK_AT);
}
function setUrlHash(hash) {
    if (!hash || hash === currentHash) {
        return;
    }
    currentHash = hash;
    history.replaceState(null, "", hash);
}
function updateScrollSpy() {
    const scrollPos = window.scrollY + SCROLL_SPY_OFFSET;
    const isAtBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 10;
    let activeId = null;
    if (isAtBottom) {
        activeId = SECTION_IDS[SECTION_IDS.length - 1];
    }
    else {
        for (const id of SECTION_IDS) {
            const el = document.getElementById(id);
            if (el && getPageY(el) <= scrollPos) {
                activeId = id;
            }
        }
    }
    const links = document.querySelectorAll("#mainNav .nav-link.js-scroll-trigger");
    links.forEach((link) => {
        const href = link.getAttribute("href");
        const id = href && href.startsWith("#") ? href.slice(1) : "";
        if (id === "resume" || id === "contact") {
            link.classList.toggle("active", activeId === "resume" || activeId === "contact");
        }
        else {
            link.classList.toggle("active", SECTION_IDS.includes(id) && id === activeId);
        }
    });
    const desiredHash = activeId ? `#${activeId}` : "#home";
    setUrlHash(desiredHash);
}
function scrollToAnchor(hash) {
    if (hash === "#home" || hash === "#") {
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
            setUrlHash(href);
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
function loadResumePreview() {
    var _a, _b;
    const viewer = document.getElementById("resumeViewer");
    if (!viewer) {
        return;
    }
    if (!viewer.getAttribute("data")) {
        const src = (_b = (_a = viewer.dataset.src) !== null && _a !== void 0 ? _a : viewer.getAttribute("data-src")) !== null && _b !== void 0 ? _b : "";
        if (src) {
            viewer.setAttribute("data", src);
        }
    }
}
function initResumePreview() {
    const modal = document.getElementById("resumeModal");
    const previewButton = document.querySelector('button[data-target="#resumeModal"]');
    if (previewButton) {
        previewButton.addEventListener("click", () => {
            loadResumePreview();
        });
    }
    if (modal) {
        modal.addEventListener("shown.bs.modal", () => {
            loadResumePreview();
        });
    }
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
    initResumePreview();
    if (window.location.hash) {
        requestAnimationFrame(() => {
            scrollToAnchor(window.location.hash);
        });
    }
}
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
}
else {
    init();
}
