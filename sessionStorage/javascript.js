var clickNumber;

$(document).ready(function(){    
    $(".btn").click(function(e){
        e.preventDefault();
		var dataset = $(this.dataset)[0];
		console.log(dataset.number);
		timesClicked(dataset.number);
		})
	
	if(sessionStorage.getItem("number") == null){
		sessionStorage.setItem("number", 0);
	}
	$("#clickNumber").html(sessionStorage.getItem("number"));
	
	}) 

	function timesClicked(numberFromData){
		clickNumber = parseInt(sessionStorage.getItem("number"));
		clickNumber += parseInt(numberFromData);
    	$("#clickNumber").html(clickNumber);
		sessionStorage.setItem("number", clickNumber);
	}


