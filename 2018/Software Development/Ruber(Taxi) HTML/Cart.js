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
	var SUV = document.getElementById("SUV");
	var SUVCost = 0;
	var CarPool = document.getElementById("CarPool");
	var CarPoolCost = 0;
	var Luxury = document.getElementById("Luxury");
	var LuxuryCost = 0;
	if(SUV != undefined && SUV != null){
		var SUVQty = document.getElementById("SUVQty");
		var QtySelector = Number(SUVQty.value);
		var SUVPrice = document.getElementById("SUVPrice");
		var Counter = 0;
		for(var i = 0; i < CartDatabase.length; i++){
			if(CartDatabase[i] == 'SUV'){
				Counter+=1;
			}
		}
		if(QtySelector < Counter){
			var Difference = Counter - QtySelector;
			for(var i = CartDatabase.length; i >= 0; i--){
				if(CartDatabase[i] == 'SUV' && Difference > 0){
					CartDatabase.splice(i, 1);
					Difference-=1;
				}
			}
		}
		if(QtySelector > Counter){
			var Difference = QtySelector - Counter;
			for(var i = 0; i < Difference; i++){
				CartDatabase.push('SUV');
			}
		}
		SetCartDatabase(JSON.stringify(CartDatabase));
		SUVCost = QtySelector*(30.00);
		SUVPrice.textContent = '$'+String(SUVCost.toFixed(2))
	}
	if(CarPool != undefined && CarPool != null){
		var CarPoolQty = document.getElementById("CarPoolQty");
		var QtySelector = Number(CarPoolQty.value);
		var CarPoolPrice = document.getElementById("CarPoolPrice");
		var Counter = 0;
		for(var i = 0; i < CartDatabase.length; i++){
			if(CartDatabase[i] == 'CarPool'){
				Counter+=1;
			}
		}
		if(QtySelector < Counter){
			var Difference = Counter - QtySelector;
			for(var i = CartDatabase.length; i >= 0; i--){
				if(CartDatabase[i] == 'CarPool' && Difference > 0){
					CartDatabase.splice(i, 1);
					Difference-=1;
				}
			}
		}
		if(QtySelector > Counter){
			var Difference = QtySelector - Counter;
			for(var i = 0; i < Difference; i++){
				CartDatabase.push('CarPool');
			}
		}
		SetCartDatabase(JSON.stringify(CartDatabase));
		CarPoolCost = QtySelector*(10.00);
		CarPoolPrice.textContent = '$'+String(CarPoolCost.toFixed(2))
	}
	if(Luxury != undefined && Luxury != null){
		var LuxuryQty = document.getElementById("LuxuryQty");
		var QtySelector = Number(LuxuryQty.value);
		var LuxuryPrice = document.getElementById("LuxuryPrice");
		var Counter = 0;
		for(var i = 0; i < CartDatabase.length; i++){
			if(CartDatabase[i] == 'Luxury'){
				Counter+=1;
			}
		}
		if(QtySelector < Counter){
			var Difference = Counter - QtySelector;
			for(var i = CartDatabase.length; i >= 0; i--){
				if(CartDatabase[i] == 'Luxury' && Difference > 0){
					CartDatabase.splice(i, 1);
					Difference-=1;
				}
			}
		}
		if(QtySelector > Counter){
			var Difference = QtySelector - Counter;
			for(var i = 0; i < Difference; i++){
				CartDatabase.push('Luxury');
			}
		}
		SetCartDatabase(JSON.stringify(CartDatabase));
		LuxuryCost = QtySelector*(1000000.00);
		LuxuryPrice.textContent = '$'+String(LuxuryCost.toFixed(2))
	}
	if(Total != undefined && Total != null){
		TotalCost += SUVCost;
		TotalCost += CarPoolCost;
		TotalCost += LuxuryCost;
		Total.textContent = '$'+String(TotalCost.toFixed(2))
	}
	CheckCart();
	return;
}

function LoadSUV(){
	var Table = document.getElementById("Table");
	var TableRow = document.getElementById("SUV");
	if(Table == undefined && Table == null){
		Log('Table not found');
		return;
	}
	if(TableRow != undefined && TableRow != null){
		var QtySelector = document.getElementById("SUVQty");
		if(QtySelector != undefined && QtySelector != null){
			var NewValue = Number(QtySelector.value)+1;
			if(NewValue < 11){
				QtySelector.value = String(NewValue);
			}
		}
		return;
	}
	TableRow = document.createElement('tr');
	TableRow.id = 'SUV';
	Table.appendChild(TableRow);

	var TablePicture = document.createElement('td');
	TablePicture.className = 'cartStyle';
	var Picture = document.createElement('img');
	Picture.style.padding = '15px';
	Picture.style.borderRadius = '25px';
	Picture.style.width = '250px';
	Picture.style.height = '330px';
	Picture.src = "images/SUVsmall.png";
	TablePicture.appendChild(Picture);
	TableRow.appendChild(TablePicture);

	var TableDescription = document.createElement('td');
	TableDescription.className = 'cartStyle';
	var DescriptionHeader = document.createElement('h1');
	DescriptionHeader.style.fontWeight = '600';
	DescriptionHeader.textContent = 'SUV';
	TableDescription.appendChild(DescriptionHeader);
	var Description = document.createElement('h1');
	Description.style.fontWeight = '500';
	Description.textContent = 'Ruber SUV is a vehicle option you are given upon requesting a ride. This option is for riders who are more spacious than others.';
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
	QtySelector.id = 'SUVQty';
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
	Price.id = 'SUVPrice';
	Price.textContent += '$';
	TablePrice.appendChild(Price);
	var Remove = document.createElement('span');
	var Text = document.createTextNode('Remove');
	Remove.style.color = 'red';
	Remove.style.fontSize = '20px';
	Remove.style.cursor = 'pointer';
	Remove.onclick = function(){RemovefromCart('SUV');};
	Remove.appendChild(Text);
	TablePrice.appendChild(Remove);
	TableRow.appendChild(TablePrice);
}

