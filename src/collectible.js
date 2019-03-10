export default CS1=>{AFRAME.registerComponent("collectible", {
	schema: {
    threshold: {type: 'number', default: 2.7},
    soundCollect: {type: 'string',default:'https://cdn.glitch.com/f8abb766-9950-44ff-9adb-2f5f53fdaf1b%2Fpowerup_1.mp3?1552158629039'},
    soundLoop: {}
	},
	init: function()
	{
    this.el.setAttribute('sound__collect',`src:url(${this.data.soundCollect})`);
    if(this.data.soundLoop)this.el.setAttribute('sound__loop',`src:url(${this.data.soundLoop});autoplay:true;loop:true`);
    if(!CS1.collectibles)CS1.collectibles=[];
    CS1.collectibles.push(this);
    this.soundIsPlaying=false;
    if(!CS1.socket._callbacks["$request-for-collectibles"])
    CS1.socket.on('request-for-collectibles',()=>{
      CS1.socket.emit('initial-collectibles-state', CS1.collectibles.length);
    });
    if(!CS1.socket._callbacks["$update-collectible"])
    CS1.socket.on('update-collectible',data=>{
      if(!(CS1.game && CS1.game.hasBegun))return;
      let collectedEntity = CS1.collectibles[data.index];
      if(collectedEntity.el.components.sound__loop)collectedEntity.el.components.sound__loop.pause();
      collectedEntity.el.setAttribute('visible',false);
      collectedEntity.soundIsPlaying=true;
      collectedEntity.el.components.sound__collect.playSound();
      collectedEntity.el.addEventListener('sound-ended',e=>{
        collectedEntity.pause();     
      });
      if(data.collector==CS1.socket.id){
        CS1.hud.pointsDial.animateTo(CS1.hud.pointsDial.value+5);
      }
    });
  }, 
	tick: function()
	{   
     if(this.el.object3D.position.distanceTo(CS1.myPlayer.object3D.position) < this.data.threshold){ 
       this.collect();
     }
		
	},
  
  collect: function(){
    if(this.soundIsPlaying)return;
    if(CS1.socket.disconnected){
      if(this.el.components.sound__loop)this.el.components.sound__loop.pause();
      this.el.setAttribute('visible',false);
      this.soundIsPlaying=true;
      this.el.components.sound__collect.playSound();
      CS1.hud.pointsDial.animateTo(CS1.hud.pointsDial.value+5);
      this.el.addEventListener('sound-ended',e=>{
        this.pause();   
      }); 
    } else{
      CS1.socket.emit('request-collection',{index: CS1.collectibles.indexOf(this)}); 
    
    }
 
  }
  
  
})
  
}