function Student(name, age,){
	this.mark = [];
	this.name = name;
	this.age = age;
}

Student.prototype.getMark = function(score) {
	this.mark.push(score);
};