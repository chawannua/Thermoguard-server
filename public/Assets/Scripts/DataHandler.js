var CurrentDevicedata = "Device1";
const dropdownContentdata = document.getElementById("device-dropdown-content-data");
const dropdownOptionsdata = dropdownContentdata.getElementsByTagName("a");
const currentDeviceTextdata = document.getElementById("current-device-data");
for (let i = 0; i < dropdownOptionsdata.length; i++) {
    dropdownOptionsdata[i].addEventListener("click", function() {
        currentDeviceTextdata.textContent = "Current Device: " + this.textContent;
        CurrentDevicedata = this.textContent;
        console.log(CurrentDevicedata);
    });
}