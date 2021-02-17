"use strict";
window.onload = (_) => {
    const topButton = document.getElementById("topButton");
    topButton.onclick = (_) => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
};
//# sourceMappingURL=scripts.js.map