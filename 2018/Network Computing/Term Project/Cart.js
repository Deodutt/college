var Page;
var Debug;

function Log(Msg){
	if(Debug){
		console.log(Msg);
	}
}

function GetCartDatabase(){
	return localStorage.CartDatabase;
}

function SetCartDatabase(Database){
	localStorage.CartDatabase = Database;
}

function ClearCart(){
	tempArray = [];
	localStorage.CartDatabase = JSON.stringify(tempArray);
	CheckCart();
	Log('Reset Cart Database');
}

function CheckDatabase(){
	if(typeof GetCartDatabase() == 'undefined'){
		ClearCart();
	}
}

function CheckCart(){
	var Counter = document.getElementById("Counter");
	var CartDatabase = JSON.parse(GetCartDatabase());
	var CartCounter = document.getElementById("CartCounter");
	var Text = undefined;
	if(CartDatabase.length < 1){
		return;
	}
	if(Counter == undefined && CartCounter == null){
		return;
	}
	if(CartCounter != undefined && CartCounter != null){
		Text = CartCounter;
	}
	else{
		Text = document.createElement('span');
	}
	Text.id = 'CartCounter';
	Text.textContent = CartDatabase.length;
	Text.style.position = 'absolute';
	Text.style.color = 'black';
	Text.style.backgroundColor = 'orange';
	Text.style.borderRadius = '50%';
	Text.style.width = '20px';
	Text.style.height = '20px';
	Text.style.textAlign = 'center';
	Text.style.fontSize = '15px';
	Text.style.fontWeight = '700';
	Text.style.cursor = 'pointer';
	Text.style.top = 0;
	Text.style.right = 0;
	Text.zIndex = 2;
	Counter.appendChild(Text);
}

