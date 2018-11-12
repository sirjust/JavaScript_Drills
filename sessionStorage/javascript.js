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
	
	if (sessionStorage.getItem("myText") != null){
		var outputLocation = $(".storageDisplay");
		var output = sessionStorage.getItem("myText");
		outputLocation.after(JSON.stringify(output));
	}
	
	// this takes data inside an html attribute and places it in the text node
	var elementWithData = document.getElementById('myText');
	console.log(elementWithData);
	
	sessionStorage.setItem("myText", elementWithData);
	
//	var dataToExtract = elementWithData.dataset.mytext;
//	sessionStorage.setItem("greeting", dataToExtract);
//	var greeting = sessionStorage.getItem("greeting");
//	elementWithData.textContent = greeting;
//	
	console.log(elementWithData);
	
	
	}) 

	function timesClicked(numberFromData){
		clickNumber = parseInt(sessionStorage.getItem("number"));
		clickNumber += parseInt(numberFromData);
    	$("#clickNumber").html(clickNumber);
		sessionStorage.setItem("number", clickNumber);
	}

