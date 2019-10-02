class PauseScene extends Phaser.Scene
{
	constructor(){
		super({key: 'PauseScene'}),
		this.extend = 
			{
			resumeButton:null,
			texts:null
			}
	}

	preload(){
		this.load.image('pause','Assets/Testing/pause.png');
	}

	create(){
		this.extend.resumeButton = this.add.sprite(200,200,'pause')
		.setInteractive()
		.on('pointerdown',()=>{
			this.scene.resume('SimulationScene');
    		this.scene.stop();
		})
	}
}