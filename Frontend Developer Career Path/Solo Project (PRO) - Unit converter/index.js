/*
1 meter = 3.281 feet
? meter = 20 feet


1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const unit = document.getElementById("unit");
const convert = document.querySelector("button");
const length = document.getElementById("Length");
const liter = document.getElementById("Liters");
const kilogram = document.getElementById("Kilograms");

const meterToFt = 3.281;
const literToGl = 0.264;
const kiloToPound = 2.204;

convert.addEventListener("click", function() {
    let units = unit.value;

    length.textContent = `${units} meters = 
    ${Number((units * meterToFt).toFixed(3))}  
    feet | ${units} feet = 
    ${Number((units / meterToFt).toFixed(3))} meter`

    liter.textContent = `${units} liters = 
    ${Number((units * literToGl).toFixed(3))}  
    gallons | ${units} gallons = 
    ${Number((units / literToGl).toFixed(3))} liters`

    kilogram.textContent = `${units} kilos = 
    ${Number((units * kiloToPound).toFixed(3))}  
    pounds | ${units} pounds = 
    ${Number((units / kiloToPound).toFixed(3))} kilos`
    //console.log(calc);
})