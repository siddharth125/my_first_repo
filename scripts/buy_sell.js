$(document).ready(function() {
	//parseJson(myJSONdata);
	//alert("entered");
	$('.submit')
	var page = 'e';
	$.ajax({
		url: 'send_items3.php', 
		data: ({ page:page }),
		method:'POST',
		dataType:'json',
		success: function(data)
		{
			//alert("suc");
			parseJson(data);
		}
		error: function(){
			alert('failed');
		}
	});
});

function parseJson(data) {
	//alert("loaded");
	if(data==0){
		alert('query failed!!!');
	}
	else if(data==1){
		
	}
});