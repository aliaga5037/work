// $(document).ready(function($) {
// 	$(".saat").click(function () {
// 			$(this).css("transform","rotate(6deg)")
// 	});
	$(document).ready(function() {
		var basla = setInterval(myClock, 1000);
		function myClock () {
		

		var vaxt = new Date();
		s = vaxt.getSeconds();
		d = vaxt.getMinutes();
		h = vaxt.getHours();
		$(".saniye").css("transform","rotate("+s*6+"deg)")
		$(".deqiqe").css("transform","rotate("+d*6+"deg)")
		$(".saat").css("transform","rotate("+h*6+"deg)")
		console.log(s);}
		
});
		
