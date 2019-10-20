'use strict'
class initialScene extends Phaser.Scene{
	constructor(){
        super({key: 'initialScene'})
        this.extend = {}
}
preload(){

}
create(){

	var that = this;
	var black = this.add.sprite(960,540,'BLACK').setDepth(0).setInteractive();
	var text = this.add.text(880,520,"Press to continue",{fontFamily:"Museo-700" ,fontSize:'30px',color:'#fff',fontStyle:'bold'}).setDepth(1).setInteractive();
	text.on('pointerdown',function(){
		var elem = document.documentElement;
		that.scale.startFullscreen();
		/* View in fullscreen */
		function openFullscreen() {
		  if (elem.requestFullscreen) {
		    elem.requestFullscreen();
		  } else if (elem.mozRequestFullScreen) { /* Firefox */
		    elem.mozRequestFullScreen();
		  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
		    elem.webkitRequestFullscreen();
		  } else if (elem.msRequestFullscreen) { /* IE/Edge */
		    elem.msRequestFullscreen();
		  }
		}

		openFullscreen();
		that.scene.transition({target:'login',duration:0});
	})

	black.on('pointerdown',function(){
		var elem = document.documentElement;
		that.scale.startFullscreen();
		/* View in fullscreen */
		function openFullscreen() {
		  if (elem.requestFullscreen) {
		    elem.requestFullscreen();
		  } else if (elem.mozRequestFullScreen) { /* Firefox */
		    elem.mozRequestFullScreen();
		  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
		    elem.webkitRequestFullscreen();
		  } else if (elem.msRequestFullscreen) { /* IE/Edge */
		    elem.msRequestFullscreen();
		  }
		}

		openFullscreen();
		that.scene.transition({target:'login',duration:0});
	})
}
}