function ReCalculate(){
	var CartDatabase = JSON.parse(GetCartDatabase());
	var Total = document.getElementById("Total");
	var TotalCost = 0;
	var Fortnite = document.getElementById("Fortnite");
	var FortniteCost = 0;
	var League = document.getElementById("League");
	var LeagueCost = 0;
	var Minecraft = document.getElementById("Minecraft");
	var MinecraftCost = 0;
	var GTA5 = document.getElementById("GTA5");
	var GTA5Cost = 0;
	var PUBG = document.getElementById("PUBG");
	var PUBGCost = 0;
	var CSGO = document.getElementById("CSGO");
	var CSGOCost = 0;
	var OSRS = document.getElementById("OSRS");
	var OSRSCost = 0;
	var MW2 = document.getElementById("MW2");
	var MW2Cost = 0;
	var Bully = document.getElementById("Bully");
	var BullyCost = 0;
	var Wizard101 = document.getElementById("Wizard101");
	var Wizard101Cost = 0;
	if(Fortnite != undefined && Fortnite != null){
		var FortniteQty = document.getElementById("FortniteQty");
		var QtySelector = Number(FortniteQty.value);
		var FortnitePrice = document.getElementById("FortnitePrice");
		var Counter = 0;
		for(var i = 0; i < CartDatabase.length; i++){
			if(CartDatabase[i] == '1,000 V-Bucks'){
				Counter+=1;
			}
		}
		if(QtySelector < Counter){
			var Difference = Counter - QtySelector;
			for(var i = CartDatabase.length; i >= 0; i--){
				if(CartDatabase[i] == '1,000 V-Bucks' && Difference > 0){
					CartDatabase.splice(i, 1);
					Difference-=1;
				}
			}
		}
		if(QtySelector > Counter){
			var Difference = QtySelector - Counter;
			for(var i = 0; i < Difference; i++){
				CartDatabase.push('1,000 V-Bucks');
			}
		}
		SetCartDatabase(JSON.stringify(CartDatabase));
		FortniteCost = QtySelector*(10.00);
		FortnitePrice.textContent = '$'+String(FortniteCost.toFixed(2))
	}
	if(League != undefined && League != null){
		var LeagueQty = document.getElementById("LeagueQty");
		var QtySelector = Number(LeagueQty.value);
		var LeaguePrice = document.getElementById("LeaguePrice");
		var Counter = 0;
		for(var i = 0; i < CartDatabase.length; i++){
			if(CartDatabase[i] == '1350 RP'){
				Counter+=1;
			}
		}
		if(QtySelector < Counter){
			var Difference = Counter - QtySelector;
			for(var i = CartDatabase.length; i >= 0; i--){
				if(CartDatabase[i] == '1350 RP' && Difference > 0){
					CartDatabase.splice(i, 1);
					Difference-=1;
				}
			}
		}
		if(QtySelector > Counter){
			var Difference = QtySelector - Counter;
			for(var i = 0; i < Difference; i++){
				CartDatabase.push('1350 RP');
			}
		}
		SetCartDatabase(JSON.stringify(CartDatabase));
		LeagueCost = QtySelector*(10.00);
		LeaguePrice.textContent = '$'+String(LeagueCost.toFixed(2))
	}
	if(Minecraft != undefined && Minecraft != null){
		var MinecraftQty = document.getElementById("MinecraftQty");
		var QtySelector = Number(MinecraftQty.value);
		var MinecraftPrice = document.getElementById("MinecraftPrice");
		var Counter = 0;
		for(var i = 0; i < CartDatabase.length; i++){
			if(CartDatabase[i] == 'Minecraft Game'){
				Counter+=1;
			}
		}
		if(QtySelector < Counter){
			var Difference = Counter - QtySelector;
			for(var i = CartDatabase.length; i >= 0; i--){
				if(CartDatabase[i] == 'Minecraft Game' && Difference > 0){
					CartDatabase.splice(i, 1);
					Difference-=1;
				}
			}
		}
		if(QtySelector > Counter){
			var Difference = QtySelector - Counter;
			for(var i = 0; i < Difference; i++){
				CartDatabase.push('Minecraft Game');
			}
		}
		SetCartDatabase(JSON.stringify(CartDatabase));
		MinecraftCost = QtySelector*(25.00);
		MinecraftPrice.textContent = '$'+String(MinecraftCost.toFixed(2))
	}
	if(GTA5 != undefined && GTA5 != null){
		var GTA5Qty = document.getElementById("GTA5Qty");
		var QtySelector = Number(GTA5Qty.value);
		var GTA5Price = document.getElementById("GTA5Price");
		var Counter = 0;
		for(var i = 0; i < CartDatabase.length; i++){
			if(CartDatabase[i] == 'GTA5 Game'){
				Counter+=1;
			}
		}
		if(QtySelector < Counter){
			var Difference = Counter - QtySelector;
			for(var i = CartDatabase.length; i >= 0; i--){
				if(CartDatabase[i] == 'GTA5 Game' && Difference > 0){
					CartDatabase.splice(i, 1);
					Difference-=1;
				}
			}
		}
		if(QtySelector > Counter){
			var Difference = QtySelector - Counter;
			for(var i = 0; i < Difference; i++){
				CartDatabase.push('GTA5 Game');
			}
		}
		SetCartDatabase(JSON.stringify(CartDatabase));
		GTA5Cost = QtySelector*(59.99);
		GTA5Price.textContent = '$'+String(GTA5Cost.toFixed(2))
	}
	if(PUBG != undefined && PUBG != null){
		var PUBGQty = document.getElementById("PUBGQty");
		var QtySelector = Number(PUBGQty.value);
		var PUBGPrice = document.getElementById("PUBGPrice");
		var Counter = 0;
		for(var i = 0; i < CartDatabase.length; i++){
			if(CartDatabase[i] == 'PUBG Game'){
				Counter+=1;
			}
		}
		if(QtySelector < Counter){
			var Difference = Counter - QtySelector;
			for(var i = CartDatabase.length; i >= 0; i--){
				if(CartDatabase[i] == 'PUBG Game' && Difference > 0){
					CartDatabase.splice(i, 1);
					Difference-=1;
				}
			}
		}
		if(QtySelector > Counter){
			var Difference = QtySelector - Counter;
			for(var i = 0; i < Difference; i++){
				CartDatabase.push('PUBG Game');
			}
		}
		SetCartDatabase(JSON.stringify(CartDatabase));
		PUBGCost = QtySelector*(29.99);
		PUBGPrice.textContent = '$'+String(PUBGCost.toFixed(2))
	}
	if(CSGO != undefined && CSGO != null){
		var CSGOQty = document.getElementById("CSGOQty");
		var QtySelector = Number(CSGOQty.value);
		var CSGOPrice = document.getElementById("CSGOPrice");
		var Counter = 0;
		for(var i = 0; i < CartDatabase.length; i++){
			if(CartDatabase[i] == 'CSGO Game'){
				Counter+=1;
			}
		}
		if(QtySelector < Counter){
			var Difference = Counter - QtySelector;
			for(var i = CartDatabase.length; i >= 0; i--){
				if(CartDatabase[i] == 'CSGO Game' && Difference > 0){
					CartDatabase.splice(i, 1);
					Difference-=1;
				}
			}
		}
		if(QtySelector > Counter){
			var Difference = QtySelector - Counter;
			for(var i = 0; i < Difference; i++){
				CartDatabase.push('CSGO Game');
			}
		}
		SetCartDatabase(JSON.stringify(CartDatabase));
		CSGOCost = QtySelector*(14.99);
		CSGOPrice.textContent = '$'+String(CSGOCost.toFixed(2))
	}
	if(OSRS != undefined && OSRS != null){
		var OSRSQty = document.getElementById("OSRSQty");
		var QtySelector = Number(OSRSQty.value);
		var OSRSPrice = document.getElementById("OSRSPrice");
		var Counter = 0;
		for(var i = 0; i < CartDatabase.length; i++){
			if(CartDatabase[i] == 'OSRS Mem'){
				Counter+=1;
			}
		}
		if(QtySelector < Counter){
			var Difference = Counter - QtySelector;
			for(var i = CartDatabase.length; i >= 0; i--){
				if(CartDatabase[i] == 'OSRS Mem' && Difference > 0){
					CartDatabase.splice(i, 1);
					Difference-=1;
				}
			}
		}
		if(QtySelector > Counter){
			var Difference = QtySelector - Counter;
			for(var i = 0; i < Difference; i++){
				CartDatabase.push('OSRS Mem');
			}
		}
		SetCartDatabase(JSON.stringify(CartDatabase));
		OSRSCost = QtySelector*(9.49);
		OSRSPrice.textContent = '$'+String(OSRSCost.toFixed(2))
	}
	if(MW2 != undefined && MW2 != null){
		var MW2Qty = document.getElementById("MW2Qty");
		var QtySelector = Number(MW2Qty.value);
		var MW2Price = document.getElementById("MW2Price");
		var Counter = 0;
		for(var i = 0; i < CartDatabase.length; i++){
			if(CartDatabase[i] == 'MW2 Game'){
				Counter+=1;
			}
		}
		if(QtySelector < Counter){
			var Difference = Counter - QtySelector;
			for(var i = CartDatabase.length; i >= 0; i--){
				if(CartDatabase[i] == 'MW2 Game' && Difference > 0){
					CartDatabase.splice(i, 1);
					Difference-=1;
				}
			}
		}
		if(QtySelector > Counter){
			var Difference = QtySelector - Counter;
			for(var i = 0; i < Difference; i++){
				CartDatabase.push('MW2 Game');
			}
		}
		SetCartDatabase(JSON.stringify(CartDatabase));
		MW2Cost = QtySelector*(19.99);
		MW2Price.textContent = '$'+String(MW2Cost.toFixed(2))
	}
	if(Bully != undefined && Bully != null){
		var BullyQty = document.getElementById("BullyQty");
		var QtySelector = Number(BullyQty.value);
		var BullyPrice = document.getElementById("BullyPrice");
		var Counter = 0;
		for(var i = 0; i < CartDatabase.length; i++){
			if(CartDatabase[i] == 'Bully Game'){
				Counter+=1;
			}
		}
		if(QtySelector < Counter){
			var Difference = Counter - QtySelector;
			for(var i = CartDatabase.length; i >= 0; i--){
				if(CartDatabase[i] == 'Bully Game' && Difference > 0){
					CartDatabase.splice(i, 1);
					Difference-=1;
				}
			}
		}
		if(QtySelector > Counter){
			var Difference = QtySelector - Counter;
			for(var i = 0; i < Difference; i++){
				CartDatabase.push('Bully Game');
			}
		}
		SetCartDatabase(JSON.stringify(CartDatabase));
		BullyCost = QtySelector*(14.99);
		BullyPrice.textContent = '$'+String(BullyCost.toFixed(2))
	}
	if(Wizard101 != undefined && Wizard101 != null){
		var Wizard101Qty = document.getElementById("Wizard101Qty");
		var QtySelector = Number(Wizard101Qty.value);
		var Wizard101Price = document.getElementById("Wizard101Price");
		var Counter = 0;
		for(var i = 0; i < CartDatabase.length; i++){
			if(CartDatabase[i] == 'Wizard101 Mem'){
				Counter+=1;
			}
		}
		if(QtySelector < Counter){
			var Difference = Counter - QtySelector;
			for(var i = CartDatabase.length; i >= 0; i--){
				if(CartDatabase[i] == 'Wizard101 Mem' && Difference > 0){
					CartDatabase.splice(i, 1);
					Difference-=1;
				}
			}
		}
		if(QtySelector > Counter){
			var Difference = QtySelector - Counter;
			for(var i = 0; i < Difference; i++){
				CartDatabase.push('Wizard101 Mem');
			}
		}
		SetCartDatabase(JSON.stringify(CartDatabase));
		Wizard101Cost = QtySelector*(9.95);
		Wizard101Price.textContent = '$'+String(Wizard101Cost.toFixed(2))
	}
	if(Total != undefined && Total != null){
		TotalCost += FortniteCost;
		TotalCost += LeagueCost;
		TotalCost += MinecraftCost;
		TotalCost += GTA5Cost;
		TotalCost += PUBGCost;
		TotalCost += CSGOCost;
		TotalCost += OSRSCost;
		TotalCost += MW2Cost;
		TotalCost += BullyCost;
		TotalCost += Wizard101Cost;
		Total.textContent = '$'+String(TotalCost.toFixed(2))
	}
	CheckCart();
	return;
}

