// 3.1 built-in functions

var gotName = false;
while (gotName == false) {
	var userName = prompt ("Yo passenger! What's your name?");

	
	if (confirm ("Are you sure your name is " + userName + "?") ){
		alert("'Sup " + userName + "!");
		gotName = true;
	}

	
}


	
	
		if (typeof userName == string) {
			confirm ("is " + userName + " your name?");
			if (confirm == true) {
				gotName = true;
			}
		
	}


	
// keep track of train passengers (adding a passenger to out list)

function addPassenger (name, list){
	if (list.length == 0) {
		list.push(name);
	} else {
		for (var i = 0; i < list.lenght; i++) {
			if(list[i] == undefined){
				list[i] = name;
				return list;
			} else if (i == list.length - 1) {
				list.push(name);
				return list;
			}
		}
	}
	
}

var passengerList = [ ];
passengerList = addPassenger("Gregg Pollack", passengerList );
passengerList = addPassenger("Ashley Smith", passengerList );
passengerList = addPassenger("Jon Friskics", passengerList );
// OR passengerList = ["Gregg Pollack", "Ashley Smith", "Jon Friskics"];

function deletePassenger (name, list){
	if (list.length == 0) {
		console.log("List is empty!");
	} else {
		for (var i = 0; i < list.lenght; i++) {
			if(list[i] == name){
				list[i] = undefined;
				return list;
			} else if (i == list.length - 1) {
				console.log("Passenger not found!");
			}
		}
	}
	return list;	
}

passengerList = deletePassenger ( "Ashley Smith", passengerList );