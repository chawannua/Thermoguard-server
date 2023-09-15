var CurrentDevice = "Device1";
const dropdownContent = document.getElementById("device-dropdown-content");
const dropdownOptions = dropdownContent.getElementsByTagName("a");
const currentDeviceText = document.getElementById("current-device");
for (let i = 0; i < dropdownOptions.length; i++) {
    dropdownOptions[i].addEventListener("click", function() {
        currentDeviceText.textContent = "Current Device: " + this.textContent;
        CurrentDevice = this.textContent;
        console.log(CurrentDevice);
    });
}