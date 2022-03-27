let food = [
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
    
    createIngredientForm(food);
    function createIngredientForm(food) {
    let form = document.getElementById("ingredientSelections"); 

    for ( let i = 0; i < food.length; i++) {
        let input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.value = food[i];
        input.id ='checkbox-' + food[i];
        let label = document.createElement('label');
        label.textContent = food[i];
        label.setAttribute('for', input.id);
        form.appendChild(input);
        form.appendChild(label);
    }
    // let submit = document.createElement('button');
    // submit.setAttribute("type", "submit");
    // submit.setAttribute("value", "Confirm");
    // submit.id = 'Confirm';
    // form.appendChild(submit);
    };

// window.alert("Hi! Please select your ingredients!");

const button = document.querySelector('button#Confirm');

button.addEventListener("click", ()=>{
    sendApiRequest()
    console.log("button pressed")
});

//let searchButton = document.querySelector("#search")

//searchButton.addEventListener("click", ()=>{
    //sendApiRequest()
//     console.log('button clicked')
// });

async function sendApiRequest() {
    let APP_ID = 'adeda542'
    let API_KEY = '92f5597b299396e6134f2ef3942df3d4'
    let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=pizza`);
    console.log(response)
};

function useApiData(data){

} 












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