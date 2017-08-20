function complete(){
    // code here
    var value = $('input[name=search]').val();
    var ajax = new XMLHttpRequest();
	ajax.open("GET", "books-schema.json", true);
	ajax.onload = function() {
		var list = JSON.parse(ajax.responseText);
		list = list.data.map(function(data){ return data.title; });
		new Awesomplete(document.querySelector("#search"),{ list: list });
	};
	ajax.send();
}