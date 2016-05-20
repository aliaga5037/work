// function person(ad, soyad,yas) {
//     this.ad = ad,
//     this.soyad = soyad,
//     this.yas = yas,
//     this.age = function(){
//     	return 2016 - this.yas
//     }
//     console.log(this.ad+" "+this.soyad+" "+this.age())
// }

// var b = person("ali","aga",1994);

// var insan={
// 	cins:"kisi",
// 	durum:"olu",
// 	yer:"dunya",
// }
// var marslilar={
// 	goz: 1,
// 	oksigen: false 
// }

// var azeri={
// 	haqliliq:true,
// 	behane:"Lots of",
// }

// var qubali={
// 	danisiq:"araaa",
// 	yemeyicmey: true,
// }
// qubali.yer="Mars";
// azeri.__proto__=insan;
// qubali.__proto__=azeri;
// qubali.__proto__.__proto__=marslilar;
// console.log(qubali.haqliliq)



var telebe=function(ad, soyad) {
	this.ad=ad,
	this.soyad=soyad
};

codTelebe1.prototype = new telebe("aliaga","aliyev");
codTelebe2.prototype = new telebe("nicat","a");
codTelebe3.prototype = new telebe("eldar","b");
codTelebe4.prototype = new telebe("elvin,m");
codTelebe5.prototype = new telebe("ismayil","m");

var bdu = new telebe;	
console.log(codTelebe1)