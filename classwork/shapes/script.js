
function shape(border){
	this.border=border
	
};

 function olcu(width,height) {
	this.width = width,
	this.height = height
	this.yaz=function(){
	document.write("<div style='width:"+this.width+"px;height:"+this.height+"px;border-radius:"+this.border_radius+"px;border:"+this.border+"px solid black; background:"+this.color+";'></div>")
}
};
shape.prototype = new olcu(100,100) ;

function forma(border_radius) {
	this.border_radius = border_radius
};

olcu.prototype.__proto__ = new forma(20) ;

function reng(color) {
	this.color = color
	};

forma.prototype.__proto__ = new reng("red");
var kv = new shape(1);

kv.yaz()

console.log()

