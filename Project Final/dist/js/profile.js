// change pages and active menu
let setting = document.getElementById("setting");
const passwordSetting = document.getElementById("passwordSetting");
let transaction = document.getElementById("transaction");
let subscription = document.getElementById("subscription");
let subscriptionPackage = document.getElementById("subscriptionPackage");
let bookmark = document.getElementById("bookmark");
let btnSetting = document.getElementById("btnSetting");
let btnPasswordSetting = document.getElementById("btnPasswordSetting");
let btnTransaction = document.getElementById("btnTransaction");
let btnSubscription = document.getElementById("btnSubscription");
let btnBookmark = document.getElementById("btnBookmark");

function goSetting() {
  goReset();
  setting.style.display = "block";
  btnSetting.classList.add("link-menu-active");
}

function goPasswordSetting() {
  goReset();
  passwordSetting.style.display = "block";
  btnPasswordSetting.classList.add("link-menu-active");
}

function goTransaction() {
  goReset();
  transaction.style.display = "block";
  btnTransaction.classList.add("link-menu-active");
}

function goSubscription() {
  goReset();
  subscription.style.display = "block";
  btnSubscription.classList.add("link-menu-active");
}

function goBuySubscription() {
  goReset();
  subscriptionPackage.style.display = "block";
}

function goBookmark() {
  goReset();
  bookmark.style.display = "block";
  btnBookmark.classList.add("link-menu-active");
}

function goReset() {
  transaction.style.display = "none";
  setting.style.display = "none";
  passwordSetting.style.display = "none";
  subscription.style.display = "none";
  subscriptionPackage.style.display = "none";
  bookmark.style.display = "none";
  btnSubscription.classList.remove("link-menu-active");
  btnBookmark.classList.remove("link-menu-active");
  btnSetting.classList.remove("link-menu-active");
  btnPasswordSetting.classList.remove("link-menu-active");
  btnTransaction.classList.remove("link-menu-active");
}
// change pages and active menu end

// subscription active menu
let btnSubscriptionActive = document.getElementById("btnSubscriptionActive");
let btnSubscriptionExpired = document.getElementById("btnSubscriptionExpired");

function btnSubscriptionActiveOn() {
  btnSubscriptionReset();
  btnSubscriptionActive.classList.add("link-border-b-active");
}

function btnSubscriptionExpiredOn() {
  btnSubscriptionReset();
  btnSubscriptionExpired.classList.add("link-border-b-active");
}

function btnSubscriptionReset() {
  btnSubscriptionActive.classList.remove("link-border-b-active");
  btnSubscriptionExpired.classList.remove("link-border-b-active");
}

// subscription active menu end

// transaction active menu

let btnTransactionAll = document.getElementById("btnTransactionAll");
let btnTransactionPending = document.getElementById("btnTransactionPending");
let btnTransactionFailed = document.getElementById("btnTransactionFailed");
let btnTransactionSuccess = document.getElementById("btnTransactionSuccess");

function btnTransactionAllOn() {
  btnTransactionReset();
  btnTransactionAll.classList.add("link-border-b-active");
}

function btnTransactionPendingOn() {
  btnTransactionReset();
  btnTransactionPending.classList.add("link-border-b-active");
}

function btnTransactionFailedOn() {
  btnTransactionReset();
  btnTransactionFailed.classList.add("link-border-b-active");
}

function btnTransactionSuccessOn() {
  btnTransactionReset();
  btnTransactionSuccess.classList.add("link-border-b-active");
}

function btnTransactionReset() {
  btnTransactionAll.classList.remove("link-border-b-active");
  btnTransactionPending.classList.remove("link-border-b-active");
  btnTransactionFailed.classList.remove("link-border-b-active");
  btnTransactionSuccess.classList.remove("link-border-b-active");
}

// transaction active menu end
