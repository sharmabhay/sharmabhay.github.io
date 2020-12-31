window.onload = (_: Event) => {
    // Range Slider
    const mySlider = document.getElementById("mySlider") as HTMLInputElement;
    const value = document.getElementById("mySliderValue") as HTMLParagraphElement;
    value.innerText = "Value: " + mySlider.value;

    mySlider.onchange = (_: Event) => {
        value.innerText = "Value: " + mySlider.value;
    };

    // Top Button
    const topButton = document.getElementById("topButton") as HTMLButtonElement;

    topButton.onclick = (_: Event) => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    // Country Datalist
    const seaCountries = document.getElementById("seaCountries") as HTMLDataListElement;
    const seaCountryArray = ["Brunei", "Cambodia", "Indonesia", "Laos", "Malaysia",
        "Myanmar (Burma)", "Philippines", "Singapore", "Thailand", "Timor-Leste", "Vietnam"];

    for (const seaCountryElement of seaCountryArray) {
        const options = document.createElement("option");
        options.value = seaCountryElement;
        seaCountries.appendChild(options);
    }

    // Cancel Button
    const cancelButton = document.getElementById("cancelButton") as HTMLButtonElement;
    const seaSelector = document.getElementById("seaSelector") as HTMLInputElement;

    cancelButton.onclick = (_: Event) => {
        seaSelector.value = "";
    };
};