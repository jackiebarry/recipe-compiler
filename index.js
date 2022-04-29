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
    
const button2 = document.querySelector('button#random');

button2.addEventListener("click", function(e){
e.preventDefault();
let randomIngredient = ingredients[Math.floor(Math.random() * ingredients.length)];
console.log(randomIngredient);
sendApiRequest2(randomIngredient)
});

const button1 = document.querySelector('button#confirm');
const searchBar = document.getElementById('search')

button1.addEventListener("click", function(e){
    e.preventDefault();
    let options = document.querySelector(".searchBar");
    let array = [];
    let selections = document.querySelectorAll('input[type=text]');

    for (let i = 0; i < selections.length; i++) {
        array.push(selections[i].value)
    }
    console.log(array);
    sendApiRequest1(array)
});



async function sendApiRequest1(array) {
    let APP_ID = 'adeda542'
    let API_KEY = '92f5597b299396e6134f2ef3942df3d4' 
    let choices = array.toString()
    let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${choices}&"mealType=lunch,dinner"&"imageSize=thumbnail"`);
    console.log(response)
    let data = await response.json()
    console.log(data) 
    populateCarousel(data)
    useApiData(data)
};

async function sendApiRequest2(randomIngredient) {
    let APP_ID = 'adeda542'
    let API_KEY = '92f5597b299396e6134f2ef3942df3d4' 
    let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${randomIngredient}&"mealType=lunch,dinner"&"imageSize=thumbnail"`);
    console.log(response)
    let data = await response.json()
    console.log(data) 
    populateCarousel(data)
    useApiData(data)
};

function useApiData(data){
const hits = data.hits;
for ( let i = 0; i < 5; i++) {
    const elementIndex = (i+1);
    document.getElementById("link" +elementIndex).href=data.hits[i].recipe.url;
    document.getElementById("link" +elementIndex).innerHTML=data.hits[i].recipe.label;
    document.getElementById("img" +elementIndex).src=data.hits[i].recipe.image;
}
    document.getElementById("myCarousel").classList.remove("hidden")
};

function populateCarousel(data){
    let carouselInner = document.querySelector(".carouselInner");
    if (carouselInner) { 
        carouselInner.remove();
    };
    let lists = document.querySelectorAll(".ul");
    for (let i = 0; i  < lists.length; i++) 
    if (lists[i]) { 
        lists[i].remove()
    };    
    for ( let i = 0; i < 5; i++) {
        const elementIndex = (i+1);
        let carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");
        if (i === 0) {
            carouselItem.classList.add("active")
        }
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
};



// function createGroceryList(){
//     for ( let i = 0; i < 5; i++) {
//         const elementIndex = (i+1);
//         document.getElementById("link" +elementIndex).href=data.hits[i].recipe.url;
//         document.getElementById("link" +elementIndex).innerHTML=data.hits[i].recipe.label;
//         // document.getElementById("contents" +elementIndex).innerHTML=data.hits[i].recipe.ingredients.food;


//     let groceries = document.createElement("ul");
//     groceries.classList.add("grocery-list");
//     groceries.setAttribute('id', "contents" +elementIndex);
//     groceryList = document.querySelector(".grocery-list")
//     groceryList.appendChild(groceries);
//     };
// }
















// {/* <div class="card" style="width: 18rem;">
// <img src="${data.hits[0].recipe.image}" class="card-img-top" alt="...">
//     <div class="card-body">
//     <h5 class="card-title">${data.hits[0].recipe.label}</h5>
//     <p class="card-text">An option based on the ingredients you selected.</p>
//     <a href="${data.hits[0].recipe.url}" class="btn btn-primary">Select</a>
//     </div>
// </div> */}

// let ingredients = [
//     {
//         name: 'Chicken',
        
//     },
//     {
//         name: 'Salmon',
    
//     },
//     {
//         name: 'Ground Beef',
//     },
//     {
//         name: 'Pork Tenderloin',
//     },
//     {
//         name: 'Steak',
//     },
//     {
//         name: 'Sausages',
//     },
//     {
//         name: 'Lamb',
//     },
//     {
//         name: 'Chicken Stock',
//     },
//     {
//         name: 'Green Peas',
//     },
//     {
//         name: 'Diced Tomatoes',
        
//     },
//     {
//         name: 'Sweet Potatoes',
    
//     },
//     {
//         name: 'Potatoes',
//     },
//     {
//         name: 'Tomatoes',
//     },
//     {
//         name: 'Spinach',
//     },
//     {
//         name: 'Red Onions',
//     },
//     {
//         name: 'Avocado',
//     },
//     {
//         name: 'Cucumbers',
//     },
//     {
//         name: 'Pasta',
//     }
//     ];

// const info = document.querySelector(#info);
// let details = ingredients.map(function(choice){
//     return '<div class="choice">' + choice.name + '</div>'
// });

// info.innerHTML = ingredients.join('\n');

// const ingredientOptions = [
// "Chicken",
// "Salmon",
// "Ground Beef",
// "Steak",
// "Pork Tenderloin",
// "Sausages",
// "Lamb",
// "Bacon",
// "Chicken Stock",
// "Vegetable Stock",
// "Snap Peas",
// "Celery",
// "Cherry Tomatoes",
// "Spinach",
// "Red Onion",
// "Mushroom",
// "Radish",
// "Shallots",
// "Leek",
// "Sweet Potatoes",
// "Jalapeno",
// "Green Peas",
// "Garlic",
// "Cucumber",
// "Zucchini",
// "Cauliflower",
// "Carrot",
// "Broccoli",
// "Bell Pepper",
// "Avocado",
// "Eggplant",
// "Potatoes",
// "Eggs",
// "Bread",
// "Naan Bread",
// "Pesto",
// "Diced Tomatoes",
// "Spaghetti",
// "Penne",
// "Tomato Paste",
// "Rice",
// "Black Beans",
// "Chickpeas",
// "Kidney Beans",
// ];

// const ingredients = document.querySelector('#ingredientOptions');
// let ingredientChoices = ingredients.map(function(item) {
//     return '<div class ="item">' + item + '</div>'
// });

// ingredients.innerHTML = ingredientChoices.join('\n');

//function alertInput(){
   // alert('Would you like to continue?')