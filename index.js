/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const numberTxt = document.getElementById("number-txt")
const convertBtn = document.getElementById("convert-btn")
const containerResults = document.getElementById("container-results")

convertBtn.addEventListener("click", function () {
    let inputNumber = Number(numberTxt.value)
    renderResults(inputNumber)
})

function meterToFeet(num) {
    let result = num * 3.281
    return result.toFixed(3)
}

function feetToMeter(num) {
    let result = num / 3.281
    return result.toFixed(3)
}

function literToGallon(num) {
    let result = num / 0.264
    return result.toFixed(3)
}

function gallonToLiter(num) {
    let result = num * 0.264
    return result.toFixed(3)
}

function kgToLbs(num) {
    let result = num * 2.204
    return result.toFixed(3)
}

function lbsToKg(num) {
    let result = num / 2.204
    return result.toFixed(3)
}


function renderResults(num) {
    const content = renderLength(num) + renderVolume(num) + renderMass(num)
    containerResults.innerHTML = ""
    containerResults.innerHTML += content
}

function renderLength(num) {
    const resultContent = `
        <div class="container-result">
            <h2>Length (Meter/Feet)</h2>
            <p> 
                ${num} meters = ${meterToFeet(num)} feet | 
                ${num} feet = ${feetToMeter(num)} meters
            </p>
        </div>`
    return resultContent
}

function renderVolume(num) {
    const resultContent = `
        <div class="container-result">
            <h2>Volume (Liters/Gallons)</h2>
            <p>
                ${num} liters = ${gallonToLiter(num)} gallons | 
                ${num} gallons = ${literToGallon(num)} liters
            </p>
        </div>`
    return resultContent
}

function renderMass(num) {
    const resultContent = `
        <div class="container-result">
            <h2>Mass (Kilograms/Pounds)</h2>
            <p>
                ${num} kilograms = ${kgToLbs(num)} pounds | 
                ${num} pounds = ${lbsToKg(num)} kilograms
            </p>
        </div>`
    return resultContent
}

if (numberTxt.value === "") renderResults(0)
