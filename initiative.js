function initiative() {
	console.log("%s (%s)", document.initiative.name.value, document.initiative.init.value);
	document.initiative.reset()
	return false;
}

document.initiative.onsubmit = initiative;
