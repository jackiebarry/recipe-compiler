let ingredients = [
    "Chicken",
    "Salmon",
    "Ground Beef",
    "Steak",
    "Pork Tenderloin",
    "Sausages",
    "Lamb",
    "Bacon",
    "Chicken Stock",
    "Vegetable Stock",
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
    "Garlic",
    "Cucumber",
    "Zucchini",
    "Cauliflower",
    "Carrot",
    "Broccoli",
    "Bell Pepper",
    "Avocado",
    "Eggplant",
    "Potatoes",
    "Eggs",
    "Bread",
    "Naan Bread",
    "Pesto",
    "Diced Tomatoes",
    "Spaghetti",
    "Penne",
    "Tomato Paste",
    "Rice",
    "Black Beans",
    "Chickpeas",
    "Kidney Beans",
    ];
    
    createIngredientForm(ingredients);
    function createIngredientForm(ingredients) {
    let form = document.getElementById("ingredientSelections"); 

    for ( let i = 0; i < ingredients.length; i++) {
        let input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.value = ingredients[i];
        input.id ='checkbox-' + ingredients[i];
        let label = document.createElement('label');
        label.textContent = ingredients[i];
        label.setAttribute('for', input.id);
        form.appendChild(input);
        form.appendChild(label);
    }
    };


const button = document.querySelector('button#Confirm');

button.addEventListener("click", function(e){
    e.preventDefault();
    let form = document.querySelector("ingredientSelections");
    let array = []
    let checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

    for (let i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value)
}
    console.log(array)
    sendApiRequest(array)
    console.log("button pressed")
});


async function sendApiRequest(array) {
    let APP_ID = 'adeda542'
    let API_KEY = '92f5597b299396e6134f2ef3942df3d4' 
    let choices = array.toString()
    let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${choices}&"mealType=lunch,dinner"&"imageSize=thumbnail"`);
    console.log(response)
    let data = await response.json()
    console.log(data) 
    populateCarousel()
    useApiData(data)
};

function useApiData(data){
const hits = data.hits;
for ( let i = 0; i < 5; i++) {
    const elementIndex = (i+1)
    document.getElementById("img" +elementIndex).src=data.hits[i].recipe.image 
    document.getElementById("link" +elementIndex).href=data.hits[i].recipe.url 
    document.getElementById("link" +elementIndex).innerHTML=data.hits[i].recipe.label
}

// document.getElementById("img1").src=data.hits[0].recipe.image 
// document.getElementById("img2").src=data.hits[1].recipe.image
// document.getElementById("img3").src=data.hits[2].recipe.image

// document.getElementById("link1").href=data.hits[0].recipe.url 
// document.getElementById("link2").href=data.hits[1].recipe.url
// document.getElementById("link3").href=data.hits[2].recipe.url

// document.getElementById("link1").innerHTML=data.hits[0].recipe.label
// document.getElementById("link2").innerHTML=data.hits[1].recipe.label
// document.getElementById("link3").innerHTML=data.hits[2].recipe.label

document.getElementById("carousel").classList.remove("hidden")
} 

function populateCarousel(){
    for ( let i = 0; i < 5; i++) {
        const elementIndex = (i+1);
        let carousel = document.createElement("div");
        carousel.classList.add("carousel-item");
        if (i === 0) {
            carousel.classList.add("active")
        }
        let image = document.createElement("img");
        image.classList.add("d-block");
        image.setAttribute('id', "img" +elementIndex);
        let link = document.createElement("a");
        link.setAttribute('id', "link" +elementIndex);
        link.setAttribute('target', "_blank");
        carousel.appendChild(image);
        carousel.appendChild(link);
        carouselInner = document.querySelector(".carousel-inner")
        carouselInner.appendChild(carousel);
    }
}



// function useApiData(data) {
//     document.querySelector("a href=")
//     link.addEventListener("click", function(groceryList){
//         array = [ingredientLines]
//     })
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
   // alert('Would you like to continue?');
//
