var synergyFunction0 = function(input){
    for(var i=0;i<input.team.length;i++){
        input.team[i].evasion+=input.team[i].evasion*0.1    
    }
    input.synergies.push({ID:"0",name:"speed",level:1})
}

var synergyFunction1 = function(input){
   var lvl = Math.trunc(input.herosFaction[0]/2)
   for(var i=0;i<input.team.length;i++){
        input.team[i].attack+=input.team[i].attack*lvl*0.1   
    }
    
    input.synergies.push({ID:"1_"+lvl,name:"attack",level:lvl}) 
}

var synergyFunction2 = function(input){
     var lvl = Math.trunc(input.herosFaction[1]/2)
    for(var i=0;i<input.team.length;i++){
        input.team[i].defence+=input.team[i].defence*lvl*0.1    
    }
   
    input.synergies.push({ID:"2_"+lvl,name:"defence",level:lvl}) 
}

var synergyFunction3 = function(input){
     var lvl = Math.trunc(input.herosFaction[2]/2)
    for(var i=0;i<input.team.length;i++){
        input.team[i].crit_hit_chance+=input.team[i].crit_hit_chance*lvl*0.1    
    }
   
    input.synergies.push({ID:"3_"+lvl,name:"critical hit chance",level:lvl}) 
}