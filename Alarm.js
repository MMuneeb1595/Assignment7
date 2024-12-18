// Is the door open? (yes or no)
// Is motion detected? (yes or no)
let door = prompt("The Door IS Open ( Yes or No) ?");
let motion = prompt("the motion is detected (yes or no) ?");

if(door === "yes" || motion === "yes"){
    console.log("Alarm Triggered");
}
else if(door === "no"  && motion === "no"){
console.log("All safe");
}else{
console.log("Invalid input");
}
