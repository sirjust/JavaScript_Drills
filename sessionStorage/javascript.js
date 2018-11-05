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
	
	
	// this takes data inside an html attribute and places it in the text node
	var elementWithData = document.getElementById('myText');
	var dataToExtract = elementWithData.dataset.mytext;
	sessionStorage.setItem("greeting", dataToExtract);
	var greeting = sessionStorage.getItem("greeting");
	elementWithData.textContent = sessionStorage.getItem("greeting");
	
	}) 

	function timesClicked(numberFromData){
		clickNumber = parseInt(sessionStorage.getItem("number"));
		clickNumber += parseInt(numberFromData);
    	$("#clickNumber").html(clickNumber);
		sessionStorage.setItem("number", clickNumber);
	}

