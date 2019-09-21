var synergyFunction0 = function(input){
    for(var i=0;i<input.team.length;i++){
        team[i].evasion+=team[i].evasion*0.1    
    }
    this.advantages.push({ID:"0",name:"speed",level:1})
}

var synergyFunction1 = function(input){
   var lvl = Math.trunc(this.herosFaction[0]/2)
   for(var i=0;i<input.team.length;i++){
        team[i].attack+=team[i].attack*lvl*0.1   
    }
    
    this.advantages.push({ID:"1_"+lvl,name:"attack",level:lvl}) 
}

var synergyFunction2 = function(input){
     var lvl = Math.trunc(this.herosFaction[1]/2)
    for(var i=0;i<input.team.length;i++){
        team[i].defence+=team[i].defence*lvl*0.1    
    }
   
    this.advantages.push({ID:"2_"+lvl,name:"defence",level:lvl}) 
}

var synergyFunction3 = function(input){
     var lvl = Math.trunc(this.herosFaction[2]/2)
    for(var i=0;i<input.team.length;i++){
        team[i].crit_hit_chance+=team[i].crit_hit_chance*lvl*0.1    
    }
   
    this.advantages.push({ID:"3_"+lvl,name:"critical hit chance",level:lvl}) 
}