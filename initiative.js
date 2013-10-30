var i = []

function initiative() {
    var x = { };
    x.name = document.character.name.value;
    x.init = document.character.init.value;

    i.push(x);

	console.log("%s (%s)", x.name, x.init);

	document.character.reset();
	return false;
}

document.character.onsubmit = initiative;
