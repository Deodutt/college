var Page;
var Debug;

function Log(Msg){
	if(Debug){
		console.log(Msg);
	}
}

function GetDatabase(Type){
	switch(Page){
		case 'Fortnite':
			if(Type == 'User'){
				return localStorage.Fortniteusers;
			}
			else if(Type == 'Comment'){
				return localStorage.Fortnitecomments;
			}
			break;
		case 'League of Legends':
			if(Type == 'User'){
				return localStorage.Leagueusers;
			}
			else if(Type == 'Comment'){
				return localStorage.Leaguecomments;
			}
			break;
		case 'Minecraft':
			if(Type == 'User'){
				return localStorage.Minecraftusers;
			}
			else if(Type == 'Comment'){
				return localStorage.Minecraftcomments;
			}
			break;
		case 'Grand Theft Auto 5':
			if(Type == 'User'){
				return localStorage.GTA5users;
			}
			else if(Type == 'Comment'){
				return localStorage.GTA5comments;
			}
			break;
		case 'Player Unkown Battle Grounds':
			if(Type == 'User'){
				return localStorage.PUBGusers;
			}
			else if(Type == 'Comment'){
				return localStorage.PUBGcomments;
			}
			break;
		case 'Counter Strike Global Offensive':
			if(Type == 'User'){
				return localStorage.CSGOusers;
			}
			else if(Type == 'Comment'){
				return localStorage.CSGOcomments;
			}
			break;
		case 'Old School Runescape':
			if(Type == 'User'){
				return localStorage.OSRSusers;
			}
			else if(Type == 'Comment'){
				return localStorage.OSRScomments;
			}
			break;
		case 'Call of Duty: Modern Warfare 2':
			if(Type == 'User'){
				return localStorage.MW2users;
			}
			else if(Type == 'Comment'){
				return localStorage.MW2comments;
			}
			break;
		case 'Bully':
			if(Type == 'User'){
				return localStorage.Bullyusers;
			}
			else if(Type == 'Comment'){
				return localStorage.Bullycomments;
			}
			break;
		case 'Wizard101':
			if(Type == 'User'){
				return localStorage.Wizard101users;
			}
			else if(Type == 'Comment'){
				return localStorage.Wizard101comments;
			}
			break;
	}
	return 'undefined';
}

function SetDatabase(Type, Database){
	switch(Page){
		case 'Fortnite':
			if(Type == 'User'){
				localStorage.Fortniteusers = Database;
				return true;
			}
			else if(Type == 'Comment'){
				localStorage.Fortnitecomments = Database;
				return true;
			}
			break;
		case 'League of Legends':
			if(Type == 'User'){
				localStorage.Leagueusers = Database;
				return true;
			}
			else if(Type == 'Comment'){
				localStorage.Leaguecomments = Database;
				return true;
			}
			break;
		case 'Minecraft':
			if(Type == 'User'){
				localStorage.Minecraftusers = Database;
				return true;
			}
			else if(Type == 'Comment'){
				localStorage.Minecraftcomments = Database;
				return true;
			}
			break;
		case 'Grand Theft Auto 5':
			if(Type == 'User'){
				localStorage.GTA5users = Database;
				return true;
			}
			else if(Type == 'Comment'){
				localStorage.GTA5comments = Database;
				return true;
			}
			break;
		case 'Player Unkown Battle Grounds':
			if(Type == 'User'){
				localStorage.PUBGusers = Database;
				return true;
			}
			else if(Type == 'Comment'){
				localStorage.PUBGcomments = Database;
				return true;
			}
			break;
		case 'Counter Strike Global Offensive':
			if(Type == 'User'){
				localStorage.CSGOusers = Database;
				return true;
			}
			else if(Type == 'Comment'){
				localStorage.CSGOcomments = Database;
				return true;
			}
			break;
		case 'Old School Runescape':
			if(Type == 'User'){
				localStorage.OSRSusers = Database;
				return true;
			}
			else if(Type == 'Comment'){
				localStorage.OSRScomments = Database;
				return true;
			}
			break;
		case 'Call of Duty: Modern Warfare 2':
			if(Type == 'User'){
				localStorage.MW2users = Database;
				return true;
			}
			else if(Type == 'Comment'){
				localStorage.MW2comments = Database;
				return true;
			}
			break;
		case 'Bully':
			if(Type == 'User'){
				localStorage.Bullyusers = Database;
				return true;
			}
			else if(Type == 'Comment'){
				localStorage.Bullycomments = Database;
				return true;
			}
			break;
		case 'Wizard101':
			if(Type == 'User'){
				localStorage.Wizard101users = Database;
				return true;
			}
			else if(Type == 'Comment'){
				localStorage.Wizard101comments = Database;
				return true;
			}
			break;
	}
	return false;
}

