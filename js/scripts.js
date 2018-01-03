var allNames = [];
var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = allNames.concat(femaleNames,maleNames);
var newName = 'Marian';
if (allNames.indexOf(newName) === -1) {
	var namesWithoutMarian = allNames.push('Marian')
};