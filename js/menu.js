var products_pizzas = [
    {
        name: "Margherita",
        description: "A classic. Simple, yet refined. Cooked in an oven, and put in box or on a plate... or just thrown directly at your face.",
        sizes: "S, M, L",
        prices: [8, 13, 18],
        img: "img/pizza.webp"
    },
    {
        name: "Pepperoni",
        description: "A classic. Simple, but not as simple as a margherita. Who was it that first put spicy meat on a cheese covered slab of bread? Woe upon he, that questioned it!",
        sizes: "S, M, L",
        prices: [10, 15, 20],
        img: "img/pizza.webp"
    },
    {
        name: "Hawaiian",
        description: "There's pineapple on this one.. We may not like it. Or condone it. Or recommend it. But the lonely and degenerate need to eat too.",
        sizes: "S, M, L",
        prices: [6, 11, 16],
        img: "img/pizza.webp"
    },
    {
        name: "BBQ Chicken",
        description: "Apparently people put bbq sauce on pizza instead of the classic tomato? Who do these people think they are?!",
        sizes: "S, M, L",
        prices: [10, 15, 20],
        img: "img/pizza.webp"
    },
    {
        name: "Pesto and Tomato",
        description: "Like that Dr Oetker one, but even more expensive!",
        sizes: "S, M, L",
        prices: [15, 20, 25],
        img: "img/pizza.webp"
    }
];

var products_sides = [
    {
        name: "Garlic Bread",
        description: "Who can resist the classic?",
        price: 7.50,
        img: ""
    },
    {
        name: "Garlic Bread with Cheese",
        description: "The one thing that could make garlic EVEN BETTER!",
        price: 9.50,
        img: ""
    },
    {
        name: "Chicken Wings",
        description: "We bought these in Aldi for 2.50 and we're gonna charge you over 10 euro",
        price: 10.50,
        img: ""
    }
];

var products_drinks = [
    {
        name: "Water in a bottle",
        description: "People need water, we sell water, perfect.",
        price: 1.50,
        img: ""
    },
    {
        name: "Coke",
        description: "Use to be medicinal. Still is, kinda",
        price: 2.50,
        img: ""
    },
    {
        name: "Full bottle of wine",
        description: "Self explanatory",
        price: 10.50,
        img: ""
    }
];

function populatePizzas(){
    let i = 0;
    let pizzaContent = "";
    for(const pizza of products_pizzas) {
        if(i % 3 === 0){
            pizzaContent += `<div class="row product-row">`;
        }
        pizzaContent += `
        <div class="col-md-3">
            <img src=${pizza.img} class="card-img-top" alt="pizza">
            <div class="card product">
                <h5>${pizza.name}</h5>
                <p>${pizza.description}</p>
                <p>Sizes: ${pizza.sizes}</p>
                <p><strong>Price</strong>: ${pizza.prices}</p>
            </div>
        </div>
    `;
        if(++i % 3 === 0){
            pizzaContent += `</div>`;
        }
    }

    if(i % 3 !== 0){
        do{
            pizzaContent += `
            <div class="col-md-3">
            </div>
        `;
        }while(++i % 3 !== 0);
        pizzaContent += `</div>`;
    }

    $('#pizza').html(pizzaContent);
}

function resetAddNewPizzaValues(){
    $('#addNewPizza_errorMessage').text("");
    $('#addNewPizza_errorMessage').css("display", "none");
    $('#addNewPizza_pizzaName').val("");
    $('#addNewPizza_pizzaDescription').val("");
    $('#addNewPizza_pizzaPriceSmall').val("");
    $('#addNewPizza_pizzaPriceMedium').val("");
    $('#addNewPizza_pizzaPriceLarge').val("");
}

$('#addNewPizza_cancelButton').click(resetAddNewPizzaValues);
$('#addNewPizza_closeButton').click(resetAddNewPizzaValues);


populatePizzas();

// $('input, textarea').click(function(){
//     $('#addNewPizza_errorMessage').text("");
//     $('#addNewPizza_errorMessage').css("display", "none");
// });

$('#addNewPizza_addButton').click(function(){
    const name = $('#addNewPizza_pizzaName').val();
    const description = $('#addNewPizza_pizzaDescription').val();
    const priceSmall = $('#addNewPizza_pizzaPriceSmall').val();
    const priceMedium = $('#addNewPizza_pizzaPriceMedium').val();
    const priceLarge = $('#addNewPizza_pizzaPriceLarge').val();

    if(name.length < 1){
        $('#addNewPizza_errorMessage').text("Enter a pizza name");
        $('#addNewPizza_errorMessage').css("display", "block");
        return;
    }
    if(description.length < 1){
        $('#addNewPizza_errorMessage').text("Enter a pizza description");
        $('#addNewPizza_errorMessage').css("display", "block");
        return;
    }
    if(priceSmall < 1){
        $('#addNewPizza_errorMessage').text("Enter pizza prices");
        $('#addNewPizza_errorMessage').css("display", "block");
        return;
    }
    if(priceMedium < 1){
        $('#addNewPizza_errorMessage').text("Enter pizza prices");
        $('#addNewPizza_errorMessage').css("display", "block");
        return;
    }
    if(priceLarge < 1){
        $('#addNewPizza_errorMessage').text("Enter pizza prices");
        $('#addNewPizza_errorMessage').css("display", "block");
        return;
    }

    const prices = [priceSmall, priceMedium, priceLarge];

    products_pizzas.push({
        name: name,
        description: description,
        sizes: "S, M, L",
        prices: prices,
        img: "img/pizza.webp"
    });

    populatePizzas();
    $('#addNewPizza_closeButton').click();
});

