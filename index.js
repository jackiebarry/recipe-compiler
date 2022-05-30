let ingredients = [
    "Chicken",
    "Salmon",
    "Ground Beef",
    "Steak",
    "Pork Tenderloin",
    "Sausages",
    "Lamb",
    "Bacon",
    "Snap Peas",
    "Celery",
    "Cherry Tomatoes",
    "Spinach",
    "Red Onion",
    "Mushroom",
    "Radish",
    "Shallots",
    "Leek",
    "Sweet Potatoes",
    "Jalapeno",
    "Green Peas",
    "Cucumber",
    "Zucchini",
    "Cauliflower",
    "Carrot",
    "Broccoli",
    "Bell Pepper",
    "Avocado",
    "Eggplant",
    "Potatoes",
    "Naan Bread",
    "Diced Tomatoes",
    "Spaghetti",
    "Penne",
    "Rice",
    "Black Beans",
    "Chickpeas",
    "Kidney Beans",
    ];


//the randomized search pulls an ingredient from the array above
const randomButton = document.querySelector('button#random');

randomButton.addEventListener("click", function(e){
e.preventDefault();
let randomIngredient = ingredients[Math.floor(Math.random() * ingredients.length)];
sendApiRequest2(randomIngredient)
});

//the search bar pushes a specified ingredient into the API function
const confirmButton = document.querySelector('button#confirm');
const searchBar = document.getElementById('search')

confirmButton.addEventListener("click", function(e){
    e.preventDefault();
    let options = document.querySelector(".searchBar");
    let array = [];
    let selections = document.querySelectorAll('input[type=text]');

    for (let i = 0; i < selections.length; i++) {
        array.push(selections[i].value)
    }
    sendApiRequest1(array)
});


// the first async function runs the recipe API for a chosen ingredient
async function sendApiRequest1(array) {
    let APP_ID = 'adeda542'
    let API_KEY = '92f5597b299396e6134f2ef3942df3d4' 
    let choices = array.toString()
    let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${choices}&"mealType=lunch,dinner"&"imageSize=thumbnail"`);
    let data = await response.json();
    populateCarousel(data);
    useApiData(data);
};

//the second async function runs the recipe API based on a random ingredient which is selected from the array listed above
async function sendApiRequest2(randomIngredient) {
    let APP_ID = 'adeda542'
    let API_KEY = '92f5597b299396e6134f2ef3942df3d4' 
    let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${randomIngredient}&"mealType=lunch,dinner"&"imageSize=thumbnail"`);
    let data = await response.json();
    populateCarousel(data);
    useApiData(data);
};


function useApiData(data){
const hits = data.hits;
for ( let i = 0; i < 5; i++) {
    const elementIndex = (i+1);
    document.getElementById("link" +elementIndex).href=data.hits[i].recipe.url;
    document.getElementById("link" +elementIndex).innerHTML=data.hits[i].recipe.label;
    document.getElementById("img" +elementIndex).src=data.hits[i].recipe.image;
}
    document.getElementById("myCarousel").classList.remove("hidden");
    document.getElementById("grocery").classList.remove("hidden");
};

//the following function pulls the data from the API search and populates the carousel with the recipes title & link to the page, an image of the recipe pulled from the page and the ingredients
function populateCarousel(data){
    let carouselInner = document.getElementById("carouselInner");
    while (carouselInner.hasChildNodes()) { 
        carouselInner.removeChild(carouselInner.firstChild);
   };   
    for ( let i = 0; i < 5; i++) {
        const elementIndex = (i+1);
        let carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");
        if (i === 0) {
            carouselItem.classList.add("active")
        };
        let link = document.createElement("a");
        link.setAttribute('id', "link" +elementIndex);
        link.setAttribute('target', "_blank");
        let image = document.createElement("img");
        image.classList.add("d-block");
        image.setAttribute('id', "img" +elementIndex);
        let list = document.createElement("ul");
        list.setAttribute('id', "list" +elementIndex);
        list.classList.add("ul");
            for (let j = 0; j < data.hits[i].recipe.ingredientLines.length; j++) {
            let listItem = document.createElement("li");
            listItem.innerHTML = data.hits[i].recipe.ingredientLines[j]
            list.appendChild(listItem)
            };
        carouselItem.appendChild(link);
        carouselItem.appendChild(image);
        carouselItem.appendChild(list);
        carouselInner = document.querySelector(".carousel-inner");
        carouselInner.appendChild(carouselItem);
        let carousel = document.querySelector("#myCarousel")
        carousel.appendChild(carouselInner);     
    }
    const emailGroceryButton = document.querySelector("button#grocery");
        emailGroceryButton.addEventListener("click", function(e){
            e.preventDefault();
            createGroceryList(data);
        });
    
};

//this function creates a grocery list based on the active carousel item 
function createGroceryList(data){
    let activeItemTitle = document.getElementsByClassName("carousel-item active")[0].firstChild.innerHTML;
    let foodArray = [];
for (let i = 0; i < 5; i++) {
if (activeItemTitle == data.hits[i].recipe.label) {
    for (j = 0; j < data.hits[i].recipe.ingredients.length; j ++) {
        foodArray.push(data.hits[i].recipe.ingredients[j].food);
    };};
};
let body = encodeURIComponent(foodArray.join( " \r\n").toString());
        let emailedList = document.createElement("a");
        emailedList.setAttribute('id', 'links')
        emailedList.href = `mailto:?&subject=Grocery List&body=${body}`;
        emailedList.click();
};





