function LoadFortnite(){
	var Table = document.getElementById("Table");
	var TableRow = document.getElementById("Fortnite");
	if(Table == undefined && Table == null){
		Log('Table not found');
		return;
	}
	if(TableRow != undefined && TableRow != null){
		var QtySelector = document.getElementById("FortniteQty");
		if(QtySelector != undefined && QtySelector != null){
			var NewValue = Number(QtySelector.value)+1;
			if(NewValue < 11){
				QtySelector.value = String(NewValue);
			}
		}
		return;
	}
	TableRow = document.createElement('tr');
	TableRow.id = 'Fortnite';
	Table.appendChild(TableRow);

	var TablePicture = document.createElement('td');
	TablePicture.className = 'cartStyle';
	var Picture = document.createElement('img');
	Picture.style.padding = '15px';
	Picture.style.borderRadius = '25px';
	Picture.style.width = '250px';
	Picture.style.height = '330px';
	Picture.src = "images/Fortnite3.jpg";
	TablePicture.appendChild(Picture);
	TableRow.appendChild(TablePicture);

	var TableDescription = document.createElement('td');
	TableDescription.className = 'cartStyle';
	var DescriptionHeader = document.createElement('h1');
	DescriptionHeader.style.fontWeight = '600';
	DescriptionHeader.textContent = 'Fortnite 1,000 V-Bucks';
	TableDescription.appendChild(DescriptionHeader);
	var Description = document.createElement('h1');
	Description.style.fontWeight = '500';
	Description.textContent = 'With 1,000 V-Bucks you can buy the Season 4 Battlepass for 950 V-Bucks. Get exclusive rewards for leveling up battlepass tiers, do weekly challenges and much more with the battlepass. You can also buy skins, emotes, gliders, and much more with V-Bucks.';
	TableDescription.appendChild(Description);
	TableRow.appendChild(TableDescription);

	var TableQty = document.createElement('td');
	TableQty.className = 'cartStyle';
	var TableQtyHeader = document.createElement('h1');
	TableQtyHeader.textContent = 'Qty.';
	TableQty.appendChild(TableQtyHeader);
	for(var i=0;i<1;i++){
		var Break = document.createElement('br');
		TableQty.appendChild(Break);
	}
	var QtySelector = document.createElement('select');
	QtySelector.id = 'FortniteQty';
	for(var i=1;i<11;i++){
		var SelectorOption = document.createElement('option');
		SelectorOption.value = i;
		SelectorOption.textContent = i;
		QtySelector.appendChild(SelectorOption);
	}
	QtySelector.onchange = ReCalculate;
	TableQty.appendChild(QtySelector);
	TableRow.appendChild(TableQty);

	var TablePrice = document.createElement('td');
	TablePrice.className = 'cartStyle';
	var PriceHeader = document.createElement('h1');
	PriceHeader.textContent = 'Price';
	TablePrice.appendChild(PriceHeader);
	for(var i=0;i<1;i++){
		var Break = document.createElement('br');
		PriceHeader.appendChild(Break);
	}
	var Price = document.createElement('h1');
	Price.id = 'FortnitePrice';
	Price.textContent += '$';
	TablePrice.appendChild(Price);
	var Remove = document.createElement('span');
	var Text = document.createTextNode('Remove');
	Remove.style.color = 'red';
	Remove.style.fontSize = '20px';
	Remove.style.cursor = 'pointer';
	Remove.onclick = function(){RemovefromCart('1,000 V-Bucks');};
	Remove.appendChild(Text);
	TablePrice.appendChild(Remove);
	TableRow.appendChild(TablePrice);
}

function LoadLeague(){
	var Table = document.getElementById("Table");
	var TableRow = document.getElementById("League");
	if(Table == undefined && Table == null){
		Log('Table not found');
		return;
	}
	if(TableRow != undefined && TableRow != null){
		var QtySelector = document.getElementById("LeagueQty");
		if(QtySelector != undefined && QtySelector != null){
			var NewValue = Number(QtySelector.value)+1;
			if(NewValue < 11){
				QtySelector.value = String(NewValue);
			}
		}
		return;
	}
	TableRow = document.createElement('tr');
	TableRow.id = 'League';
	Table.appendChild(TableRow);

	var TablePicture = document.createElement('td');
	TablePicture.className = 'cartStyle';
	var Picture = document.createElement('img');
	Picture.style.padding = '15px';
	Picture.style.borderRadius = '25px';
	Picture.style.width = '250px';
	Picture.style.height = '330px';
	Picture.src = "images/League3.jpg";
	TablePicture.appendChild(Picture);
	TableRow.appendChild(TablePicture);

	var TableDescription = document.createElement('td');
	TableDescription.className = 'cartStyle';
	var DescriptionHeader = document.createElement('h1');
	DescriptionHeader.style.fontWeight = '600';
	DescriptionHeader.textContent = 'League of Legends 1350 RP';
	TableDescription.appendChild(DescriptionHeader);
	var Description = document.createElement('h1');
	Description.style.fontWeight = '500';
	Description.textContent = 'Riot Points can be used to buy amazing skins, champions, icon, and much many more! You can also gift your friends cool skins.';
	TableDescription.appendChild(Description);
	TableRow.appendChild(TableDescription);

	var TableQty = document.createElement('td');
	TableQty.className = 'cartStyle';
	var TableQtyHeader = document.createElement('h1');
	TableQtyHeader.textContent = 'Qty.';
	TableQty.appendChild(TableQtyHeader);
	for(var i=0;i<1;i++){
		var Break = document.createElement('br');
		TableQty.appendChild(Break);
	}
	var QtySelector = document.createElement('select');
	QtySelector.id = 'LeagueQty';
	for(var i=1;i<11;i++){
		var SelectorOption = document.createElement('option');
		SelectorOption.value = i;
		SelectorOption.textContent = i;
		QtySelector.appendChild(SelectorOption);
	}
	QtySelector.onchange = ReCalculate;
	TableQty.appendChild(QtySelector);
	TableRow.appendChild(TableQty);

	var TablePrice = document.createElement('td');
	TablePrice.className = 'cartStyle';
	var PriceHeader = document.createElement('h1');
	PriceHeader.textContent = 'Price';
	TablePrice.appendChild(PriceHeader);
	for(var i=0;i<1;i++){
		var Break = document.createElement('br');
		PriceHeader.appendChild(Break);
	}
	var Price = document.createElement('h1');
	Price.id = 'LeaguePrice';
	Price.textContent += '$';
	TablePrice.appendChild(Price);
	var Remove = document.createElement('span');
	var Text = document.createTextNode('Remove');
	Remove.style.color = 'red';
	Remove.style.fontSize = '20px';
	Remove.style.cursor = 'pointer';
	Remove.onclick = function(){RemovefromCart('1350 RP');};
	Remove.appendChild(Text);
	TablePrice.appendChild(Remove);
	TableRow.appendChild(TablePrice);
}

