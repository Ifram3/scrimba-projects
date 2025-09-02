let homeScoreEl = document.getElementById("homeScore");
let guestScoreEl = document.getElementById("guestScore");
let currentQuarterEl = document.getElementById("currentQuarter");
let homeCount = 0;
let guestCount = 0;
let quarterCount = 1;

//HOME_SCORE
function increaseHomeScoreOne() {
    homeCount += 1;
    homeScoreEl.textContent = homeCount;
}

function increaseHomeScoreTwo() {
    homeCount += 2;
    homeScoreEl.textContent = homeCount;
}

function increaseHomeScoreThree() {
    homeCount += 3;
    homeScoreEl.textContent = homeCount;
}

//GUEST_SCORE
function increaseGuestScoreOne() {
    guestCount += 1;
    guestScoreEl.textContent = guestCount;
}

function increaseGuestScoreTwo() {
    guestCount += 2;
    guestScoreEl.textContent = guestCount;
}

function increaseGuestScoreThree() {
    guestCount += 3;
    guestScoreEl.textContent = guestCount;
}

//NEXT_QUARTER 
function nextQuarter() {
    quarterCount += 1;
    currentQuarterEl.textContent = quarterCount;
}

//NEW_GAME
function resetGame() {
    homeCount = 0;
    guestCount = 0;
    quarterCount = 1;
    homeScoreEl.textContent = homeCount;
    guestScoreEl.textContent = guestCount;
    currentQuarterEl.textContent = quarterCount;
}