		function timer() {
			let actualTime = (new Date("2022-8-15"))  - (new Date());
		
			//initalize clock variables by doing algebra with the actual time
			var Days = Math.floor(actualTime / (1000 * 60 * 60 * 24))
			var Hours =  Math.floor((actualTime / (1000 * 60 * 60)) % 24)
			var Mins = Math.floor((actualTime / 1000 / 60) % 60)
			var Secs = Math.floor((actualTime / 1000) % 60)
			
			// when all elements of time equal zero give the user a birthday alert!
			if( (Days == 0) && (Hours == 0 ) && (Mins == 0 ) && (Secs ==0 )  ){
				alert("It is your birthday Today!")
			}

			//find p tags and update them with clock variables
			document.getElementsByClassName("Days")[0].innerHTML = Days + " Days" ;
			document.getElementsByClassName("Hours")[0].innerHTML = Hours + " Hours" ;
			document.getElementsByClassName("Mins")[0].innerHTML = Mins + " Minutes" ;
			document.getElementsByClassName("Secs")[0].innerHTML = Secs + " Secs" ;

		}


		
	