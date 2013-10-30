var form = document.character;
var list = document.characters;

function initiative() {
    var character = capture_character();
	append_character(character)

	form.reset();
	return false;
}

function capture_character() {
    var x = { };
    x.name = document.character.name.value;
    x.init = document.character.init.value;

	console.log("%s (%s)", x.name, (x.init ? x.init : 0));

    return x;
}

function empty_characters() {
	while(list.firstChild) { 
		list.removeChild(list.firstChild); 
	}	
}

function append_character(character) {
    var message = character.name + " (" + character.init + ")";
	var text = document.createTextNode(message);
	var li = document.createElement("li");
	li.appendChild(text);
	list.appendChild(li);
}

document.character.onsubmit = initiative;
