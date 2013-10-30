var form = document.getElementById("character-form");
var list = document.getElementById("character-list");

function initiative() {
	append(capture_input());
	form.reset();
	form.name.focus();
	return false;
}

function capture_input() {
    var pc = { };
    pc.name = form.name.value;
    pc.init = form.init.value;

    return pc;
}

function empty() {
	while(list.firstChild) { 
		list.removeChild(list.firstChild); 
	}	
}

function append(pc) {
	var text = document.createTextNode(pc.name + " (" + pc.init + ")");
	var item = document.createElement("li");
	item.appendChild(text);
	list.appendChild(item);
}

form.onsubmit = initiative;
