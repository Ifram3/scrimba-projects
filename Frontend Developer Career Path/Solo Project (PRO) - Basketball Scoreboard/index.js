let countEL = document.getElementById("count_el")
let pointEL = document.getElementById("point_el")
let qtrEL = document.getElementById("qtr_el")
count = 0
point = 0
next = 0

function plusOne() {
    count += 1
    countEL.textContent = count
}

function plusTwo() {
    count += 2
    countEL.textContent = count
}

function plusThree() {
    count += 3
    countEL.textContent = count
}

//

function addOne() {
    point += 1
    pointEL.textContent = point
}

function addTwo() {
    point += 2
    pointEL.textContent = point
}

function addThree() {
    point += 3
    pointEL.textContent = point
}

//

function nextQuarter() {
    next += 1;
    qtrEL.textContent = next
}

//

function fresh() {
    qtrEL.textContent = 0
    pointEL.textContent = 0
    countEL.textContent = 0
}