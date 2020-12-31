"use strict";
window.onload = (_) => {
    const mySlider = document.getElementById("mySlider");
    const value = document.getElementById("mySliderValue");
    value.innerText = "Value: " + mySlider.value;
    mySlider.onchange = (_) => {
        value.innerText = "Value: " + mySlider.value;
    };
    const topButton = document.getElementById("topButton");
    topButton.onclick = (_) => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    const seaCountries = document.getElementById("seaCountries");
    const seaCountryArray = ["Brunei", "Cambodia", "Indonesia", "Laos", "Malaysia",
        "Myanmar (Burma)", "Philippines", "Singapore", "Thailand", "Timor-Leste", "Vietnam"];
    for (const seaCountryElement of seaCountryArray) {
        const options = document.createElement("option");
        options.value = seaCountryElement;
        seaCountries.appendChild(options);
    }
    const cancelButton = document.getElementById("cancelButton");
    const seaSelector = document.getElementById("seaSelector");
    cancelButton.onclick = (_) => {
        seaSelector.value = "";
    };
};
//# sourceMappingURL=another.js.map