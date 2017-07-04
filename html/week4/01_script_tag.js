function outputHelloWorld(elementId) {
	var element = document.getElementById(elementId);
	element.innerHTML = element.innerHTML + ' <br>Hello World!';
}