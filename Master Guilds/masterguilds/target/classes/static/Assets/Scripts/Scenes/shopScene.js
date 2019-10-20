'use strict'

//LA TIENDA

class shop extends Phaser.Scene{
    constructor(){
        super({key:"shop"})
        this.extend={click:null,unlock:null,buyPrompt:null,ESGroup0:null,ESGroup1:null,ENGroup0:null,ENGroup1:null,essub:null,ensub:null,page:0}
    }
    
preload(){
    this.add.sprite(960,540,'backWood')
    this.add.sprite(960,63,'infoBar')
}
create(){
	var that=this
	that.extend.unlock=that.sound.add('unlock');
	that.extend.click=that.sound.add('click');
	that.extend.buyPrompt=that.sound.add('buyPrompt');
	that.extend.unlock.setVolume(game.global.user.evol);
	that.extend.click.setVolume(game.global.user.evol);
	that.extend.buyPrompt.setVolume(game.global.user.evol);
	var ENtit=this.add.text(250,10,'Shop',{fontFamily:"Museo-700" ,fontSize:'60px',color:'#fff',fontStyle:'bold'});
    that.extend.ensub=this.add.text(500,50,'Summon heroes or buy gems',{fontFamily:"Museo-700" ,fontSize:'40px',color:'#fff',fontStyle:'bold'})
    var EStit=this.add.text(250,10,'Tienda',{fontFamily:"Museo-700" ,fontSize:'60px',color:'#fff',fontStyle:'bold'});
    that.extend.essub=this.add.text(530,50,'Invoca heroes o compra gemas',{fontFamily:"Museo-700" ,fontSize:'40px',color:'#fff',fontStyle:'bold'})
    that.add.sprite(960,540,'largeInfo')
    var left=that.add.sprite(400,540,'UpArrow').setInteractive();
    left.angle=270;
    var right=that.add.sprite(1500,540,'DownArrow').setInteractive();
    right.angle=270;
    var backButt=this.add.sprite(85,80,'backButt').setInteractive();
    
    var summon=this.add.sprite(940,740,'largeShopButt').setInteractive();
    
    var en1=this.add.text(800,700,"Summon!",{fontFamily:"Museo-700" ,fontSize:'60px',color:'#000',fontStyle:'bold'});
    var es1=this.add.text(800,700,"¡Invocar!",{fontFamily:"Museo-700" ,fontSize:'60px',color:'#000',fontStyle:'bold'});
    
    
    var en2=this.add.text(750,200,"Buy gems!",{fontFamily:"Museo-700" ,fontSize:'80px',color:'#000',fontStyle:'bold'});
    var es2=this.add.text(620,200,"¡Compra gemas!",{fontFamily:"Museo-700" ,fontSize:'80px',color:'#000',fontStyle:'bold'});
    
    var en3=this.add.text(580,200,"Launch Celebration Banner",{fontFamily:"Museo-700" ,fontSize:'80px',color:'#000',fontStyle:'bold',wordWrap:{width:1000}});
    var en4=this.add.text(580,380,"Use 5 gems to acquire new heroes to fight for you! \nEvery hero has the SAME chance to appear! \nAvailable until 1/11/19",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold',wordWrap:{width:700}});
    
    var es3=this.add.text(560,200,"Campaña de celebración de lanzamiento",{fontFamily:"Museo-700" ,fontSize:'60px',color:'#000',fontStyle:'bold',wordWrap:{width:980}});
    var es4=this.add.text(580,380,"¡Usa 5 gemas para conseguir nuevos heroes! \n¡Todos los heroes tienen la MISMA posibilidad de aparecer! \nDisponible hasta 1/11/19",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold',wordWrap:{width:700}});
    
 
    this.add.sprite(1700,135,'gems').setScale(0.7)
    var gemas = this.add.text(1750,100, game.global.user.gems ,{fontFamily:"Museo-700" ,fontSize:'60px',color:'#fff',fontStyle:'bold'});
    
    that.extend.ESGroup0=this.add.container(0,0);
    that.extend.ENGroup0=this.add.container(0,0);
    that.extend.ESGroup1=this.add.container(0,0);
    that.extend.ENGroup1=this.add.container(0,0);
    
    var buy5=this.add.sprite(650,650,'5gems')
    var buy20=this.add.sprite(950,650,'20gems')
    var buy50=this.add.sprite(1230,650,'50gems')
    
    buy5.alpha=0;
    buy20.alpha=0;
    buy50.alpha=0;
    
    
    that.extend.ESGroup0.add(es1);
    that.extend.ESGroup1.add(es2);
    that.extend.ESGroup0.add(es3);
    that.extend.ESGroup0.add(es4);

    that.extend.ENGroup0.add(en1);
    that.extend.ENGroup1.add(en2);
    that.extend.ENGroup0.add(en3);
    that.extend.ENGroup0.add(en4);
    
    switch(game.global.user.lang){
	case "ES":
		
		this.extend.ENGroup0.alpha=0;
		this.extend.ESGroup0.alpha=1;
		this.extend.ENGroup1.alpha=0;
		this.extend.ESGroup1.alpha=0;
		this.extend.ensub.alpha=0;
		this.extend.essub.alpha=0.6;
		ENtit.alpha=0;
		EStit.alpha=1;
		
		
		break;
	case "EN":
		
		this.extend.ENGroup0.alpha=1;
		this.extend.ESGroup0.alpha=0;
		this.extend.ENGroup1.alpha=0;
		this.extend.ESGroup1.alpha=0;
		this.extend.ensub.alpha=0.6;
		this.extend.essub.alpha=0;
		EStit.alpha=0;
		ENtit.alpha=1;
		break;
	default:
		break;
	}
    
    
    summon.on('pointerdown',function(){
    	this.setFrame(1)
    })
    
    summon.on('pointerout',function(){
    	this.setFrame(0)
    })
    
    summon.on('pointerup',function(){
    	this.setFrame(0)
    	if(game.global.user.gems>=5){
    	  game.global.user.gems-=5
    	  gemas.setText(game.global.user.gems);
    	  var msg = new Object();
          msg.event = "GETNEWHERO" 
          game.global.socket.send(JSON.stringify(msg))

    	that.extend.unlock.play();
    	that.scene.launch('summon');
    	that.scene.pause();
    	} 	
    })
    
    
    buy5.on('pointerout',function(){
    	this.setFrame(0)
    })
    buy5.on('pointerdown',function(){
    	this.setFrame(1)
    })
    buy5.on('pointerup',function(){
    	this.setFrame(0);
    	that.extend.buyPrompt.play();
    	that.scene.launch('buy5');
    	that.scene.pause();
    })
    
    
    buy20.on('pointerout',function(){
    	this.setFrame(0)
    })
    buy20.on('pointerdown',function(){
    	this.setFrame(1)
    })
    buy20.on('pointerup',function(){
    	this.setFrame(0);
    	that.extend.buyPrompt.play();
    	that.scene.launch('buy20');
    	that.scene.pause();
    })
    
    
    buy50.on('pointerout',function(){
    	this.setFrame(0)
    })
    buy50.on('pointerdown',function(){
    	this.setFrame(1)
    })
    buy50.on('pointerup',function(){
    	this.setFrame(0);
    	that.extend.buyPrompt.play();
    	that.scene.launch('buy50');
    	that.scene.pause();
    })
    
    
    backButt.on('pointerdown',function(){
    	this.setFrame(1)
    })
    backButt.on('pointerout',function(){
    	this.setFrame(0)
    })
    backButt.on('pointerup',function(){
    	this.setFrame(0)
    	that.extend.click.play();
    	that.scene.transition({target:'mainMenu',duration:0})
    })
    
    
    left.on('pointerup',function(){
    	this.setFrame(0); 
    	that.extend.click.play();
    	that.extend.page+=1; 
    	switch(that.extend.page){
    		case 1:
    			that.extend.ENGroup1.alpha=0;
    			that.extend.ESGroup1.alpha=0;
    			that.extend.ENGroup0.alpha=0;
    			that.extend.ESGroup0.alpha=0;
    			buy5.setInteractive();
    			buy20.setInteractive();
    			buy50.setInteractive();
    			buy5.alpha=1;
    			buy20.alpha=1;
    			buy50.alpha=1;
    			summon.removeInteractive();
    			summon.alpha=0;
    			switch(game.global.user.lang){
    			case "EN":
    				that.extend.ENGroup1.alpha=1;
    			break;
    			case "ES":
    				that.extend.ESGroup1.alpha=1;
    			break;
    			}
    			break;
    		default:
    			that.extend.page=0
    			that.extend.ENGroup1.alpha=0;
    			that.extend.ESGroup1.alpha=0;
    			that.extend.ENGroup0.alpha=0;
    			that.extend.ESGroup0.alpha=0;
    			buy5.removeInteractive();
    			buy20.removeInteractive();
    			buy50.removeInteractive();
    			buy5.alpha=0;
    			buy20.alpha=0;
    			buy50.alpha=0;
    			summon.alpha=1;
    			summon.setInteractive();
    			console.log(summon)
    			switch(game.global.user.lang){
    			case "EN":
    				that.extend.ENGroup0.alpha=1;
    			break;
    			case "ES":
    				that.extend.ESGroup0.alpha=1;
    			break;
    			}
    			break;
    	}
    })
    left.on('pointerdown',function(){
    	this.setFrame(1)
    })
    left.on('pointerout',function(){
    	this.setFrame(0)
    })
    
    right.on('pointerup',function(){
    	this.setFrame(0); 
    	that.extend.click.play();
    	that.extend.page-=1; 
    	switch(that.extend.page){
    		case 0:
    			that.extend.ENGroup1.alpha=0;
    			that.extend.ESGroup1.alpha=0;
    			that.extend.ENGroup0.alpha=0;
    			that.extend.ESGroup0.alpha=0;
    			buy5.removeInteractive();
    			buy20.removeInteractive();
    			buy50.removeInteractive();
    			buy5.alpha=0;
    			buy20.alpha=0;
    			buy50.alpha=0;
    			summon.alpha=1;
    			summon.setInteractive();
    			
    			switch(game.global.user.lang){
    			case "EN":
    				that.extend.ENGroup0.alpha=1;
    			break;
    			case "ES":
    				that.extend.ESGroup0.alpha=1;
    			break;
    			}
    			break;
    		default:
    			that.extend.page=1
    			that.extend.ENGroup1.alpha=0;
    			that.extend.ESGroup1.alpha=0;
    			that.extend.ENGroup0.alpha=0;
    			that.extend.ESGroup0.alpha=0;
    			buy5.setInteractive();
    			buy20.setInteractive();
    			buy50.setInteractive();
    			buy5.alpha=1;
    			buy20.alpha=1;
    			buy50.alpha=1;
    			summon.alpha=0;
    			summon.removeInteractive();
    			switch(game.global.user.lang){
    			case "EN":
    				that.extend.ENGroup1.alpha=1;
    			break;
    			case "ES":
    				that.extend.ESGroup1.alpha=1;
    			break;
    			}
    			break;
    	}
    })
    right.on('pointerdown',function(){
    	this.setFrame(1)
    })
    right.on('pointerout',function(){
    	this.setFrame(0)
    })
    
    
}
}


class buy5 extends Phaser.Scene{
	constructor(){
		super({key:"buy5"})
		this.extend={buy:null,click:null}
	}
	preload(){
		
		this.add.sprite(960,540,'BLACK');
		this.add.sprite(960,440,'mediumInfo');
		
	}
	create(){
		var that=this
		var en=this.add.text(700,300,"Are you sure you want to buy 5 gems? Price: PRICE HERE ",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold',wordWrap:{width:500}});
		var es=this.add.text(700,300,"¿Seguro que quieres comprar 5 gemas? Precio: PRICE HERE ",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold',wordWrap:{width:500}});
		var yesButt=this.add.sprite(1200,850,'YesButt').setInteractive()
		var noButt=this.add.sprite(700,850,'NoButt').setInteractive();
		that.extend.buy=that.sound.add('buyS')
		that.extend.buy.setVolume(game.global.user.evol)
		that.extend.click=that.sound.add('click')
		that.extend.click.setVolume(game.global.user.evol)
		yesButt.on('pointerout',function(){this.setFrame(0)})
		yesButt.on('pointerdown',function(){this.setFrame(1)})
		
		noButt.on('pointerout',function(){this.setFrame(0)})
		noButt.on('pointerdown',function(){this.setFrame(1)})
		
		yesButt.on('pointerup',function(){
			that.extend.buy.play();
			this.setFrame(0);
			that.scene.resume('shop');
			that.scene.stop();
		});
		
		noButt.on('pointerup',function(){
			that.extend.click.play();
			this.setFrame(0);
			that.scene.resume('shop');
			that.scene.stop();
		});
		 switch(game.global.user.lang){
			case "ES":
				es.alpha=1;
				en.alpha=0;
				break;
			case "EN":
				en.alpha=1;
				es.alpha=0;
				break;
			default:
				break;
			}
	}
}
class buy20 extends Phaser.Scene{
	constructor(){
		super({key:"buy20"})
		this.extend={buy:null,click:null}
	}
	preload(){
		
		this.add.sprite(960,540,'BLACK');
		this.add.sprite(960,440,'mediumInfo');
		
	}
	create(){
		var that=this
		var en=this.add.text(700,300,"Are you sure you want to buy 20 gems? Price: PRICE HERE ",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold',wordWrap:{width:500}});
		var es=this.add.text(700,300,"¿Seguro que quieres comprar 20 gemas? Precio: PRICE HERE ",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold',wordWrap:{width:500}});
		var yesButt=this.add.sprite(1200,850,'YesButt').setInteractive()
		var noButt=this.add.sprite(700,850,'NoButt').setInteractive();
		that.extend.buy=that.sound.add('buyS')
		that.extend.buy.setVolume(game.global.user.evol)
		that.extend.click=that.sound.add('click')
		that.extend.click.setVolume(game.global.user.evol)
		yesButt.on('pointerout',function(){this.setFrame(0)})
		yesButt.on('pointerdown',function(){this.setFrame(1)})
		
		noButt.on('pointerout',function(){this.setFrame(0)})
		noButt.on('pointerdown',function(){this.setFrame(1)})
		
		yesButt.on('pointerup',function(){
			that.extend.buy.play();
			this.setFrame(0);
			that.scene.resume('shop');
			that.scene.stop();
		});
		
		noButt.on('pointerup',function(){
			that.extend.click.play();
			this.setFrame(0);
			that.scene.resume('shop');
			that.scene.stop();
		});
		switch(game.global.user.lang){
		case "ES":
			es.alpha=1;
			en.alpha=0;
			break;
		case "EN":
			en.alpha=1;
			es.alpha=0;
			break;
		default:
			break;
		}
	}
}
class buy50 extends Phaser.Scene{
	constructor(){
		super({key:"buy50"})
		this.extend={buy:null,click:null}
	}
	preload(){
		
		this.add.sprite(960,540,'BLACK');
		this.add.sprite(960,440,'mediumInfo');
		
	}
	create(){
		var en=this.add.text(700,300,"Are you sure you want to buy 50 gems? Price: PRICE HERE ",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold',wordWrap:{width:500}});
		var es=this.add.text(700,300,"¿Seguro que quieres comprar 50 gemas? Precio: PRICE HERE ",{fontFamily:"Museo-700" ,fontSize:'40px',color:'#000',fontStyle:'bold',wordWrap:{width:500}});
		var yesButt=this.add.sprite(1200,850,'YesButt').setInteractive()
		var noButt=this.add.sprite(700,850,'NoButt').setInteractive();
		that.extend.buy=that.sound.add('buyS')
		that.extend.buy.setVolume(game.global.user.evol)
		that.extend.click=that.sound.add('click')
		that.extend.click.setVolume(game.global.user.evol)
		yesButt.on('pointerout',function(){this.setFrame(0)})
		yesButt.on('pointerdown',function(){this.setFrame(1)})
		
		noButt.on('pointerout',function(){this.setFrame(0)})
		noButt.on('pointerdown',function(){this.setFrame(1)})
		
		yesButt.on('pointerup',function(){
			that.extend.buy.play();
			this.setFrame(0);
			that.scene.resume('shop');
			that.scene.stop();
		});
		
		noButt.on('pointerup',function(){
			that.extend.click.play();
			this.setFrame(0);
			that.scene.resume('shop');
			that.scene.stop();
		});
		
		switch(game.global.user.lang){
		case "ES":
			es.alpha=1;
			en.alpha=0;
			break;
		case "EN":
			en.alpha=1;
			es.alpha=0;
			break;
		default:
			break;
		}
		
	}
}

class summon extends Phaser.Scene{
	constructor(){
		super({key:"summon"})
		this.extend={dealCard:null,click:null}
		
	}
	preload(){
		
		this.add.sprite(960,540,'BLACK');
		this.add.sprite(960,440,'largeInfo');
		
	}
	create(){
		var that=this
		
		//CARTA QUE TE HA TOCADO FACCION
		//meter algun efecto visual de 2 segundos de duracion!!!!
		this.add.sprite(960,450,'ferten_small_card_back')
		var en=this.add.text(680,50,'YOU GOT',{fontFamily:"Museo-700" ,fontSize:'120px',color:'#000',fontStyle:'bold',wordWrap:{width:980}});
		var es=this.add.text(570,50,'CONSEGUISTE',{fontFamily:"Museo-700" ,fontSize:'110px',color:'#000',fontStyle:'bold',wordWrap:{width:980}});
		this.extend.dealCard=this.sound.add('dealCard')
		//PASA EL TIEMPO Y ENTONCES SALE LA CARTA EN GRANDE
		//Y LA RAREZA
		//ANADIR A USUARIO 
		this.extend.dealCard.setVolume(game.global.user.evol)
		this.extend.dealCard.play()
		this.extend.click=this.sound.add('click')
		this.extend.click.setVolume(game.global.user.evol)
		var okButt=this.add.sprite(960,850,'largeButt')
		setTimeout(function(){
		okButt.setInteractive();
		that.add.sprite(960,200,'5star').setScale(1).setDepth(2)
		that.add.sprite(960,500,game.global.obtainedHero.image_url[1])
		},2000)
		
		
		this.add.text(900,810,"OK",{fontFamily:"Museo-700" ,fontSize:'69px',color:'#000',fontStyle:'bold'})
		okButt.on('pointerout',function(){this.setFrame(0)})
		okButt.on('pointerdown',function(){this.setFrame(1)})
		
		okButt.on('pointerup',function(){
			that.extend.click.play();
			this.setFrame(0);
			that.scene.resume('shop');
			that.scene.stop();
		});
		switch(game.global.user.lang){
		case "ES":
			es.alpha=1;
			en.alpha=0;
			break;
		case "EN":
			en.alpha=1;
			es.alpha=0;
			break;
		default:
			break;
		}
	}
}