function LoadMinecraft(){
	var Table = document.getElementById("Table");
	var TableRow = document.getElementById("Minecraft");
	if(Table == undefined && Table == null){
		Log('Table not found');
		return;
	}
	if(TableRow != undefined && TableRow != null){
		var QtySelector = document.getElementById("MinecraftQty");
		if(QtySelector != undefined && QtySelector != null){
			var NewValue = Number(QtySelector.value)+1;
			if(NewValue < 11){
				QtySelector.value = String(NewValue);
			}
		}
		return;
	}
	TableRow = document.createElement('tr');
	TableRow.id = 'Minecraft';
	Table.appendChild(TableRow);

	var TablePicture = document.createElement('td');
	TablePicture.className = 'cartStyle';
	var Picture = document.createElement('img');
	Picture.style.padding = '15px';
	Picture.style.borderRadius = '25px';
	Picture.style.width = '250px';
	Picture.style.height = '330px';
	Picture.src = "images/Minecraft3.jpg";
	TablePicture.appendChild(Picture);
	TableRow.appendChild(TablePicture);

	var TableDescription = document.createElement('td');
	TableDescription.className = 'cartStyle';
	var DescriptionHeader = document.createElement('h1');
	DescriptionHeader.style.fontWeight = '600';
	DescriptionHeader.textContent = 'Minecraft';
	TableDescription.appendChild(DescriptionHeader);
	var Description = document.createElement('h1');
	Description.style.fontWeight = '500';
	Description.textContent = 'Build, create and explore! Have ridiculus amounts of fun! ';
	TableDescription.appendChild(Description);
	TableRow.appendChild(TableDescription);

	var TableQty = document.createElement('td');
	TableQty.className = 'cartStyle';
	var TableQtyHeader = document.createElement('h1');
	TableQtyHeader.textContent = 'Qty.';
	TableQty.appendChild(TableQtyHeader);
	for(var i=0;i<1;i++){
		var Break = document.createElement('br');
		TableQty.appendChild(Break);
	}
	var QtySelector = document.createElement('select');
	QtySelector.id = 'MinecraftQty';
	for(var i=1;i<11;i++){
		var SelectorOption = document.createElement('option');
		SelectorOption.value = i;
		SelectorOption.textContent = i;
		QtySelector.appendChild(SelectorOption);
	}
	QtySelector.onchange = ReCalculate;
	TableQty.appendChild(QtySelector);
	TableRow.appendChild(TableQty);

	var TablePrice = document.createElement('td');
	TablePrice.className = 'cartStyle';
	var PriceHeader = document.createElement('h1');
	PriceHeader.textContent = 'Price';
	TablePrice.appendChild(PriceHeader);
	for(var i=0;i<1;i++){
		var Break = document.createElement('br');
		PriceHeader.appendChild(Break);
	}
	var Price = document.createElement('h1');
	Price.id = 'MinecraftPrice';
	Price.textContent += '$';
	TablePrice.appendChild(Price);
	var Remove = document.createElement('span');
	var Text = document.createTextNode('Remove');
	Remove.style.color = 'red';
	Remove.style.fontSize = '20px';
	Remove.style.cursor = 'pointer';
	Remove.onclick = function(){RemovefromCart('Minecraft Game');};
	Remove.appendChild(Text);
	TablePrice.appendChild(Remove);
	TableRow.appendChild(TablePrice);
}

function LoadGTA5(){
	var Table = document.getElementById("Table");
	var TableRow = document.getElementById("GTA5");
	if(Table == undefined && Table == null){
		Log('Table not found');
		return;
	}
	if(TableRow != undefined && TableRow != null){
		var QtySelector = document.getElementById("GTA5Qty");
		if(QtySelector != undefined && QtySelector != null){
			var NewValue = Number(QtySelector.value)+1;
			if(NewValue < 11){
				QtySelector.value = String(NewValue);
			}
		}
		return;
	}
	TableRow = document.createElement('tr');
	TableRow.id = 'GTA5';
	Table.appendChild(TableRow);

	var TablePicture = document.createElement('td');
	TablePicture.className = 'cartStyle';
	var Picture = document.createElement('img');
	Picture.style.padding = '15px';
	Picture.style.borderRadius = '25px';
	Picture.style.width = '250px';
	Picture.style.height = '330px';
	Picture.src = "images/GTA53.jpg";
	TablePicture.appendChild(Picture);
	TableRow.appendChild(TablePicture);

	var TableDescription = document.createElement('td');
	TableDescription.className = 'cartStyle';
	var DescriptionHeader = document.createElement('h1');
	DescriptionHeader.style.fontWeight = '600';
	DescriptionHeader.textContent = 'Grand Theft Auto V';
	TableDescription.appendChild(DescriptionHeader);
	var Description = document.createElement('h1');
	Description.style.fontWeight = '500';
	Description.textContent = 'Explore the stunning world of Los Santos and Blaine County in the ultimate Grand Theft Auto V experience.';
	TableDescription.appendChild(Description);
	TableRow.appendChild(TableDescription);

	var TableQty = document.createElement('td');
	TableQty.className = 'cartStyle';
	var TableQtyHeader = document.createElement('h1');
	TableQtyHeader.textContent = 'Qty.';
	TableQty.appendChild(TableQtyHeader);
	for(var i=0;i<1;i++){
		var Break = document.createElement('br');
		TableQty.appendChild(Break);
	}
	var QtySelector = document.createElement('select');
	QtySelector.id = 'GTA5Qty';
	for(var i=1;i<11;i++){
		var SelectorOption = document.createElement('option');
		SelectorOption.value = i;
		SelectorOption.textContent = i;
		QtySelector.appendChild(SelectorOption);
	}
	QtySelector.onchange = ReCalculate;
	TableQty.appendChild(QtySelector);
	TableRow.appendChild(TableQty);

	var TablePrice = document.createElement('td');
	TablePrice.className = 'cartStyle';
	var PriceHeader = document.createElement('h1');
	PriceHeader.textContent = 'Price';
	TablePrice.appendChild(PriceHeader);
	for(var i=0;i<1;i++){
		var Break = document.createElement('br');
		PriceHeader.appendChild(Break);
	}
	var Price = document.createElement('h1');
	Price.id = 'GTA5Price';
	Price.textContent += '$';
	TablePrice.appendChild(Price);
	var Remove = document.createElement('span');
	var Text = document.createTextNode('Remove');
	Remove.style.color = 'red';
	Remove.style.fontSize = '20px';
	Remove.style.cursor = 'pointer';
	Remove.onclick = function(){RemovefromCart('GTA5 Game');};
	Remove.appendChild(Text);
	TablePrice.appendChild(Remove);
	TableRow.appendChild(TablePrice);
}

