// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {
    return [drivers[0],drivers[1]];
    
}

console.log(returnFirstTwoDrivers)


const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = (fare) => {
    return function(fare) {
    return fare*fare;
}
}

const fareDoubler = (createFareMultiplier) => {
    return createFareMultiplier*2;
    }
    
const fareTripler = (createFareMultiplier) => {
    return createFareMultiplier*3;
}

function selectDifferentDrivers(drivers,fn) {
   return fn(drivers);
}