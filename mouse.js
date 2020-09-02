function Mouse(name){
	this.name= name
	this.isDead = false;
}
Cat.prototype.dead = function(){
	this.isDead = true;
}
module.exports = Mouse;