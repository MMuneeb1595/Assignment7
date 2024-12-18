let tempera =prompt("enter a temperature in celsius");
// convert input into number using parseint 
tempera = parseInt(tempera);

if(tempera <= 0){
    console.log("Freezing");
}else if(tempera > 0 && tempera <=15){
    console.log("Cold");
}else if(tempera > 15 && tempera <= 30){
    console.log("Warm");
}else{
    console.log("Hot");
}