function LoadPUBG(){
	var Table = document.getElementById("Table");
	var TableRow = document.getElementById("PUBG");
	if(Table == undefined && Table == null){
		Log('Table not found');
		return;
	}
	if(TableRow != undefined && TableRow != null){
		var QtySelector = document.getElementById("PUBGQty");
		if(QtySelector != undefined && QtySelector != null){
			var NewValue = Number(QtySelector.value)+1;
			if(NewValue < 11){
				QtySelector.value = String(NewValue);
			}
		}
		return;
	}
	TableRow = document.createElement('tr');
	TableRow.id = 'PUBG';
	Table.appendChild(TableRow);

	var TablePicture = document.createElement('td');
	TablePicture.className = 'cartStyle';
	var Picture = document.createElement('img');
	Picture.style.padding = '15px';
	Picture.style.borderRadius = '25px';
	Picture.style.width = '250px';
	Picture.style.height = '330px';
	Picture.src = "images/PUBG3.jpg";
	TablePicture.appendChild(Picture);
	TableRow.appendChild(TablePicture);

	var TableDescription = document.createElement('td');
	TableDescription.className = 'cartStyle';
	var DescriptionHeader = document.createElement('h1');
	DescriptionHeader.style.fontWeight = '600';
	DescriptionHeader.textContent = "PLAYERUNKNOWN'S BATTLEGROUNDS";
	TableDescription.appendChild(DescriptionHeader);
	var Description = document.createElement('h1');
	Description.style.fontWeight = '500';
	Description.textContent = "PLAYERUNKNOWN'S BATTLEGROUNDS is a battle royale shooter that pits 100 players against each other in a struggle for survival. Gather supplies and outwit your opponents to become the last person standing.";
	TableDescription.appendChild(Description);
	TableRow.appendChild(TableDescription);

	var TableQty = document.createElement('td');
	TableQty.className = 'cartStyle';
	var TableQtyHeader = document.createElement('h1');
	TableQtyHeader.textContent = 'Qty.';
	TableQty.appendChild(TableQtyHeader);
	for(var i=0;i<1;i++){
		var Break = document.createElement('br');
		TableQty.appendChild(Break);
	}
	var QtySelector = document.createElement('select');
	QtySelector.id = 'PUBGQty';
	for(var i=1;i<11;i++){
		var SelectorOption = document.createElement('option');
		SelectorOption.value = i;
		SelectorOption.textContent = i;
		QtySelector.appendChild(SelectorOption);
	}
	QtySelector.onchange = ReCalculate;
	TableQty.appendChild(QtySelector);
	TableRow.appendChild(TableQty);

	var TablePrice = document.createElement('td');
	TablePrice.className = 'cartStyle';
	var PriceHeader = document.createElement('h1');
	PriceHeader.textContent = 'Price';
	TablePrice.appendChild(PriceHeader);
	for(var i=0;i<1;i++){
		var Break = document.createElement('br');
		PriceHeader.appendChild(Break);
	}
	var Price = document.createElement('h1');
	Price.id = 'PUBGPrice';
	Price.textContent += '$';
	TablePrice.appendChild(Price);
	var Remove = document.createElement('span');
	var Text = document.createTextNode('Remove');
	Remove.style.color = 'red';
	Remove.style.fontSize = '20px';
	Remove.style.cursor = 'pointer';
	Remove.onclick = function(){RemovefromCart('PUBG Game');};
	Remove.appendChild(Text);
	TablePrice.appendChild(Remove);
	TableRow.appendChild(TablePrice);
}

function LoadCSGO(){
	var Table = document.getElementById("Table");
	var TableRow = document.getElementById("CSGO");
	if(Table == undefined && Table == null){
		Log('Table not found');
		return;
	}
	if(TableRow != undefined && TableRow != null){
		var QtySelector = document.getElementById("CSGOQty");
		if(QtySelector != undefined && QtySelector != null){
			var NewValue = Number(QtySelector.value)+1;
			if(NewValue < 11){
				QtySelector.value = String(NewValue);
			}
		}
		return;
	}
	TableRow = document.createElement('tr');
	TableRow.id = 'CSGO';
	Table.appendChild(TableRow);

	var TablePicture = document.createElement('td');
	TablePicture.className = 'cartStyle';
	var Picture = document.createElement('img');
	Picture.style.padding = '15px';
	Picture.style.borderRadius = '25px';
	Picture.style.width = '250px';
	Picture.style.height = '330px';
	Picture.src = "images/CSGO3.jpg";
	TablePicture.appendChild(Picture);
	TableRow.appendChild(TablePicture);

	var TableDescription = document.createElement('td');
	TableDescription.className = 'cartStyle';
	var DescriptionHeader = document.createElement('h1');
	DescriptionHeader.style.fontWeight = '600';
	DescriptionHeader.textContent = 'Counter-Strike: Global Offensive';
	TableDescription.appendChild(DescriptionHeader);
	var Description = document.createElement('h1');
	Description.style.fontWeight = '500';
	Description.textContent = 'Counter-Strike: Global Offensive is a multiplayer first-person shooter video game developed by Hidden Path Entertainment and Valve Corporation.';
	TableDescription.appendChild(Description);
	TableRow.appendChild(TableDescription);

	var TableQty = document.createElement('td');
	TableQty.className = 'cartStyle';
	var TableQtyHeader = document.createElement('h1');
	TableQtyHeader.textContent = 'Qty.';
	TableQty.appendChild(TableQtyHeader);
	for(var i=0;i<1;i++){
		var Break = document.createElement('br');
		TableQty.appendChild(Break);
	}
	var QtySelector = document.createElement('select');
	QtySelector.id = 'CSGOQty';
	for(var i=1;i<11;i++){
		var SelectorOption = document.createElement('option');
		SelectorOption.value = i;
		SelectorOption.textContent = i;
		QtySelector.appendChild(SelectorOption);
	}
	QtySelector.onchange = ReCalculate;
	TableQty.appendChild(QtySelector);
	TableRow.appendChild(TableQty);

	var TablePrice = document.createElement('td');
	TablePrice.className = 'cartStyle';
	var PriceHeader = document.createElement('h1');
	PriceHeader.textContent = 'Price';
	TablePrice.appendChild(PriceHeader);
	for(var i=0;i<1;i++){
		var Break = document.createElement('br');
		PriceHeader.appendChild(Break);
	}
	var Price = document.createElement('h1');
	Price.id = 'CSGOPrice';
	Price.textContent += '$';
	TablePrice.appendChild(Price);
	var Remove = document.createElement('span');
	var Text = document.createTextNode('Remove');
	Remove.style.color = 'red';
	Remove.style.fontSize = '20px';
	Remove.style.cursor = 'pointer';
	Remove.onclick = function(){RemovefromCart('CSGO Game');};
	Remove.appendChild(Text);
	TablePrice.appendChild(Remove);
	TableRow.appendChild(TablePrice);
}

