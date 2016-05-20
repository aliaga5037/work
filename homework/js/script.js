


var a = true;

function turn() {
	if(a == false){
		document.write("<div class='main' style='background: #eee;width: 100%;height: 800px;'>")
			document.write("<div style='border-radius:30px 30px;width: 300px;height: 80px; position: absolute; top: 30%;left:40%;background: gray;text-align: center;'>")
				document.write("<p style='position: relative;top: -2px; float: right;right: 75px;font-size: 28px;'>OFF</p>")
				document.write("<div style='border-radius:50%;background:#C8C9CA;height: 100px;width: 100px; border:1px solid black;position: relative;top:-10px;left:-5px;'>")
		 	document.write("<button  onclick='turn()' style='border-radius:50%;height: 40px;width: 40px;position: relative;top: 30px;left: 2px;'>'</button>")
		 	document.write("</div>")
			document.write("</div>")
		document.write("</div>")
		a=true
		document.close();
	}else{
		document.write("<div class='main' style='background: #eee;width: 100%;height: 800px;'>")
			document.write("<div style='border-radius:30px 30px;width: 300px;height: 80px; position: absolute; top: 30%;left:40%;background: yellow;text-align: center;'>")
				document.write("<p style='position: relative;top: -2px; float: left;left: 100px;font-size: 28px;'>ON</p>")
				document.write("<div style='border-radius:50%;background:#C8C9CA;height: 100px;width: 100px; border:1px solid black;position: relative;top:-10px;right:-5px;float:right;'>")
		 	document.write("<button  onclick='turn()' style='border-radius:50%;height: 40px;width: 40px;position: relative;top: 30px;left: 2px;'>'</button>")
		 	document.write("</div>")
			document.write("</div>")
		document.write("</div>")
		a=false
		document.close();
	}
}

