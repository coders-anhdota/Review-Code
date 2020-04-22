function Person(){
	this.name = "Coders-X";
	this.eatList = [];
}
Person.prototype.eat = function(food) {
	this.eatList.push(food);
};