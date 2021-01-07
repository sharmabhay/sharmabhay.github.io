window.onload = (_: Event) => {
    // Go to Top Button
    const topButton = document.getElementById("topButton") as HTMLButtonElement;

    topButton.onclick = (_: Event) => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
};