function LoadOSRS(){
	var Table = document.getElementById("Table");
	var TableRow = document.getElementById("OSRS");
	if(Table == undefined && Table == null){
		Log('Table not found');
		return;
	}
	if(TableRow != undefined && TableRow != null){
		var QtySelector = document.getElementById("OSRSQty");
		if(QtySelector != undefined && QtySelector != null){
			var NewValue = Number(QtySelector.value)+1;
			if(NewValue < 11){
				QtySelector.value = String(NewValue);
			}
		}
		return;
	}
	TableRow = document.createElement('tr');
	TableRow.id = 'OSRS';
	Table.appendChild(TableRow);

	var TablePicture = document.createElement('td');
	TablePicture.className = 'cartStyle';
	var Picture = document.createElement('img');
	Picture.style.padding = '15px';
	Picture.style.borderRadius = '25px';
	Picture.style.width = '250px';
	Picture.style.height = '330px';
	Picture.src = "images/OSRS3.jpg";
	TablePicture.appendChild(Picture);
	TableRow.appendChild(TablePicture);

	var TableDescription = document.createElement('td');
	TableDescription.className = 'cartStyle';
	var DescriptionHeader = document.createElement('h1');
	DescriptionHeader.style.fontWeight = '600';
	DescriptionHeader.textContent = 'Old School Runescape - 1 Month Membership';
	TableDescription.appendChild(DescriptionHeader);
	var Description = document.createElement('h1');
	Description.style.fontWeight = '500';
	Description.textContent = 'Old School Runescape is a previous version of the Runescape Game. Level up your stats, do morequest, earn more gold with Old School Runescape Membership!';
	TableDescription.appendChild(Description);
	TableRow.appendChild(TableDescription);

	var TableQty = document.createElement('td');
	TableQty.className = 'cartStyle';
	var TableQtyHeader = document.createElement('h1');
	TableQtyHeader.textContent = 'Qty.';
	TableQty.appendChild(TableQtyHeader);
	for(var i=0;i<1;i++){
		var Break = document.createElement('br');
		TableQty.appendChild(Break);
	}
	var QtySelector = document.createElement('select');
	QtySelector.id = 'OSRSQty';
	for(var i=1;i<11;i++){
		var SelectorOption = document.createElement('option');
		SelectorOption.value = i;
		SelectorOption.textContent = i;
		QtySelector.appendChild(SelectorOption);
	}
	QtySelector.onchange = ReCalculate;
	TableQty.appendChild(QtySelector);
	TableRow.appendChild(TableQty);

	var TablePrice = document.createElement('td');
	TablePrice.className = 'cartStyle';
	var PriceHeader = document.createElement('h1');
	PriceHeader.textContent = 'Price';
	TablePrice.appendChild(PriceHeader);
	for(var i=0;i<1;i++){
		var Break = document.createElement('br');
		PriceHeader.appendChild(Break);
	}
	var Price = document.createElement('h1');
	Price.id = 'OSRSPrice';
	Price.textContent += '$';
	TablePrice.appendChild(Price);
	var Remove = document.createElement('span');
	var Text = document.createTextNode('Remove');
	Remove.style.color = 'red';
	Remove.style.fontSize = '20px';
	Remove.style.cursor = 'pointer';
	Remove.onclick = function(){RemovefromCart('OSRS Mem');};
	Remove.appendChild(Text);
	TablePrice.appendChild(Remove);
	TableRow.appendChild(TablePrice);
}

function LoadMW2(){
	var Table = document.getElementById("Table");
	var TableRow = document.getElementById("MW2");
	if(Table == undefined && Table == null){
		Log('Table not found');
		return;
	}
	if(TableRow != undefined && TableRow != null){
		var QtySelector = document.getElementById("MW2Qty");
		if(QtySelector != undefined && QtySelector != null){
			var NewValue = Number(QtySelector.value)+1;
			if(NewValue < 11){
				QtySelector.value = String(NewValue);
			}
		}
		return;
	}
	TableRow = document.createElement('tr');
	TableRow.id = 'MW2';
	Table.appendChild(TableRow);

	var TablePicture = document.createElement('td');
	TablePicture.className = 'cartStyle';
	var Picture = document.createElement('img');
	Picture.style.padding = '15px';
	Picture.style.borderRadius = '25px';
	Picture.style.width = '250px';
	Picture.style.height = '330px';
	Picture.src = "images/MW23.jpg";
	TablePicture.appendChild(Picture);
	TableRow.appendChild(TablePicture);

	var TableDescription = document.createElement('td');
	TableDescription.className = 'cartStyle';
	var DescriptionHeader = document.createElement('h1');
	DescriptionHeader.style.fontWeight = '600';
	DescriptionHeader.textContent = 'Call of Duty: Modern Warfare 2';
	TableDescription.appendChild(DescriptionHeader);
	var Description = document.createElement('h1');
	Description.style.fontWeight = '500';
	Description.textContent = 'Call of Duty: Modern Warfare 2 is a first-person shooter video game developed by Infinity Ward and published by Activision.';
	TableDescription.appendChild(Description);
	TableRow.appendChild(TableDescription);

	var TableQty = document.createElement('td');
	TableQty.className = 'cartStyle';
	var TableQtyHeader = document.createElement('h1');
	TableQtyHeader.textContent = 'Qty.';
	TableQty.appendChild(TableQtyHeader);
	for(var i=0;i<1;i++){
		var Break = document.createElement('br');
		TableQty.appendChild(Break);
	}
	var QtySelector = document.createElement('select');
	QtySelector.id = 'MW2Qty';
	for(var i=1;i<11;i++){
		var SelectorOption = document.createElement('option');
		SelectorOption.value = i;
		SelectorOption.textContent = i;
		QtySelector.appendChild(SelectorOption);
	}
	QtySelector.onchange = ReCalculate;
	TableQty.appendChild(QtySelector);
	TableRow.appendChild(TableQty);

	var TablePrice = document.createElement('td');
	TablePrice.className = 'cartStyle';
	var PriceHeader = document.createElement('h1');
	PriceHeader.textContent = 'Price';
	TablePrice.appendChild(PriceHeader);
	for(var i=0;i<1;i++){
		var Break = document.createElement('br');
		PriceHeader.appendChild(Break);
	}
	var Price = document.createElement('h1');
	Price.id = 'MW2Price';
	Price.textContent += '$';
	TablePrice.appendChild(Price);
	var Remove = document.createElement('span');
	var Text = document.createTextNode('Remove');
	Remove.style.color = 'red';
	Remove.style.fontSize = '20px';
	Remove.style.cursor = 'pointer';
	Remove.onclick = function(){RemovefromCart('MW2 Game');};
	Remove.appendChild(Text);
	TablePrice.appendChild(Remove);
	TableRow.appendChild(TablePrice);
}

