import readlineSync from 'readline-sync';

let nKms = readlineSync.question("please input kms: ");

let nMiles = nKms/1.609;
nMiles = nMiles.toFixed(4);

let sOutput = nKms + " kms = " + nMiles + " miles.";

console.log(sOutput);
