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

function fetchData() {
    const googleSheetURL = 'https://docs.google.com/spreadsheets/d/1MkCIXPtFRnHyluy9qfIZXl2MzLan5zm_2iAHLcF4b4A/gviz/tq?tqx=out:csv&sheet=' +CurrentDevice;

   

    fetch(googleSheetURL)
        .then(response => response.text())
        .then(data => {

        const Timegaming = document.getElementById("lastdata");
        
        
        const dataArray = data.split('\n').map(row => row.split(','));
        
        Timegaming.textContent = "Last Data Recived :"+dataArray[1][1].replace(/"/g, '');
        
        const HeatStrokeIndex = document.getElementById("hi-value");
        HeatStrokeIndex.textContent = dataArray[1][8].replace(/"/g, '') + " ";
        var spanElement = document.createElement("span");
        var hilv = parseInt(dataArray[1][8].replace(/"/g, ''));
        spanElement.className = "unit-text"
        const HeatStrokeLvs = {
            0: "Safe",
            1: "Caution",
            2: "Extreme Caution",
            3: "Danger",
            4: "Extreme Danger!"
        };

        const Colors = {
            0: "#41f1b6",
            1: "#dcf141",
            2: "#ffbb55",
            3: "#ffbb55",
            4: "#ff7782",
        }
        spanElement.textContent = "  (" + HeatStrokeLvs[hilv] + ")";
        spanElement.style.color = Colors[hilv]
        
        
        HeatStrokeIndex.appendChild(spanElement);

        function updatehi(value) {
            const needle = document.getElementById("hi-meter");
            value = Math.max(0, Math.min(4, value));
            const rotation = (value / 4) * 180;
            needle.style.transform = `translateX(-50%) rotate(${rotation -90}deg)`;
        }

        updatehi(hilv);

        const AQI = document.getElementById("aqi-value");
        AQI.textContent = dataArray[1][6].replace(/"/g, '');
        var spanElement = document.createElement("span");
        var aqilv = parseInt(dataArray[1][6].replace(/"/g, ''));
        spanElement.className = "unit-text"

        let aqitext;
        let aqicolor;
        if (aqilv >= 0 && aqilv <= 50) {
            aqitext = "Good / Safe";
            aqicolor = Colors[0];
        } else {
            aqitext = "Moderate";
            aqicolor = Colors[3];
        }

        spanElement.textContent = "  (" + aqitext + ")";
        spanElement.style.color = aqicolor
        AQI.appendChild(spanElement);
        function updateaqi(value) {
            const needle = document.getElementById("aqi-meter");
            value = Math.max(0, Math.min(500, value));
            const rotation = (value / 500) * 180;
            needle.style.transform = `translateX(-50%) rotate(${rotation -90}deg)`;
        }

        updateaqi(aqilv);
       
        const UVIndex = document.getElementById("uv-value");
        UVIndex.textContent = dataArray[1][7].replace(/"/g, '');
        var spanElement = document.createElement("span");
        var uvlv = parseInt(dataArray[1][7].replace(/"/g, ''));
        
        let uvtext;
        let uvcolor;
        if (uvlv >= 1 && uvlv <= 2) {
            uvtext = "Low / Safe";
            uvcolor = Colors[0];
        } else {
            uvtext = "Moderate";
            uvcolor = Colors[3];
        }
        
        spanElement.className = "unit-text"
        spanElement.textContent = "  (" + uvtext + ")";
        spanElement.style.color = uvcolor
        UVIndex.appendChild(spanElement);

        function updateuv(value) {
            const needle = document.getElementById("uv-meter");
            value = Math.max(0, Math.min(11, value));
            const rotation = (value / 11) * 180;
            needle.style.transform = `translateX(-50%) rotate(${rotation -90}deg)`;
        }

        updateuv(uvlv);

        // const RiskLV  = document.getElementById("RiskLV");
        // RiskLV.textContent = dataArray[1][9].replace(/"/g, '');
    
        const Humidity = document.getElementById("humidity");
        Humidity.textContent = dataArray[1][3].replace(/"/g, '');
        var spanElement = document.createElement("span");
        spanElement.className = "unit-text"
        spanElement.textContent = " %";
        Humidity.appendChild(spanElement);
        const Pm25 = document.getElementById("pm25")
        Pm25.textContent = dataArray[1][5].replace(/"/g, '');
        var spanElement = document.createElement("span");
        spanElement.className = "unit-text"
        spanElement.textContent = " ug/m³";
        Pm25.appendChild(spanElement);

        const Temperature = document.getElementById("temperature");
        Temperature.textContent = dataArray[1][2].replace(/"/g, '');
        var spanElement = document.createElement("span");
        spanElement.className = "unit-text"
        spanElement.textContent = " °C";
        Temperature.appendChild(spanElement);
        const AirPressure = document.getElementById("pressure");
        AirPressure.textContent = dataArray[1][4].replace(/"/g, '');
        var spanElement = document.createElement("span");
        spanElement.className = "unit-text"
        spanElement.textContent = " hPa";
        AirPressure.appendChild(spanElement);
    })
    .catch(error => console.error('Error fetching data:', error));
}

    fetchData();
    setInterval(fetchData, 1000);