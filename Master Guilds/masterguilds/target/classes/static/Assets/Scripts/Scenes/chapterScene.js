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
        this.add.text(250,10,'Story',{fontFamily:"Museo-700" ,fontSize:'60px',color:'#fff',fontStyle:'bold'});
        this.add.text(450,50,'Choose a chapter',{fontFamily:"Museo-700" ,fontSize:'40px',color:'#fff',fontStyle:'bold'}).alpha=0.6
        this.add.image(530,580,'largeInfo')
    }
    create(){
    	
    	//habria que leer aqui el nivel en el que estamos!!!!!!
    	//hacer inputenabled false y alphas aqui, NO LUEGO, AQUI!
    	
    	var that=this;
    	this.extend.click=this.sound.add('click');
    	this.extend.click.setVolume(game.global.user.evol)
    	var backButt=this.add.sprite(85,80,'backButt').setInteractive()          
        backButt.on('pointerdown',function(){this.setFrame(1)})
        backButt.on('pointerup',function(){this.setFrame(0);that.scene.transition({target:'mainMenu',duration:100})})
        
        var world1=this.add.sprite(1530,180,'AzonButt').setInteractive();
    	var world2=this.add.sprite(1530,380,'FertenButt').setInteractive()
    	var world3=this.add.sprite(1530,580,'KwinButt').setInteractive()
    	var world4=this.add.sprite(1530,780,'largePlayHistoryButt').setInteractive()
    	var world5=this.add.sprite(1530,980,'largeFinalButt').setInteractive()
    	
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
    	
    	world2.inputEnabled=false;
    	world3.inputEnabled=false;
    	world4.inputEnabled=false;
    	world5.inputEnabled=false;
    	
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
    	var infoText2=this.add.text(520,300,'',{fontFamily:"Museo-700" ,fontSize:'50px',color:'#000',fontStyle:'bold'});
    	var infoText1=this.add.text(520,400,'',{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold'});
    	
    	var startButt=this.add.sprite(520,830,'largeButt').setInteractive();
    	
    	startButt.on('pointerdown',function(){this.setFrame(1)});
    	startButt.on('pointerup',function(){this.setFrame(0);transition(target,that)});
    	startButt.on('pointerout',function(){this.setFrame(0)});
    	

        function misionReveal(){
            var i = game.global.user.numberofmision;

            if(i>=1){
                Xworld2.destroy();
                world2.inputEnabled=true;
                world2.alpha=1;
            }
            if(i>=2){
                Xworld3.destroy();
                world3.inputEnabled=true;
                world3.alpha=1;
            }
            if(i>=3){
                 Xworld4.destroy();
                 world4.inputEnabled=true;
                 world4.alpha=1;
            }
            if(i>=4){
                 Xworld5.destroy();
                 world5.inputEnabled=true;
                 world5.alpha=1;
            }
        }

        misionReveal();

    	function infoShow(num,str){
    		that.extend.click.play();
    		infoText2.setText("World "+num);
    		switch(str){
    		case "locked":
    			infoText1.setText(str)
    			break;
    		case "world1":
    			infoText1.setText("world 1 info")
    			break;
    		case "world2":
    			infoText1.setText("world 2 info")
    			break;
    		case "world3":
    			infoText1.setText("world 3 info")
    			break;
    		case "world4":
    			infoText1.setText("world 4 info")
    			break;
    		case "world5":
    			infoText1.setText("world 5 info")
    			break;
    		}
    		target=num;
    	}
    	function transition(target,that){
    		that.extend.click.play();
    		//future switch for future levels will load different jsons!!!
    		console.log("star world"+target)
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
    }
    update(){
    }
}
