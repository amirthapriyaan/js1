  // number of attempts left
  const attempt= document.getElementById("attemptCount");
  let i=10;
  attempt.innerHTML= i;

checkButton.onclick=(e)=>{

  e.preventDefault();

  // number guessed by user    
    var x = document.getElementById("textBox").value;

  // random number generated by the system
    var randomNum = Math.floor((Math.random()*100)+1);

  // message to display details about the number
    var msg = document.getElementById("message");

    if(attempt.innerHTML==1){   //if the number of attempts become 0
      window.open("sorry.html");
    }

    else if(x==randomNum){   //if the number is correct 
        window.open("congrt.html","_parent");
    }
    else if(x>randomNum){   // if the guess is greater 
        msg.innerHTML = "The number is smaller than your guess";
        i = i-1;
        attempt.innerHTML = i;
    }
    else if(x<randomNum){   // if the guess is smaller
        msg.innerHTML = "The number is greater than your guess";
        i = i-1;
        attempt.innerHTML = i;
    }
    
}