function IsDatabaseOkay(){
	if(typeof GetDatabase('User') != 'undefined' && typeof GetDatabase('Comment') !='undefined'){
		return true;
	}
	return false;
}

function PrintDatabase(){
	var tempUserArray = JSON.parse(GetDatabase('User'));
	var tempMessageArray = JSON.parse(GetDatabase('Comment'));
	for(var i = 0; i < tempUserArray.length; i++){
		PrintComment(tempUserArray[i], tempMessageArray[i],i);
	}
}

function ResetDatabase(Database){
	tempArray = [];
	switch(Database){
		case 'Fortnite':
			localStorage.Fortniteusers = JSON.stringify(tempArray);
			localStorage.Fortnitecomments = JSON.stringify(tempArray);
			Log('Reset Fortnite Database');
			return true;
			break;
		case 'League of Legends':
			localStorage.Leagueusers = JSON.stringify(tempArray);
			localStorage.Leaguecomments = JSON.stringify(tempArray);
			Log('Reset League Database');
			return true;
			break;
		case 'Minecraft':
			localStorage.Minecraftusers = JSON.stringify(tempArray);
			localStorage.Minecraftcomments = JSON.stringify(tempArray);
			Log('Reset Minecraft Database');
			return true;
			break;
		case 'Grand Theft Auto 5':
			localStorage.GTA5users = JSON.stringify(tempArray);
			localStorage.GTA5comments = JSON.stringify(tempArray);
			Log('Reset Grand Theft Auto 5 Database');
			return true;
			break;
		case 'Player Unkown Battle Grounds':
			localStorage.PUBGusers = JSON.stringify(tempArray);
			localStorage.PUBGcomments = JSON.stringify(tempArray);
			Log('Reset Player Unkown Battle Grounds Database');
			return true;
			break;
		case 'Counter Strike Global Offensive':
			localStorage.CSGOusers = JSON.stringify(tempArray);
			localStorage.CSGOcomments = JSON.stringify(tempArray);
			Log('Reset Counter Strike Global Offensive Database');
			return true;
			break;
		case 'Old School Runescape':
			localStorage.OSRSusers = JSON.stringify(tempArray);
			localStorage.OSRScomments = JSON.stringify(tempArray);
			Log('Reset Old School Runescape Database');
			return true;
			break;
		case 'Call of Duty: Modern Warfare 2':
			localStorage.MW2users = JSON.stringify(tempArray);
			localStorage.MW2comments = JSON.stringify(tempArray);
			Log('Reset Call of Duty: Modern Warfare 2 Database');
			return true;
			break;
		case 'Bully':
			localStorage.Bullyusers = JSON.stringify(tempArray);
			localStorage.Bullycomments = JSON.stringify(tempArray);
			Log('Reset Bully Database');
			return true;
			break;
		case 'Wizard101':
			localStorage.Wizard101users = JSON.stringify(tempArray);
			localStorage.Wizard101comments = JSON.stringify(tempArray);
			Log('Reset Wizard101 Database');
			return true;
			break;
		case 'All':
			localStorage.Fortniteusers = JSON.stringify(tempArray);
			localStorage.Fortnitecomments = JSON.stringify(tempArray);
			localStorage.Leagueusers = JSON.stringify(tempArray);
			localStorage.Leaguecomments = JSON.stringify(tempArray);
			localStorage.Minecraftusers = JSON.stringify(tempArray);
			localStorage.Minecraftcomments = JSON.stringify(tempArray);
			localStorage.GTA5users = JSON.stringify(tempArray);
			localStorage.GTA5comments = JSON.stringify(tempArray);
			localStorage.CSGOusers = JSON.stringify(tempArray);
			localStorage.CSGOcomments = JSON.stringify(tempArray);
			localStorage.OSRSusers = JSON.stringify(tempArray);
			localStorage.OSRScomments = JSON.stringify(tempArray);
			localStorage.MW2users = JSON.stringify(tempArray);
			localStorage.MW2comments = JSON.stringify(tempArray);
			localStorage.Bullyusers = JSON.stringify(tempArray);
			localStorage.Bullycomments = JSON.stringify(tempArray);
			localStorage.Wizard101users = JSON.stringify(tempArray);
			localStorage.Wizard101comments = JSON.stringify(tempArray);
			Log('Reset All Database');
			return true;
			break;
		default:
			Log('Enter Database for ResetDatabase()');
	}
	return false;
}

