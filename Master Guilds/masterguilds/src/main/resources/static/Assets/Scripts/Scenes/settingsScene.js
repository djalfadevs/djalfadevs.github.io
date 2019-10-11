'use strict'

//PANTALLA DE AJUSTES

class settings extends Phaser.Scene{
    //variables para controlar porcentaje de volumen
    
    constructor(){
        super({key:"settings"})
    }
    preload(){
        console.log("settings")
        this.add.image(960,540,'backWood');
    }
    create(){
        var that=this;
        var MVol=5;
        var GVol=5;
        var Evol=5;
        
        var infoBar=this.add.sprite(960,63,'infoBar')
        this.add.text(250,	10,'Settings',{fontFamily:"Museo-700" ,fontSize:'60px',color:'#fff',fontStyle:'bold'});
        this.add.text(520,50,'Personalize your experience',{fontFamily:"Museo-700" ,fontSize:'40px',color:'#fff',fontStyle:'bold'}).alpha=0.6
        this.add.sprite(460,340,'smallInfo').setScale(1);
        this.add.sprite(460,810,'smallInfo').setScale(1);
      
        this.add.sprite(1400,350,'setnsBar').setScale(1);
        this.add.sprite(1400,820,'setnsBar').setScale(1);
        
        this.add.sprite(1220,350,'setNotSel');
        this.add.sprite(1310,350,'setNotSel'); 	
        this.add.sprite(1400,350,'setNotSel');
        this.add.sprite(1490,350,'setNotSel'); 	
        this.add.sprite(1580,350,'setNotSel');
        this.add.sprite(1220,820,'setNotSel');
        this.add.sprite(1310,820,'setNotSel'); 	
        this.add.sprite(1400,820,'setNotSel');
        this.add.sprite(1490,820,'setNotSel'); 	
        this.add.sprite(1580,820,'setNotSel');

        var MVol1=this.add.sprite(1220,350,'setSel');
        var MVol2=this.add.sprite(1310,350,'setSel'); 	
        var MVol3=this.add.sprite(1400,350,'setSel');
        var MVol4=this.add.sprite(1490,350,'setSel'); 	
        var MVol5=this.add.sprite(1580,350,'setSel');
        var EVol1=this.add.sprite(1220,820,'setSel');
        var EVol2=this.add.sprite(1310,820,'setSel'); 	
        var EVol3=this.add.sprite(1400,820,'setSel');
        var EVol4=this.add.sprite(1490,820,'setSel'); 	
        var EVol5=this.add.sprite(1580,820,'setSel');
        var addMB=this.add.sprite(1760,350,'addButt').setScale(1).setInteractive()
        var addEB=this.add.sprite(1760,820,'addButt').setScale(1).setInteractive()
        var subMB=this.add.sprite(1040,350,'removeButt').setScale(1).setInteractive()
        var subEB=this.add.sprite(1040,820,'removeButt').setScale(1).setInteractive()
        this.add.text(360,310,'Music',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
        this.add.text(350,780,'Effects',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
        
        var backButt=this.add.sprite(85,80,'backButt').setScale(1).setInteractive()
        
        backButt.on('pointerdown',function(){this.setFrame(1)});
        backButt.on('pointerup',function(){this.setFrame(0);transition("back",that)})
        backButt.on('pointerout',function(){this.setFrame(0)});

        addMB.on('pointerdown',function(){this.setFrame(1)});
        addMB.on('pointerup',function(){this.setFrame(0);transition("addM",that)})
        addMB.on('pointerout',function(){this.setFrame(0)});
        
        subMB.on('pointerdown',function(){this.setFrame(1)});
        subMB.on('pointerup',function(){this.setFrame(0);transition("subM",that)})
        subMB.on('pointerout',function(){this.setFrame(0)});
        
        addEB.on('pointerdown',function(){this.setFrame(1)});
        addEB.on('pointerup',function(){this.setFrame(0);transition("addE",that)})
        addEB.on('pointerout',function(){this.setFrame(0)});
        
        subEB.on('pointerdown',function(){this.setFrame(1)});
        subEB.on('pointerup',function(){this.setFrame(0);transition("subE",that)})
        subEB.on('pointerout',function(){this.setFrame(0)}); 
        
        
        var transition=function(str,t){
            switch(str){
                case "back":
                    t.scene.transition({target:'title',duration:100});
                    break;
                case "addM":
                	if(MVol<5){
                		MVol+=1;
                		switch(MVol){
                		case 1:
                			MVol1.alpha=1;
                			break;
                		case 2:
                			MVol2.alpha=1;
                			break;
                		case 3:
                			MVol3.alpha=1;
                			break;
                		case 4:
                			MVol4.alpha=1;
                			break;
                		case 5:
                			MVol5.alpha=1;
                			break;
                		}
                	}
                break;
                case "subM":
                	if(MVol>0){
                		
                		switch(MVol){
                		case 1:
                			MVol1.alpha=0;
                			break;
                		case 2:
                			MVol2.alpha=0;
                			break;
                		case 3:
                			MVol3.alpha=0;
                			break;
                		case 4:
                			MVol4.alpha=0;
                			break;
                		case 5:
                			MVol5.alpha=0;
                			break;
                		}
                		MVol-=1;
                	}
                break;
                case "addE":
                	if(EVol<5){
                		EVol+=1;
                		switch(EVol){
                		case 1:
                			EVol1.alpha=1;
                			break;
                		case 2:
                			EVol2.alpha=1;
                			break;
                		case 3:
                			EVol3.alpha=1;
                			break;
                		case 4:
                			EVol4.alpha=1;
                			break;
                		case 5:
                			EVol5.alpha=1;
                			break;
                		}
                	}
                break;
                case "subE":
                	if(EVol>0){
                		
                		switch(EVol){
                		case 1:
                			EVol1.alpha=0;
                			break;
                		case 2:
                			EVol2.alpha=0;
                			break;
                		case 3:
                			EVol3.alpha=0;
                			break;
                		case 4:
                			EVol4.alpha=0;
                			break;
                		case 5:
                			EVol5.alpha=0;
                			break;
                		}
                		EVol-=1;
                	}
                break;
                	
                //potential exit case
                
                    default:
                    break;
            }
        }
    }

    update(){
    	
    	
    }
    
}