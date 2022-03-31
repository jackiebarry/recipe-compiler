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
    let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${choices}`);
    console.log(response)
    let data = await response.json()
    console.log(data) 
    useApiData(data)
};

function useApiData(data){
document.getElementById("img1").src=data.hits[0].recipe.image 
document.getElementById("img2").src=data.hits[1].recipe.image
document.getElementById("img3").src=data.hits[2].recipe.image

document.getElementById("link1").href=data.hits[0].recipe.url 
document.getElementById("link2").href=data.hits[1].recipe.url
document.getElementById("link3").href=data.hits[2].recipe.url

document.getElementById("link1").innerHTML=data.hits[0].recipe.label
document.getElementById("link2").innerHTML=data.hits[1].recipe.label
document.getElementById("link3").innerHTML=data.hits[2].recipe.label

document.getElementById("carouselExampleControls").classList.remove("hidden")
// class="d-block w-100" alt="...">
//         <h5 class="carousel-title">${data.hits[0].recipe.label}</h5>
//         <a href="${data.hits[0].recipe.url}" class="btn btn-primary">Select</a>
//       </div>
//       <div class="carousel-item">
//         <img src="${data.hits[1].recipe.image}" class="d-block w-100" alt="...">
//         <h5 class="carousel-title">${data.hits[1].recipe.label}</h5>
//         <a href="${data.hits[1].recipe.url}" class="btn btn.primary">Select</a>
//       </div>
//     </div>
//     <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//       <span class="visually-hidden">Previous</span>
//     </button>
//     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
//       <span class="carousel-control-next-icon" aria-hidden="true"></span>
//       <span class="visually-hidden">Next</span>
//     </button>
//     </div>
// `
} 










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