function LoadCarPool(){
	var Table = document.getElementById("Table");
	var TableRow = document.getElementById("CarPool");
	if(Table == undefined && Table == null){
		Log('Table not found');
		return;
	}
	if(TableRow != undefined && TableRow != null){
		var QtySelector = document.getElementById("CarPoolQty");
		if(QtySelector != undefined && QtySelector != null){
			var NewValue = Number(QtySelector.value)+1;
			if(NewValue < 11){
				QtySelector.value = String(NewValue);
			}
		}
		return;
	}
	TableRow = document.createElement('tr');
	TableRow.id = 'CarPool';
	Table.appendChild(TableRow);

	var TablePicture = document.createElement('td');
	TablePicture.className = 'cartStyle';
	var Picture = document.createElement('img');
	Picture.style.padding = '15px';
	Picture.style.borderRadius = '25px';
	Picture.style.width = '250px';
	Picture.style.height = '330px';
	Picture.src = "images/carpoolsmall.png";
	TablePicture.appendChild(Picture);
	TableRow.appendChild(TablePicture);

	var TableDescription = document.createElement('td');
	TableDescription.className = 'cartStyle';
	var DescriptionHeader = document.createElement('h1');
	DescriptionHeader.style.fontWeight = '600';
	DescriptionHeader.textContent = 'Car Pool';
	TableDescription.appendChild(DescriptionHeader);
	var Description = document.createElement('h1');
	Description.style.fontWeight = '500';
	Description.textContent = 'Carpooling is the sharing of car journeys so that more than one person travels in a car, and prevents the need for others to have to drive to a location themselves. Ruber has cheap affordable options.';
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
	QtySelector.id = 'CarPoolQty';
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
	Price.id = 'CarPoolPrice';
	Price.textContent += '$';
	TablePrice.appendChild(Price);
	var Remove = document.createElement('span');
	var Text = document.createTextNode('Remove');
	Remove.style.color = 'red';
	Remove.style.fontSize = '20px';
	Remove.style.cursor = 'pointer';
	Remove.onclick = function(){RemovefromCart('CarPool');};
	Remove.appendChild(Text);
	TablePrice.appendChild(Remove);
	TableRow.appendChild(TablePrice);
}

function LoadLuxury(){
	var Table = document.getElementById("Table");
	var TableRow = document.getElementById("Luxury");
	if(Table == undefined && Table == null){
		Log('Table not found');
		return;
	}
	if(TableRow != undefined && TableRow != null){
		var QtySelector = document.getElementById("LuxuryQty");
		if(QtySelector != undefined && QtySelector != null){
			var NewValue = Number(QtySelector.value)+1;
			if(NewValue < 11){
				QtySelector.value = String(NewValue);
			}
		}
		return;
	}
	TableRow = document.createElement('tr');
	TableRow.id = 'Luxury';
	Table.appendChild(TableRow);

	var TablePicture = document.createElement('td');
	TablePicture.className = 'cartStyle';
	var Picture = document.createElement('img');
	Picture.style.padding = '15px';
	Picture.style.borderRadius = '25px';
	Picture.style.width = '250px';
	Picture.style.height = '330px';
	Picture.src = "images/luxurysmall.png";
	TablePicture.appendChild(Picture);
	TableRow.appendChild(TablePicture);

	var TableDescription = document.createElement('td');
	TableDescription.className = 'cartStyle';
	var DescriptionHeader = document.createElement('h1');
	DescriptionHeader.style.fontWeight = '600';
	DescriptionHeader.textContent = 'Luxury';
	TableDescription.appendChild(DescriptionHeader);
	var Description = document.createElement('h1');
	Description.style.fontWeight = '500';
	Description.textContent = 'Luxury is a vehicle option you are given upon requesting a ride. The Luxury option is for the high ballers. By purchasing Luxury method, you will experience the best day of your lives.';
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
	QtySelector.id = 'LuxuryQty';
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
	Price.id = 'LuxuryPrice';
	Price.textContent += '$';
	TablePrice.appendChild(Price);
	var Remove = document.createElement('span');
	var Text = document.createTextNode('Remove');
	Remove.style.color = 'red';
	Remove.style.fontSize = '20px';
	Remove.style.cursor = 'pointer';
	Remove.onclick = function(){RemovefromCart('Luxury');};
	Remove.appendChild(Text);
	TablePrice.appendChild(Remove);
	TableRow.appendChild(TablePrice);
}

function LoadTotal(FirstEntry){
	var TableRow = undefined;
	if(FirstEntry == 'SUV'){
		TableRow = document.getElementById("SUV");
	}
	if(FirstEntry == 'CarPool'){
		TableRow = document.getElementById("CarPool");
	}
	if(FirstEntry == 'Luxury'){
		TableRow = document.getElementById("Luxury");
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
		if(CartDatabase[i] == 'SUV'){
			LoadSUV();
		}
		else if(CartDatabase[i] == 'CarPool'){
			LoadCarPool();
		}
		else if(CartDatabase[i] == 'Luxury'){
			LoadLuxury();
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