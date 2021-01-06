window.onload = function (_) {
    // Top Button
    var topButton = document.getElementById("topButton");
    topButton.onclick = function (_) {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
};