function LoadBully(){
	var Table = document.getElementById("Table");
	var TableRow = document.getElementById("Bully");
	if(Table == undefined && Table == null){
		Log('Table not found');
		return;
	}
	if(TableRow != undefined && TableRow != null){
		var QtySelector = document.getElementById("BullyQty");
		if(QtySelector != undefined && QtySelector != null){
			var NewValue = Number(QtySelector.value)+1;
			if(NewValue < 11){
				QtySelector.value = String(NewValue);
			}
		}
		return;
	}
	TableRow = document.createElement('tr');
	TableRow.id = 'Bully';
	Table.appendChild(TableRow);

	var TablePicture = document.createElement('td');
	TablePicture.className = 'cartStyle';
	var Picture = document.createElement('img');
	Picture.style.padding = '15px';
	Picture.style.borderRadius = '25px';
	Picture.style.width = '250px';
	Picture.style.height = '330px';
	Picture.src = "images/Bully3.jpg";
	TablePicture.appendChild(Picture);
	TableRow.appendChild(TablePicture);

	var TableDescription = document.createElement('td');
	TableDescription.className = 'cartStyle';
	var DescriptionHeader = document.createElement('h1');
	DescriptionHeader.style.fontWeight = '600';
	DescriptionHeader.textContent = 'Bully';
	TableDescription.appendChild(DescriptionHeader);
	var Description = document.createElement('h1');
	Description.style.fontWeight = '500';
	Description.textContent = 'Bully tells the story of mischievous 15-year-old Jimmy Hopkins as he goes through the hilarity and awkwardness of adolescence. Beat the jocks at dodge ball, play pranks on the preppies, save the nerds, kiss the girl and navigate the social hierarchy in the worst school around.';
	TableDescription.appendChild(Description);
	TableRow.appendChild(TableDescription);

	var TableQty = document.createElement('td');
	TableQty.className = 'cartStyle';
	var TableQtyHeader = document.createElement('h1');
	TableQtyHeader.textContent = 'Qty.';
	TableQty.appendChild(TableQtyHeader);
	for(var i=0;i<1;i++){
		var Break = document.createElement('br');
		TableQty.appendChild(Break);
	}
	var QtySelector = document.createElement('select');
	QtySelector.id = 'BullyQty';
	for(var i=1;i<11;i++){
		var SelectorOption = document.createElement('option');
		SelectorOption.value = i;
		SelectorOption.textContent = i;
		QtySelector.appendChild(SelectorOption);
	}
	QtySelector.onchange = ReCalculate;
	TableQty.appendChild(QtySelector);
	TableRow.appendChild(TableQty);

	var TablePrice = document.createElement('td');
	TablePrice.className = 'cartStyle';
	var PriceHeader = document.createElement('h1');
	PriceHeader.textContent = 'Price';
	TablePrice.appendChild(PriceHeader);
	for(var i=0;i<1;i++){
		var Break = document.createElement('br');
		PriceHeader.appendChild(Break);
	}
	var Price = document.createElement('h1');
	Price.id = 'BullyPrice';
	Price.textContent += '$';
	TablePrice.appendChild(Price);
	var Remove = document.createElement('span');
	var Text = document.createTextNode('Remove');
	Remove.style.color = 'red';
	Remove.style.fontSize = '20px';
	Remove.style.cursor = 'pointer';
	Remove.onclick = function(){RemovefromCart('Bully Game');};
	Remove.appendChild(Text);
	TablePrice.appendChild(Remove);
	TableRow.appendChild(TablePrice);
}

