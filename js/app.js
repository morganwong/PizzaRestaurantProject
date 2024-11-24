/*
    Morgan's JS
*/

// let order = localStorage.getItem("pizza_order_webdesignproject") === null ? [] : JSON.parse(localStorage.getItem("pizza_order_webdesignproject"));

function getOrder(){
    return localStorage.getItem("pizza_order_webdesignproject") === null ? [] : JSON.parse(localStorage.getItem("pizza_order_webdesignproject"));
}

let order = getOrder();

function addToOrder(obj){
    order.push(obj);
    localStorage.setItem("pizza_order_webdesignproject", JSON.stringify(order));
}

function replaceOrder(order){
    localStorage.setItem("pizza_order_webdesignproject", JSON.stringify(order));
}

function removeFromOrder(obj){
    order.filter((e) => e.name !== obj.name);
    localStorage.setItem("pizza_order_webdesignproject", JSON.stringify(order));
}

function clearOrder(){
    localStorage.removeItem("pizza_order_webdesignproject");
}

// console.log("order", order);

// clearOrder();


$('#orderModal').on("shown.bs.modal", function() {
    const order = getOrder();
    let body = "";
    for(const item of order){
        body += `
            <div class="row">
                <div class="col-md-6">
                    <h5 id="order_name">${item.name}</h5>
                    <p id="order_size" class="orderSize">${item.type === "pizza" ? item.size : ""}</p>
                    <p>€<span id="order_price">${item.price}</span></p>
                </div>
                <div class="col-md-4">
                    <img src=${item.img} alt="${item.name} pizza" class="orderImage" id="order_image"/>
                </div>
                <div class="col-md-2">
                    <button class="btn btn-outline-danger btn-sm">Remove</button>
                </div>
            </div>
        `;
    }
    $('#orderModalBody').html(body);
});


/*
    Gavin's JS
*/


/*
    Xu's JS
*/