window.onload = function (_) {
    // Range Slider
    var mySlider = document.getElementById("mySlider");
    var value = document.getElementById("mySliderValue");
    value.innerText = "Value: " + mySlider.value;
    mySlider.onchange = function (_) {
        value.innerText = "Value: " + mySlider.value;
    };
    // Top Button
    var topButton = document.getElementById("topButton");
    topButton.onclick = function (_) {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    // Country Datalist
    var seaCountries = document.getElementById("seaCountries");
    var seaCountryArray = ["Brunei", "Cambodia", "Indonesia", "Laos", "Malaysia",
        "Myanmar (Burma)", "Philippines", "Singapore", "Thailand", "Timor-Leste", "Vietnam"];
    for (var _i = 0, seaCountryArray_1 = seaCountryArray; _i < seaCountryArray_1.length; _i++) {
        var seaCountryElement = seaCountryArray_1[_i];
        var options = document.createElement("option");
        options.value = seaCountryElement;
        seaCountries.appendChild(options);
    }
    // Cancel Button
    var cancelButton = document.getElementById("cancelButton");
    var seaSelector = document.getElementById("seaSelector");
    cancelButton.onclick = function (_) {
        seaSelector.value = "";
    };
};
