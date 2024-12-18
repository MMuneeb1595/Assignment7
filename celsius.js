const convt = prompt("select conversion type :\n1:celsius to fahrenhiet\n2: Fahrenheit to celsius")
if(convt === "1"){
    const tempera = parseFloat(prompt("Enter the temperature in celsius"));
    const fahrenheit = (tempera * 9/5) + 32;
    console.log(`${tempera}°C is equal to ${fahrenheit.toFixed(2)}°F`);
}
else if(convt === "2"){
    tempera = parseFloat(prompt("Enter the temperature in fahrenheit"));
    const celsius = (tempera - 32) * 5/9;
    console.log(`${tempera}°F is equal to ${celsius.toFixed(2)}°C`);
}
else{
    console.log("Invalid choice. Please enter 1 or 2.");
}