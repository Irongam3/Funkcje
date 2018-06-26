// JavaScript Document


var men =  ['Marek', 'Olek', 'Jacek', 'Grzesiek'];
var women = ['Ola', 'Adrianna', 'Sylwia', 'Daria'];
var razem = men.concat(women);




var newName = 'Olek';
	 if (razem.indexOf('Olek') === -1) {
		 console.log('Error repeat');
	 }
	 else if (razem.indexOf('Olek') === 1){
		 var razemNewName = razem.push(newName);
	 }
		 
console.log(razemNewName);

		 

