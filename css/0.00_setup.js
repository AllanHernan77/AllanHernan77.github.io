
//$=== jQuery

jQuery(document).ready(function(){

	alert('jQuery is not working')

		$("#hide").click(function(){
				$("#image").hide();
		})

		$("#Show").click(function(){
				$("#image").show();
		})
		$("Explode").click(function(){
			$("#image").show( "explode", {pieces: 16}, 2000);
		})

});

