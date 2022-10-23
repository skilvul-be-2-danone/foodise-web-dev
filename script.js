
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active")
})


const searchForm = document.getElementById('home-form')
const searchResultDiv = document.getElementById('search-result')
const container = document.getElementById('contain')
let searchQuery = '';

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let searchQuery = document.getElementById("search").value;
    fetchAPI();
    async function fetchAPI () {
        let baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=59034dee&app_key=b4884defa005a55f22833c8850c0f806&to=20`
        const response = await fetch(baseURL)
        const data = await response.json();
        console.log(data.hits)
        generateHTML(data.hits);
        
    }
})

function generateHTML(results) {
    document.getElementById("search-result").innerHTML = '';
    
    results.forEach((food) => {

        const foodEl = document.createElement('div');
        foodEl.classList.add('food')

        foodEl.innerHTML += `
            <img src="${food.recipe.image}" alt="${food.recipe.label}"/>
            <h3>${food.recipe.label}</h3>
            <p id="food-info">Calories : <span>${food.recipe.calories.toFixed(2)} kal</span></p>
            <p id="food-info">Diet Label : <span>${food.recipe.dietLabels}</span></p>
            <div id="overview">
                <p id="food-info">Protein : <span>${food.recipe.totalNutrients.PROCNT.quantity.toFixed(2)} g</span></p>
                <p id="food-info">Carbohidrat : <span>${food.recipe.totalNutrients.CHOCDF.quantity.toFixed(2)} g</span></p>
                <p id="food-info">Fat : <span>${food.recipe.totalNutrients.FAT.quantity.toFixed(2)} g</span></p>
                <h4>Health Label</h4>
                <p id="health-info">${food.recipe.healthLabels}</p>
                <a href="${food.recipe.url}"><span>View Recipe</span></a>
            </div>`
        console.log(food)
        document.getElementById("search-result").appendChild(foodEl)
    })
}

// CHOCDF.net
// : 
// label
// : 
// "Carbohydrates (net)"
// quantity
// : 
// 146.0206466247476
// unit
// : 
// "g"

// CHOLE

// FAT

// PROCNT

// SUGAR