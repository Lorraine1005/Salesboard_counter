// Product A info
const productA = {
  emoji: "⭐",
  revenue: 200,
  commision: 50,
};

// Product B info
const productB = {
  emoji: "🔥",
  revenue: 300,
  commision: 75,
};
const productAEl = document.getElementById("product-a-btn");
const productBEl = document.getElementById("product-b-btn");
hasMoneyBag = false;
let revenue = 0;
let commission = 0;
let salesCounter = 0;
let achievementsCounter = 0;
let salesDisplayEl = document.getElementById("sales-display-el");
let liveSalesCounterEl = document.getElementById("live-sales-counter-el");
let achievementsDisplayEl = document.getElementById("achievements-display-el");
let achievementsCounterEl = document.getElementById(
  "live-achievement-counter-el"
);
let revenueEl = document.getElementById("revenue-el");
let commissionEl = document.getElementById("commission-el");
let resetEl = document.getElementById("reset-btn");

//BTN EVENT LISTENERS
productAEl.addEventListener("click", function () {
  revenue += 200;
  commission += 50;
  revenueEl.textContent = `$${revenue}`;
  commissionEl.textContent = `$${commission} `;
  renderSalesSymbol("⭐️");
  renderSalesAchievementSymbol();
});
productBEl.addEventListener("click", function () {
  revenue += 300;
  commission += 75;
  revenueEl.textContent = `$${revenue}`;
  commissionEl.textContent = `$${commission} `;
  renderSalesSymbol("🔥");
  renderSalesAchievementSymbol();
});
//SALES DISPLAY RENDER
function renderSalesSymbol(symbol) {
  salesCounter += 1;
  liveSalesCounterEl.textContent = `Live Sale - ${salesCounter}`;
  salesDisplayEl.textContent += symbol;
}
//ACHIEVEMENTS DISPLAY RENDER
function renderSalesAchievementSymbol() {
  if (salesCounter === 1) {
    achievementsDisplayEl.textContent += " 🔔";
    achievementsCounter += 1;
    achievementsCounterEl.textContent = ` Live Achievements - ${achievementsCounter}`;
  } else if (salesCounter === 15) {
    achievementsDisplayEl.textContent += " 🏆";
    achievementsCounter += 1;
    achievementsCounterEl.textContent = ` Live Achievements - ${achievementsCounter}`;
  } else if (revenue >= 2500 && hasMoneyBag === false) {
    achievementsCounter += 1;
    achievementsCounterEl.textContent = ` Live Achievements - ${achievementsCounter}`;
    achievementsDisplayEl.textContent += "💰";
    hasMoneyBag = true;
  } else if (salesCounter === 30) {
    achievementsDisplayEl.textContent += " 🤑";
    achievementsCounter += 1;
    achievementsCounterEl.textContent = ` Live Achievements - ${achievementsCounter}`;
  }
}
//BOARD RESET
resetEl.addEventListener("click", function () {
  hasMoneyBag = false;
  revenue = 0;
  commission = 0;
  salesCounter = 0;
  achievementsCounter = 0;
  salesDisplayEl.textContent = "";
  liveSalesCounterEl.textContent = "Live Sale - 0";
  achievementsDisplayEl.textContent = "";
  achievementsCounterEl.textContent = "Live Achievements - 0";
  revenueEl.textContent = `$0`;
  commissionEl.textContent = `$0`;
});