function LoadWizard101(){
	var Table = document.getElementById("Table");
	var TableRow = document.getElementById("Wizard101");
	if(Table == undefined && Table == null){
		Log('Table not found');
		return;
	}
	if(TableRow != undefined && TableRow != null){
		var QtySelector = document.getElementById("Wizard101Qty");
		if(QtySelector != undefined && QtySelector != null){
			var NewValue = Number(QtySelector.value)+1;
			if(NewValue < 11){
				QtySelector.value = String(NewValue);
			}
		}
		return;
	}
	TableRow = document.createElement('tr');
	TableRow.id = 'Wizard101';
	Table.appendChild(TableRow);

	var TablePicture = document.createElement('td');
	TablePicture.className = 'cartStyle';
	var Picture = document.createElement('img');
	Picture.style.padding = '15px';
	Picture.style.borderRadius = '25px';
	Picture.style.width = '250px';
	Picture.style.height = '330px';
	Picture.src = "images/Wizard1013.jpg";
	TablePicture.appendChild(Picture);
	TableRow.appendChild(TablePicture);

	var TableDescription = document.createElement('td');
	TableDescription.className = 'cartStyle';
	var DescriptionHeader = document.createElement('h1');
	DescriptionHeader.style.fontWeight = '600';
	DescriptionHeader.textContent = 'Wizard101 - 1 Month Memebership';
	TableDescription.appendChild(DescriptionHeader);
	var Description = document.createElement('h1');
	Description.style.fontWeight = '500';
	Description.textContent = 'Wizard101 is a massively multiplayer online role-playing game created by KingsIsle Entertainment. Players take on the role of students of witchcraft and wizardry to save the Spiral, the fictional universe in which the game is played, and battle enemies by casting spells using a turn-based combat system similar to collectible card games.';
	TableDescription.appendChild(Description);
	TableRow.appendChild(TableDescription);

	var TableQty = document.createElement('td');
	TableQty.className = 'cartStyle';
	var TableQtyHeader = document.createElement('h1');
	TableQtyHeader.textContent = 'Qty.';
	TableQty.appendChild(TableQtyHeader);
	for(var i=0;i<1;i++){
		var Break = document.createElement('br');
		TableQty.appendChild(Break);
	}
	var QtySelector = document.createElement('select');
	QtySelector.id = 'Wizard101Qty';
	for(var i=1;i<11;i++){
		var SelectorOption = document.createElement('option');
		SelectorOption.value = i;
		SelectorOption.textContent = i;
		QtySelector.appendChild(SelectorOption);
	}
	QtySelector.onchange = ReCalculate;
	TableQty.appendChild(QtySelector);
	TableRow.appendChild(TableQty);

	var TablePrice = document.createElement('td');
	TablePrice.className = 'cartStyle';
	var PriceHeader = document.createElement('h1');
	PriceHeader.textContent = 'Price';
	TablePrice.appendChild(PriceHeader);
	for(var i=0;i<1;i++){
		var Break = document.createElement('br');
		PriceHeader.appendChild(Break);
	}
	var Price = document.createElement('h1');
	Price.id = 'Wizard101Price';
	Price.textContent += '$';
	TablePrice.appendChild(Price);
	var Remove = document.createElement('span');
	var Text = document.createTextNode('Remove');
	Remove.style.color = 'red';
	Remove.style.fontSize = '20px';
	Remove.style.cursor = 'pointer';
	Remove.onclick = function(){RemovefromCart('Wizard101 Mem');};
	Remove.appendChild(Text);
	TablePrice.appendChild(Remove);
	TableRow.appendChild(TablePrice);
}

function LoadTotal(FirstEntry){
	var TableRow = undefined;
	if(FirstEntry == '1,000 V-Bucks'){
		TableRow = document.getElementById("Fortnite");
	}
	if(FirstEntry == '1350 RP'){
		TableRow = document.getElementById("League");
	}
	if(FirstEntry == 'Minecraft Game'){
		TableRow = document.getElementById("Minecraft");
	}
	if(FirstEntry == 'GTA5 Game'){
		TableRow = document.getElementById("GTA5");
	}
	if(FirstEntry == 'PUBG Game'){
		TableRow = document.getElementById("PUBG");
	}
	if(FirstEntry == 'CSGO Game'){
		TableRow = document.getElementById("CSGO");
	}
	if(FirstEntry == 'OSRS Mem'){
		TableRow = document.getElementById("OSRS");
	}
	if(FirstEntry == 'MW2 Game'){
		TableRow = document.getElementById("MW2");
	}
	if(FirstEntry == 'Bully Game'){
		TableRow = document.getElementById("Bully");
	}if(FirstEntry == 'Wizard101 Mem'){
		TableRow = document.getElementById("Wizard101");
	}
	if(TableRow == undefined && TableRow == null){
		return;
	}
	var TableTotal = document.createElement('td');
	TableTotal.style.padding = '100px';
	var TotalHeader = document.createElement('h1');
	TotalHeader.textContent = 'Total';
	var Total = document.createElement('h1');
	Total.id = 'Total';
	Total.textContent = '$';
	TableTotal.appendChild(TotalHeader);
	TableTotal.appendChild(Total);
	TableRow.appendChild(TableTotal);
}

function LoadCart(){
	var CartDatabase = JSON.parse(GetCartDatabase());
	if(CartDatabase.length < 1){
		var Table = document.getElementById("Table");
		if(Table == undefined && Table == null){
			Log('Table not found');
			return;
		}
		var Picture = document.createElement('img');
		Picture.style.padding = '15px';
		Picture.style.borderRadius = '25px';
		Picture.style.width = '100%';
		Picture.style.height = '100%';

		Picture.src = "images/Cart Empty.png";
		Table.appendChild(Picture);
		return;
	}
	for(var i = 0; i < CartDatabase.length; i++){
		if(CartDatabase[i] == '1,000 V-Bucks'){
			LoadFortnite();
		}
		else if(CartDatabase[i] == '1350 RP'){
			LoadLeague();
		}
		else if(CartDatabase[i] == 'Minecraft Game'){
			LoadMinecraft();
		}
		else if(CartDatabase[i] == 'GTA5 Game'){
			LoadGTA5();
		}
		else if(CartDatabase[i] == 'PUBG Game'){
			LoadPUBG();
		}
		else if(CartDatabase[i] == 'CSGO Game'){
			LoadCSGO();
		}
		else if(CartDatabase[i] == 'OSRS Mem'){
			LoadOSRS();
		}
		else if(CartDatabase[i] == 'MW2 Game'){
			LoadMW2();
		}
		else if(CartDatabase[i] == 'Bully Game'){
			LoadBully();
		}
		else if(CartDatabase[i] == 'Wizard101 Mem'){
			LoadWizard101();
		}
		if(i == '0'){
			LoadTotal(CartDatabase[i]);
		}
	}
	ReCalculate();
}

function RemovefromCart(Item){
	var CartDatabase = JSON.parse(GetCartDatabase());
	if(CartDatabase.length < 1){
		return;
	}
	for(var i = CartDatabase.length; i >= 0; i--){
		if(CartDatabase[i] == Item){
			Log('R-'+i);
			CartDatabase.splice(i, 1);
		}
	}
	SetCartDatabase(JSON.stringify(CartDatabase));
	location.reload();
}

function AddtoCart(Item){
	var CartDatabase = JSON.parse(GetCartDatabase());
	var Counter = 0;
	for(var i = 0; i < CartDatabase.length; i++){
		if(CartDatabase[i] == Item){
			Counter+=1;
		}
	}
	if(Counter>9){
		alert('Can not add more than 10 of this item');
		return;
	}
	CartDatabase.push(Item);
	SetCartDatabase(JSON.stringify(CartDatabase));
	CheckCart();
	Log('Added:'+Item);
	return;
}

function DatabaseState(){
	Log('Cart Database:'+localStorage.CartDatabase);
}

function main(){
	Page = document.getElementById('page')
	if(Page != undefined && Page != null){
		Page = Page.textContent;
	}
	Debug = false;
	Log('Page:'+Page);
	CheckDatabase();
	CheckCart();
	if(Page == 'Cart'){
		LoadCart();
	}
	DatabaseState();
}

main();