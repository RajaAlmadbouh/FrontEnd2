var fuelEconomy = parseFloat(document.getElementById('fuelEconomyForm'));
var distanceTraveld = parseFloat(document.getElementById('distanceTraveld'));
var carFuel = parseFloat(document.getElementById('carFuel'));
var priceOfGasoline = parseFloat(document.getElementById('priceOfGasoline'));



console.log(priceOfGasoline);

fuelEconomy.addEventListener('submit', function (e) {
    e.preventDefault();

    // Check if inputs are valid numbers
    if (isNaN(distanceTraveld.value) || isNaN(carFuel.value) || isNaN(priceOfGasoline.value)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    // Perform calculations
    var vDistanceTraveled = distanceTraveld.value / 100.0;
    var carFuelPrice = carFuel.value * priceOfGasoline.value;
    var fuelConsumption = vDistanceTraveled * carFuelPrice.value;

    // Display the result
    document.getElementById("fuelConsumptionResult").innerHTML = "Amount of fuel consumption in Jordanian dinars JD: " + fuelConsumption + " JD.";


});

     /*   function calculateFuelConsumption() {
            // Get input values
            var distanceTraveled = parseFloat(document.getElementById("distanceTraveled").value);
            var carFuel = parseFloat(document.getElementById("carFuel").value);
            var priceOfGasoline = parseFloat(document.getElementById("priceOfGasoline").value);

            // Check if inputs are valid numbers
            if (isNaN(distanceTraveled) || isNaN(carFuel) || isNaN(priceOfGasoline)) {
                alert("Please enter valid numbers for all fields.");
                return;
            }

            // Perform calculations
            var vDistanceTraveled = distanceTraveled / 100.0;
            var carFuelPrice = carFuel * priceOfGasoline;
            var fuelConsumption = vDistanceTraveled * carFuelPrice;

            // Display the result
            document.getElementById("fuelConsumptionResult").innerHTML = "Amount of fuel consumption in Jordanian dinars JD: " + fuelConsumption + " JD.";
        }*/