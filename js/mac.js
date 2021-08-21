function calculateMacPrice(macMemorySelect, macDeliverySelect) {
    //Memory And Price Event 
    let memoryPrice = document.getElementById("memoryPrice");//Get The Memory Price Tag
    if (macMemorySelect == true) {
        memoryPrice.innerText = 180;//Set The Memory Price
        //Update Total Price
        finalTotalPrice();
    } else {
        memoryPrice.innerText = 0;//Set The Memory Price
        //Update Total Price Again
        finalTotalPrice();
    }
}

function calculateMacPrice2(macStorageSelect) {
    //Let's Get Storage Price Tag
    let storagePriceTag = document.getElementById("storagePrice");
    //Check The Mac Storage Selection
    if (macStorageSelect == true) {
        storagePriceTag.innerText = 180;//Set The More Extend Storage Price
        //Update Total Price
        finalTotalPrice()
    } else if (macStorageSelect == false) {
        storagePriceTag.innerText = 100;//Set The Extend Storage Price
        //Update Total Price
        finalTotalPrice();
    } else {
        storagePriceTag.innerText = 0;//Set The Default Storage Price
        //Update Total Price
        finalTotalPrice();
    }
}

function calculateMacPrice3(macDeliverySelect) {
    //Let's Get Storage Price Tag
    let deliveryPriceTag = document.getElementById("deliveryPrice");
    // let storagePriceTagValue = storagePriceTag.innerText;//Get Storage Price TAg Value
    if (macDeliverySelect == true) {
        deliveryPriceTag.innerText = 20;//Set The Memory Price
        //Update Total Price Again
        finalTotalPrice();
    } else {
        deliveryPriceTag.innerText = 0;//Set The Memory Price
        //Update Total Price Again
        finalTotalPrice();
    }
}


let extendMemoryButton = document.getElementById("extendMemory");//Get The Extra Memory Button
//Apply Event Listener On This Button
extendMemoryButton.addEventListener('click', function () {
    calculateMacPrice(true);
});
let defaultMemoryButton = document.getElementById("defaultMemory");//Get The Default Memory Button
//Apply Event Listener On This Button
defaultMemoryButton.addEventListener('click', function () {
    calculateMacPrice(false);
});

let extendMoreStorageBtn = document.getElementById("extendMoreStorage");//Get The Extend More Storage Button

//Apply Event Listener On This Button
extendMoreStorageBtn.addEventListener('click', function () {
    calculateMacPrice2(true);
});

let extendStorageBtn = document.getElementById("extendStorage");//Get The Extend Storage Button
//Apply Event Listener On This Button
extendStorageBtn.addEventListener('click', function () {
    calculateMacPrice2(false);
});

let defaultStorageBtn = document.getElementById("defaultStorage");//Get The Default Storage Button
//Apply Event Listener On This Button
defaultStorageBtn.addEventListener('click', function () {
    calculateMacPrice2();
});

let paidDeliveryBtn = document.getElementById("paidDelivery");//Get The Delivery Charge Button
//Apply Event Listener On This Button
paidDeliveryBtn.addEventListener('click', function () {
    calculateMacPrice3(true);
});

let defaultDeliveryBtn = document.getElementById("defaultDelivery");//Get The Delivery Free Button
//Apply Event Listener On This Button
defaultDeliveryBtn.addEventListener('click', function () {
    calculateMacPrice3(false);
});

function finalTotalPrice() {
    let bestTotal = document.getElementById("subtotalPrice").innerText;
    let memoryPrice = document.getElementById("memoryPrice").innerText;
    let storagePrice = document.getElementById("storagePrice").innerText;
    let deliveryPrice = document.getElementById("deliveryPrice").innerText;
    let convertTotalPrice = (parseInt(bestTotal) + parseInt(memoryPrice) + parseInt(storagePrice) + parseInt(deliveryPrice));//Convert All Of Prices From String To Intiger
    let subtotalPrice = document.getElementById("totalPrice");//Get The SubTotal Price Tag
    subtotalPrice.innerText = convertTotalPrice;//Set Sub Total Price
    let grandTotalPrice = document.getElementById("grandTotalPrice");
    grandTotalPrice.innerText = subtotalPrice.innerText;//Set The Grand Total Price Of The MAC 
}

// Let's Apply Event Listener On The Promo Code Apply Button
let promoCodeApplyBtn = document.getElementById("applyPromoCodeBtn");
promoCodeApplyBtn.addEventListener("click", function () {
    // Let's Take The Pomo Code 
    let promoCode = "stevekaku"//'stevekaku' Is The Promo Code
    //Let's Take The Input, Where We Type The Promo Code
    let promoCodeInput = document.getElementById("promoCodeInput");
    let promoCodeInputValue = promoCodeInput.value.toLowerCase();
    if (promoCodeInputValue == promoCode) {
        // Let's Get The Discount Percentage
        let discountPercentage = 20;
        let subtotalPrice = document.getElementById("totalPrice");// Get The Subtotal Tag
        subtotalPrice = subtotalPrice.innerText;//GEt The Subtotal Price Tag Value
        //Let's Take The Discount Amount
        let discountAmount = (subtotalPrice / 100) * 20;
        subtotalPrice = subtotalPrice - discountAmount;//Subtotals 
        //Get The Grand Total Tag
        let grandTotalPrice = document.getElementById("grandTotalPrice");
        grandTotalPrice.innerText = subtotalPrice;//Set The Grand Total Price Of The MAC 
        //Let's Clear The Promo Code Field
        promoCodeInput.value = " ";
        // Let's Show The Success Message
        let sccMessage = document.getElementById("successAlert");//Get The Success Alert Tag
        sccMessage.innerText = "You Get $" + discountAmount.toFixed(2) + " Discount!";
    } else if (promoCodeInputValue == "") {
        let sccMessage = document.getElementById("successAlert");//Get The Success Alert Tag
        sccMessage.innerText = " ";
    } else if (promoCodeInputValue != promoCode) {
        //Let's Clear The Promo Code Field
        promoCodeInput.value = " ";
        let sccMessage = document.getElementById("successAlert");//Get The Success Alert Tag
        sccMessage.innerText = " ";
    } else {
        //Let's Clear The Promo Code Field
        promoCodeInput.value = " ";
        let sccMessage = document.getElementById("successAlert");//Get The Success Alert Tag
        sccMessage.innerText = " ";
    }
});