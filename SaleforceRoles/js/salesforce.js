var store= document.getElementsByClassName("vectorimg")


	for (var i = store.length - 1; i >= 0; i--) {
		store[i].addEventListener("mouseenter", handlemouseenter );
		store[i].addEventListener("mouseleave", handlemouseleave );


	}
	function handlemouseenter(event) {

		console.log(event.target)
		console.log(event.target.getAttribute("data-jobtitle"))	
		document.getElementById("jobholder").innerHTML=event.target.getAttribute("data-jobtitle")
		document.getElementById("jobholder").className = "fadein"


	}
		function handlemouseleave(event) {

		console.log("mouseleft")
		document.getElementById("jobholder").className = ""


	}



