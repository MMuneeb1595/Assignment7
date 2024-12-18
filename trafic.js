let color = prompt("enter color red , green , yellow for trafic light");
if(color === "red"){
    console.log("stop");
}else if(color === "yellow"){
    console.log("Slow Down");
}else if(color === "green"){
    console.log("Go");
}else{
    console.log("invalid color");
}