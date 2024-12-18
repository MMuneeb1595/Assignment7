let toss = prompt("1 for head \n0 for tails");
        let result = Math.floor(Math.random() * 2);
        if(toss === "1" && result === 1){
            console.log("You Win!");
            }
        else if(toss === "0" && result === 0){
            console.log("You Win!");
        }
        else{
            console.log("You Lose!");   
        }