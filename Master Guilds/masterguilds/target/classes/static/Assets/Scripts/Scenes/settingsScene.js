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
        this.add.sprite(420,320,'largeButt').setScale(0.6);
        this.add.sprite(420,570,'largeButt').setScale(0.6);
        this.add.sprite(420,820,'largeButt').setScale(0.6);
        this.add.sprite(1300,320,'setnsBar').setScale(1);
        this.add.sprite(1300,570,'setnsBar').setScale(1);
        this.add.sprite(1300,820,'setnsBar').setScale(1);
        this.add.sprite(1120,320,'setNotSel');
        this.add.sprite(1210,320,'setNotSel'); 	
        this.add.sprite(1300,320,'setNotSel');
        this.add.sprite(1390,320,'setNotSel'); 	
        this.add.sprite(1480,320,'setNotSel');
        this.add.sprite(1120,570,'setNotSel');
        this.add.sprite(1210,570,'setNotSel'); 	
        this.add.sprite(1300,570,'setNotSel');
        this.add.sprite(1390,570,'setNotSel'); 	
        this.add.sprite(1480,570,'setNotSel');
        this.add.sprite(1120,820,'setNotSel');
        this.add.sprite(1210,820,'setNotSel'); 	
        this.add.sprite(1300,820,'setNotSel');
        this.add.sprite(1390,820,'setNotSel'); 	
        this.add.sprite(1480,820,'setNotSel');
        var GVol1=this.add.sprite(1120,320,'setSel');
        var GVol2=this.add.sprite(1210,320,'setSel'); 	
        var GVol3=this.add.sprite(1300,320,'setSel');
        var GVol4=this.add.sprite(1390,320,'setSel'); 	
        var GVol5=this.add.sprite(1480,320,'setSel');
        var MVol1=this.add.sprite(1120,570,'setSel');
        var MVol2=this.add.sprite(1210,570,'setSel'); 	
        var MVol3=this.add.sprite(1300,570,'setSel');
        var MVol4=this.add.sprite(1390,570,'setSel'); 	
        var MVol5=this.add.sprite(1480,570,'setSel');
        var EVol1=this.add.sprite(1120,820,'setSel');
        var EVol2=this.add.sprite(1210,820,'setSel'); 	
        var EVol3=this.add.sprite(1300,820,'setSel');
        var EVol4=this.add.sprite(1390,820,'setSel'); 	
        var EVol5=this.add.sprite(1480,820,'setSel');
        var addGB=this.add.sprite(1600,320,'addButt').setScale(0.5).setInteractive()
        var addMB=this.add.sprite(1600,570,'addButt').setScale(0.5).setInteractive()
        var addEB=this.add.sprite(1600,820,'addButt').setScale(0.5).setInteractive()
        var subGB=this.add.sprite(1000,320,'removeButt').setScale(0.5).setInteractive()
        var subMB=this.add.sprite(1000,570,'removeButt').setScale(0.5).setInteractive()
        var subEB=this.add.sprite(1000,820,'removeButt').setScale(0.5).setInteractive()
        this.add.text(285,280,'General',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
        this.add.text(320,530,'Music',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
        this.add.text(290,780,'Effects',{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
        
        var backButt=this.add.sprite(100,100,'backButt').setScale(0.5).setInteractive()
        
        backButt.on('pointerdown',function(){this.setFrame(1)});
        backButt.on('pointerup',function(){this.setFrame(0);transition("back",that)})
        backButt.on('pointerout',function(){this.setFrame(0)});

        addGB.on('pointerdown',function(){this.setFrame(1)});
        addGB.on('pointerup',function(){this.setFrame(0);transition("addG",that)})
        addGB.on('pointerout',function(){this.setFrame(0)});
        
        subGB.on('pointerdown',function(){this.setFrame(1)});
        subGB.on('pointerup',function(){this.setFrame(0);transition("subG",that)})
        subGB.on('pointerout',function(){this.setFrame(0)});
        
        var transition=function(str,t){
        	console.log(GVol)
            switch(str){
                case "back":
                    t.scene.transition({target:'title',duration:100});
                    break;
                case "addG":
                	if(GVol<5){
                		GVol+=1;
                		switch(GVol){
                		case 1:
                			GVol1.alpha=1;
                			break;
                		case 2:
                			GVol2.alpha=1;
                			break;
                		case 3:
                			GVol3.alpha=1;
                			break;
                		case 4:
                			GVol4.alpha=1;
                			break;
                		case 5:
                			GVol5.alpha=1;
                			break;
                		}
                	}
                break;
                case "subG":
                	if(GVol>0){
                		
                		switch(GVol){
                		case 1:
                			GVol1.alpha=0;
                			break;
                		case 2:
                			GVol2.alpha=0;
                			break;
                		case 3:
                			GVol3.alpha=0;
                			break;
                		case 4:
                			GVol4.alpha=0;
                			break;
                		case 5:
                			GVol5.alpha=0;
                			break;
                		}
                		GVol-=1;
                	}
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
                		GVol-=1;
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