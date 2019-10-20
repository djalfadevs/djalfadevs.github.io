'use strict'

//PANTALLA PARA ELEGIR NIVEL A JUGAR
class chapter extends Phaser.Scene{
    constructor(){
        super({key: 'chapter'})
        this.extend={click:null}
    }
    preload(){
        this.add.image(960,540,'backWood');
        this.add.sprite(960,63,'infoBar');
        this.add.image(530,580,'largeInfo')
    }
    create(){
    	
    	//habria que leer aqui el nivel en el que estamos!!!!!!
    	//hacer inputenabled false y alphas aqui, NO LUEGO, AQUI!
    	game.global.lastScene="chapter";
    	var that=this;
    	this.extend.click=this.sound.add('click');
    	this.extend.click.setVolume(game.global.user.evol)
    	var backButt=this.add.sprite(85,80,'backButt').setInteractive()          
        backButt.on('pointerdown',function(){this.setFrame(1)})
        backButt.on('pointerup',function(){this.setFrame(0);game.global.simulation.SetSimulationtoStartState();that.scene.transition({target:'mainMenu',duration:100})})
        
        var en1=this.add.text(250,10,'Story',{fontFamily:"Museo-700" ,fontSize:'60px',color:'#fff',fontStyle:'bold'});
        var en2=this.add.text(450,50,'Choose a chapter',{fontFamily:"Museo-700" ,fontSize:'40px',color:'#fff',fontStyle:'bold'})

        var es1=this.add.text(250,10,'Historia',{fontFamily:"Museo-700" ,fontSize:'60px',color:'#fff',fontStyle:'bold'});
        var es2=this.add.text(480,50,'Elige un capitulo',{fontFamily:"Museo-700" ,fontSize:'40px',color:'#fff',fontStyle:'bold'})

        
        var world1=this.add.sprite(1530,180,'AzonButt').setInteractive();
    	var world2=this.add.sprite(1530,380,'FertenButt')
    	var world3=this.add.sprite(1530,580,'KwinButt')
    	var world4=this.add.sprite(1530,780,'largePlayHistoryButt')
    	var world5=this.add.sprite(1530,980,'largeFinalButt')
    	
    	world1.on('pointerdown',function(){this.setFrame(1)
            SelectMisionAndAddDatatoSimulation(0);
        })
    	world2.on('pointerdown',function(){this.setFrame(1)
            SelectMisionAndAddDatatoSimulation(1);
        })
    	world3.on('pointerdown',function(){this.setFrame(1)
            SelectMisionAndAddDatatoSimulation(2);
        })
    	world4.on('pointerdown',function(){this.setFrame(1)
            SelectMisionAndAddDatatoSimulation(3);
        })
    	world5.on('pointerdown',function(){this.setFrame(1)
            SelectMisionAndAddDatatoSimulation(4);
        })
    	
    	world1.on('pointerout',function(){this.setFrame(0)})
    	world2.on('pointerout',function(){this.setFrame(0)})
    	world3.on('pointerout',function(){this.setFrame(0)})
    	world4.on('pointerout',function(){this.setFrame(0)})
    	world5.on('pointerout',function(){this.setFrame(0)})
    	
    	world1.on('pointerup',function(){this.setFrame(0);infoShow(1,"world1")})
    	world2.on('pointerup',function(){this.setFrame(0);infoShow(2,"world2")})
    	world3.on('pointerup',function(){this.setFrame(0);infoShow(3,"world3")})
    	world4.on('pointerup',function(){this.setFrame(0);infoShow(4,"world4")})
    	world5.on('pointerup',function(){this.setFrame(0);infoShow(5,"world5")})
    	
    	world2.alpha=0;
    	world3.alpha=0;
    	world4.alpha=0;
    	world5.alpha=0;
    	
    	var Xworld2=this.add.sprite(1530,380,'lockButt').setInteractive();
    	var Xworld3=this.add.sprite(1530,580,'lockButt').setInteractive();
    	var Xworld4=this.add.sprite(1530,780,'lockButt').setInteractive();
    	var Xworld5=this.add.sprite(1530,980,'lockButt').setInteractive();
    	
    	Xworld2.on('pointerup',function(){this.setFrame(0);infoShow(2,"locked")})
    	Xworld3.on('pointerup',function(){this.setFrame(0);infoShow(3,"locked")})
    	Xworld4.on('pointerup',function(){this.setFrame(0);infoShow(4,"locked")})
    	Xworld5.on('pointerup',function(){this.setFrame(0);infoShow(5,"locked")})
    	
    	var target;
    	var infoText2=this.add.text(420,300,'',{fontFamily:"Museo-700" ,fontSize:'50px',color:'#000',fontStyle:'bold'});
    	var infoText1=this.add.text(170,400,'',{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold',wordWrap:{width:700}});
    	
    	var startButt=this.add.sprite(520,830,'largeButt').setInteractive();
    	
    	startButt.on('pointerdown',function(){this.setFrame(1)});
    	startButt.on('pointerup',function(){this.setFrame(0);
            if(game.global.simulation.escenario!=null)
            transition(target,that)
        });
    	startButt.on('pointerout',function(){this.setFrame(0)});
    	
    	this.add.text(440,780,'GO!',{fontFamily:"Museo-700" ,fontSize:'90px',color:'#000',fontStyle:'bold'})
    	
    	this.add.text(1450,130,'AZON',{fontFamily:"Museo-700" ,fontSize:'90px',color:'#000',fontStyle:'bold'});
    	
    	this.add.text(1450,330,'FERTEN',{fontFamily:"Museo-700" ,fontSize:'90px',color:'#000',fontStyle:'bold'});
    	
    	this.add.text(1450,530,'KWIN',{fontFamily:"Museo-700" ,fontSize:'90px',color:'#000',fontStyle:'bold'});
    	
    	this.add.text(1450,730,'ARENA',{fontFamily:"Museo-700" ,fontSize:'90px',color:'#000',fontStyle:'bold'});
    	
    	this.add.text(1450,930,'BOSS',{fontFamily:"Museo-700" ,fontSize:'90px',color:'#000',fontStyle:'bold'});
    	
        function misionReveal(){
            var i = game.global.user.numberofmision;

            if(i>=1){
                Xworld2.destroy();
                world2.setInteractive();
                world2.alpha=1;
            }
            if(i>=2){
                Xworld3.destroy();
                world3.setInteractive();
                world3.alpha=1;
            }
            if(i>=3){
                 Xworld4.destroy();
                 world4.setInteractive();
                 world4.alpha=1;
            }
            if(i>=4){
                 Xworld5.destroy();
                 world5.setInteractive();
                 world5.alpha=1;
            }
        }

        misionReveal();

    	function infoShow(num,str){
    		that.extend.click.play();
    		if(game.global.user.lang="EN"){
    			infoText2.setText("World "+num);
    			switch(str){
        		case "locked":
        			infoText1.setText(str)
        			break;
        		case "world1":
        			infoText1.setText(game.global.misions[game.global.simulation.idmision-1].description[1])
        			break;
        		case "world2":
        			infoText1.setText(game.global.misions[game.global.simulation.idmision-1].description[1])
        			break;
        		case "world3":
        			infoText1.setText(game.global.misions[game.global.simulation.idmision-1].description[1])
        			break;
        		case "world4":
        			infoText1.setText(game.global.misions[game.global.simulation.idmision-1].description[1])
        			break;
        		case "world5":
        			infoText1.setText(game.global.misions[game.global.simulation.idmision-1].description[1])
        			break;
        		}
        		target=num;
    		}
    		else{
    			infoText2.setText("Mundo "+num);
    			switch(str){
        		case "locked":
        			infoText1.setText(str)
        			break;
        		case "world1":
        			infoText1.setText(game.global.misions[game.global.simulation.idmision-1].description[0])
        			break;
        		case "world2":
        			infoText1.setText(game.global.misions[game.global.simulation.idmision-1].description[0])
        			break;
        		case "world3":
        			infoText1.setText(game.global.misions[game.global.simulation.idmision-1].description[0])
        			break;
        		case "world4":
        			infoText1.setText(game.global.misions[game.global.simulation.idmision-1].description[0])
        			break;
        		case "world5":
        			infoText1.setText(game.global.misions[game.global.simulation.idmision-1].description[0])
        			break;
        		}
        		target=num;
    		}
    		
    		
    	}
    	function transition(target,that){
    		that.extend.click.play();
    		//future switch for future levels will load different jsons!!!
    		console.log("start world"+target)
    		setTimeout(function(){that.scene.transition({target:'deck',duration:0});}, 2000)
    	}

         function SelectMisionAndAddDatatoSimulation(indexPos){
            var mision = game.global.misions[indexPos];
            var simulation = game.global.simulation;

            simulation.idmision = mision.id;
            //Fijamos lo relacionado con la simulacion Propiamente
            simulation.escenario = mision.escenario;
            //fijamos lo relacionado con el bando enemigo
                //Reseteamos los enemigos
                simulation.enemys.resetToBaseAttribValue();
                //Fijamos las restricciones
                simulation.enemys.restrictions = mision.enemys.restrictions;

                //CREA los heroes y los añade a la lista

                var enemyTeamAux = [];
                for(var i = 0; i< mision.enemys.team.length;i++){
                    simulation.enemys.addMember(new Hero(mision.enemys.team[i]));
                }

                //Allies
                simulation.allies.restrictions = mision.team.restrictions;

            return simulation;  
        }
         
         switch(game.global.user.lang){
         case "EN":
        	 en1.alpha=1;
        	 es1.alpha=0;
        	 en2.alpha=1;
        	 es2.alpha=0;
        	 break
         case "ES":
        	 es1.alpha=1;
        	 en1.alpha=0;
        	 es2.alpha=1;
        	 en2.alpha=0;
        	 break
        default:
        	 break
         }
    }
    update(){
    }
}
