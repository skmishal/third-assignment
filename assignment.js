//https://github.com/skmishal/third-assignment

//solution of the 1st problem:
function kilometerToMeter (km){
    var meter = km * 1000;
    return meter;
}


//solution of the 2nd problem:
function budgetCalculator (watch, phone, laptop) {
    var totalBudget = (watch * 50) + (phone * 100) + (laptop * 500);
    return totalBudget;
}


//solution of the 3rd problem:
function hotelCost (nightSpent){
    var bill = 0;
if (nightSpent <= 10){
    bill = nightSpent * 100;
}
else if (nightSpent <=20){
    var firstPhase = 10 * 100;
    var remaining = nightSpent - 10;
    var secondPhase = remaining * 80;
    bill = firstPhase + secondPhase;
}
else {
    var firstPhase = 10 * 100;
    var secondPhase = 10 * 80;
    var remaining = nightSpent - 20;
    var thirdPhase = remaining * 50;
    bill = firstPhase + secondPhase + thirdPhase;
}
return bill;
}


//solution of the 4th problem:
function megaFriend (names){
    var longest = names[0];
for(var i = 0; i < names.length; i++){
var element = names[i];
if(element > longest){
    longest = element;
}
}
return longest;
}