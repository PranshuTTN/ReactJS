function score() { 

    let goal = 0; 
    
    function goalScored() { 
        goal++; 
    } 

    function update(val) { 
  
        if (val === "1") goalScored(); 
        else if (val === "2") goalScored(); 
  
        return goal; 
    } 
  
    return update; 
    } 
  
    let scoreTeam1 = score();
    let scoreTeam2 = score();
    let goalsTeam1 = 0;
    let goalsTeam2 = 0;

    function scoreCalculator(objButton) { 
    if (objButton.value == "1"){
        goalsTeam1 = scoreTeam1(objButton.value);
    } else if (objButton.value == "2"){
        goalsTeam2 = scoreTeam2(objButton.value);
    }    
  
    document.getElementById("team1") 
        .innerHTML = "<h2>Team1: " + goalsTeam1 + "</h2>"; 
    document.getElementById("team2") 
        .innerHTML = "<h2>Team2: " + goalsTeam2 + "</h2>"; 
    }
    