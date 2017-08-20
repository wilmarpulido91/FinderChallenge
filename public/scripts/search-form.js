function searchForm(){
    // code here
    $("#search").on('keyup', function(ev){
    	var code = ev.keyCode;
    	var write = $("#search").val().trim();
	    if(write.length > 2){
	    	$('#btn-search').addClass('in');
	    }
	    else if(write.length <= 2){
	    	$('#btn-search').removeClass('in');	
	    }
	    // Enter key
	    if(code == 13){
	    	consulting();
	    }
    });
}

function consulting(){
	// code here
	var final_array = [];
	var count = 0;
	var value = $('input[name=search]').val();

	// clear content
	$('.news').empty();

	// Ajax consulting
	var ajax = new XMLHttpRequest();
	ajax.open("GET", "books-schema.json", true);
	ajax.onload = function() {
		var list = JSON.parse(ajax.responseText);
		final_array = list.data.map(function(data){ return data; });
		final_array = final_array.filter(function(data){ return data.title.includes(value); });
		console.log(final_array);

		final_array.forEach(function(data,i,array){
			count++;
			if(count > 9){
				return false;
			}
			else {
				$('.news').append('<div class="content-new" id="content-new'+count+'"></div>');
				$('#content-new'+count).append('<img src="'+array[i].image+'">');
				$('#content-new'+count).append('<h4>"'+array[i].title+'"</h4>');
				$('#content-new'+count).append('<p>"'+array[i].teaser+'"</>');
			}
		});
	};
	ajax.send();
}
