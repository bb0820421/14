
    function calculateRelativeHumidity() {
      var temperature = parseFloat(document.getElementById("temperature").value);
      var dewPoint = parseFloat(document.getElementById("dewPoint").value);
      
      if (isNaN(temperature) || isNaN(dewPoint)) {
        document.getElementById("result").value = "請輸入有效數字";
        return;
      }

      var relativeHumidity = Math.round(
        100 * (Math.exp((17.625 * dewPoint) / (243.04 + dewPoint)) / Math.exp((17.625 * temperature) / (243.04 + temperature)))
      );

      document.getElementById("result").value = relativeHumidity + "%";
    }
  