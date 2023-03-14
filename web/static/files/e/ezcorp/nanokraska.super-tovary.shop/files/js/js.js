function modalRefresh() {
	$("#m1-form").css("width", "400px");
	var  wwidth = $(window).width();
	//alert(width2);
    if (wwidth < 720) {
	var  width = $(window).width()-4;	
	var  left = (width/-2);		
	$("#m1-form").css("width", width);
    $("#m1-form").css("margin-left", left);
    }
}