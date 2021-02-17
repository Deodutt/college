//website used walmart.com

// Select and modify using a for loop at least four headlines. For all elements, change the text content and color.
const moduleHeader = document.querySelectorAll(".ModuleHeader-heading");

for (let i = 0; i < moduleHeader.length; i++) {
    moduleHeader[i].style.color = "violet";
    moduleHeader[i].textContent = "Prepare to get scammed";
}



// Select and modify using a for loop at least four images that preview articles. Use a remotely hosted image to reset the src attribute.
//select one image.
document.querySelectorAll(".TempoCategoryTile-img")[0].setAttribute("src", "https://media.istockphoto.com/photos/red-stamp-on-a-white-background-sold-out-picture-id810509198?k=6&m=810509198&s=612x612&w=0&h=UNNGG1nptMnEjpIYlQd4aTzCDdykJrjvC5mwg2lvFdc=");


//select all images
const categoriesIMG = document.querySelectorAll(".TempoCategoryTile-img");

for (let i = 0; i < categoriesIMG.length; i++) {
    categoriesIMG[i].setAttribute("src", "https://media.istockphoto.com/photos/red-stamp-on-a-white-background-sold-out-picture-id810509198?k=6&m=810509198&s=612x612&w=0&h=UNNGG1nptMnEjpIYlQd4aTzCDdykJrjvC5mwg2lvFdc=");
}



// Select and modify using a for loop at least four slug texts that previews the article. Use lorem ipsum to reset the text content.
const slugText = document.querySelectorAll(".MultiStoryModule-overlay p");

for (let i = 0; i < slugText.length; i++) {
    slugText[i].style.color = "cyan";
    slugText[i].textContent = "Ut wisi solum mel, ad eos ponderum petentium. Ut cum alii animal.";
}



//Select and modify all links on the page to hyperlink to a single site of your choosing.
const linkRedirect = document.querySelectorAll("a");

for (let i = 0; i < linkRedirect.length; i++) {
    linkRedirect[i].setAttribute("href", "https://www.cars.com/");
}



// Select at least three additional individual elements and modify the contents and/or style.


//To change background color.
document.querySelector("body").style.backgroundColor = "grey"; // at the bottom

// ------------------------

const iconRedesign = document.querySelectorAll(".f_b img");

for (let i = 0; i < iconRedesign.length; i++) {
    iconRedesign[i].setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Trash_font_awesome.svg/768px-Trash_font_awesome.svg.png");
}

// ------------------------

const replacementHero = document.querySelectorAll(".ClickThroughImage-wrapper img");

for (let i = 0; i < replacementHero.length; i++) {
    replacementHero[i].setAttribute("src", "https://i.redd.it/4148x43xbni31.jpg");
}

// ------------------------

//To change one category title
document.querySelector(".TempoCategoryTile-linkText").style.color = "red";

//To change all category Title
const categoriesTile = document.querySelectorAll(".TempoCategoryTile-content span");

for (let i = 0; i < categoriesTile.length; i++) {
    categoriesTile[i].style.color = "red";
    categoriesTile[i].textContent = "sold out";
}