function PrintComment(InputName, InputMessage, id) {

	var Reviews = document.getElementById("Reviews");
	var Holder = document.createElement('div');
	var Name = document.createElement('h2');
	var Spacer = document.createElement('span');
	var ID = document.createElement('span');
	var Comment = document.createElement('h3');
	Name.style.fontWeight = 'bold';
	Name.textContent = InputName;
	Spacer.appendChild(document.createTextNode(' - '));
	ID.id = id;
	ID.style.color = 'red';
	ID.style.fontStyle = 'italic';
	ID.style.fontSize = '20px';
	ID.style.cursor = 'pointer';
	ID.onclick = function(){TargetDelete(this);};
	ID.appendChild(document.createTextNode('Click to Delete'));
	Name.appendChild(Spacer);
	Name.appendChild(ID);
	Comment.style.fontWeight = 'normal';
	Comment.style.fontStyle = 'italic';
	Comment.textContent = '"' + InputMessage + '"';
	Comment.id = id;
	Holder.appendChild(Name);
	Holder.appendChild(Comment);
	Reviews.appendChild(Holder);
}

function DeleteAllComment(){
	ResetDatabase('All');
}

function TargetDelete(element){
	var tempUserArray = JSON.parse(GetDatabase('User'));
	var tempMessageArray = JSON.parse(GetDatabase('Comment'));
	tempUserArray.splice(element.id, 1);
	tempMessageArray.splice(element.id, 1);
	SetDatabase('User',JSON.stringify(tempUserArray));
	SetDatabase('Comment',JSON.stringify(tempMessageArray));
	element.parentNode.parentNode.parentNode.removeChild(element.parentNode.parentNode);
}

function AddComment() {
	var tempUserArray = JSON.parse(GetDatabase('User'));
	var tempMessageArray = JSON.parse(GetDatabase('Comment'));

	var user = document.getElementById("username").value;
	var Message = document.getElementById("MessageBox").value;

	if(user == ''){
		user = 'Anonymous';
	}
	if (Message == ''){
		alert('Enter a Message!');
		return;
	}
	tempUserArray.push(user);
	tempMessageArray.push(Message);
	SetDatabase('User',JSON.stringify(tempUserArray));
	SetDatabase('Comment',JSON.stringify(tempMessageArray));
	PrintComment(user, Message,tempUserArray.length-1);
	document.getElementById("username").value = '';
	document.getElementById("MessageBox").value = '';
	document.getElementById("postComment").scrollIntoView();

}

function DatabaseState(){
	Log('Fortnite Users:'+localStorage.Fortniteusers);
	Log('Fortnite Message:'+localStorage.Fortnitecomments);
	Log('League of Legends Users:'+localStorage.Leagueusers);
	Log('League of Legends Message:'+localStorage.Leaguecomments);
	Log('Minecraft Users:'+localStorage.Minecraftusers);
	Log('Minecraft Message:'+localStorage.Minecraftcomments);
	Log('Grand Theft Auto 5 Users:'+localStorage.GTA5users);
	Log('Grand Theft Auto 5 Message:'+localStorage.GTA5comments);
	Log('Player Unkown Battle Grounds Users:'+localStorage.PUBGusers);
	Log('Player Unkown Battle Grounds Message:'+localStorage.PUBGcomments);
	Log('Counter Strike Global Offensive Users:'+localStorage.CSGOusers);
	Log('Counter Strike Global Offensive Message:'+localStorage.CSGOcomments);
	Log('Old School Runescape Users:'+localStorage.OSRSusers);
	Log('Old School Runescape Message:'+localStorage.OSRScomments);
	Log('Call of Duty: Modern Warfare 2 Users:'+localStorage.MW2users);
	Log('Call of Duty: Modern Warfare 2 Message:'+localStorage.MW2comments);
	Log('Bully Users:'+localStorage.Bullyusers);
	Log('Bully Message:'+localStorage.Bullycomments);
	Log('Wizard101 Users:'+localStorage.Wizard101users);
	Log('Wizard101 Message:'+localStorage.Wizard101comments);
}

function main(){
	Page = document.getElementById('page').textContent;
	Debug = false;

	Log('Page:'+Page);
	DatabaseState();

	if(!IsDatabaseOkay()){
		ResetDatabase(Page);
	}

	PrintDatabase();
}

main();








function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}